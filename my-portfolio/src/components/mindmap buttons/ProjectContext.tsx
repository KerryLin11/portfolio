import React, { createContext, useContext, useState } from 'react';

type ProjectContextType = {
    activeIndex: number | null;
    setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
    activeChildIndex: number | null;
    setActiveChildIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjectContext = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error('useProjectContext must be used within a ProjectProvider');
    }
    return context;
};

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeChildIndex, setActiveChildIndex] = useState<number | null>(null);

    return (
        <ProjectContext.Provider value={{ activeIndex, setActiveIndex, activeChildIndex, setActiveChildIndex }}>
            {children}
        </ProjectContext.Provider>
    );
};
