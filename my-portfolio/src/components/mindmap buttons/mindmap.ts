export type Node = {
    id: string;
    label: string;
    color: string;
    position: { x: number; y: number };
    linkToSection?: 'about' | 'projects' | 'contact';
};
