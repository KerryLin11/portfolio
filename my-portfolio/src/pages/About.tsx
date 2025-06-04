import { FaUser } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { handleClose } from '@/utils/audioUtils'

type SectionProps = {
    onClose: () => void
}

const AboutSection = ({ onClose }: SectionProps) => {
    const [isTapping, setIsTapping] = useState(false)



    return (
        <motion.div
            animate={{ scale: isTapping ? 0.98 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="max-w-sm mx-auto bg-card text-card-foreground p-6 rounded-xl shadow-md relative"
        >


            <Button
                onClick={() => handleClose(onClose)}
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

            <h2 className="text-xl font-semibold mb-1 flex items-center text-primary ">
                <FaUser className="w-5 h-5 mr-2" />
                About Me
            </h2>
            <p className="text-sm text-muted-foreground mb-4">Get to know me better</p>

            <p className="text-sm mb-4 text-muted-foreground">
                I'm a passionate full-stack developer with 5+ years of experience creating digital solutions.
                I love turning complex problems into simple, beautiful designs.
            </p>

            <div className="mb-4">
                <p className="font-semibold text-sm mb-2 text-primary">Skills</p>
                <div className="flex flex-wrap gap-2 text-sm">
                    {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python'].map(skill => (
                        <span key={skill} className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <p className="font-semibold text-sm mb-2 text-primary">Interests</p>
                <p className="text-sm text-muted-foreground">
                    UI/UX Design, Machine Learning, Open Source, Photography
                </p>
            </div>
        </motion.div>
    )
}

export default AboutSection
