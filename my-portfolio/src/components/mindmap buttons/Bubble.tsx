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

    const playSound = (src: string, initialVolume: number, volumeRange: number, initialPlaybackRate: number, playbackRateRange: number) => {
        const audio = new Audio(src);
        const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
        audio.volume = clamp(initialVolume + (Math.random() * 2 - 1) * volumeRange, 0, 1);
        audio.playbackRate = clamp(initialPlaybackRate + (Math.random() * 2 - 1) * playbackRateRange, 0.1, 4);
        audio.play().catch((e) => console.warn('Audio play error:', e));
    };



    return (
        <div className="flex flex-col items-center gap-2" style={style}>
            <motion.div
                onClick={() => {
                    playSound(clickSound || defaultClickSound, 0.2, 0.05, 1, 0.1);
                    onClick?.();
                }}
                onMouseEnter={() => {
                    playSound(hoverSound || defaultHoverSound, 0.05, 0.02, 1, 0.1);
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
