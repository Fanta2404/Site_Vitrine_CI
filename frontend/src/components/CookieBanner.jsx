import { useState, useEffect } from 'react'

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const accepte = localStorage.getItem('cookies-acceptes')
        if (!accepte) setTimeout(() => setVisible(true), 1500)
    }, [])

    const accepter = () => {
        localStorage.setItem('cookies-acceptes', 'true')
        setVisible(false)
    }

    const refuser = () => {
        localStorage.setItem('cookies-acceptes', 'false')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div style={{
            position: 'fixed', bottom: 0, left: 0, right: 0,
            background: '#1a1a2e', color: '#fff',
            padding: '1.25rem 1.5rem',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem', flexWrap: 'wrap',
            zIndex: 9999,
            boxShadow: '0 -4px 24px rgba(0,0,0,0.25)',
            borderTop: '3px solid var(--vert)'
        }}>
            <p style={{ fontSize: '0.88rem', opacity: 0.9, maxWidth: 600, margin: 0, lineHeight: 1.7 }}>
                🍪 Ce site utilise des cookies pour améliorer votre expérience de navigation.
                En continuant, vous acceptez notre politique de confidentialité.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
                <button onClick={refuser} style={{
                    background: 'transparent', color: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '0.5rem 1.1rem', borderRadius: 6,
                    cursor: 'pointer', fontSize: '0.85rem'
                }}>Refuser</button>
                <button onClick={accepter} style={{
                    background: 'var(--vert)', color: '#fff',
                    border: 'none', padding: '0.5rem 1.25rem',
                    borderRadius: 6, cursor: 'pointer',
                    fontSize: '0.85rem', fontWeight: 600
                }}>Accepter ✓</button>
            </div>
        </div>
    )
}
