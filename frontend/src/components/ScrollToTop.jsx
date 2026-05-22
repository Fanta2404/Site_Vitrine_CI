import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Retour en haut"
      className="btn-scroll-top"
      style={{
        position: 'fixed', bottom: '5.5rem', right: '1.5rem',
        width: 44, height: 44,
        background: 'var(--bleu)', color: '#fff',
        border: 'none', borderRadius: '50%',
        cursor: 'pointer', zIndex: 999,
        fontSize: '1.2rem', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(26,107,200,0.35)',
        transition: 'transform 0.2s, background 0.2s'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      ↑
    </button>
  ) : null
}
