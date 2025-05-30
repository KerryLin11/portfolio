// RenderNode.tsx
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

            <AnimatePresence>
                {expanded &&
                    node.children?.map((child) => (
                        <motion.div
                            key={child.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{
                                duration: 0.5,          // Slower enter animation
                                exit: { duration: 0.2 } // Faster exit animation
                            }}
                        >
                            <RenderNode
                                node={child}
                                onSelectSection={onSelectSection}
                                isVisible={true}
                            />
                        </motion.div>
                    ))}
            </AnimatePresence>
        </>
    );
};

export default RenderNode;
