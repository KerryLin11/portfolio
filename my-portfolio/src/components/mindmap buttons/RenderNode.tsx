// RenderNode.tsx
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import RelativeTo from './RelativeTo';
import Bubble from './Bubble';
import type { Node } from './mindmap';

interface RenderNodeProps {
    node: Node;
    onSelectSection: (section: string, pos: { x: number; y: number }) => void;
    isVisible: boolean;
}

const RenderNode = ({
    node,
    onSelectSection,
    isVisible,
}: RenderNodeProps) => {
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
                            } else {
                                onSelectSection("", pos);
                                if (node.children?.length) {
                                    setExpanded((prev) => !prev);
                                }
                            }
                        }}
                    />
                )}
            </RelativeTo>

            // Entry/exit animations handled inside RenderNode or its children (e.g., Bubble)
            <AnimatePresence>
                {expanded &&
                    node.children?.map((child) => (
                        <RenderNode
                            key={child.id}
                            node={child}
                            onSelectSection={onSelectSection}
                            isVisible={true}
                        />
                    ))}
            </AnimatePresence>

        </>
    );
};

export default RenderNode;
