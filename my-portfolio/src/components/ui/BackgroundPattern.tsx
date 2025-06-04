import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import lightPattern from "@/assets/backgroundPatterns/backgroundPattern3.png";
import darkPattern from "@/assets/backgroundPatterns/backgroundPattern3-dark_12.jpg";

const BackgroundPattern: React.FC = () => {
    const [tileSize, setTileSize] = useState({ width: 100, height: 100 });
    const [imageSrc, setImageSrc] = useState(lightPattern);

    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            setTileSize({ width: img.width, height: img.height });
        };
    }, [imageSrc]);

    return (
        <>
            {/* light */}
            <motion.div
                className="absolute inset-0 z-0 bg-repeat pointer-events-none overflow-hidden dark:hidden"
                style={{ backgroundImage: `url(${lightPattern})` }}
                initial={{ scale: 2 }}
                animate={{
                    backgroundPosition: [`0px 0px`, `${tileSize.width}px ${tileSize.height}px`],
                }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            {/* dark */}
            <motion.div
                className="absolute inset-0 z-0 bg-repeat pointer-events-none overflow-hidden hidden dark:block"
                style={{ backgroundImage: `url(${darkPattern})` }}
                initial={{ scale: 2 }}
                animate={{
                    backgroundPosition: [`0px 0px`, `${tileSize.width}px ${tileSize.height}px`],
                }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
        </>
    );
};

export default BackgroundPattern;
