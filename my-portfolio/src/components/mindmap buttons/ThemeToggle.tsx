import { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false)

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
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-muted text-muted-foreground"
        >
            {isDark ? '🌙 Dark' : '☀️ Light'}
        </button>
    )
}

export default ThemeToggle
