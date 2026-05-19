import { NavLink } from 'react-router-dom'
import logosCI from '../assets/logosCI.png'
import logosUGANC from '../assets/logos_uganc.png'

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--vert)',
            color: '#fff',
            padding: '3rem 0 1.5rem'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>

                    {/* Colonne logos */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <img
                                src={logosUGANC}
                                alt="Logo UGANC"
                                style={{ height: 52, width: 'auto', objectFit: 'contain', borderRadius: 6, background: '#fff', padding: 3 }}
                            />
                            <img
                                src={logosCI}
                                alt="Logo CI"
                                style={{ height: 48, width: 'auto', objectFit: 'contain', borderRadius: 6, background: '#fff', padding: 3 }}
                            />
                        </div>
                        <h3 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '1rem', marginBottom: '0.5rem' }}>
                            Centre Informatique
                        </h3>
                        <p style={{ fontSize: '0.82rem', opacity: 0.78, lineHeight: 1.7 }}>
                            Faculté des Sciences et Techniques
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.92rem' }}>Navigation</h4>
                        {[['/', 'Accueil'], ['/apropos', 'À propos'], ['/departements', 'Départements'], ['/enseignants', 'Enseignants']].map(([path, label]) => (
                            <NavLink key={path} to={path} style={{ display: 'block', color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', marginBottom: '0.4rem', textDecoration: 'none' }}>{label}</NavLink>
                        ))}
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.92rem' }}>Filières</h4>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>NTIC – Nouvelles Technologies</p>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>DL – Développement Logiciel</p>
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.92rem' }}>Contact</h4>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', lineHeight: 1.85 }}>
                            📍 Conakry, Guinée<br />
                            ✉️ centre-info@uganc.edu.gn<br />
                            📞 +224 000 000 000
                        </p>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: '1.25rem', textAlign: 'center', fontSize: '0.8rem', opacity: 0.6 }}>
                    © 2026 Centre Informatique UGANC. Tous droits réservés.
                </div>
            </div>
        </footer>
    )
}
