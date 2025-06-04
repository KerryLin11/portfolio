import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { Project } from './Types';

const ProjectCard = ({
    project,
    forceShowPlayer = false,
}: { project: Project, forceShowPlayer?: boolean }) => {

    const [showPlayer, setShowPlayer] = useState(false);
    const shouldShowPlayer = forceShowPlayer || showPlayer;

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl shadow-md p-6 text-left transition-transform"
            style={{
                backgroundColor: 'var(--muted)',
                color: 'var(--card-foreground)',
            }}
        >
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm mb-3" style={{ color: 'var(--muted-foreground)' }}>
                {project.description}
            </p>

            {project.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-1 rounded-md transition-all"
                            style={{
                                backgroundColor: 'var(--input)',
                                color: 'var(--muted-foreground)',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {project.type === 'embed' || (project.type === 'embedLarge' && project.src) ? (
                <>
                    {project.live && (
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-md mb-4"
                            style={{
                                background: 'var(--input)',
                                color: 'var(--foreground)',
                            }}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.85 }}
                        >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Link to Site
                        </motion.a>
                    )}

                    <div className="flex gap-3 text-sm mb-4">
                        {project.github && (
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-3 py-1 rounded-md "
                                style={{
                                    backgroundColor: 'var(--input)',
                                    color: 'var(--foreground)',
                                }}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85 }}
                            >
                                <FaGithub className="w-4 h-4" />
                                GitHub
                            </motion.a>
                        )}
                    </div>

                    {!shouldShowPlayer ? (
                        <motion.button
                            onClick={() => setShowPlayer(true)}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 mb-4 text-sm rounded-md"
                            style={{
                                backgroundColor: 'var(--button)',
                                color: 'var(--foreground)',
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPlay className="w-4 h-4" />
                            View in Browser
                        </motion.button>
                    ) : (
                        <div className="w-full aspect-video mb-4 mt-4">
                            <iframe
                                frameBorder={0}
                                src={project.src}
                                title={project.title}
                                className="rounded-md border-2 p-2 w-full h-full"
                                allowFullScreen
                                width={project.type === 'embedLarge' ? 800 : 980}
                                height={project.type === 'embedLarge' ? 800 : 640}
                            />
                        </div>
                    )}
                </>
            ) : (
                <div className="flex gap-3 text-sm">
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1 rounded-md"
                            style={{
                                backgroundColor: 'var(--input)',
                                color: 'var(--foreground)',
                            }}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.85 }}
                        >
                            <FaGithub className="w-4 h-4" />
                            GitHub
                        </motion.a>
                    )}

                    {project.live && (
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-md mb-4"
                            style={{
                                background: 'var(--input)',
                                color: 'var(--foreground)',
                            }}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.85 }}
                        >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Live Demo
                        </motion.a>
                    )}
                </div>
            )}
        </motion.div>
    );
};

export default ProjectCard;
