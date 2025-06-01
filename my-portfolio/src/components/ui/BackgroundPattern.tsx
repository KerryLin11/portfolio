import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import backgroundPattern from "@/assets/backgroundPatterns/backgroundPattern3.png";

const BackgroundPattern: React.FC = () => {
    const [tileSize, setTileSize] = useState({ width: 100, height: 100 });

    useEffect(() => {
        const img = new Image();
        img.src = backgroundPattern;
        img.onload = () => {
            setTileSize({ width: img.width, height: img.height });
        };
    }, []);

    return (
        <motion.div
            className="absolute inset-0 z-0 bg-repeat pointer-events-none overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundPattern})`,
            }}
            initial={{ scale: 2 }}
            animate={{
                backgroundPosition: [
                    `0px 0px`,
                    `${tileSize.width}px ${tileSize.height}px`,
                ],
            }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
            }}
        />

    );
};

export default BackgroundPattern;
