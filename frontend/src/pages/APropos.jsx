const valeurs = [
    { titre: 'Excellence', desc: 'Nous visons l\'excellence académique dans tous nos programmes de recherche.', icon: '⭐' },
    { titre: 'Innovation', desc: 'Nous intégrons les dernières avancées technologiques au cœur de la pédagogie.', icon: '💡' },
    { titre: 'Solidarité', desc: 'Un esprit de corps entre enseignants, étudiants et experts du secteur.', icon: '🤝' },
    { titre: 'Pratique', desc: 'Une formation orientée terrain avec des labos de pointe.', icon: '🛠️' },
]

const missions = [
    { titre: 'Synergie Locale', desc: 'Créer des liens forts avec les acteurs locaux pour garantir l\'employabilité immédiate des diplômés.', icon: '🏢' },
    { titre: 'Rayonnement Mondial', desc: 'Développer des partenariats internationaux pour une vision globale de l\'ingénierie numérique.', icon: '🌍' },
    { titre: 'Digitalisation', desc: 'Intégrer les TIC au cœur de l\'université pour dynamiser les méthodes d\'apprentissage.', icon: '🚀' },
    { titre: 'Expertise RH', desc: 'Valoriser les formateurs et assurer une gestion optimale des talents académiques.', icon: '👥' },
    { titre: 'Apprentissage Agile', desc: 'Prioriser le E-learning et la formation continue pour s\'adapter aux besoins du marché.', icon: '💻' },
    { titre: 'Innovation Mixte', desc: 'Aligner la recherche académique sur les réalités industrielles contemporaines.', icon: '🏆' },
]

export default function APropos() {
    return (
        <>
            {/* Minimal Tech Hero */}
            <section style={{
                position: 'relative',
                height: 420,
                display: 'flex',
                alignItems: 'center',
                background: 'var(--primary)',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <span className="badge badge-blue" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Notre Institution</span>
                    <h1 style={{ fontSize: '4rem', color: '#fff', marginTop: '1rem', fontWeight: 900 }}>Identité & Vision</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: 600 }}>Découvrez l'histoire et les ambitions du pôle d'excellence numérique de Guinée.</p>
                </div>
            </section>

            {/* History & Direction */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'flex-start' }}>
                        <div style={{ position: 'sticky', top: '120px' }}>
                            <span className="badge badge-blue">Histoire & Direction</span>
                            <h2 className="section-title">À propos de la Direction</h2>
                            <div className="card" style={{ background: 'var(--bg-alt)', marginTop: '2rem' }}>
                                <div style={{ display: 'grid', gap: '1rem' }}>
                                    {[
                                        { l: 'Fondation', v: '1989' },
                                        { l: 'Structure', v: 'Autonome' },
                                        { l: 'Tutelle', v: 'Rectorat' },
                                    ].map(x => (
                                        <div key={x.l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                            <span style={{ fontWeight: 600 }}>{x.l}</span>
                                            <span style={{ color: 'var(--primary-light)' }}>{x.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.85 }}>
                            <p style={{ marginBottom: '2rem' }}>
                                Le Centre Informatique (C.I) de l’UGANC a vu le jour en 1989, fruit d'un partenariat historique entre la France et la Guinée. Reconnu par l’arrêté ministériel N°632/MEN/DNSUP/89, cet établissement se distingue par son autonomie scientifique.
                            </p>
                            <p style={{ marginBottom: '2rem' }}>
                                Sous la supervision du Recteur, le C.I est administré par un Directeur Général épaulé par deux adjoints dédiés à la pédagogie et à la recherche. Cette structure garantit une orientation stratégique vers l’excellence.
                            </p>
                            <p>
                                Avec une équipe pédagogique d'experts et un engagement constant, le Centre s’illustre comme un acteur clé de l’enseignement supérieur, incarnant l'ambition technologique de l'université sur la scène mondiale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Missions */}
            <section className="section" style={{ background: 'var(--primary)', color: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 className="section-title" style={{ color: '#fff' }}>Missions & Engagements</h2>
                        <p style={{ opacity: 0.7 }}>Nos axes de développement pour former les leaders de demain.</p>
                    </div>
                    <div className="grid-3">
                        {missions.map((m, i) => (
                            <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{m.icon}</div>
                                <h3 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{m.titre}</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Valeurs Fondamentales</h2>
                    <div className="grid-4" style={{ marginTop: '4rem' }}>
                        {valeurs.map(v => (
                            <div key={v.titre} className="card" style={{ textAlign: 'center', border: 'none', boxShadow: 'none', background: 'var(--bg-alt)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{v.icon}</div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{v.titre}</h3>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
