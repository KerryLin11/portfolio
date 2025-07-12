import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FaEnvelope, FaPhone, } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { handleClose } from '@/utils/audioUtils';


type SectionProps = {
    onClose: () => void;
};


const Contact = ({ onClose }: SectionProps) => {
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
                onTouchEnd={() => setIsTapping(false)}>
                &times;
            </Button>
            <h2 className="text-xl font-semibold mb-1 flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2" />
                Contact Me
            </h2>
            <p className="text-sm text-muted-foreground mb-4">Let's get in touch</p>

            <div className="mb-4 space-y-2 text-sm">
                <p className="flex items-center">
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    masterkerry@gmail.com
                </p>
                <p className="flex items-center">
                    <FaPhone className="w-4 h-4 mr-2" />
                    0466 642 620
                </p>
            </div>


            {/* //! Social links */}
            {/* <div className="mb-4">
                <p className="font-semibold mb-2 text-sm">Social Links</p>
                <div className="flex gap-2">
                    <a
                        href="#"
                        className="flex items-center gap-1 px-3 py-1 bg-muted rounded-md hover:bg-muted-foreground text-sm"
                    >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-1 px-3 py-1 bg-muted rounded-md hover:bg-muted-foreground text-sm"
                    >
                        <FaLinkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                </div>
            </div> */}

            <p className="text-xs text-muted-foreground">
                I'm always up for a chat or a coffee! Feel free to reach out.
            </p>
        </motion.div >
    );
};

export default Contact;
