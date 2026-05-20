const departements = [
    {
        code: 'NTIC',
        nom: 'Nouvelles Technologies de l\'Information et de la Communication',
        couleur: 'var(--vert)',
        bgCouleur: 'var(--vert-pale)',
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        description: 'Le programme de licence en Nouvelles Technologies de l\'Information et de la Communication (NTIC) se concentre sur la formation de professionnels capables de maîtriser les concepts clés de l\'informatique, tels que la programmation, le génie logiciel et l\'analyse des données. Les étudiants développent des compétences essentielles en réseaux, cybersécurité et gestion des bases de données. Ce cursus rigoureux est conçu pour répondre aux besoins actuels du marché du travail, en offrant une expertise technique pour aborder les défis contemporains liés aux systèmes d\'information et à la gouvernance des données.',
        matieres: ['Réseaux informatiques', 'Cybersécurité', 'Systèmes d\'exploitation', 'Cloud computing', 'Administration système', 'Protocoles réseau', 'Bases de données', 'Développement web'],
        competences: ['Configurer et administrer des réseaux', 'Sécuriser des systèmes d\'information', 'Gérer des serveurs et infrastructures', 'Mettre en place des solutions cloud'],
        debouches: ['Administrateur réseau', 'Ingénieur cybersécurité', 'Technicien infrastructure', 'Consultant IT'],
    },
    {
        code: 'DL',
        nom: 'Développement Logiciel',
        couleur: 'var(--rouge)',
        bgCouleur: 'var(--rouge-pale)',
        img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
        description: 'La filière DL forme des développeurs capables de concevoir, réaliser et maintenir des logiciels et applications web ou mobiles.',
        matieres: ['Algorithmique', 'Programmation Python / Java', 'Développement web', 'Bases de données SQL', 'Génie logiciel', 'Mobile Android', 'UML & Merise', 'APIs REST'],
        competences: ['Développer des applications web et mobile', 'Modéliser des bases de données', 'Appliquer les méthodes Agile', 'Concevoir des APIs REST'],
        debouches: ['Développeur fullstack', 'Ingénieur logiciel', 'Développeur mobile', 'Chef de projet IT'],
    }
]

export default function Departements() {
    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', height: 320, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
                    alt="Formations"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,68,31,0.72)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                    <span className="badge" style={{ background: 'rgba(255,204,0,0.2)', color: '#ffcc00', marginBottom: '1rem', display: 'inline-block' }}>Formations</span>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>Nos départements</h1>
                    <p style={{ opacity: 0.85, maxWidth: 560 }}>Deux filières complémentaires pour construire votre carrière dans le numérique.</p>
                </div>
            </section>

            {departements.map((d, i) => (
                <section key={d.code} className="section" style={{ background: i % 2 === 0 ? '#fff' : 'var(--gris-clair)' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                            {i % 2 === 0 ? (
                                <>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                                            <span className="badge" style={{ background: d.bgCouleur, color: d.couleur, fontSize: '1rem', padding: '0.4rem 1.1rem', fontWeight: 700 }}>{d.code}</span>
                                        </div>
                                        <h2 style={{ fontSize: '1.5rem', color: d.couleur, marginBottom: '1rem' }}>{d.nom}</h2>
                                        <p style={{ color: 'var(--gris)', marginBottom: '2rem', lineHeight: 1.8 }}>{d.description}</p>
                                        <div style={{ display: 'grid', gap: '1rem' }}>
                                            <div className="card">
                                                <h3 style={{ fontSize: '0.95rem', color: d.couleur, marginBottom: '0.75rem' }}>📚 Matières principales</h3>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                                    {d.matieres.map(m => <span key={m} className="badge" style={{ background: d.bgCouleur, color: d.couleur, fontSize: '0.78rem' }}>{m}</span>)}
                                                </div>
                                            </div>
                                            <div className="card">
                                                <h3 style={{ fontSize: '0.95rem', color: d.couleur, marginBottom: '0.75rem' }}>💼 Débouchés professionnels</h3>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                                    {d.debouches.map(db => <span key={db} className="badge" style={{ background: d.bgCouleur, color: d.couleur, fontSize: '0.78rem' }}>{db}</span>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', marginBottom: '1rem' }}>
                                            <img src={d.img} alt={d.code} style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }} />
                                        </div>
                                        <div className="card">
                                            <h3 style={{ fontSize: '0.95rem', color: d.couleur, marginBottom: '0.75rem' }}>🎯 Compétences acquises</h3>
                                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--gris)', fontSize: '0.88rem', lineHeight: 2.1 }}>
                                                {d.competences.map(c => <li key={c}>{c}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', marginBottom: '1rem' }}>
                                            <img src={d.img} alt={d.code} style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }} />
                                        </div>
                                        <div className="card">
                                            <h3 style={{ fontSize: '0.95rem', color: d.couleur, marginBottom: '0.75rem' }}>🎯 Compétences acquises</h3>
                                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--gris)', fontSize: '0.88rem', lineHeight: 2.1 }}>
                                                {d.competences.map(c => <li key={c}>{c}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                                            <span className="badge" style={{ background: d.bgCouleur, color: d.couleur, fontSize: '1rem', padding: '0.4rem 1.1rem', fontWeight: 700 }}>{d.code}</span>
                                        </div>
                                        <h2 style={{ fontSize: '1.5rem', color: d.couleur, marginBottom: '1rem' }}>{d.nom}</h2>
                                        <p style={{ color: 'var(--gris)', marginBottom: '2rem', lineHeight: 1.8 }}>{d.description}</p>
                                        <div style={{ display: 'grid', gap: '1rem' }}>
                                            <div className="card">
                                                <h3 style={{ fontSize: '0.95rem', color: d.couleur, marginBottom: '0.75rem' }}>📚 Matières principales</h3>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                                    {d.matieres.map(m => <span key={m} className="badge" style={{ background: d.bgCouleur, color: d.couleur, fontSize: '0.78rem' }}>{m}</span>)}
                                                </div>
                                            </div>
                                            <div className="card">
                                                <h3 style={{ fontSize: '0.95rem', color: d.couleur, marginBottom: '0.75rem' }}>💼 Débouchés professionnels</h3>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                                    {d.debouches.map(db => <span key={db} className="badge" style={{ background: d.bgCouleur, color: d.couleur, fontSize: '0.78rem' }}>{db}</span>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}
