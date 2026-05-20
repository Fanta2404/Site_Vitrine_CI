import { Link } from 'react-router-dom'

const stats = [
    { val: '2', label: 'Spécialisations' },
    { val: '500+', label: 'Étudiants' },
    { val: '20+', label: 'Experts' },
    { val: '35+', label: 'Ans d\'Excellence' },
]

const atouts = [
    { titre: 'Innovation Technologique', desc: 'Des cursus alignés sur les dernières avancées du secteur numérique mondial.', icon: '⚡' },
    { titre: 'Approche Pratique', desc: 'Pédagogie par projet pour une immersion immédiate dans le monde pro.', icon: '🛠️' },
    { titre: 'Réseau d\'Excellence', desc: 'Partenariats stratégiques avec des leaders technologiques et industriels.', icon: '🌐' },
    { titre: 'Labos Modernes', desc: 'Infrastructure de pointe pour des expérimentations concrètes.', icon: '🧪' },
]

const temoignages = [
    { nom: 'Amadou Kouyaté', promo: 'Expert Réseaux - 2024', texte: 'Le centre m\'a donné les clés pour intégrer les plus grandes infrastructures réseau du pays.', initiales: 'AK' },
    { nom: 'Mariama Baldé', promo: 'Dev Fullstack - 2023', texte: 'Une formation rigoureuse qui m\'a permis de lancer mon propre studio de développement.', initiales: 'MB' },
]

export default function Accueil() {
    return (
        <>
            {/* Premium Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '94vh',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--primary)',
                overflow: 'hidden'
            }}>
                {/* Background Pattern/Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.2) 0%, transparent 50%)',
                    zIndex: 1
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                            <span className="badge badge-blue" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                                Innovation & Excellence
                            </span>
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                            color: '#fff',
                            fontWeight: 900,
                            letterSpacing: '-0.03em',
                            marginBottom: '1.5rem',
                            fontFamily: '"DM Sans", sans-serif'
                        }}>
                            Propulsez votre <br />
                            <span style={{ color: 'var(--secondary)', background: 'linear-gradient(to right, #3b82f6, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Avenir Numérique</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}>
                            Le pôle d'excellence en informatique de l'UGANC. Formez-vous aux défis de la cybersécurité, du cloud et du développement logiciel.
                        </p>
                        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                            <Link to="/departements" className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '12px' }}>
                                Découvrir nos cursus
                            </Link>
                            <Link to="/contact" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', padding: '1rem 2.5rem', borderRadius: '12px' }}>
                                Nous rejoindre
                            </Link>
                        </div>
                    </div>
                    {/* Visual Element (Tech Card) */}
                    <div style={{ display: 'none', md: 'block' }} className="hero-visual">
                        <div className="glass" style={{ padding: '2rem', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" alt="Tech" style={{ width: '100%', borderRadius: '16px', opacity: 0.9 }} />
                            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem' }} className="badge badge-blue">Expertise C.I</div>
                        </div>
                    </div>
                </div>

                <style>{`
                  @media (max-width: 992px) {
                    .container { display: flex !important; flex-direction: column; text-align: center; }
                    .hero-visual { display: none !important; }
                  }
                `}</style>
            </section>

            {/* Metrics Section */}
            <section style={{ background: '#fff', padding: '4rem 0', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        {stats.map(s => (
                            <div key={s.label}>
                                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>{s.val}</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="section" style={{ background: 'var(--bg-alt)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="badge badge-blue">Pourquoi le C.I ?</span>
                        <h2 className="section-title">L'Excellence au cœur de l'UGANC</h2>
                    </div>
                    <div className="grid-2">
                        {atouts.map(a => (
                            <div key={a.titre} className="card" style={{ display: 'flex', gap: '1.5rem', background: '#fff' }}>
                                <div style={{ fontSize: '2.5rem' }}>{a.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{a.titre}</h3>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{a.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Disciplines Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Nos Domaines d'Expertise</h2>
                    <div className="grid-2" style={{ marginTop: '4rem' }}>
                        {[
                            { code: 'NTIC', title: 'Cyber-Infrastructures', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', desc: 'Réseaux avancés, Cybersécurité et Cloud Computing.' },
                            { code: 'DL', title: 'Ingénierie Logicielle', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80', desc: 'Architecture logicielle, Web moderne et Solutions Mobiles.' }
                        ].map(d => (
                            <div key={d.code} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                                <img src={d.img} alt={d.code} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
                                <div style={{ padding: '2rem' }}>
                                    <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>{d.code}</span>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{d.title}</h3>
                                    <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>{d.desc}</p>
                                    <Link to="/departements" className="btn btn-outline" style={{ padding: '0.6rem 1.25rem' }}>Explorer le cursus</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section" style={{ background: 'var(--primary)', color: '#fff' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', color: '#fff' }}>Le succès de nos étudiants</h2>
                    <div className="grid-2" style={{ marginTop: '4rem' }}>
                        {temoignages.map(t => (
                            <div key={t.nom} className="glass" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                                <p style={{ fontSize: '1.1rem', marginBottom: '2rem', fontStyle: 'italic', opacity: 0.9 }}>"{t.texte}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{t.initiales}</div>
                                    <div>
                                        <div style={{ fontWeight: 700 }}>{t.nom}</div>
                                        <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>{t.promo}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
