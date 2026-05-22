import { NavLink } from 'react-router-dom'
import logosCI from '../assets/logosCI.png'
import logosUGANC from '../assets/logos_uganc.png'

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--bleu-fonce)',
            color: '#fff',
            padding: '3rem 0 1.5rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background element */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

                    {/* Institutional Info */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <div style={{ padding: '0.4rem', background: '#fff', borderRadius: '10px', display: 'flex', gap: '0.5rem' }}>
                                <img src={logosUGANC} alt="UGANC" style={{ height: 48, objectFit: 'contain' }} />
                                <img src={logosCI} alt="CI" style={{ height: 44, objectFit: 'contain' }} />
                            </div>
                        </div>
                        <h3 style={{ color: 'var(--white)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                            Centre Informatique
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                            Une institution d'excellence pour la formation et la recherche technologique en Guinée.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Structure</h4>
                        {[['/', 'Accueil'], ['/apropos', 'À propos'], ['/departements', 'Départements'], ['/enseignants', 'Enseignants']].map(([path, label]) => (
                            <NavLink key={path} to={path} style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem', marginBottom: '0.75rem', transition: 'color 0.2s' }}>
                                {label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Disciplines */}
                    <div>
                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Filières</h4>
                        <ul style={{ listStyle: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem' }}>
                            <li style={{ marginBottom: '0.75rem' }}>💻 NTIC – Réseaux & Systèmes</li>
                            <li>🚀 DL – Développement Logiciel</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h4>
                        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem', lineHeight: 1.8 }}>
                            <p>📍 Dixinn, Conakry 33139</p>
                            <p>📧 direction@ci.edu.gn</p>
                            <p>📞 +224 624 08 45 01</p>
                            <p>📱 +224 657 99 43 57</p>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                    © 2026 Centre Informatique UGANC. Propulsé par l'Excellence Numérique.
                </div>
            </div>
        </footer>
    )
}
