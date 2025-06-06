import React, { useRef, useState, useEffect } from 'react';
import BackgroundPattern from '../ui/BackgroundPattern';
import ThemeToggle from './ThemeToggle';

const DraggableCanvas = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    // const initialX = 680;
    // const initialY = 450;

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    const MAX_OFFSET = 1000;



    function clampToBounds(newX: number, newY: number, scale: number) {
        const dx = (newX - initialX) / scale;
        const dy = (newY - initialY) / scale;

        const clampedDx = Math.min(MAX_OFFSET, Math.max(-MAX_OFFSET, dx));
        const clampedDy = Math.min(MAX_OFFSET, Math.max(-MAX_OFFSET, dy));

        return {
            x: initialX + clampedDx * scale,
            y: initialY + clampedDy * scale,
        };
    }


    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const lastMouse = useRef({ x: 0, y: 0, time: 0 });
    const velocity = useRef({ x: 0, y: 0 });

    const animationRef = useRef<number | null>(null);

    const ZOOM_OUT = .5;
    const ZOOM_IN = 2;

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();

        const target = e.target as HTMLElement;
        console.log(target);

        const isCanvasClick = containerRef.current && containerRef.current === target;
        const isNoBlock = target.classList.contains('no-block');
        console.log(isCanvasClick, isNoBlock);


        if (!isCanvasClick && !isNoBlock) return;

        setIsDragging(true);
        dragStart.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
        lastMouse.current = { x: e.clientX, y: e.clientY, time: performance.now() };

        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    };


    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;

        const now = performance.now();
        const dt = now - lastMouse.current.time;
        const dx = e.clientX - lastMouse.current.x;
        const dy = e.clientY - lastMouse.current.y;

        const newX = e.clientX - dragStart.current.x;
        const newY = e.clientY - dragStart.current.y;

        setPosition(clampToBounds(newX, newY, scale));

        const velocityScale = 0.2;

        velocity.current = {
            x: dx / dt * velocityScale,
            y: dy / dt * velocityScale,
        };

        lastMouse.current = { x: e.clientX, y: e.clientY, time: now };
    };

    const handleMouseUp = () => {
        setIsDragging(false);

        const decay = 0.95;

        const animate = () => {
            velocity.current.x *= decay;
            velocity.current.y *= decay;

            setPosition(prev => clampToBounds(prev.x + velocity.current.x * 16, prev.y + velocity.current.y * 16, scale));


            if (Math.abs(velocity.current.x) > 0.01 || Math.abs(velocity.current.y) > 0.01) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                animationRef.current = null;
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const canvasX = (mouseX - position.x) / scale;
        const canvasY = (mouseY - position.y) / scale;

        const isZoomGesture = e.ctrlKey || Math.abs(e.deltaY) > 50;
        const zoomMultiplier = Math.abs(e.deltaY) < 10 ? 0.005 : 0.001;

        if (isZoomGesture) {
            let newScale = scale + -e.deltaY * zoomMultiplier;
            newScale = Math.min(ZOOM_IN, Math.max(ZOOM_OUT, newScale));

            const newPosX = mouseX - canvasX * newScale;
            const newPosY = mouseY - canvasY * newScale;

            setScale(newScale);
            const boundedNewPos = clampToBounds(newPosX, newPosY, newScale);
            setPosition(boundedNewPos);

        } else {
            setPosition(prev => clampToBounds(prev.x - e.deltaX, prev.y - e.deltaY, scale));

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
            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>

            {/* <BackgroundPattern /> */}
            <div
                className="text-white duration-75 ease-out no-block"
                style={{
                    width: 100000,
                    height: 100000,
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transformOrigin: 'top left',
                }}
            >
                <BackgroundPattern />
                {children}
            </div>
        </div>
    );
};

export default DraggableCanvas;
