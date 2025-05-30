import { motion } from 'framer-motion';
import React from 'react';

interface BubbleProps {
    text: string;
    onClick?: () => void;
    className?: string;
    color?: string;
    style?: React.CSSProperties;
}

const Bubble = ({
    text,
    onClick,
    className = '',
    color = 'bg-blue-500',
    style = {},
}: BubbleProps) => {
    return (
        <motion.div
            onClick={onClick}
            className={`w-24 h-24 flex items-center justify-center text-white ${color} rounded-full cursor-pointer shadow-md ${className}`}
            style={style}
            whileHover={{
                scale: 1.1,
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 10,
                },
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
        >
            {text}
        </motion.div>
    );
};

export default Bubble;
