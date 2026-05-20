const departements = [
    {
        code: 'NTIC',
        nom: 'Cyber-Infrastructures & Sécurité',
        couleur: 'var(--primary)',
        bgCouleur: 'var(--primary-pale)',
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        description: 'Le programme NTIC se concentre sur la maîtrise des réseaux, de la cybersécurité et de la gouvernance des données. Il prépare des cadres qualifiés prêts à relever les défis technologiques de demain.',
        matieres: ['Réseaux de données', 'Cybersécurité', 'Cloud Computing', 'Admin Système'],
        competences: ['Sécuriser les infrastructures', 'Gérer les parcs serveurs', 'Déployer des solutions Cloud'],
        debouches: ['Ingénieur Réseaux', 'Expert Sécurité', 'Cloud Architect'],
    },
    {
        code: 'DL',
        nom: 'Génie Logiciel & Data',
        couleur: 'var(--secondary)',
        bgCouleur: 'var(--primary-pale)',
        img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
        description: 'La filière DL forme des experts en conception logicielle, en développement web moderne et en science des données pour l\'innovation industrielle.',
        matieres: ['Algorithmique Avancée', 'Dev Fullstack', 'Génie Logiciel', 'Data Architecture'],
        competences: ['Concevoir des architectures complexes', 'Développer des APIs robustes', 'Gérer le cycle de vie logiciel'],
        debouches: ['Lead Developer', 'Architecte Logiciel', 'CTO / Chef de Projet'],
    }
]

export default function Departements() {
    return (
        <>
            <section style={{ position: 'relative', height: 400, overflow: 'hidden', display: 'flex', alignItems: 'center', background: 'var(--primary)' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 80%)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                    <span className="badge badge-blue" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Nos Spécialisations</span>
                    <h1 style={{ fontSize: '3.5rem', color: '#fff', marginTop: '1rem', fontWeight: 900 }}>Départements d'Excellence</h1>
                </div>
            </section>

            {departements.map((d, i) => (
                <section key={d.code} className="section" style={{ background: i % 2 === 0 ? '#fff' : 'var(--bg-alt)' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                            {i % 2 === 1 && (
                                <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                                    <img src={d.img} alt={d.code} style={{ width: '100%', height: 450, objectFit: 'cover' }} />
                                </div>
                            )}
                            <div>
                                <span className="badge badge-blue" style={{ marginBottom: '1.5rem' }}>Filière {d.code}</span>
                                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>{d.nom}</h2>
                                <p style={{ color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: 1.8 }}>{d.description}</p>

                                <div style={{ display: 'grid', gap: '1.5rem' }}>
                                    <div className="card" style={{ borderLeft: `6px solid ${d.couleur}` }}>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>💡 Modules Clés</h3>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                            {d.matieres.map(m => <span key={m} className="badge" style={{ background: 'var(--bg-alt)', color: 'var(--text)', fontSize: '0.8rem' }}>{m}</span>)}
                                        </div>
                                    </div>
                                    <div className="card" style={{ borderLeft: `6px solid ${d.couleur}` }}>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>🚀 Opportunités</h3>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                            {d.debouches.map(db => <span key={db} className="badge" style={{ background: d.bgCouleur, color: 'var(--primary)', fontSize: '0.8rem' }}>{db}</span>)}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '2.5rem' }}>
                                    <Link to={d.code === 'NTIC' ? '/departements/ntic' : '#'} className="btn btn-outline" style={{ padding: '0.8rem 2rem' }}>
                                        En savoir plus →
                                    </Link>
                                </div>
                            </div>
                            {i % 2 === 0 && (
                                <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                                    <img src={d.img} alt={d.code} style={{ width: '100%', height: 450, objectFit: 'cover' }} />
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}
