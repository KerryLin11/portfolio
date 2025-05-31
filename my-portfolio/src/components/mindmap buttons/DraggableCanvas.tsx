import React, { useRef, useState, useEffect } from 'react';

const DraggableCanvas = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Set (0,0) to center of viewport (window.innerWidth/2, window.innerHeight/2)
    const [position, setPosition] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    const [scale, setScale] = useState(1); // start scale = 1
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });

    const MIN_ZOOM_IN = .5;
    const MAX_ZOOM_OUT = 3;

    const handleMouseDown = (e: React.MouseEvent) => {
        // Only start dragging if clicking on the container
        if (e.target !== containerRef.current) return;

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


    /*
        Get relative mousePos
        Convert to canvas space
        Detect if zoom or pan
        If zoom:
            Zoom in/out based on scroll direction
            Adjust position to zoom around the mouse
                Get mousePos in canvas space
                Keep mousePos in the same canvas position after transforms
            Update transforms
        If pan:
            Update position
    */

    const handleWheel = (e: React.WheelEvent) => {
        // e.preventDefault();

        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const canvasX = (mouseX - position.x) / scale;
        const canvasY = (mouseY - position.y) / scale;

        const isZoomGesture = e.ctrlKey || Math.abs(e.deltaY) > 50;
        // const isZoomGesture = Math.abs(e.deltaY) > Math.abs(e.deltaX);Math.abs(e.deltaY) > Math.abs(e.deltaX);

        if (isZoomGesture) {
            //   const zoomMultiplier = Math.abs(e.deltaY) < 10 ? 0.020 : 0.010;       // Trackpad
            const zoomMultiplier = Math.abs(e.deltaY) < 10 ? 0.005 : 0.001; // Mouse

            const zoomAmount = -e.deltaY * zoomMultiplier;

            let newScale = scale + zoomAmount;
            newScale = Math.min(MAX_ZOOM_OUT, Math.max(MIN_ZOOM_IN, newScale));


            // Take mouse position in window space then subtract the mouse position in canvas space after scaling
            const newPosX = mouseX - canvasX * newScale;
            const newPosY = mouseY - canvasY * newScale;

            setScale(newScale);
            setPosition({ x: newPosX, y: newPosY });
        } else { // Panning logic (invert deltaX/deltaY for trackpad)
            setPosition({
                x: position.x - e.deltaX,
                y: position.y - e.deltaY,
            });
        }
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
                className="min-w-[100vw] min-h-[100vh] text-white transition-transform duration-75 ease-out pointer-events-none"
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
