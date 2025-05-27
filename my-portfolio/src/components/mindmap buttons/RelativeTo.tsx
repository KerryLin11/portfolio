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


// Takes an anchor point and an optional offset, calculates the final world position (worldPos)
// and renders its child component centered at that position

/**
 * A component that positions its child relative to a given anchor point.
 *
 * @param {Point} anchor - The base position in world coordinates.
 * @param {Point} [offset={ x: 0, y: 0 }] - Optional offset applied to the anchor.
 * @param {(worldPos: Point) => React.ReactNode} children - A render function that receives the computed world position.
 */
const RelativeTo = ({
    anchor,
    offset = { x: 0, y: 0 },
    children,
}: RelativeToProps) => {
    const worldPos = { x: anchor.x + offset.x, y: anchor.y + offset.y };

    return (
        <div
            style={{
                position: 'absolute',
                left: worldPos.x,
                top: worldPos.y,
                transform: 'translate(-50%, -50%)',
            }}
        >
            {children(worldPos)}
        </div>
    );
};

export default RelativeTo;
