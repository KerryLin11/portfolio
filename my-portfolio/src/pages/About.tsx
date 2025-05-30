import { FaUser } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <div className="max-w-sm mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-md relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl">
                &times;
            </button>
            <h2 className="text-xl font-semibold mb-1 flex items-center">
                <FaUser className="w-5 h-5 mr-2" />
                About Me
            </h2>
            <p className="text-sm text-gray-500 mb-4">Get to know me better</p>

            <p className="text-sm mb-4">
                I'm a passionate full-stack developer with 5+ years of experience creating digital solutions.
                I love turning complex problems into simple, beautiful designs.
            </p>

            <div className="mb-4">
                <p className="font-semibold text-sm mb-2">Skills</p>
                <div className="flex flex-wrap gap-2 text-sm">
                    {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python'].map(skill => (
                        <span key={skill} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <p className="font-semibold text-sm mb-2">Interests</p>
                <p className="text-sm text-gray-700">
                    UI/UX Design, Machine Learning, Open Source, Photography
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
