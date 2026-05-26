import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function DarkMode() {
    const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

    useEffect(() => {
        document.body.classList.toggle('dark', dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    return (
        <button
            onClick={() => setDark(!dark)}
            title={dark ? 'Mode clair' : 'Mode sombre'}
            style={{
                background: dark ? 'rgba(255,255,255,0.1)' : 'var(--gris-clair)',
                border: '1px solid var(--border)',
                borderRadius: 8, width: 36, height: 36,
                cursor: 'pointer', fontSize: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s', color: 'var(--texte)'
            }}
        >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}
