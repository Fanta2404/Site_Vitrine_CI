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
        <nav style={{
            background: '#fff',
            borderBottom: '1px solid #d1e8d9',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 2px 12px rgba(0,102,51,0.07)'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 1.5rem'
            }}>

                {/* Logo gauche : UGANC + CI */}
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>

                    {/* Logo UGANC */}
                    <img
                        src={logosUGANC}
                        alt="Logo UGANC"
                        style={{ height: 48, width: 'auto', objectFit: 'contain' }}
                    />

                    {/* Séparateur vertical */}
                    <div style={{ width: 1, height: 40, background: '#d1e8d9' }} />

                    {/* Logo Centre Informatique */}
                    <img
                        src={logosCI}
                        alt="Logo Centre Informatique"
                        style={{ height: 44, width: 'auto', objectFit: 'contain' }}
                    />

                    {/* Texte */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span style={{
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 700,
                            color: 'var(--vert)',
                            fontSize: '0.92rem',
                            lineHeight: 1.25
                        }}>Centre Informatique</span>
                        <span style={{
                            fontSize: '0.7rem',
                            color: 'var(--gris)',
                            lineHeight: 1.4
                        }}>UGANC – Conakry</span>
                    </div>
                </NavLink>

                {/* Liens desktop */}
                <ul style={{ display: 'flex', gap: '0.2rem', listStyle: 'none', alignItems: 'center' }}
                    className="nav-desktop">
                    {liens.map(l => (
                        <li key={l.path}>
                            <NavLink to={l.path} style={({ isActive }) => ({
                                padding: '0.42rem 0.8rem',
                                borderRadius: 6,
                                fontSize: '0.88rem',
                                fontWeight: 500,
                                color: isActive ? 'var(--vert)' : 'var(--texte)',
                                background: isActive ? 'var(--vert-pale)' : 'transparent',
                                transition: 'all 0.15s',
                                textDecoration: 'none',
                                display: 'block'
                            })}>
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Burger mobile */}
                <button
                    onClick={() => setOuvert(!ouvert)}
                    style={{
                        display: 'none',
                        background: 'none', border: 'none',
                        cursor: 'pointer', fontSize: '1.5rem',
                        color: 'var(--vert)'
                    }}
                    className="burger"
                    aria-label="Menu">
                    {ouvert ? '✕' : '☰'}
                </button>
            </div>

            {/* Menu mobile */}
            {ouvert && (
                <div style={{
                    background: '#fff',
                    borderTop: '1px solid var(--border)',
                    padding: '1rem 1.5rem'
                }}>
                    {/* Logos mobile */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                        <img src={logosUGANC} alt="UGANC" style={{ height: 40, objectFit: 'contain' }} />
                        <img src={logosCI} alt="CI" style={{ height: 36, objectFit: 'contain' }} />
                    </div>
                    {liens.map(l => (
                        <NavLink key={l.path} to={l.path}
                            onClick={() => setOuvert(false)}
                            style={({ isActive }) => ({
                                display: 'block',
                                padding: '0.65rem 0',
                                color: isActive ? 'var(--vert)' : 'var(--texte)',
                                fontWeight: isActive ? 600 : 400,
                                borderBottom: '1px solid var(--gris-clair)',
                                textDecoration: 'none'
                            })}>
                            {l.label}
                        </NavLink>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
        </nav>
    )
}
