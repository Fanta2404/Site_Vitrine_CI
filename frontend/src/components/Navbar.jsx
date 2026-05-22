import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import DarkMode from './DarkMode'
import logosCI from '../assets/logosCI.png'
import logosUGANC from '../assets/logos_uganc.png'

const liens = [
    { path: '/', label: 'Accueil' },
    { path: '/apropos', label: 'À propos' },
    { path: '/departements', label: 'Départements' },
    { path: '/enseignants', label: 'Enseignants' },
    { path: '/actualites', label: 'Actualités' },
    { path: '/galerie', label: 'Galerie' },
    { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [ouvert, setOuvert] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Fermer menu au resize
    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 768) setOuvert(false) }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <nav style={{
            background: '#fff',
            borderBottom: '1px solid var(--border)',
            position: 'sticky', top: 0, zIndex: 100,
            boxShadow: scrolled ? '0 4px 20px rgba(26,107,200,0.1)' : '0 2px 8px rgba(26,107,200,0.05)',
            transition: 'box-shadow 0.3s'
        }}>
            <div className="container" style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 1.5rem',
                minHeight: 64
            }}>

                {/* Logo */}
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
                    <img src={logosUGANC} alt="UGANC" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
                    <div style={{ width: 1, height: 36, background: 'var(--border)', flexShrink: 0 }} />
                    <img src={logosCI} alt="CI" style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
                    <div className="logo-text" style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'var(--bleu-fonce)', fontSize: '0.88rem', lineHeight: 1.2 }}>
                            Centre Informatique
                        </span>
                        <span className="logo-text-sub" style={{ fontSize: '0.68rem', color: 'var(--gris)' }}>
                            UGANC – Conakry
                        </span>
                    </div>
                </NavLink>

                {/* Liens desktop */}
                <ul className="nav-desktop" style={{ display: 'flex', gap: '0.15rem', listStyle: 'none', alignItems: 'center', margin: 0 }}>
                    {liens.map(l => (
                        <li key={l.path}>
                            <NavLink to={l.path} style={({ isActive }) => ({
                                padding: '0.4rem 0.7rem',
                                borderRadius: 6, fontSize: '0.85rem', fontWeight: 500,
                                color: isActive ? 'var(--bleu)' : 'var(--texte)',
                                background: isActive ? 'var(--bleu-pale)' : 'transparent',
                                transition: 'all 0.15s', display: 'block', textDecoration: 'none'
                            })}>
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Droite : dark mode + burger */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <DarkMode />
                    <button
                        onClick={() => setOuvert(!ouvert)}
                        className="burger"
                        style={{
                            display: 'none', background: 'none', border: 'none',
                            cursor: 'pointer', fontSize: '1.5rem',
                            color: 'var(--bleu)', padding: '0.25rem',
                            lineHeight: 1
                        }}
                        aria-label="Menu" aria-expanded={ouvert}
                    >
                        {ouvert ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            <div style={{
                maxHeight: ouvert ? '600px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.35s ease',
                background: '#fff',
                borderTop: ouvert ? '1px solid var(--border)' : 'none'
            }}>
                <div style={{ padding: ouvert ? '1rem 1.5rem 1.5rem' : '0 1.5rem' }}>
                    {liens.map((l, i) => (
                        <NavLink key={l.path} to={l.path}
                            onClick={() => setOuvert(false)}
                            style={({ isActive }) => ({
                                display: 'flex', alignItems: 'center',
                                padding: '0.8rem 0',
                                color: isActive ? 'var(--vert)' : 'var(--texte)',
                                fontWeight: isActive ? 600 : 400,
                                borderBottom: i < liens.length - 1 ? '1px solid var(--gris-clair)' : 'none',
                                textDecoration: 'none', fontSize: '0.95rem',
                                transition: 'color 0.15s'
                            })}>
                            {l.label}
                        </NavLink>
                    ))}
                    {/* Contact rapide mobile */}
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                        <NavLink to="/contact" onClick={() => setOuvert(false)}
                            className="btn btn-primary"
                            style={{ display: 'block', textAlign: 'center', width: '100%' }}>
                            Nous contacter
                        </NavLink>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .burger { display: block !important; }
          .logo-text { display: none; }
        }
        @media (max-width: 480px) {
          .logo-text-sub { display: none; }
        }
      `}</style>
        </nav>
    )
}
