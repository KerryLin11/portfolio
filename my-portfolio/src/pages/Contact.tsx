import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="max-w-sm mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-md relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl">
                &times;
            </button>
            <h2 className="text-xl font-semibold mb-1 flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2" />
                Contact Me
            </h2>
            <p className="text-sm text-gray-500 mb-4">Let's get in touch</p>

            <div className="mb-4 space-y-2 text-sm">
                <p className="flex items-center">
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    hello@example.com
                </p>
                <p className="flex items-center">
                    <FaPhone className="w-4 h-4 mr-2" />
                    +1 (555) 123-4567
                </p>
            </div>

            <div className="mb-4">
                <p className="font-semibold mb-2 text-sm">Social Links</p>
                <div className="flex gap-2">
                    <a
                        href="#"
                        className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 text-sm"
                    >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 text-sm"
                    >
                        <FaLinkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                </div>
            </div>

            <p className="text-xs text-gray-500">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
        </div>
    );
};

export default Contact;
