import { useState } from 'react'

const photos = [
    { id: 1, titre: 'Salle informatique', cat: 'Infrastructure', img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&q=80' },
    { id: 2, titre: 'Atelier cybersécurité', cat: 'Événements', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80' },
    { id: 3, titre: 'Remise de diplômes', cat: 'Cérémonies', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80' },
    { id: 4, titre: 'TP Développement web', cat: 'Cours', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80' },
    { id: 5, titre: 'Conférence IA', cat: 'Événements', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80' },
    { id: 6, titre: 'Bibliothèque numérique', cat: 'Infrastructure', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80' },
    { id: 7, titre: 'Concours de programmation', cat: 'Événements', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80' },
    { id: 8, titre: 'Cours de réseaux', cat: 'Cours', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80' },
    { id: 9, titre: 'Journée portes ouvertes', cat: 'Événements', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80' },
    { id: 10, titre: 'Travaux pratiques', cat: 'Cours', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80' },
    { id: 11, titre: 'Amphi principal', cat: 'Infrastructure', img: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=600&q=80' },
    { id: 12, titre: 'Hackathon étudiant', cat: 'Événements', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
]

const categories = ['Tous', 'Infrastructure', 'Événements', 'Cours', 'Cérémonies']

export default function Galerie() {
    const [filtre, setFiltre] = useState('Tous')
    const [lightbox, setLightbox] = useState(null)
    const liste = filtre === 'Tous' ? photos : photos.filter(p => p.cat === filtre)

    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', height: 320, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
                    alt="Galerie"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,68,31,0.72)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                    <span className="badge" style={{ background: 'rgba(255,204,0,0.2)', color: '#ffcc00', marginBottom: '1rem', display: 'inline-block' }}>Galerie</span>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>Galerie photos</h1>
                    <p style={{ opacity: 0.85, maxWidth: 520 }}>Découvrez la vie du Centre Informatique à travers nos photos.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Filtres */}
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                        {categories.map(c => (
                            <button key={c} onClick={() => setFiltre(c)} className="btn"
                                style={{
                                    background: filtre === c ? 'var(--vert)' : 'transparent',
                                    color: filtre === c ? '#fff' : 'var(--vert)',
                                    border: '1.5px solid var(--vert)',
                                    fontSize: '0.88rem', padding: '0.4rem 1rem'
                                }}>{c}</button>
                        ))}
                    </div>

                    {/* Grille photos */}
                    <div className="grid-3">
                        {liste.map(p => (
                            <div key={p.id} onClick={() => setLightbox(p)}
                                style={{
                                    borderRadius: 'var(--radius)', overflow: 'hidden',
                                    cursor: 'pointer', border: '1px solid var(--border)',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    boxShadow: 'var(--shadow)'
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,51,0.18)' }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'var(--shadow)' }}>
                                <div style={{ position: 'relative', overflow: 'hidden' }}>
                                    <img src={p.img} alt={p.titre} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }} />
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        background: 'rgba(0,68,31,0)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'background 0.2s',
                                        fontSize: '2rem', color: '#fff', opacity: 0
                                    }} className="overlay">🔍</div>
                                </div>
                                <div style={{ padding: '0.85rem 1rem', background: '#fff' }}>
                                    <div style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.3rem' }}>{p.titre}</div>
                                    <span className="badge badge-vert" style={{ fontSize: '0.75rem' }}>{p.cat}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div
                    onClick={() => setLightbox(null)}
                    style={{
                        position: 'fixed', inset: 0,
                        background: 'rgba(0,0,0,0.92)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 9999, cursor: 'pointer', padding: '1.5rem'
                    }}>
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            background: '#fff', borderRadius: 'var(--radius)',
                            overflow: 'hidden', maxWidth: 700, width: '100%',
                            cursor: 'default', boxShadow: '0 32px 80px rgba(0,0,0,0.5)'
                        }}>
                        <img src={lightbox.img} alt={lightbox.titre} style={{ width: '100%', maxHeight: 450, objectFit: 'cover', display: 'block' }} />
                        <div style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{lightbox.titre}</div>
                                <span className="badge badge-vert" style={{ fontSize: '0.78rem' }}>{lightbox.cat}</span>
                            </div>
                            <button onClick={() => setLightbox(null)} className="btn btn-outline" style={{ fontSize: '0.85rem' }}>Fermer ✕</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
