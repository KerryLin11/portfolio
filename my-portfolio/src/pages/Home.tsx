import { useState } from 'react';
import AboutSection from '../pages/About';
import ProjectsSection from '../pages/Projects';
import ContactSection from '../pages/Contact';
import RenderNode from '@/components/mindmap buttons/RenderNode';
import type { Node } from '@/components/mindmap buttons/Types';
import RelativeTo from '@/components/mindmap buttons/RelativeTo';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaBriefcase, FaEnvelope, FaHome } from 'react-icons/fa'
import ThemeToggle from '@/components/mindmap buttons/ThemeToggle';
import { ProjectProvider } from '@/components/mindmap buttons/ProjectContext';



const nodeData: Node[] = [
    {
        id: 'center',
        icon: <FaHome size={24} />,
        label: 'Kerry Lin',
        color: 'bg-bubble-1',
        clickSound: 'sounds/click2.wav',
        position: { x: 0, y: 0 },
        children: [
            {
                id: 'about',
                icon: <FaUser size={24} />,
                label: 'About',
                color: 'bg-bubble-2',
                position: { x: 0, y: -250 },
                linkToSection: 'about',
            },
            {
                id: 'projects',
                icon: <FaBriefcase size={24} />,
                label: 'Projects',
                color: 'bg-bubble-3',
                position: { x: -250, y: 100 },
                linkToSection: 'projects',
            },
            {
                id: 'contact',
                icon: <FaEnvelope size={24} />,
                label: 'Contact',
                color: 'bg-bubble-4',
                position: { x: 250, y: 100 },
                linkToSection: 'contact',
            },
        ],
    },
];


const Home = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [sectionAnchor, setSectionAnchor] = useState<{ x: number; y: number } | null>(null);

    const handleSelect = (section: string, pos: { x: number; y: number }) => {
        if (section === '' || activeSection === section) {
            setActiveSection(null);
            setSectionAnchor(null);
        } else {
            setActiveSection(section);
            setSectionAnchor(pos);
        }
    };



    return (
        // Home is an invisible container in the bottom right quadrant of the screen
        // no-block custom class added to the container to allow dragging over this container. 

        <div className="relative w-screen h-screen no-block">
            <RenderNode
                node={nodeData[0]}
                onSelectSection={handleSelect}
                isVisible={true}
            />

            <AnimatePresence>
                {activeSection === 'about' && sectionAnchor && (
                    <RelativeTo anchor={sectionAnchor} offset={{ x: 300, y: 0 }}>
                        {() => (
                            <motion.div
                                key="about"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <AboutSection onClose={() => setActiveSection(null)} />
                            </motion.div>
                        )}
                    </RelativeTo>
                )}

                {activeSection === 'projects' && sectionAnchor && (
                    <RelativeTo anchor={sectionAnchor} offset={{ x: -600, y: 0 }}>
                        {() => (
                            <motion.div
                                key="projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectProvider>
                                    <ProjectsSection onClose={() => setActiveSection(null)} />
                                </ProjectProvider>
                            </motion.div>
                        )}
                    </RelativeTo>
                )}

                {activeSection === 'contact' && sectionAnchor && (
                    <RelativeTo anchor={sectionAnchor} offset={{ x: 0, y: -185 }}>
                        {() => (
                            <motion.div
                                key="contact"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ContactSection onClose={() => setActiveSection(null)} />
                            </motion.div>
                        )}
                    </RelativeTo>
                )}
            </AnimatePresence>

            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Home;
