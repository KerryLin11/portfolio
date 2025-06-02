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

export type Project = {
    title: string;
    description: string;
    github?: string;
    live?: string;
    src?: string;
    tags?: string[];
    type: 'github' | 'embed' | 'embedLarge' | 'folder';
    children?: Project[];
};
