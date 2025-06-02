import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/mindmap buttons/ProjectCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/components/mindmap buttons/Types';
import { handleClose, playSound } from '@/utils/audioUtils';

const projects: Project[] = [
    {
        title: 'Culinary Overture: Gourmet Sonata in F Major',
        description: 'A fun JavaScript game using Canvas API.',
        github: 'https://github.com/yourusername/js-canvas-game',
        src: 'https://itch.io/embed-upload/13886309?color=333333',
        tags: ['HTML', 'CSS', 'JavaScript'],
        type: 'embed',
    },
    {
        title: 'VULTUR',
        description: 'A small Unity game embedded using WebGL.',
        src: 'https://itch.io/embed-upload/13883305?color=ffffff',
        live: 'https://oberindraco.itch.io/project-vulture-alpha-build',
        tags: ['Unity', 'C#'],
        type: 'embed',
    },
    {
        title: 'Block a Block',
        description: 'A small Unity game embedded using WebGL.',
        src: 'https://itch.io/embed-upload/',
        live: 'https://oberindraco.itch.io/project-vulture-alpha-build',
        github: 'https://github.com/yourusername/project',
        tags: ['Unity', 'C#'],
        type: 'embed',
    },
    {
        title: 'Skyward Dive',
        description: 'A small Unity game embedded using WebGL.',
        src: 'https://itch.io/embed-upload/',
        live: 'https://oberindraco.itch.io/project-vulture-alpha-build',
        github: 'https://github.com/yourusername/project',
        tags: ['Unity', 'C#'],
        type: 'embed',
    },
    {
        title: 'Miscellaneous Personal Projects',
        description: 'Some things I\'ve worked on for myself.',
        type: 'folder',
        children: [
            {
                title: 'This Portfolio Site',
                description: 'A portfolio site to show off my work',
                github: 'https://github.com/yourusername/quick-timer',
                tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                type: 'github',
                src: 'https://itch.io/embed-upload/quick-timer-id?color=333333',
            },
            {
                title: 'My Everything List (2018 -> Present)',
                description: 'Site where I rate everything I consume, from games to shows to books to movies',
                github: 'https://github.com/yourusername/quick-timer',
                tags: ['JavaScript', 'Google Sheets API',],
                type: 'embedLarge',
                src: 'https://everything-list-2018.vercel.app/',
            },
            {
                title: 'Cube Algorithm Timer',
                description: 'A timer specially made for cubing algorithms',
                github: 'https://github.com/yourusername/css-playground',
                tags: ['JavaScript', 'Chart.js', 'Google Sheets API', 'Google OAuth2'],
                type: 'embedLarge',
                // live: 'https://oberindraco.itch.io/project-vulture-alpha-build',
            },
            {
                title: 'Program Blocker for Windows',
                description: 'A simple tkinter app to block user access to apps for an allotted time',
                github: 'https://github.com/yourusername/quick-timer',
                tags: ['Python', 'Tkinter'],
                type: 'github',
            },

        ]
    },
];

type SectionProps = {
    onClose: () => void;
};

const Projects = ({ onClose }: SectionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeChildIndex, setActiveChildIndex] = useState<number | null>(null);

    const [isTapping, setIsTapping] = useState(false)



    return (
        <motion.div
            animate={{ scale: isTapping ? 0.98 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            layout
            className="max-w-5xl mx-auto px-5 py-8 pb-20 bg-white text-gray-800 rounded-xl shadow-md relative"
        >
            <Button
                onClick={() => handleClose(onClose)}
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
            {(activeChildIndex !== null || activeIndex !== null) && (
                <Button
                    onClick={() => {
                        playSound('/sounds/close3.wav', 0.5);

                        if (activeChildIndex !== null) {
                            setActiveChildIndex(null);
                        } else {
                            setActiveIndex(null);
                        }
                    }}
                    variant="closeButton"
                    className="absolute bottom-4 right-4 z-10"
                >
                    Back
                </Button>
            )}


            <div className="relative min-h-[300px] grid sm:grid-cols-2 gap-4">
                <AnimatePresence mode="wait">
                    {/* Top-level projects */}
                    {activeIndex === null && (
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
                        ))
                    )}

                    {/* Top-level detail view */}
                    {activeIndex !== null && activeChildIndex === null && (
                        <motion.div
                            key={`card-${activeIndex}`}
                            layoutId={`card-${activeIndex}`}
                            className="col-span-2"
                            transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
                        >
                            <ProjectCard project={projects[activeIndex]} forceShowPlayer />

                            {Array.isArray(projects[activeIndex].children) ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    {projects[activeIndex].children!.map((child, childIndex) => (
                                        <motion.div
                                            key={`child-${childIndex}`}
                                            layoutId={`child-${activeIndex}-${childIndex}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="cursor-pointer"
                                            onClick={() => setActiveChildIndex(childIndex)}
                                        >
                                            <ProjectCard project={child} />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <motion.div
                                    key="details"
                                    className="mt-6 bg-gray-100 border border-gray-200 p-6 rounded-xl shadow-sm"
                                >
                                    <h4 className="text-lg font-semibold mb-2">More about this project</h4>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        This is where you can show extra details, embed videos, screenshots, or explain your thought process and technical decisions behind the project.
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    )}

                    {/* Child detail view */}
                    {activeIndex !== null && activeChildIndex !== null && (
                        <motion.div
                            key={`child-detail-${activeChildIndex}`}
                            layoutId={`child-${activeIndex}-${activeChildIndex}`}
                            className="col-span-2"
                            transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
                        >
                            <ProjectCard
                                project={projects[activeIndex].children![activeChildIndex]}
                                forceShowPlayer
                            />

                            <motion.div
                                key="child-details"
                                className="mt-6 bg-gray-100 border border-gray-200 p-6 rounded-xl shadow-sm"
                            >
                                <h4 className="text-lg font-semibold mb-2">More about this project</h4>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Add extended details or embed content related to this specific subproject.
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </motion.div>
    );

};


export default Projects;
