import { useState } from 'react';
import Bubble from '../components/mindmap buttons/Bubble';
import AboutSection from '../pages/About';
import ProjectsSection from '../pages/Projects';
import ContactSection from '../pages/Contact';
import RelativeTo from '@/components/mindmap buttons/RelativeTo';

const centerNodeInCanvasCoords = { x: 0, y: 0 };

const Home = () => {
    const [expanded, setExpanded] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [bubblePosition, setBubblePosition] = useState<{ x: number; y: number } | null>(null);

    return (
        <div className="relative w-screen h-screen">

            {/* Root Bubble */}
            <RelativeTo anchor={centerNodeInCanvasCoords}>
                {() => (
                    <Bubble
                        text="Your Name"
                        color="bg-blue-500"
                        onClick={() => setExpanded(true)}
                    />
                )}
            </RelativeTo>

            {/* Expanded Bubbles */}
            {expanded && (
                <>
                    <RelativeTo anchor={centerNodeInCanvasCoords} offset={{ x: 0, y: -250 }}>
                        {(pos) => (
                            <Bubble
                                text="About"
                                color="bg-purple-500"
                                onClick={() => {
                                    setBubblePosition(pos);
                                    setActiveSection('about');
                                }}
                            />
                        )}
                    </RelativeTo>

                    <RelativeTo anchor={centerNodeInCanvasCoords} offset={{ x: -250, y: 100 }}>
                        {(pos) => (
                            <Bubble
                                text="Projects"
                                color="bg-green-500"
                                onClick={() => {
                                    setBubblePosition(pos);
                                    setActiveSection('projects');
                                }}
                            />
                        )}
                    </RelativeTo>

                    <RelativeTo anchor={centerNodeInCanvasCoords} offset={{ x: 250, y: 100 }}>
                        {(pos) => (
                            <Bubble
                                text="Contact"
                                color="bg-orange-500"
                                onClick={() => {
                                    setBubblePosition(pos);
                                    setActiveSection('contact');
                                }}
                            />
                        )}
                    </RelativeTo>
                </>
            )}

            {/* Section Rendering */}
            {activeSection === 'about' && bubblePosition && (
                <RelativeTo anchor={bubblePosition} offset={{ x: 0, y: 200 }}>
                    {() => <AboutSection />}
                </RelativeTo>
            )}

            {activeSection === 'projects' && bubblePosition && (
                <RelativeTo anchor={bubblePosition} offset={{ x: 0, y: 200 }}>
                    {() => <ProjectsSection />}
                </RelativeTo>
            )}

            {activeSection === 'contact' && bubblePosition && (
                <RelativeTo anchor={bubblePosition} offset={{ x: 0, y: 200 }}>
                    {() => <ContactSection />}
                </RelativeTo>
            )}
        </div>
    );
};

export default Home;
