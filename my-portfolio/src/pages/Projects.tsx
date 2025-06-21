import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/mindmap buttons/ProjectCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/components/mindmap buttons/Types';
import { handleClose, playSound, playSoundRandom } from '@/utils/audioUtils';
import { useProjectContext } from '@/components/mindmap buttons/ProjectContext';

export const projects: Project[] = [
    {
        title: 'VULTUR',
        description: 'An atmospheric mech FPS meets action RPG, where you disembody to customize your build and survive a haunting sci-fi world.',
        src: 'https://itch.io/embed-upload/13883305?color=ffffff',
        live: 'https://oberindraco.itch.io/project-vulture-alpha-build',
        tags: ['Unity', 'C#'],
        type: 'embed',
        details: (
            <>
                <p className="mb-4">
                    <strong>VULTUR</strong> is an atmospheric mech FPS with action RPG elements, set in a haunting sci-fi world where players disembody to reconfigure their builds mid-combat. This project was developed by a student team of around ten which was large by university standards, but still lean compared to industry teams.
                </p>

                <p className="mb-4">
                    I originally joined the team to work on AI systems, but quickly became a kind of all-purpose developer; our team's <i>Swiss Army knife</i>. My responsibilities grew to include weapon systems, enemy AI, movement mechanics, upgrade modules, bug fixing, and some level design. Throughout the project, I worked closely with our producer to handle a wide variety of tasks as needs shifted during development.
                </p>

                <p className="mb-4">
                    The project culminated in a showcase at <strong>SXSW Sydney</strong>, where we were able to showcase our work with a wider audience. It was a huge milestone for all of us and a rewarding finish to the project.
                </p>
            </>
        )

    },
    {
        title: 'Skyward Dive',
        description: 'A fast-paced VR grappling platformer inspired by speedrunning games, designed to explore the physiological triggers behind motion sickness in virtual reality.',
        src: 'https://itch.io/embed/3066729',
        github: 'https://github.com/KerryLin11/Skyward-Dive',
        tags: ['Unity VR', 'C#'],
        type: 'github',
        details: (
            <>
                <p className="mb-4">
                    I designed <strong>Skyward Dive</strong> as a VR grappling platformer to explore what causes motion sickness in different level design scenarios—like how peripheral vision, verticality, and enclosed versus open spaces affect player comfort during fast-paced movement. The result is a high-speed, web-slinging experience that’s part game, part experiment.
                </p>

                {/* Logo and Itch.io download button side-by-side */}
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6 mb-6">
                    <img
                        src="SkywardDivePoster.png"
                        alt="Skyward Dive Logo"
                        className="rounded-xl shadow-md w-full md:w-1/3 mb-4 md:mb-0"
                    />
                    <a
                        href="https://kerrylin4156.itch.io/skyward-dive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-rose-400 hover:bg-rose-500 text-white text-sm font-semibold rounded-md shadow-sm transition-colors duration-200"
                    >
                        Download on <span className="font-bold">Itch.io</span>
                    </a>
                </div>

                {/* Research & showcase video */}
                <p className="mt-10 mb-2 font-semibold ">
                    Summarized research breakdown & gameplay showcase:
                </p>
                <div className="aspect-video w-full max-w-2xl mb-4">
                    <iframe
                        src="https://www.youtube.com/embed/IYsucAvipZs?si=LVg9G5sQeAgUHrqP"
                        className="w-full h-full rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </>
        )

    },
    {
        title: 'Culinary Overture: Gourmet Sonata in F Major',
        description: 'A 30 minute satirical, JavaScript-based visual novel starring an outrageously flamboyant food critic navigating culinary absurdities.',
        github: 'https://github.com/KerryLin11/Culinary-Overture-Gourmet-Sonata-in-F-Major',
        src: 'https://culinary-overture-gourmet-sonata-in.vercel.app/',
        tags: ['HTML', 'CSS', 'JavaScript'],
        type: 'embed',
        details: (
            <>
                <p className="mb-4">
                    <strong>Culinary Overture: Gourmet Sonata in F Major</strong> is a 30-minute satirical visual novel built entirely in JavaScript and my very first attempt at a game project. You play as a hyper-dramatic food critic navigating the absolute dumbest of culinary crises.
                </p>

                <p className="mb-4">
                    The entire game runs off a single <code>game.js</code> file. The code is very chaotic and me not knowing what a tree structure was back then was a big headache because the dialogue system is basically a flat array of text nodes stitched together with player choices and zigzagging narrative branches—but I choreographed every element: from character expressions and sprite animations to text speed, sound effects, and transitions, all timed line-by-line on every one of those <i>thousands</i> of text nodes.
                </p>

                <p className="mb-4">
                    Despite the messiness under the hood, I still adore this project, enough to showcase it. It's ridiculous, expressive, and one of the most fun experiences I've had building and screenwriting from scratch—especially now that I can look back on it as a more experienced programmer with a soft spot for this wild first effort.
                </p>
            </>
        )
    },

    {
        title: 'Block the Block (private repo for now)',
        description: 'An ultra-challenging puzzle game where you manipulate block movement patterns and strategically freeze tiles to control their paths.',
        src: 'https://itch.io/embed-upload/',
        github: 'https://github.com/m0j0man1ac/ProjectBlockFreeze',
        tags: ['Unity', 'C#'],
        type: 'embed',
        details: (
            <>
                <p className="mb-4">
                    <strong>Block the Block</strong> is an ultra-challenging puzzle game built for mobile in Unity, developed by me and 1 other during a quiet semester looking for a project to fill the time. The goal was to make something simple, intuitive, and lightweight in systems with the main focus being on polish and a complete experience.
                </p>

                <p className="mb-4">
                    I was especially drawn to puzzle design for one reason: I had no idea how to approach it. Building levels around existing mechanics is one thing but inventing a mechanic that's inherently <i>puzzling</i> was something I couldn't wrap my head around at the time. After brainstorming and diagramming on a chessboard grid, we landed on a deceptively simple mechanic involving blocks with fixed movement patterns and the ability to freeze them to control other blocks' paths. And just like that, our "small" game turned out to have massive design scope.
                </p>

                <p className="mb-4">
                    Compared to other projects, the code and logic were relatively straightforward but our emphasis on polish pushed me deep into design work. I focused heavily on shaders, textures, lighting, materials, UI/UX, and sound design to bring a minimal concept to life with clarity and style.
                </p>
            </>
        )

    },

    {
        title: 'Miscellaneous Personal Projects',
        description: 'Some things I\'ve worked on for myself recently.',
        type: 'folder',
        children: [
            {
                title: 'This Portfolio Site',
                description: 'A portfolio site to show off my work',
                github: 'https://github.com/KerryLin11/portfolio',
                tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                type: 'github',
                details: (
                    <>
                        <p className="mb-4">
                            <strong>This Portfolio Site</strong> is both a recruitment showcase and a personal trophy shelf—proof (to myself) that the late-night sessions added up to something. Built during my first dive into React, TypeScript and Tailwind, it quickly showed me why these tools are industry mainstays.
                        </p>

                        <p className="mb-4">
                            Ditching the usual nav-bar layout, I went with a canvas of interconnected nodes—an unapologetically component-driven structure to better utilize what I've heard React does best.
                        </p>
                    </>
                )
            },

            {
                title: 'My Everything List (2018 -> Present)',
                description: 'Site where I rate everything I consume, from games to shows to books to movies',
                github: 'https://github.com/KerryLin11/Everything-List-2018',
                tags: ['JavaScript', 'Google Sheets API', 'Apps Script'],
                type: 'embedLarge',
                src: 'https://everything-list-2018.vercel.app/',
                live: 'https://everything-list-2018.vercel.app/',
                details: (
                    <>
                        <p className="mb-4">
                            <strong>My Everything List</strong> is a personal media tracker I've been using since 2018 to rate and log every game, show, movie, and book I finish. It's something I've kept locally, but I recently deployed it to Vercel to showcase.
                        </p>

                        <p className="mb-4">
                            New entries are submitted via a Google Apps Script-powered form and stored in a Google Sheet, which I fetch from and display. It's simple, functional, and something I'll probably keep using forever—or at least until I stop consuming media (so, never).
                        </p>
                    </>
                )
            },
            {
                title: 'Cube Algorithm Timer',
                description: 'A timer specially made for cubing algorithms',
                github: 'https://github.com/KerryLin11/PLL-Timer-server',
                tags: ['JavaScript', 'Chart.js', 'Google Sheets API', 'Google OAuth2'],
                type: 'embedLarge',
                src: 'https://pll-timer-server.onrender.com/',
                live: 'https://pll-timer-server.onrender.com/',
                details: (
                    <>
                        <p className="mb-4">
                            <strong>Cube Algorithm Timer</strong> is a niche little tool I built while learning to speedcube. It tracks and updates my best times for each PLL algorithm, saving them directly to a Google Sheet via Google OAuth2.0.
                        </p>

                        <p className="mb-4">
                            I use <code>twisty.js</code> to visualize scrambles and <code>Chart.js</code> for performance graphs. There's both a session line chart and rolling averages to track progress. Whenever I beat a previous record, it updates automatically. These days I just pull it up whenever I'm in a cubing mood as it doubles as a casual solve timer too.
                        </p>
                    </>
                )

            },
            {
                title: 'Program Blocker for Windows',
                description: 'A simple tkinter app to block user access to apps for an allotted time',
                github: 'https://github.com/KerryLin11/app-blocker',
                tags: ['Python', 'Tkinter'],
                type: 'github',
                details: (
                    <>
                        <p className="mb-4">
                            Sometimes, you just need a little external discipline. A quick utility I made to keep myself focused when willpower alone wasn't quite cutting it.
                        </p>
                        <img className="border-2 rounded-md" src="https://private-user-images.githubusercontent.com/84896346/450936937-254fa5f0-2ef9-4c3d-aa2c-f6454cd90b81.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDkxMzUwMzAsIm5iZiI6MTc0OTEzNDczMCwicGF0aCI6Ii84NDg5NjM0Ni80NTA5MzY5MzctMjU0ZmE1ZjAtMmVmOS00YzNkLWFhMmMtZjY0NTRjZDkwYjgxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA1VDE0NDUzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVlNjVlNTY0ZDAwNGE0NTdhMTZjN2RmMjE2NDI5MGY4NWFkN2Q1NmFhNzE1YTQ0MTBmZTAwMjg4OTg5OTY1YTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.B9I863pA4NgN2CpEPw_L8Ehho6XfJ_AIE5rce9epBmg" />
                    </>
                )

            },
        ]
    },
];

type SectionProps = {
    onClose: () => void;
};

const Projects = ({ onClose }: SectionProps) => {
    const {
        activeIndex,
        setActiveIndex,
        activeChildIndex,
        setActiveChildIndex
    } = useProjectContext();

    const [isTapping, setIsTapping] = useState(false)



    return (
        <motion.div
            animate={{ scale: isTapping ? 0.98 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            layout
            className="max-w-5xl mx-auto px-5 py-8 pb-20 bg-card text-card-foreground rounded-xl shadow-md relative no-block"
        >
            <Button
                onClick={() => handleClose(onClose)}
                variant="closeButton"
                className="absolute -top-2 -right-2"
                onMouseDown={() => setIsTapping(true)}
                onMouseUp={() => setIsTapping(false)}
                onMouseLeave={() => setIsTapping(false)}
                onTouchStart={() => setIsTapping(true)}
                onTouchEnd={() => setIsTapping(false)}>
                &times;
            </Button>

            <h2 className="text-xl font-semibold mb-2 flex items-center text-primary">
                <FaGithub className="w-5 h-5 mr-2" />
                Projects
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
                A collection of games, tools, and web projects—some built for showcases, others just because I felt like it.
            </p>

            {/* Show Back button at top-right of container */}
            {(activeChildIndex !== null || activeIndex !== null) && (
                <Button
                    onClick={() => {
                        playSound('/sounds/close3.wav', 0.5);

                        if (activeChildIndex !== null) {
                            setActiveChildIndex(null);
                        } else {
                            setActiveIndex(null);
                        }
                    }}
                    variant="closeButton"
                    className="absolute bottom-4 right-4 z-10"
                >
                    Back
                </Button>
            )}


            <div className="relative min-h-[300px] grid sm:grid-cols-2 gap-4">
                <AnimatePresence mode="wait">
                    {/* Top-level projects */}
                    {activeIndex === null && (
                        projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layoutId={`card-${index}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="cursor-pointer"
                                onClick={() => setActiveIndex(index)}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))
                    )}

                    {/* Top-level detail view */}
                    {activeIndex !== null && activeChildIndex === null && (
                        <motion.div
                            key={`card-${activeIndex}`}
                            layoutId={`card-${activeIndex}`}
                            className="col-span-2"
                            transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
                        >
                            <ProjectCard project={projects[activeIndex]} forceShowPlayer />

                            {Array.isArray(projects[activeIndex].children) ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    {projects[activeIndex].children!.map((child, childIndex) => (
                                        <motion.div
                                            key={`child-${childIndex}`}
                                            layoutId={`child-${activeIndex}-${childIndex}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="cursor-pointer"
                                            onClick={() => setActiveChildIndex(childIndex)}
                                        >
                                            <ProjectCard project={child} />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <motion.div
                                    key="details"
                                    className="mt-6 bg-muted border border-border p-6 rounded-xl shadow-sm text-muted-foreground"
                                >
                                    <h4 className="text-lg font-semibold mb-2 text-foreground">More about this project</h4>
                                    <p className="text-sm leading-relaxed">
                                        {projects[activeIndex].details}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    )}

                    {/* Child detail view */}
                    {activeIndex !== null && activeChildIndex !== null && (
                        <motion.div
                            key={`child-detail-${activeChildIndex}`}
                            layoutId={`child-${activeIndex}-${activeChildIndex}`}
                            className="col-span-2"
                            transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
                        >
                            <ProjectCard
                                project={projects[activeIndex].children![activeChildIndex]}
                                forceShowPlayer
                            />

                            <motion.div
                                key="child-details"
                                className="mt-6 bg-muted border border-border p-6 rounded-xl shadow-sm text-muted-foreground"
                            >
                                <h4 className="text-lg font-semibold mb-2 text-foreground">More about this project</h4>
                                <p className="text-sm leading-relaxed">
                                    {projects[activeIndex].children![activeChildIndex].details}
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </motion.div>
    );

};


export default Projects;
