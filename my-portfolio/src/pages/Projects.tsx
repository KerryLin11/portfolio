import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/mindmap buttons/ProjectCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Project = {
    title: string;
    description: string;
    github?: string;
    live?: string;
    src?: string;
    tags: string[];
    type: 'github' | 'js' | 'unity';
};

const projects: Project[] = [
    {
        title: 'GitHub Project',
        description: 'An open-source tool built with React and Tailwind.',
        github: 'https://github.com/yourusername/project',
        live: 'https://yourusername.github.io/project/',
        tags: ['React', 'Tailwind'],
        type: 'github',
    },
    {
        title: 'JS Canvas Game',
        description: 'A fun JavaScript game using Canvas API.',
        github: 'https://github.com/yourusername/js-canvas-game',
        live: 'https://yourusername.github.io/js-canvas-game/',
        tags: ['JavaScript', 'Canvas'],
        type: 'js',
    },
    {
        title: 'Vultur',
        description: 'A small Unity game embedded using WebGL.',
        src: '/unity/vultur/index.html',
        tags: ['Unity', 'WebGL'],
        type: 'unity',
    },
];

type SectionProps = {
    onClose: () => void;
};

const Projects = ({ onClose }: SectionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleBack = () => {
        playSound();
        setActiveIndex(null)
    };


    const [isTapping, setIsTapping] = useState(false)
    const handleClose = () => {
        playSound();
        onClose();
    };

    const playSound = () => {
        const audio = new Audio('/sounds/close3.wav');
        audio.volume = 0.5;
        audio.play().catch((e) => console.error('SFX play failed', e));
    };

    return (
        <motion.div
            animate={{ scale: isTapping ? 0.98 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            layout
            className="max-w-5xl mx-auto px-5 py-8 pb-20 bg-white text-gray-800 rounded-xl shadow-md relative"
        >
            <Button
                onClick={handleClose}
                variant="closeButton"
                className="absolute -top-2 -right-2"
                onMouseDown={() => setIsTapping(true)}
                onMouseUp={() => setIsTapping(false)}
                onMouseLeave={() => setIsTapping(false)}
                onTouchStart={() => setIsTapping(true)}
                onTouchEnd={() => setIsTapping(false)}>
                &times;
            </Button>

            <h2 className="text-xl font-semibold mb-2 flex items-center text-gray-800">
                <FaGithub className="w-5 h-5 mr-2" />
                Projects
            </h2>
            <p className="text-sm text-gray-500 mb-6">
                A few of my recent works — GitHub repos, JavaScript experiments, and Unity demos.
            </p>

            {/* Show Back button at top-right of container */}
            {activeIndex !== null && (
                <Button
                    onClick={handleBack}
                    variant="closeButton"
                    className="absolute bottom-4 right-4 z-10"
                >
                    Back
                </Button>
            )}

            <div className="relative min-h-[300px] grid sm:grid-cols-2 gap-6">
                <AnimatePresence mode="wait">
                    {activeIndex === null &&
                        projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layoutId={`card-${index}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="cursor-pointer"
                                onClick={() => setActiveIndex(index)}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}

                    {activeIndex !== null &&
                        projects.map((project, index) => {
                            if (index === activeIndex) {
                                return (
                                    <motion.div
                                        key={`card-${index}`}
                                        layoutId={`card-${index}`}
                                        className="col-span-2"
                                        transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
                                    >
                                        <ProjectCard project={project} forceShowPlayer />

                                        <motion.div
                                            key="details"
                                            className="mt-6 bg-gray-100 border border-gray-200 p-6 rounded-xl shadow-sm"
                                        >
                                            <h4 className="text-lg font-semibold mb-2">More about this project</h4>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                This is where you can show extra details, embed videos, screenshots, or explain your thought process and technical decisions behind the project.
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                );
                            } else {
                                return (
                                    <motion.div
                                        key={`fade-${index}`}
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    />
                                );
                            }
                        })}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};


export default Projects;
