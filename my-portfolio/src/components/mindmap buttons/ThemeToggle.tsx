import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        const stored = localStorage.getItem('theme')
        if (stored === 'dark') {
            document.documentElement.classList.add('dark')
            setIsDark(true)
        }
    }, [])

    const toggleTheme = () => {
        const root = document.documentElement
        const newTheme = root.classList.contains('dark') ? 'light' : 'dark'
        root.classList.toggle('dark')
        localStorage.setItem('theme', newTheme)
        setIsDark(newTheme === 'dark')
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-muted text-muted-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {isDark ? '🌙 Dark' : '☀️ Light'}
        </motion.button>
    )
}

export default ThemeToggle
