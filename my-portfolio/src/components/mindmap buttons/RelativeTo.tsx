import React from 'react';

interface Point {
    x: number;
    y: number;
}

interface RelativeToProps {
    anchor: Point;
    offset?: Point;
    children: (worldPos: Point) => React.ReactNode;
}

const RelativeTo = ({
    anchor,
    offset = { x: 0, y: 0 },
    children,
}: RelativeToProps) => {
    const worldPos = { x: anchor.x + offset.x, y: anchor.y + offset.y };

    // Convert worldPos to screen coordinates here:
    // For simplicity, let's assume a function worldToScreen exists
    // You can replace this with your own zoom/pan logic

    const worldToScreen = (pos: Point) => {
        // Example stub — replace with your app's zoom/pan transform
        const scale = 1; // zoom scale
        const pan = { x: 0, y: 0 }; // pan offset
        return {
            x: pos.x * scale + pan.x,
            y: pos.y * scale + pan.y,
        };
    };

    const screenPos = worldToScreen(worldPos);

    return (
        <div
            style={{
                position: 'absolute',
                left: screenPos.x,
                top: screenPos.y,
                transform: 'translate(-50%, -50%)', // center the element on the point
                pointerEvents: 'auto',
            }}
        >
            {children(worldPos)}
        </div>
    );
};

export default RelativeTo;
