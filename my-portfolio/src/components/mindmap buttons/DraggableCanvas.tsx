import React, { useRef, useState, useEffect } from 'react';

const DraggableCanvas = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Set (0,0) to center of viewport
    const [position, setPosition] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });

    const MIN_ZOOM_IN = .5;
    const MAX_ZOOM_OUT = 3;

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        dragStart.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - dragStart.current.x,
            y: e.clientY - dragStart.current.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const canvasX = (mouseX - position.x) / scale;
        const canvasY = (mouseY - position.y) / scale;

        const zoomAmount = -e.deltaY * 0.001;
        let newScale = scale + zoomAmount;
        newScale = Math.min(MAX_ZOOM_OUT, Math.max(MIN_ZOOM_IN, newScale));

        const newPosX = mouseX - canvasX * newScale;
        const newPosY = mouseY - canvasY * newScale;

        setScale(newScale);
        setPosition({ x: newPosX, y: newPosY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onWheel={handleWheel}
            className="w-screen h-screen overflow-hidden cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'none' }}
        >
            <div
                className="min-w-[100vw] min-h-[100vh] text-white transition-transform duration-75 ease-out"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transformOrigin: 'top left',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default DraggableCanvas;
