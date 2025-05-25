interface SectionWrapperProps {
    children: React.ReactNode;
    anchor?: { x: number; y: number };
    offsetY?: string;
}

const SectionWrapper = ({ children, anchor, offsetY = '5rem' }: SectionWrapperProps) => {
    if (!anchor) return null;

    return (
        <div
            className="absolute z-30 left-0 top-0 -translate-x-1/2"
            style={{
                left: `${anchor.x}px`,
                top: `calc(${anchor.y}px + ${offsetY})`,
            }}
        >
            {children}
        </div>
    );
};

export default SectionWrapper;
