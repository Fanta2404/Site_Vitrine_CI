import { useEffect, useState } from 'react'

export default function Loader() {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const t = setTimeout(() => setVisible(false), 2000)
        return () => clearTimeout(t)
    }, [])

    if (!visible) return null

    return (
        <div style={{
            position: 'fixed', inset: 0,
            background: 'var(--bleu-fonce)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            zIndex: 99999, transition: 'opacity 0.5s',
        }}>
            <div style={{
                width: 72, height: 72,
                background: '#fff', borderRadius: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700, fontSize: '1.8rem',
                color: 'var(--bleu-fonce)', marginBottom: '1.5rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}>CI</div>
            <div style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Centre Informatique
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', marginBottom: '2rem' }}>
                UGANC – Conakry
            </div>
            {/* Barre de chargement */}
            <div style={{ width: 160, height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{
                    height: '100%', background: 'var(--or)', borderRadius: 999,
                    animation: 'load 1.8s ease-in-out forwards'
                }} />
            </div>
            <style>{`
        @keyframes load {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
        </div>
    )
}
