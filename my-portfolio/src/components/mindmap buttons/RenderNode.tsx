// RenderNode.tsx
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RelativeTo from './RelativeTo';
import Bubble from './Bubble';
import type { Node } from './Node';

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
                        label={node.label}
                        icon={node.icon}
                        color={node.color}
                        clickSound={node.clickSound}
                        hoverSound={node.hoverSound}
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
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
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
