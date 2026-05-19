const valeurs = [
    { titre: 'Excellence', desc: 'Nous visons l\'excellence académique dans tous nos programmes de formation.', icon: '⭐' },
    { titre: 'Innovation', desc: 'Nous intégrons les dernières technologies dans nos enseignements.', icon: '💡' },
    { titre: 'Solidarité', desc: 'Un esprit de groupe et d\'entraide entre étudiants et enseignants.', icon: '🤝' },
    { titre: 'Pratique', desc: 'Des TP et projets concrets tout au long de la formation.', icon: '🛠️' },
]

export default function APropos() {
    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', height: 340, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=80"
                    alt="Campus universitaire"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,68,31,0.7)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                    <span className="badge" style={{ background: 'rgba(255,204,0,0.2)', color: '#ffcc00', marginBottom: '1rem', display: 'inline-block' }}>À propos</span>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>Le Centre Informatique</h1>
                    <p style={{ opacity: 0.85, maxWidth: 560, fontSize: '1.05rem' }}>Une structure académique dédiée à la formation des ingénieurs du numérique en Guinée.</p>
                </div>
            </section>

            {/* Histoire */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="badge badge-vert" style={{ marginBottom: '1rem', display: 'inline-block' }}>Notre histoire</span>
                            <h2 className="section-title">Une institution au service du numérique</h2>
                            <p style={{ color: 'var(--gris)', lineHeight: 1.85, marginBottom: '1rem' }}>
                                Le Centre Informatique de l'UGANC a été créé pour répondre aux besoins croissants en compétences numériques en République de Guinée.
                            </p>
                            <p style={{ color: 'var(--gris)', lineHeight: 1.85, marginBottom: '1rem' }}>
                                Depuis sa création, le centre forme des étudiants qualifiés dans deux filières principales : les Nouvelles Technologies de l'Information et de la Communication (NTIC) et le Développement Logiciel (DL).
                            </p>
                            <p style={{ color: 'var(--gris)', lineHeight: 1.85 }}>
                                Rattaché à la Faculté des Sciences et Techniques, le centre est reconnu comme un acteur clé dans la digitalisation du pays.
                            </p>
                        </div>
                        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                                alt="Bâtiment universitaire"
                                style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Vision */}
            <section className="section" style={{ background: 'var(--vert)', color: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { label: '🎯 Mission', texte: 'Formation des professionnels compétents dans les domaines des TIC et du développement logiciel pour répondre aux besoins du marché guinéen et africain.' },
                            { label: '🔭 Vision', texte: 'Devenir un centre d\'excellence numérique reconnu en Afrique de l\'Ouest, produisant des ingénieurs et techniciens de haut niveau.' },
                            { label: '📌 Objectif', texte: 'Contribuer activement au développement numérique de la Guinée en formant une nouvelle génération de talents technologiques.' },
                        ].map(item => (
                            <div key={item.label} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius)', padding: '1.75rem', borderLeft: '4px solid #ffcc00' }}>
                                <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.75rem', color: '#ffcc00' }}>{item.label}</div>
                                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.92rem', lineHeight: 1.8 }}>{item.texte}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valeurs */}
            <section className="section" style={{ background: 'var(--gris-clair)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Nos valeurs</h2>
                    <p className="section-sub" style={{ textAlign: 'center' }}>Les principes qui guident notre démarche pédagogique</p>
                    <div className="grid-4">
                        {valeurs.map(v => (
                            <div key={v.titre} className="card" style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{v.titre}</h3>
                                <p style={{ color: 'var(--gris)', fontSize: '0.85rem', lineHeight: 1.7 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Organisation */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                                alt="Salle de cours"
                                style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                        <div>
                            <h2 className="section-title">Organisation du centre</h2>
                            <p className="section-sub">Notre structure interne</p>
                            <div style={{ display: 'grid', gap: '0.75rem' }}>
                                {[
                                    { titre: 'Direction du Centre', role: 'Gestion générale et administrative', couleur: 'var(--vert)' },
                                    { titre: 'Département NTIC', role: 'Réseaux, systèmes et cybersécurité', couleur: 'var(--vert-clair)' },
                                    { titre: 'Département DL', role: 'Programmation et développement logiciel', couleur: 'var(--rouge)' },
                                    { titre: 'Scolarité', role: 'Inscriptions, dossiers et suivi étudiants', couleur: 'var(--gris)' },
                                    { titre: 'Salle informatique', role: 'Ressources matérielles et infrastructure', couleur: '#856404' },
                                ].map(o => (
                                    <div key={o.titre} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1rem', background: 'var(--gris-clair)', borderRadius: 8, borderLeft: `4px solid ${o.couleur}` }}>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>{o.titre}</div>
                                            <div style={{ color: 'var(--gris)', fontSize: '0.82rem' }}>{o.role}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
