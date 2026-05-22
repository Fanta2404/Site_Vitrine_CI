import { useState } from 'react'

const enseignants = [
    { nom: 'Dr. Alpha Oumar Diallo', titre: 'Directeur Général', dept: 'Direction', bio: 'Expert en Gouvernance des Systèmes d\'Information.', initiales: 'AD' },
    { nom: 'M. Thierno Barry', titre: 'Chef de Département NTIC', dept: 'NTIC', bio: 'Spécialiste en Cybersécurité et Réseaux Avancés.', initiales: 'TB' },
    { nom: 'Mme Fatoumata Camara', titre: 'Responsable Pédagogique DL', dept: 'DL', bio: 'Experte en Génie Logiciel et Méthodes Agiles.', initiales: 'FC' },
    { nom: 'M. Sékou Toure', titre: 'Enseignant Chercheur', dept: 'DL', bio: 'Spécialiste Intelligence Artificielle et Data.', initiales: 'ST' },
]

export default function Enseignants() {
    const [filtre, setFiltre] = useState('Tous')
    const depts = ['Tous', 'Direction', 'NTIC', 'DL']

    const filtered = filtre === 'Tous' ? enseignants : enseignants.filter(e => e.dept === filtre)

    return (
        <>
            <section style={{ height: 320, display: 'flex', alignItems: 'center', background: 'var(--bleu-fonce)' }}>
                <div className="container">
                    <span className="badge badge-blue" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Notre Faculté</span>
                    <h1 style={{ fontSize: '3.5rem', color: '#fff', marginTop: '1rem', fontWeight: 900 }}>Experts & Formateurs</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Filtres Tech style */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                        {depts.map(d => (
                            <button key={d} onClick={() => setFiltre(d)} className="btn" style={{
                                background: filtre === d ? 'var(--bleu-fonce)' : 'var(--bg-alt)',
                                color: filtre === d ? '#fff' : 'var(--text)',
                                padding: '0.6rem 1.5rem',
                                borderRadius: '12px'
                            }}>
                                {d === 'Tous' ? 'Tous les membres' : d}
                            </button>
                        ))}
                    </div>

                    <div className="grid-2">
                        {filtered.map(e => (
                            <div key={e.nom} className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{
                                    width: 80, height: 80, borderRadius: '20px',
                                    background: 'var(--bleu-pale)', color: 'var(--bleu-fonce)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.5rem', fontWeight: 800, flexShrink: 0
                                }}>
                                    {e.initiales}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.15rem' }}>{e.nom}</h3>
                                        <span className="badge badge-blue">{e.dept}</span>
                                    </div>
                                    <div style={{ fontWeight: 600, color: 'var(--bleu-clair)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{e.titre}</div>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>{e.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
