import { Link, useLocation } from 'react-router-dom'

const noms = {
    '': 'Accueil',
    'apropos': 'À propos',
    'departements': 'Départements',
    'ntic': 'NTIC',
    'dl': 'DL',
    'enseignants': 'Enseignants',
    'actualites': 'Actualités',
    'galerie': 'Galerie',
    'contact': 'Contact',
}

export default function Breadcrumb() {
    const { pathname } = useLocation()
    if (pathname === '/') return null

    const segments = pathname.split('/').filter(Boolean)

    return (
        <nav style={{
            background: 'var(--vert-pale)',
            borderBottom: '1px solid var(--border)',
            padding: '0.6rem 0'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--gris)' }}>
                <Link to="/" style={{ color: 'var(--vert)', fontWeight: 500, textDecoration: 'none' }}>🏠 Accueil</Link>
                {segments.map((seg, i) => {
                    const path = '/' + segments.slice(0, i + 1).join('/')
                    const estDernier = i === segments.length - 1
                    return (
                        <span key={path} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ opacity: 0.5 }}>›</span>
                            {estDernier
                                ? <span style={{ color: 'var(--texte)', fontWeight: 600 }}>{noms[seg] || seg}</span>
                                : <Link to={path} style={{ color: 'var(--vert)', textDecoration: 'none' }}>{noms[seg] || seg}</Link>
                            }
                        </span>
                    )
                })}
            </div>
        </nav>
    )
}
