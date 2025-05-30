import { useState } from 'react';
import AboutSection from '../pages/About';
import ProjectsSection from '../pages/Projects';
import ContactSection from '../pages/Contact';
import RenderNode from '@/components/mindmap buttons/RenderNode';
import type { Node } from '@/components/mindmap buttons/mindmap';
import RelativeTo from '@/components/mindmap buttons/RelativeTo';
import { motion, AnimatePresence } from 'framer-motion';

const nodeData: Node[] = [
    {
        id: 'center',
        label: 'Your Name',
        color: 'bg-blue-500',
        position: { x: 0, y: 0 },
        children: [
            {
                id: 'skills',
                label: 'Skills',
                color: 'bg-purple-500',
                position: { x: -300, y: -100 },
                children: [
                    {
                        id: 'frontend',
                        label: 'Frontend',
                        color: 'bg-pink-500',
                        position: { x: -450, y: -200 },
                        children: [
                            {
                                id: 'react',
                                label: 'React',
                                color: 'bg-fuchsia-500',
                                position: { x: -600, y: -300 },
                            },
                            {
                                id: 'vue',
                                label: 'Vue',
                                color: 'bg-green-400',
                                position: { x: -500, y: -350 },
                            },
                        ],
                    },
                    {
                        id: 'backend',
                        label: 'Backend',
                        color: 'bg-yellow-500',
                        position: { x: -450, y: 0 },
                        children: [
                            {
                                id: 'nodejs',
                                label: 'Node.js',
                                color: 'bg-lime-500',
                                position: { x: -600, y: -50 },
                            },
                            {
                                id: 'python',
                                label: 'Python',
                                color: 'bg-cyan-500',
                                position: { x: -550, y: 100 },
                            },
                        ],
                    },
                ],
            },
            {
                id: 'education',
                label: 'Education',
                color: 'bg-indigo-500',
                position: { x: 300, y: -100 },
                children: [
                    {
                        id: 'university',
                        label: 'University',
                        color: 'bg-red-400',
                        position: { x: 450, y: -200 },
                        children: [
                            {
                                id: 'projects',
                                label: 'Uni Projects',
                                color: 'bg-amber-400',
                                position: { x: 600, y: -300 },
                            },
                        ],
                    },
                ],
            },
            {
                id: 'about',
                label: 'About',
                color: 'bg-purple-500',
                position: { x: 0, y: -250 },
                linkToSection: 'about',
            },
            {
                id: 'projects',
                label: 'Projects',
                color: 'bg-green-500',
                position: { x: -250, y: 100 },
                linkToSection: 'projects',
            },
            {
                id: 'contact',
                label: 'Contact',
                color: 'bg-orange-500',
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
        <div className="relative w-screen h-screen">
            <RenderNode
                node={nodeData[0]}
                onSelectSection={handleSelect}
                isVisible={true}
            />

            <AnimatePresence>
                {activeSection === 'about' && sectionAnchor && (
                    <RelativeTo anchor={sectionAnchor} offset={{ x: 0, y: -200 }}>
                        {() => (
                            <motion.div
                                key="about"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <AboutSection />
                            </motion.div>
                        )}
                    </RelativeTo>
                )}

                {activeSection === 'projects' && sectionAnchor && (
                    <RelativeTo anchor={sectionAnchor} offset={{ x: 0, y: 100 }}>
                        {() => (
                            <motion.div
                                key="projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectsSection />
                            </motion.div>
                        )}
                    </RelativeTo>
                )}

                {activeSection === 'contact' && sectionAnchor && (
                    <RelativeTo anchor={sectionAnchor} offset={{ x: 0, y: 200 }}>
                        {() => (
                            <motion.div
                                key="contact"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ContactSection />
                            </motion.div>
                        )}
                    </RelativeTo>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;
