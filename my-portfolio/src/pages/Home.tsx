import { useState } from 'react';
import Bubble from '../components/mindmap buttons/Bubble';
import AboutSection from '../pages/About';
import ProjectsSection from '../pages/Projects';
import ContactSection from '../pages/Contact';
import RelativeTo from '@/components/mindmap buttons/RelativeTo';
import type { Node } from '@/components/mindmap buttons/mindmap';


const center = { x: 0, y: 0 };

const nodeData = [
    {
        id: 'center',
        label: 'Your Name',
        color: 'bg-blue-500',
        position: center,
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
] satisfies Node[];

const Home = () => {
    const [expanded, setExpanded] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [sectionAnchor, setSectionAnchor] = useState<{ x: number; y: number } | null>(null);

    return (
        <div className="relative w-screen h-screen">
            {nodeData.map((node) => {
                if (node.id !== 'center' && !expanded) return null;

                return (
                    <RelativeTo key={node.id} anchor={node.position}>
                        {(pos) => (
                            <Bubble
                                text={node.label}
                                color={node.color}
                                onClick={() => {
                                    if (node.id === 'center') {
                                        setExpanded(true);
                                    } else if (node.linkToSection) {
                                        setActiveSection(node.linkToSection);
                                        setSectionAnchor(pos);
                                    }
                                }}
                            />
                        )}
                    </RelativeTo>
                );
            })}

            {activeSection === 'about' && sectionAnchor && (
                <RelativeTo anchor={sectionAnchor} offset={{ x: 0, y: 100 }}>
                    {() => <AboutSection />}
                </RelativeTo>
            )}
            {activeSection === 'projects' && sectionAnchor && (
                <RelativeTo anchor={sectionAnchor} offset={{ x: 0, y: 100 }}>
                    {() => <ProjectsSection />}
                </RelativeTo>
            )}
            {activeSection === 'contact' && sectionAnchor && (
                <RelativeTo anchor={sectionAnchor} offset={{ x: 0, y: 100 }}>
                    {() => <ContactSection />}
                </RelativeTo>
            )}
        </div>
    );
};

export default Home;
