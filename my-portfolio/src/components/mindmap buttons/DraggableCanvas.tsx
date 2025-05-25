import React, { useRef, useState, useEffect } from 'react';

const DraggableCanvas = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 3;

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
        // e.preventDefault();
        if (!containerRef.current) return;

        // Get mouse position relative to container
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Convert mouse position to canvas coordinates (before zoom)
        const canvasX = (mouseX - position.x) / scale;
        const canvasY = (mouseY - position.y) / scale;

        // Calculate new scale
        const zoomAmount = -e.deltaY * 0.001; // tweak this factor to control zoom speed
        let newScale = scale + zoomAmount;
        newScale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, newScale));

        // Adjust position so the point under the mouse stays fixed during zoom
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
            className="w-screen h-screen overflow-hidden cursor-grab active:cursor-grabbing bg-gray-900"
            style={{ touchAction: 'none' }} // prevents touchpad scrolling glitches
        >
            <div
                className="min-w-[100vw] min-h-[100vh] text-white transition-transform duration-75 ease-out"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transformOrigin: 'top left', // important for consistent scaling from top-left
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default DraggableCanvas;
