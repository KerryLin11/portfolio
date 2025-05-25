// RenderNode.tsx
import { useState } from 'react';
import RelativeTo from './RelativeTo';
import Bubble from './Bubble';
import type { Node } from './mindmap';

const RenderNode = ({
    node,
    onSelectSection,
    isVisible,
}: {
    node: Node;
    onSelectSection: (section: string, pos: { x: number; y: number }) => void;
    isVisible: boolean;
}) => {
    const [expanded, setExpanded] = useState(false);

    if (!isVisible) return null;

    return (
        <>
            <RelativeTo anchor={node.position}>
                {(pos) => (
                    <Bubble
                        text={node.label}
                        color={node.color}
                        onClick={() => {
                            if (node.linkToSection) {
                                onSelectSection(node.linkToSection, pos);
                            } else if (node.children?.length) {
                                setExpanded((prev) => !prev);
                            }
                        }}
                    />
                )}
            </RelativeTo>

            {expanded &&
                node.children?.map((child) => (
                    <RenderNode
                        key={child.id}
                        node={child}
                        onSelectSection={onSelectSection}
                        isVisible={true}
                    />
                ))}
        </>
    );
};

export default RenderNode;
