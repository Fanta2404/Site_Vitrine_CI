import { useState } from 'react'

const enseignants = [
    { id: 1, nom: 'Dr. Mamadou Diallo', specialite: 'Réseaux & Cybersécurité', dept: 'NTIC', initiales: 'MD', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
    { id: 2, nom: 'Prof. Fatoumata Bah', specialite: 'Développement Web', dept: 'DL', initiales: 'FB', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
    { id: 3, nom: 'M. Ibrahima Sow', specialite: 'Bases de données', dept: 'DL', initiales: 'IS', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
    { id: 4, nom: 'Mme. Aissatou Camara', specialite: 'Cloud Computing', dept: 'NTIC', initiales: 'AC', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
    { id: 5, nom: 'Dr. Oumar Barry', specialite: 'Génie Logiciel', dept: 'DL', initiales: 'OB', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
    { id: 6, nom: 'M. Sekou Kouyaté', specialite: 'Administration Système', dept: 'NTIC', initiales: 'SK', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80' },
    { id: 7, nom: 'Mme. Kadiatou Traoré', specialite: 'Programmation Java', dept: 'DL', initiales: 'KT', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
    { id: 8, nom: 'Dr. Alpha Baldé', specialite: 'Protocoles Réseau', dept: 'NTIC', initiales: 'AB', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
]

const couleursDept = {
    NTIC: { bg: 'var(--vert-pale)', txt: 'var(--vert)' },
    DL: { bg: 'var(--rouge-pale)', txt: 'var(--rouge)' },
}

export default function Enseignants() {
    const [filtre, setFiltre] = useState('Tous')
    const filtres = ['Tous', 'NTIC', 'DL']
    const liste = filtre === 'Tous' ? enseignants : enseignants.filter(e => e.dept === filtre)

    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', height: 320, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=1600&q=80"
                    alt="Enseignants"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,68,31,0.72)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                    <span className="badge" style={{ background: 'rgba(255,204,0,0.2)', color: '#ffcc00', marginBottom: '1rem', display: 'inline-block' }}>Équipe pédagogique</span>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>Nos enseignants</h1>
                    <p style={{ opacity: 0.85, maxWidth: 520 }}>Des professionnels et académiciens passionnés par la transmission du savoir numérique.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Filtres */}
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                        {filtres.map(f => (
                            <button key={f} onClick={() => setFiltre(f)} className="btn"
                                style={{
                                    background: filtre === f ? 'var(--vert)' : 'transparent',
                                    color: filtre === f ? '#fff' : 'var(--vert)',
                                    border: '1.5px solid var(--vert)',
                                    fontSize: '0.9rem', padding: '0.45rem 1.25rem'
                                }}>
                                {f} {f !== 'Tous' ? `(${enseignants.filter(e => e.dept === f).length})` : `(${enseignants.length})`}
                            </button>
                        ))}
                    </div>

                    <div className="grid-4">
                        {liste.map(e => {
                            const c = couleursDept[e.dept]
                            return (
                                <div key={e.id} className="card" style={{ textAlign: 'center', padding: 0, overflow: 'hidden' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={e.img}
                                            alt={e.nom}
                                            style={{ width: '100%', height: 180, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                                            onError={ev => { ev.target.style.display = 'none'; ev.target.nextSibling.style.display = 'flex' }}
                                        />
                                        <div style={{
                                            display: 'none', width: '100%', height: 180,
                                            background: c.txt === 'var(--vert)' ? 'var(--vert)' : 'var(--rouge)',
                                            color: '#fff', alignItems: 'center', justifyContent: 'center',
                                            fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700
                                        }}>{e.initiales}</div>
                                    </div>
                                    <div style={{ padding: '1rem' }}>
                                        <h3 style={{ fontSize: '0.95rem', marginBottom: '0.3rem' }}>{e.nom}</h3>
                                        <p style={{ color: 'var(--gris)', fontSize: '0.82rem', marginBottom: '0.75rem' }}>{e.specialite}</p>
                                        <span className="badge" style={{ background: c.bg, color: c.txt, fontSize: '0.75rem' }}>{e.dept}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Rejoindre l'équipe */}
            <section style={{ background: 'var(--vert-pale)', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Vous êtes enseignant ?</h2>
                    <p style={{ color: 'var(--gris)', marginBottom: '1.5rem', maxWidth: 480, margin: '0 auto 1.5rem' }}>
                        Le Centre Informatique recrute régulièrement des enseignants passionnés par les technologies.
                    </p>
                    <a href="/contact" className="btn btn-primary">Postuler →</a>
                </div>
            </section>
        </>
    )
}
