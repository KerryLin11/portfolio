import { playSoundRandom } from '@/utils/audioUtils';
import { motion } from 'framer-motion';
import React from 'react';

interface BubbleProps {
    onClick?: () => void;
    className?: string;
    color?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    label?: string | React.ReactNode;
    clickSound?: string;
    hoverSound?: string;
}

const Bubble = ({
    onClick,
    className = '',
    color = 'bg-blue-500',
    style = {},
    icon,
    label = '',
    clickSound,
    hoverSound,
}: BubbleProps) => {

    const defaultClickSound = '/sounds/click1.wav';
    const defaultHoverSound = '/sounds/hover1.wav';

    return (
        <div className="flex flex-col items-center gap-2" style={style}>
            <motion.div
                onClick={() => {
                    playSoundRandom(clickSound || defaultClickSound, 0.2, 0.05, 1, 0.1);
                    onClick?.();
                }}
                onMouseEnter={() => {
                    playSoundRandom(hoverSound || defaultHoverSound, 0.05, 0.02, 1, 0.1);
                }}
                className={`w-24 h-24 flex items-center justify-center text-white ${color} rounded-full cursor-pointer shadow-md ${className}`}
                whileHover={{ scale: 1.2, transition: { type: 'spring', stiffness: 300, damping: 10 } }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                {icon}
            </motion.div>
            {label && (
                <div className="text-sm text-gray-900 text-center text-shadow-sm font-inter select-none pointer-events-none">
                    {label}
                </div>
            )}
        </div>
    );

};


export default Bubble;
