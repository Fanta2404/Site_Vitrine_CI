const valeurs = [
    { titre: 'Excellence', desc: 'Nous visons l\'excellence académique dans tous nos programmes de formation.', icon: '⭐' },
    { titre: 'Innovation', desc: 'Nous intégrons les dernières technologies dans nos enseignements.', icon: '💡' },
    { titre: 'Solidarité', desc: 'Un esprit de groupe et d\'entraide entre étudiants et enseignants.', icon: '🤝' },
    { titre: 'Pratique', desc: 'Des TP et projets concrets tout au long de la formation.', icon: '🛠️' },
]

const missions = [
    { titre: 'Synergie Locale', desc: 'Créer des synergies avec les acteurs locaux pour garantir des compétences recherchées sur le marché de l\'emploi.', icon: '🏢' },
    { titre: 'Partenariats Internationaux', desc: 'Collaborer avec des universités étrangères pour enrichir l\'expérience académique et offrir une approche globale.', icon: '🌍' },
    { titre: 'Innovation TIC', desc: 'Intégrer les Technologies de l\'Information et de la Communication pour dynamiser les méthodes d\'apprentissage.', icon: '🚀' },
    { titre: 'Optimisation RH', desc: 'Valoriser les formateurs et assurer la mobilité des compétences au sein de l\'institution.', icon: '👥' },
    { titre: 'E-Learning & Continue', desc: 'Prioriser la formation en ligne et participer à la formation continue des professionnels du secteur.', icon: '💻' },
    { titre: 'Université-Entreprise', desc: 'Aligner les objectifs éducatifs sur les besoins du marché via des collaborations étroites avec le secteur privé.', icon: '🤝' },
    { titre: 'Leadership Numérique', desc: 'Devenir un leader de l\'enseignement supérieur en garantissant l\'excellence et l\'innovation.', icon: '🏆' },
]

export default function APropos() {
    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', height: 340, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=80"
                    alt="Campus"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,68,31,0.7)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                    <span className="badge" style={{ background: 'rgba(255,204,0,0.2)', color: '#ffcc00', marginBottom: '1rem', display: 'inline-block' }}>À propos de nous</span>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>Le Centre Informatique</h1>
                    <p style={{ opacity: 0.85, maxWidth: 560, fontSize: '1.05rem' }}>Une institution d'excellence au service du développement technologique en Guinée.</p>
                </div>
            </section>

            {/* Direction */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
                        <div>
                            <span className="badge badge-vert" style={{ marginBottom: '1rem', display: 'inline-block' }}>La Direction</span>
                            <h2 className="section-title">À propos de la Direction</h2>
                            <div style={{ color: 'var(--gris)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                                <p style={{ marginBottom: '1.25rem' }}>
                                    Le Centre Informatique (C.I) de l’UGANC a vu le jour en 1989, fruit d'un partenariat fructueux entre la France et la Guinée. Reconnu par l’arrêté ministériel N°632/MEN/DNSUP/89, cet établissement d’enseignement scientifique se distingue par son autonomie au sein des Facultés et Instituts de l’Université de Conakry.
                                </p>
                                <p style={{ marginBottom: '1.25rem' }}>
                                    Sous la supervision directe du Recteur, le C.I est administré par un Directeur Général, épaulé par deux adjoints responsables, respectivement des questions pédagogiques et de recherche. Cette structure organisationnelle permet une gestion efficace et une orientation stratégique vers l’excellence académique et scientifique.
                                </p>
                                <p style={{ marginBottom: '1.25rem' }}>
                                    Le Centre Informatique joue un rôle crucial dans la formation des professionnels qualifiés dans le domaine des technologies de l'information. En offrant un environnement d’apprentissage riche, combinant théorie et pratique, il prépare ses étudiants à relever les défis du secteur numérique en constante évolution.
                                </p>
                                <p>
                                    Avec une équipe pédagogique expérimentée et un engagement constant en faveur de la recherche, le Centre s’illustre comme un acteur clé de l’enseignement supérieur en Guinée. Il incarne l’engagement de l’UGANC à dispenser une formation de qualité pour promouvoir le développement technologique du pays.
                                </p>
                            </div>
                        </div>
                        <div style={{ position: 'sticky', top: '120px' }}>
                            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', marginBottom: '2rem' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                                    alt="Bâtiment"
                                    style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
                                />
                            </div>
                            <div style={{ display: 'grid', gap: '0.75rem' }}>
                                {[
                                    { label: 'Création', val: '1989' },
                                    { label: 'Tutelle', val: 'Rectorat UGANC' },
                                    { label: 'Partenariat', val: 'France - Guinée' },
                                    { label: 'Statut', val: 'Autonomie Scientifique' },
                                ].map(info => (
                                    <div key={info.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'var(--gris-clair)', borderRadius: 8, fontSize: '0.9rem' }}>
                                        <span style={{ fontWeight: 600 }}>{info.label}</span>
                                        <span style={{ color: 'var(--vert)', fontWeight: 600 }}>{info.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missions et Objectifs */}
            <section className="section" style={{ background: 'var(--gris-clair)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="badge badge-rouge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Missions</span>
                        <h2 className="section-title">Missions et Objectifs</h2>
                        <p className="section-sub" style={{ margin: '0 auto', maxWidth: 650 }}>
                            Notre ambition est de devenir un leader dans l'enseignement supérieur, en garantissant l'excellence des formations et la satisfaction des étudiants.
                        </p>
                    </div>

                    <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                        {missions.map((m, idx) => (
                            <div key={idx} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: '#fff' }}>
                                <div style={{ fontSize: '2.2rem', flexShrink: 0, opacity: 0.9 }}>{m.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--vert)' }}>{m.titre}</h3>
                                    <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.7 }}>{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valeurs (compact version) */}
            <section className="section" style={{ background: 'var(--vert)', color: '#fff' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', color: '#fff' }}>Nos Valeurs Fondamentales</h2>
                    <div className="grid-4" style={{ marginTop: '3rem' }}>
                        {valeurs.map(v => (
                            <div key={v.titre} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#ffcc00' }}>{v.titre}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', lineHeight: 1.6 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
