import { useState } from 'react'

const actualites = [
    { id: 1, titre: 'Journée portes ouvertes 2026', date: '15 mars 2026', categorie: 'Événement', resume: 'Le Centre Informatique organise sa journée portes ouvertes annuelle. Venez découvrir nos filières et rencontrer nos enseignants.' },
    { id: 2, titre: 'Atelier cybersécurité avec Orange Guinée', date: '02 mars 2026', categorie: 'Atelier', resume: 'Un atelier pratique sur la cybersécurité et la protection des données personnelles en partenariat avec Orange Guinée.' },
    { id: 3, titre: 'Résultats du concours de programmation', date: '20 février 2026', categorie: 'Résultats', resume: 'Félicitations aux lauréats du concours annuel de programmation organisé par le département DL.' },
    { id: 4, titre: 'Inscription licence 2026-2027 ouvertes', date: '10 février 2026', categorie: 'Inscription', resume: 'Les dossiers d\'inscription pour l\'année académique 2026-2027 sont désormais ouverts. Consultez les conditions d\'accès.' },
    { id: 5, titre: 'Conférence sur l\'IA en Afrique', date: '28 janvier 2026', categorie: 'Conférence', resume: 'Une conférence sur les opportunités de l\'Intelligence Artificielle pour le développement de l\'Afrique de l\'Ouest.' },
    { id: 6, titre: 'Remise de diplômes promotion 2025', date: '15 janvier 2026', categorie: 'Cérémonie', resume: 'La cérémonie de remise de diplômes de la promotion 2025 s\'est tenue en présence des autorités universitaires.' },
]

const couleursCat = {
    'Événement': { bg: 'var(--vert-pale)', txt: 'var(--vert)' },
    'Atelier': { bg: '#fff3cd', txt: '#856404' },
    'Résultats': { bg: '#d1ecf1', txt: '#0c5460' },
    'Inscription': { bg: 'var(--rouge-pale)', txt: 'var(--rouge)' },
    'Conférence': { bg: '#e2d9f3', txt: '#5a3a8a' },
    'Cérémonie': { bg: '#fce8d5', txt: '#8a3a0a' },
}

export default function Actualites() {
    const [page, setPage] = useState(1)
    const parPage = 4
    const total = Math.ceil(actualites.length / parPage)
    const affichees = actualites.slice((page - 1) * parPage, page * parPage)

    return (
        <>
            <section style={{ background: 'var(--vert-pale)', padding: '4rem 0 2rem' }}>
                <div className="container">
                    <span className="badge badge-vert" style={{ marginBottom: '1rem' }}>Actualités</span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>Actualités & Événements</h1>
                    <p style={{ color: 'var(--gris)', maxWidth: 520 }}>Restez informé des dernières nouvelles et événements du Centre Informatique.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gap: '1.25rem' }}>
                        {affichees.map(a => {
                            const c = couleursCat[a.categorie] || { bg: 'var(--gris-clair)', txt: 'var(--gris)' }
                            return (
                                <div key={a.id} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'start' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                                            <span className="badge" style={{ background: c.bg, color: c.txt }}>{a.categorie}</span>
                                            <span style={{ color: 'var(--gris)', fontSize: '0.82rem' }}>📅 {a.date}</span>
                                        </div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{a.titre}</h3>
                                        <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.7 }}>{a.resume}</p>
                                    </div>
                                    <button className="btn btn-outline" style={{ fontSize: '0.82rem', whiteSpace: 'nowrap' }}>Lire →</button>
                                </div>
                            )
                        })}
                    </div>

                    {/* Pagination */}
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '2.5rem' }}>
                        {Array.from({ length: total }, (_, i) => i + 1).map(p => (
                            <button key={p} onClick={() => setPage(p)} className="btn"
                                style={{
                                    width: 38, height: 38, padding: 0,
                                    background: p === page ? 'var(--vert)' : 'transparent',
                                    color: p === page ? '#fff' : 'var(--vert)',
                                    border: '1.5px solid var(--vert)',
                                    fontSize: '0.9rem'
                                }}>{p}</button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
