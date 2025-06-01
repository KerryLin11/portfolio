import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
    title: string;
    description: string;
    github?: string;
    live?: string;
    unityUrl?: string;
    tags: string[];
    type: 'github' | 'js' | 'unity';
};

const ProjectCard = ({ project }: { project: Project }) => {


    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-left text-gray-800">
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{project.description}</p>

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

            {project.type === 'unity' && project.unityUrl ? (
                <div className="w-full aspect-video mb-4">
                    <iframe
                        src={project.unityUrl}
                        title={project.title}
                        className="w-full h-full rounded-md border"
                        allowFullScreen
                    />
                </div>
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
                            className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Live
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
