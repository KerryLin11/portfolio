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
        <div
            onClick={onClick}
            className={`w-24 h-24 flex items-center justify-center text-white ${color} rounded-full cursor-pointer transition-transform hover:scale-110 shadow-md ${className}`}
            style={style}
        >
            {text}
        </div>
    );
};

export default Bubble;
