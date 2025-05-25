// components/Bubble.tsx
interface BubbleProps {
    text: string;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

const Bubble = ({ text, onClick, className = '' }: BubbleProps) => {
    return (
        <div
            onClick={onClick}
            className={`w-24 h-24 flex items-center justify-center text-white bg-blue-600 rounded-full cursor-pointer transition-transform hover:scale-110 shadow-md ${className}`}
        >
            {text}
        </div>
    );
};

export default Bubble;
