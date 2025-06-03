import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import type { Project } from './Types';


const ProjectCard = ({
    project,
    forceShowPlayer = false,
}: { project: Project, forceShowPlayer?: boolean }) => {

    const [showPlayer, setShowPlayer] = useState(false);

    const shouldShowPlayer = forceShowPlayer || showPlayer;

    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-left text-gray-800">
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{project.description}</p>

            {project.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-xs px-2 py-1 rounded-md hover:bg-gray-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            {project.type === 'embed' || project.type === 'embedLarge' && project.src ? (
                <>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r  text-sm font-medium shadow-md hover:from-gray-100 hover:to-gray-200 transition-all duration-200 mb-4"
                        >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Link to Site
                        </a>
                    )}

                    <div className="flex gap-3 text-sm">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 mb-4"
                            >
                                <FaGithub className="w-4 h-4" />
                                GitHub
                            </a>
                        )}
                    </div>

                    {!shouldShowPlayer ? (
                        <button
                            onClick={() => setShowPlayer(true)}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 mb-4 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            <FaPlay className="w-4 h-4" />
                            View in Browser
                        </button>
                    ) : (
                        <div className="w-full aspect-video mb-4 mt-4">
                            <iframe
                                frameBorder={0}
                                src={project.src}
                                title={project.title}
                                className={`rounded-md border-2 p-2 ${project.type === 'embed' ? 'w-full h-full' : ''
                                    }`}
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
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            <FaGithub className="w-4 h-4" />
                            GitHub
                        </a>


                    )}

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r  text-sm font-medium shadow-md hover:from-gray-100 hover:to-gray-200 transition-all duration-200 mb-4"
                        >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Live Demo
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
