import { NavLink } from 'react-router-dom'
import { Laptop, Rocket, MapPin, Mail, Phone, Smartphone } from 'lucide-react'
import logosCI from '../assets/logosCI.png'
import logosUGANC from '../assets/logos_uganc.png'

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--bleu-fonce)',
            color: '#fff',
            padding: '1rem 0 0.5rem',
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
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1rem' }}>

                    {/* Institutional Info */}
                    <div style={{ paddingRight: '1rem' }}>
                        <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                            <div style={{ padding: '0.3rem 0.6rem', background: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                <img src={logosUGANC} alt="UGANC" style={{ height: 34, width: 'auto', objectFit: 'contain' }} />
                                <div style={{ height: 22, width: 2, background: 'var(--border)' }}></div>
                                <img src={logosCI} alt="CI" style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
                            </div>
                        </div>
                        <h3 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                            Centre Informatique
                        </h3>
                        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                            Une institution d'excellence pour la formation et la recherche technologique en Guinée.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Structure</h4>
                        {[['/', 'Accueil'], ['/apropos', 'À propos'], ['/departements', 'Départements'], ['/enseignants', 'Enseignants']].map(([path, label]) => (
                            <NavLink key={path} to={path} style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginBottom: '0.4rem', transition: 'color 0.2s' }}>
                                {label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Disciplines */}
                    <div>
                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Filières</h4>
                        <ul style={{ listStyle: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
                            <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Laptop size={14} /> NTIC – Réseaux & Systèmes</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Rocket size={14} /> DL – Développement Logiciel</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h4>
                        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}><MapPin size={14} /> Dixinn, Conakry 33139</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}><Mail size={14} /> direction@ci.edu.gn</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}><Phone size={14} /> +224 624 08 45 01</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Smartphone size={14} /> +224 657 99 43 57</p>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.75rem', textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                    © 2026 Centre Informatique UGANC. Propulsé par l'Excellence Numérique.
                </div>
            </div>
        </footer>
    )
}
