import { FaUser, FaFilePdf } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { handleClose } from '@/utils/audioUtils'

type SectionProps = {
    onClose: () => void
}

const AboutSection = ({ onClose }: SectionProps) => {
    const [isTapping, setIsTapping] = useState(false)

    const coreSkills = ['Unity', 'C#', 'Java', 'JavaScript', 'Git']

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

            <div className="flex gap-3 text-sm mb-4">
                <motion.a
                    href="https://docs.google.com/presentation/d/17-rbgEgcsZYUHSaI0AdE3jNC2c92LAqFc6PqPhnjKDI/export/pdf" //! Game Resume
                    //https://docs.google.com/presentation/d/139Ivx53aOvsYiJQuQw3u_xK6qSrxA2w-8C2Qbuwijac/export/pdf //! Web Resume
                    //TODO: //! Software Engineer Resume

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
                    <FaFilePdf className="w-4 h-4" /> Resume
                </motion.a>
            </div>

            <p className="text-sm mb-4 text-muted-foreground">
                I'm a game development student at Macquarie University with 3 years of experience and one semester left before graduation. I have a diverse range of software skills, with a strong focus on building engaging interactive experiences.
            </p>

            <div className="mb-4">
                <p className="font-semibold text-sm mb-2 text-primary">Core Technologies I Work With</p>
                <div className="flex flex-wrap gap-2 text-sm">
                    {coreSkills.map(skill => (
                        <span key={skill} className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}

export default AboutSection
