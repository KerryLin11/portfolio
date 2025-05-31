import { motion } from 'framer-motion';
import React from 'react';

interface BubbleProps {
    onClick?: () => void;
    className?: string;
    color?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    label?: string | React.ReactNode;
}

const Bubble = ({
    onClick,
    className = '',
    color = 'bg-blue-500',
    style = {},
    icon,
    label = '',
}: BubbleProps) => {
    return (
        <div className="flex flex-col items-center gap-2" style={style}>
            <motion.div
                onClick={onClick}
                className={`w-24 h-24 flex items-center justify-center text-white ${color} rounded-full cursor-pointer shadow-md ${className}`}
                whileHover={{
                    scale: 1.2,
                    transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 10,
                    },
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0.9 }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
            >
                {icon}
            </motion.div>
            {label && (
                <div className="text-sm text-gray-900 text-center text-shadow-sm font-inter" >
                    {label}
                </div>
            )}
        </div>
    );
};

export default Bubble;
