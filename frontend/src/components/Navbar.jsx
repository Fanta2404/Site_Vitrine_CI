import { useState } from 'react'
import { NavLink } from 'react-router-dom'
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

    return (
        <nav className="glass" style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '0.5rem 0',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>

                {/* Logo Section */}
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem', background: 'rgba(255,255,255,0.8)', borderRadius: '10px' }}>
                        <img src={logosUGANC} alt="UGANC" style={{ height: 42, width: 'auto', objectFit: 'contain' }} />
                        <div style={{ width: 1, height: 28, background: '#e2e8f0' }} />
                        <img src={logosCI} alt="CI" style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
                    </div>
                    <div className="nav-text-container" style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 800,
                            color: 'var(--primary)',
                            fontSize: '1rem',
                            letterSpacing: '-0.01em'
                        }}>Centre Informatique</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>UGANC Conakry</span>
                    </div>
                </NavLink>

                {/* Desktop Menu */}
                <ul className="nav-desktop" style={{ display: 'flex', gap: '0.5rem', listStyle: 'none' }}>
                    {liens.map(l => (
                        <li key={l.path}>
                            <NavLink to={l.path} style={({ isActive }) => ({
                                padding: '0.6rem 1rem',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: isActive ? 'var(--white)' : 'var(--text)',
                                background: isActive ? 'var(--primary)' : 'transparent',
                                transition: 'all 0.3s ease'
                            })}>
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Action Button (Optional, but looks premium) */}
                <NavLink to="/contact" className="btn btn-primary nav-cta" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', display: 'none' }}>
                    S'inscrire
                </NavLink>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOuvert(!ouvert)}
                    className="burger"
                    aria-label="Menu"
                    style={{
                        display: 'none',
                        background: 'var(--primary-pale)',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        color: 'var(--primary)'
                    }}>
                    <span style={{ fontSize: '1.5rem' }}>{ouvert ? '✕' : '☰'}</span>
                </button>
            </div>

            {/* Mobile Sidebar/Menu */}
            {ouvert && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--white)',
                    padding: '1.5rem',
                    boxShadow: 'var(--shadow-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    {liens.map(l => (
                        <NavLink key={l.path} to={l.path}
                            onClick={() => setOuvert(false)}
                            style={({ isActive }) => ({
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                color: isActive ? 'var(--primary)' : 'var(--text)',
                                background: isActive ? 'var(--primary-pale)' : 'transparent',
                                fontWeight: 700,
                                fontSize: '1rem'
                            })}>
                            {l.label}
                        </NavLink>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 992px) {
          .nav-desktop, .nav-cta { display: none !important; }
          .burger { display: flex !important; }
          .nav-text-container { display: none !important; }
        }
      `}</style>
        </nav>
    )
}
