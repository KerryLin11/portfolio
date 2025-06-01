// types/mindmap.ts
export type Node = {
    id: string;
    icon?: React.ReactNode;
    label?: string;
    color: string;
    position: { x: number; y: number };
    linkToSection?: 'about' | 'projects' | 'contact';
    children?: Node[];
    clickSound?: string;
    hoverSound?: string;
};
