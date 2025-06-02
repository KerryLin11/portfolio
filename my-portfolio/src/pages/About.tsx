import { FaUser } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'

type SectionProps = {
    onClose: () => void
}

const AboutSection = ({ onClose }: SectionProps) => {
    const [isTapping, setIsTapping] = useState(false)

    const handleClose = () => {
        const audio = new Audio('/sounds/close3.wav');
        audio.volume = 0.5;
        audio.play().catch((e) => console.error('SFX play failed', e));
        onClose();
    };

    return (
        <motion.div
            animate={{ scale: isTapping ? 0.98 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="max-w-sm mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-md relative"
        >


            <Button
                onClick={handleClose}
                variant="closeButton"
                className="absolute -top-2 -right-2"
                onMouseDown={() => setIsTapping(true)}
                onMouseUp={() => setIsTapping(false)}
                onMouseLeave={() => setIsTapping(false)}
                onTouchStart={() => setIsTapping(true)}
                onTouchEnd={() => setIsTapping(false)}
            >
                &times;
            </Button>

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
        </motion.div>
    )
}

export default AboutSection
