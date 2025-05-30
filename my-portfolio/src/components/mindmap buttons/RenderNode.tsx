// RenderNode.tsx
import { useState } from 'react';
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


    // Guard clause: if node shouldn’t be seen, don’t render anything.
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
                                // console.log('clicked a node with a section');
                            } else {
                                onSelectSection("", pos);
                                // console.log('clicked a node with no section');

                                if (node.children?.length) {
                                    setExpanded((prev) => !prev);
                                }
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
