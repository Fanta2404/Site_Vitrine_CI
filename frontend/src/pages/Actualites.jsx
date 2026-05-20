const actus = [
    { titre: 'Lancement du nouveau Portail Étudiant', date: '15 Mai 2026', cat: 'Digital', desc: 'Une plateforme moderne pour simplifier les inscriptions et le suivi académique.' },
    { titre: 'Conférence sur la Cybersécurité', date: '10 Mai 2026', cat: 'Événement', desc: 'Le C.I accueille des experts internationaux pour une semaine de workshops intensifs.' },
    { titre: 'Partenariat avec la French Tech', date: '02 Mai 2026', cat: 'Partenariat', desc: 'Nouvelles opportunités de stage et d\'immersion pour nos étudiants en Europe.' },
]

export default function Actualites() {
    return (
        <>
            <section style={{ height: 320, display: 'flex', alignItems: 'center', background: 'var(--primary)' }}>
                <div className="container">
                    <span className="badge badge-blue" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Actualités</span>
                    <h1 style={{ fontSize: '3.5rem', color: '#fff', marginTop: '1rem', fontWeight: 900 }}>Pôle Information</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        {actus.map((a, i) => (
                            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <span className="badge badge-blue">{a.cat}</span>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{a.date}</span>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', flexShrink: 0 }}>{a.titre}</h3>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', marginBottom: '2rem', flexGrow: 1 }}>{a.desc}</p>
                                <button className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem' }}>Lire l'article</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
