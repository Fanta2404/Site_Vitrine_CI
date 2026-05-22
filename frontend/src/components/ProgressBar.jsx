import { useState, useEffect } from 'react'

export default function ProgressBar() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight
            setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0,
            width: `${progress}%`, height: 3,
            background: 'linear-gradient(90deg, var(--bleu-fonce), var(--or))',
            zIndex: 9999, transition: 'width 0.1s linear',
            borderRadius: '0 2px 2px 0'
        }} />
    )
}
