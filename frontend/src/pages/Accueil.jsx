import { Link } from 'react-router-dom'

const stats = [
    { val: '2', label: 'Filières' },
    { val: '500+', label: 'Étudiants' },
    { val: '20+', label: 'Enseignants' },
    { val: '10+', label: 'Années d\'expérience' },
]

const atouts = [
    { titre: 'Formation de qualité', desc: 'Des cours pratiques et théoriques dispensés par des enseignants expérimentés.', icon: '🎓' },
    { titre: 'Deux filières', desc: 'NTIC et Développement Logiciel pour des débouchés variés dans le numérique.', icon: '💻' },
    { titre: 'Projets concrets', desc: 'Les étudiants réalisent des projets réels dès la première année.', icon: '🚀' },
    { titre: 'Réseau professionnel', desc: 'Partenariats avec des entreprises locales et internationales.', icon: '🤝' },
]

const temoignages = [
    { nom: 'Amadou Kouyaté', promo: 'Promo NTIC 2024', texte: 'Le centre m\'a donné toutes les bases pour décrocher mon premier emploi en administration réseau.', initiales: 'AK' },
    { nom: 'Mariama Baldé', promo: 'Promo DL 2023', texte: 'Les projets pratiques en développement web m\'ont permis de créer ma propre startup tech.', initiales: 'MB' },
    { nom: 'Ousmane Diallo', promo: 'Promo NTIC 2025', texte: 'Une formation sérieuse avec des enseignants disponibles et passionnés par leurs matières.', initiales: 'OD' },
]

export default function Accueil() {
    return (
        <>
            {/* Hero avec image de fond */}
            <section style={{
                position: 'relative',
                minHeight: '92vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
                    alt="Université"
                    style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.35)'
                    }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,68,31,0.85) 0%, rgba(0,102,51,0.6) 100%)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 1.5rem' }}>
                    <span className="badge" style={{ background: 'rgba(255,204,0,0.25)', color: '#ffcc00', marginBottom: '1.5rem', display: 'inline-block' }}>
                        Excellence Numérique
                    </span>
                    <h1 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: 'clamp(2.2rem, 6vw, 4rem)',
                        color: '#fff', lineHeight: 1.2,
                        maxWidth: 700, marginBottom: '1.5rem'
                    }}>
                        Centre Informatique<br />
                        <span style={{ color: '#ffcc00' }}>UGANC</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', maxWidth: 560, marginBottom: '2.5rem', lineHeight: 1.8 }}>
                        Formez-vous aux métiers du numérique avec nos filières <strong style={{ color: '#fff' }}>NTIC</strong> et <strong style={{ color: '#fff' }}>Développement Logiciel</strong>. Une formation académique solide au cœur de Conakry.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/departements" className="btn" style={{ background: '#ffcc00', color: '#00441f', fontWeight: 700, fontSize: '1rem', padding: '0.8rem 2rem' }}>
                            Découvrir les filières →
                        </Link>
                        <Link to="/contact" className="btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)', fontSize: '1rem', padding: '0.8rem 2rem' }}>
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '2.5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', textAlign: 'center' }}>
                        {stats.map(s => (
                            <div key={s.label} style={{ padding: '1rem' }}>
                                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--vert)', fontFamily: 'Playfair Display, serif' }}>{s.val}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--gris)', marginTop: '0.25rem' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* À propos rapide */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="badge badge-vert" style={{ marginBottom: '1rem', display: 'inline-block' }}>À propos du centre</span>
                            <h2 className="section-title">Former les talents numériques de Guinée</h2>
                            <p style={{ color: 'var(--gris)', lineHeight: 1.85, marginBottom: '1rem' }}>
                                Le Centre Informatique de l'UGANC est une structure académique dédiée à la formation des ingénieurs et techniciens du numérique en République de Guinée.
                            </p>
                            <p style={{ color: 'var(--gris)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                                Grâce à ses deux filières complémentaires, le centre prépare les étudiants aux défis technologiques du monde professionnel moderne.
                            </p>
                            <Link to="/apropos" className="btn btn-outline">En savoir plus →</Link>
                        </div>
                        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                                alt="Étudiants en informatique"
                                style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Atouts */}
            <section className="section" style={{ background: 'var(--gris-clair)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Pourquoi nous choisir ?</h2>
                    <p className="section-sub" style={{ textAlign: 'center' }}>Ce qui fait la force du Centre Informatique</p>
                    <div className="grid-2">
                        {atouts.map(a => (
                            <div key={a.titre} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '2rem', flexShrink: 0 }}>{a.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{a.titre}</h3>
                                    <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.7 }}>{a.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filières */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Nos filières</h2>
                    <p className="section-sub" style={{ textAlign: 'center' }}>Deux parcours pour intégrer le monde du numérique</p>
                    <div className="grid-2">
                        {[
                            {
                                code: 'NTIC',
                                nom: 'Nouvelles Technologies de l\'Information',
                                desc: 'Réseaux, cybersécurité, systèmes, cloud computing et nouvelles technologies.',
                                couleur: 'var(--vert)',
                                bgCouleur: 'var(--vert-pale)',
                                img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80'
                            },
                            {
                                code: 'DL',
                                nom: 'Développement Logiciel',
                                desc: 'Programmation, génie logiciel, bases de données et développement d\'applications.',
                                couleur: 'var(--rouge)',
                                bgCouleur: 'var(--rouge-pale)',
                                img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80'
                            }
                        ].map(d => (
                            <div key={d.code} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                                <img src={d.img} alt={d.code} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
                                <div style={{ padding: '1.5rem', borderTop: `4px solid ${d.couleur}` }}>
                                    <span className="badge" style={{ background: d.bgCouleur, color: d.couleur, marginBottom: '0.75rem', display: 'inline-block' }}>{d.code}</span>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{d.nom}</h3>
                                    <p style={{ color: 'var(--gris)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>{d.desc}</p>
                                    <Link to="/departements" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>En savoir plus →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Témoignages */}
            <section className="section" style={{ background: 'var(--gris-clair)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Ce que disent nos étudiants</h2>
                    <p className="section-sub" style={{ textAlign: 'center' }}>Témoignages de nos anciens étudiants</p>
                    <div className="grid-3">
                        {temoignages.map(t => (
                            <div key={t.nom} className="card">
                                <div style={{ fontSize: '2rem', color: 'var(--vert)', marginBottom: '0.75rem' }}>"</div>
                                <p style={{ color: 'var(--gris)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '1.25rem', fontStyle: 'italic' }}>{t.texte}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: 40, height: 40, borderRadius: '50%',
                                        background: 'var(--vert)', color: '#fff',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.9rem'
                                    }}>{t.initiales}</div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{t.nom}</div>
                                        <div style={{ color: 'var(--gris)', fontSize: '0.78rem' }}>{t.promo}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section style={{
                position: 'relative', overflow: 'hidden',
                padding: '5rem 0', textAlign: 'center', color: '#fff'
            }}>
                <img
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&q=80"
                    alt="Campus"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,68,31,0.75)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '0.75rem' }}>
                        Rejoignez le Centre Informatique
                    </h2>
                    <p style={{ opacity: 0.85, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
                        Inscrivez-vous et construisez votre avenir dans le numérique avec nous.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn" style={{ background: '#ffcc00', color: '#00441f', fontWeight: 700 }}>S'inscrire maintenant</Link>
                        <Link to="/departements" className="btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)' }}>Voir les formations</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
