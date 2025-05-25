import { useState } from 'react';
import Bubble from '../components/mindmap buttons/Bubble';
import AboutSection from '../pages/About';
import ProjectsSection from '../pages/Projects';
import ContactSection from '../pages/Contact';

const Home = () => {
    const [expanded, setExpanded] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    return (
        <div className="relative w-screen h-screen bg-gray-900">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <Bubble text="Your Name" onClick={() => setExpanded(true)} />
            </div>

            {expanded && (
                <>
                    <Bubble
                        text="About"
                        onClick={() => setActiveSection('about')}
                        className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-[14rem]"
                    />
                    <Bubble
                        text="Projects"
                        onClick={() => setActiveSection('projects')}
                        className="absolute z-20 left-[calc(50%-12rem)] top-[calc(50%+6rem)]"
                    />
                    <Bubble
                        text="Contact"
                        onClick={() => setActiveSection('contact')}
                        className="absolute z-20 left-[calc(50%+6rem)] top-[calc(50%+6rem)]"
                    />
                </>
            )}

            {activeSection === 'about' && (
                <div className="absolute z-20 left-1/2 top-[calc(50%+20rem)] -translate-x-1/2">
                    <AboutSection />
                </div>
            )}
            {activeSection === 'projects' && (
                <div className="absolute z-20 left-1/2 top-[calc(50%+20rem)] -translate-x-1/2">
                    <ProjectsSection />
                </div>
            )}
            {activeSection === 'contact' && (
                <div className="absolute z-20 left-1/2 top-[calc(50%+20rem)] -translate-x-1/2">
                    <ContactSection />
                </div>
            )}
        </div>
    );
};

export default Home;
