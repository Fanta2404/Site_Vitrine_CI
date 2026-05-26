import { useState } from 'react'
import { Landmark, BookOpen, Library, Tags } from 'lucide-react'
import imgManssare from '../assets/enseignants/M_manssare.jpeg'
import imgKokouma from '../assets/enseignants/Dr_kokouma.png'
import imgKalil from '../assets/enseignants/Dr_kalil_toure.png'
import imgConte from '../assets/enseignants/M_conte.png'
import imgBarry from '../assets/enseignants/M_Barry.png'
import imgNaby from '../assets/enseignants/Dr_Naby_conde.png'
import imgKaba from '../assets/enseignants/Dr_moustapha_kaba.png'
import imgCamara from '../assets/enseignants/Dr_camara.jpeg'
import imgHimi from '../assets/enseignants/Dr_Himi_Deen_Toure.jpeg'

const enseignants = [
    {
        id: 1,
        nom: 'M. Bakary Mansaré',
        titre: 'Directeur de Programme',
        dept: 'NTIC & DLSI',
        grade: 'Monsieur',
        img: imgManssare,
        initiales: 'BM',
        cours: ['Génie Logiciel', 'Introduction à l\'IA'],
        bio: 'Directeur de programme au Centre Informatique de l\'UGANC. Spécialiste en génie logiciel et en intelligence artificielle.',
        tags: ['Génie Logiciel', 'Intelligence Artificielle', 'Direction'],
        couleur: 'var(--bleu)',
    },
    {
        id: 2,
        nom: 'Dr. Ibrahima Sory Kokouma Diallo',
        titre: 'Directeur à la Recherche',
        dept: 'NTIC & DLSI',
        grade: 'Docteur',
        img: imgKokouma,
        initiales: 'IK',
        cours: ['POO / C++', 'Systèmes d\'Exploitation'],
        bio: 'Docteur en Intelligence Artificielle. Enseignant chercheur et Directeur à la Recherche du Centre Informatique. Spécialiste en IA, POO et systèmes.',
        tags: ['Intelligence Artificielle', 'POO', 'C++', 'Systèmes d\'exploitation'],
        couleur: 'var(--bleu-fonce)',
    },
    {
        id: 3,
        nom: 'Dr. Ibrahima Kalil Touré',
        titre: 'Directeur Général du Centre Informatique',
        dept: 'NTIC',
        grade: 'Docteur',
        img: imgKalil,
        initiales: 'IK',
        cours: ['Administration Système sous Linux'],
        bio: 'Directeur Général du Centre Informatique de l\'UGANC. Enseignant chercheur spécialisé en administration système et réseaux sous Linux.',
        tags: ['Administration Linux', 'Réseaux', 'Direction Générale'],
        couleur: 'var(--bleu)',
    },
    {
        id: 4,
        nom: 'M. Mohamed Conté',
        titre: 'Directeur Général Adjoint',
        dept: 'NTIC & DLSI',
        grade: 'Monsieur',
        img: imgConte,
        initiales: 'MC',
        cours: ['Robotique', 'Systèmes embarqués'],
        bio: 'Directeur Général Adjoint du Centre Informatique. Enseignant chercheur spécialisé en robotique et systèmes embarqués.',
        tags: ['Robotique', 'Systèmes embarqués', 'Direction'],
        couleur: 'var(--bordeaux)',
    },
    {
        id: 5,
        nom: 'M. Mouctar Barry',
        titre: 'Directeur Adjoint — CNT · Chef de Programme',
        dept: 'NTIC & DLSI',
        grade: 'Monsieur',
        img: imgBarry,
        initiales: 'MB',
        cours: ['Programmation en Langage C'],
        bio: 'Directeur Adjoint du Système Informatique au CNT et Chef de Programme. Enseignant chercheur spécialisé en programmation C.',
        tags: ['Langage C', 'Algorithmique', 'Chef de Programme'],
        couleur: 'var(--bleu-clair)',
    },
    {
        id: 6,
        nom: 'Dr. Naby Nouhou Condé',
        titre: 'Expert IoT, Cloud & Cybersécurité',
        dept: 'NTIC & DLSI',
        grade: 'Docteur',
        img: imgNaby,
        initiales: 'NN',
        cours: ['IoT', 'Cloud Computing', 'Cybersécurité'],
        bio: 'Ingénieur en Systèmes d\'Information. Expert en Internet des Objets (IoT), Cloud Computing et Cybersécurité.',
        tags: ['IoT', 'Cloud Computing', 'Cybersécurité'],
        couleur: '#0c5460',
    },
    {
        id: 7,
        nom: 'Dr. Moustapha Kaba',
        titre: 'Chef de Département',
        dept: 'NTIC & DLSI',
        grade: 'Docteur',
        img: imgKaba,
        initiales: 'MK',
        cours: ['SGBD / Access', 'Conception des SI (ACSI)'],
        bio: 'Chef de Département au Centre Informatique. Enseignant spécialisé en systèmes de gestion de bases de données et conception des systèmes d\'information.',
        tags: ['SGBD', 'Access', 'Conception SI', 'Chef de Département'],
        couleur: 'var(--bleu)',
    },
    {
        id: 8,
        nom: 'Dr. Ibrahima Camara',
        titre: 'Enseignant Chercheur — Jury de Doctorat',
        dept: 'NTIC & DLSI',
        grade: 'Docteur',
        img: imgCamara,
        initiales: 'IC',
        cours: ['Algorithmique', 'Programmation'],
        bio: 'Ingénieur en Algorithmique et Programmation. Enseignant chercheur en Master, membre de jury et validateur de doctorats dans le domaine informatique.',
        tags: ['Algorithmique', 'Programmation', 'Recherche', 'Jury Doctorat'],
        couleur: 'var(--bleu-fonce)',
    },
    {
        id: 9,
        nom: 'Dr. Himi Deen Touré',
        titre: 'Conseiller Chargé du Numérique à la Primature',
        dept: 'NTIC',
        grade: 'Docteur',
        img: imgHimi,
        initiales: 'HD',
        cours: ['Réseaux Mobiles', 'Gouvernance IT', 'Entrepreneuriat'],
        bio: 'Ingénieur en Réseaux Mobiles. Conseiller chargé du numérique, de la transformation digitale et de l\'innovation à la Primature. Expert en entrepreneuriat et gouvernance IT.',
        tags: ['Réseaux Mobiles', 'Gouvernance IT', 'Transformation Digitale', 'Entrepreneuriat'],
        couleur: 'var(--bordeaux)',
    },
]

const autresEnseignants = [
    { nom: 'M. Mahamadou Diallo', specialite: 'Réseaux Informatiques', dept: 'NTIC', initiales: 'MD', couleur: 'var(--bleu)' },
    { nom: 'Dr. Amara Camara', specialite: 'Administration Réseaux Windows — Fondateur CRISC', dept: 'NTIC', initiales: 'AC', couleur: 'var(--bleu-fonce)' },
]

const filtres = ['Tous', 'Docteur', 'Monsieur', 'Direction']

function CarteEnseignant({ e, onClick }) {
    return (
        <div
            onClick={() => onClick(e)}
            className="card"
            style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
        >
            {/* Photo */}
            <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: 'var(--gris-clair)' }}>
                {e.img ? (
                    <>
                        <img
                            src={e.img}
                            alt={e.nom}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.3s' }}
                            onMouseEnter={ev => ev.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={ev => ev.target.style.transform = 'scale(1)'}
                            onError={ev => { ev.target.style.display = 'none'; ev.target.nextSibling.style.display = 'flex' }}
                        />
                        <div style={{
                            display: 'none', position: 'absolute', inset: 0,
                            background: e.couleur, color: '#fff',
                            alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.5rem'
                        }}>{e.initiales}</div>
                    </>
                ) : (
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: e.couleur, color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.5rem'
                    }}>{e.initiales}</div>
                )}

                {/* Badge grade */}
                <div style={{
                    position: 'absolute', top: 10, left: 10,
                    background: e.grade === 'Docteur' ? 'rgba(14,74,145,0.9)' : 'rgba(122,26,46,0.9)',
                    color: '#fff', padding: '0.2rem 0.65rem',
                    borderRadius: 999, fontSize: '0.72rem', fontWeight: 600
                }}>{e.grade}</div>
            </div>

            {/* Infos */}
            <div style={{ padding: '1.1rem', borderTop: `3px solid ${e.couleur}` }}>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', lineHeight: 1.3, color: 'var(--texte)' }}>{e.nom}</h3>
                <p style={{ color: e.couleur, fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.4 }}>{e.titre}</p>

                {/* Cours */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.6rem' }}>
                    {e.cours.slice(0, 2).map(c => (
                        <span key={c} style={{ background: 'var(--bleu-pale)', color: 'var(--bleu-fonce)', padding: '0.15rem 0.5rem', borderRadius: 999, fontSize: '0.7rem', fontWeight: 500 }}>
                            {c}
                        </span>
                    ))}
                    {e.cours.length > 2 && (
                        <span style={{ background: 'var(--gris-clair)', color: 'var(--gris)', padding: '0.15rem 0.5rem', borderRadius: 999, fontSize: '0.7rem' }}>
                            +{e.cours.length - 2}
                        </span>
                    )}
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--gris)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Landmark size={14} /> {e.dept}
                </div>
            </div>
        </div>
    )
}

function Modal({ enseignant, onClose }) {
    if (!enseignant) return null
    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.75)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 9999, padding: '1.5rem'
            }}
        >
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    background: '#fff', borderRadius: 16,
                    overflow: 'hidden', maxWidth: 600, width: '100%',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
                    maxHeight: '90vh', overflowY: 'auto'
                }}
            >
                {/* Header modal */}
                <div style={{
                    display: 'grid', gridTemplateColumns: '180px 1fr',
                    background: `linear-gradient(135deg, var(--bleu-fonce), var(--bleu))`,
                    color: '#fff', minHeight: 180
                }}>
                    <div style={{ overflow: 'hidden' }}>
                        <img
                            src={enseignant.img}
                            alt={enseignant.nom}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                            onError={ev => { ev.target.style.display = 'none' }}
                        />
                    </div>
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span style={{ background: 'rgba(212,160,23,0.25)', color: '#f0c040', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.72rem', fontWeight: 600, display: 'inline-block', marginBottom: '0.5rem', width: 'fit-content' }}>
                            {enseignant.grade}
                        </span>
                        <h2 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                            {enseignant.nom}
                        </h2>
                        <p style={{ opacity: 0.85, fontSize: '0.82rem', lineHeight: 1.5 }}>{enseignant.titre}</p>
                    </div>
                </div>

                {/* Corps modal */}
                <div style={{ padding: '1.5rem' }}>
                    <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <BookOpen size={16} /> Biographie
                        </div>
                        <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.8 }}>{enseignant.bio}</p>
                    </div>

                    <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)', fontSize: '0.85rem', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Library size={16} /> Cours enseignés
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {enseignant.cours.map(c => (
                                <span key={c} style={{ background: 'var(--bleu-pale)', color: 'var(--bleu-fonce)', padding: '0.3rem 0.8rem', borderRadius: 999, fontSize: '0.82rem', fontWeight: 500 }}>
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)', fontSize: '0.85rem', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Tags size={16} /> Domaines d'expertise
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {enseignant.tags.map(t => (
                                <span key={t} style={{ background: 'var(--gris-clair)', color: 'var(--texte)', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.78rem' }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                        <button
                            onClick={onClose}
                            className="btn btn-outline"
                            style={{ fontSize: '0.88rem' }}
                        >
                            Fermer ✕
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Enseignants() {
    const [filtre, setFiltre] = useState('Tous')
    const [selected, setSelected] = useState(null)

    const liste = enseignants.filter(e => {
        if (filtre === 'Tous') return true
        if (filtre === 'Docteur') return e.grade === 'Docteur'
        if (filtre === 'Monsieur') return e.grade === 'Monsieur'
        if (filtre === 'Direction') return e.titre.toLowerCase().includes('directeur') || e.titre.toLowerCase().includes('chef')
        return true
    })

    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', height: 320, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=1600&q=80"
                    alt="Enseignants"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(14,74,145,0.9), rgba(26,107,200,0.65))' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '3rem 1.5rem' }}>
                    <span style={{ background: 'rgba(212,160,23,0.22)', color: '#f0c040', padding: '0.3rem 1rem', borderRadius: 999, fontSize: '0.82rem', fontWeight: 600, display: 'inline-block', marginBottom: '1rem' }}>
                        Équipe pédagogique
                    </span>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>
                        Nos enseignants
                    </h1>
                    <p style={{ opacity: 0.85, maxWidth: 560, fontSize: '1rem', lineHeight: 1.8 }}>
                        Des docteurs, ingénieurs et experts passionnés qui forment les ingénieurs du numérique de demain.
                    </p>

                    {/* Stats rapides */}
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        {[
                            { val: enseignants.filter(e => e.grade === 'Docteur').length, label: 'Docteurs' },
                            { val: enseignants.length + autresEnseignants.length, label: 'Enseignants au total' },
                            { val: 2, label: 'Départements' },
                        ].map(s => (
                            <div key={s.label}>
                                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#f0c040', fontFamily: 'Playfair Display, serif' }}>{s.val}+</div>
                                <div style={{ fontSize: '0.78rem', opacity: 0.8 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filtres */}
            <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '1.25rem 0' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--gris)', fontSize: '0.85rem', fontWeight: 500 }}>Filtrer :</span>
                    {filtres.map(f => (
                        <button
                            key={f}
                            onClick={() => setFiltre(f)}
                            className="btn"
                            style={{
                                background: filtre === f ? 'var(--bleu)' : 'transparent',
                                color: filtre === f ? '#fff' : 'var(--bleu)',
                                border: '1.5px solid var(--bleu)',
                                fontSize: '0.85rem', padding: '0.4rem 1.1rem'
                            }}
                        >
                            {f} {f === 'Tous' ? `(${enseignants.length})` : f === 'Docteur' ? `(${enseignants.filter(e => e.grade === 'Docteur').length})` : f === 'Monsieur' ? `(${enseignants.filter(e => e.grade === 'Monsieur').length})` : `(${enseignants.filter(e => e.titre.toLowerCase().includes('directeur') || e.titre.toLowerCase().includes('chef')).length})`}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grille enseignants */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Corps enseignant</h2>
                    <p className="section-sub">Cliquez sur un enseignant pour voir son profil complet</p>

                    <div className="grid-4" style={{ marginBottom: '4rem' }}>
                        {liste.map(e => (
                            <CarteEnseignant key={e.id} e={e} onClick={setSelected} />
                        ))}
                    </div>

                    {/* Autres enseignants sans photo */}
                    <div style={{ borderTop: '2px solid var(--border)', paddingTop: '3rem' }}>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Autres membres de l'équipe</h2>
                        <p style={{ color: 'var(--gris)', marginBottom: '2rem', fontSize: '0.92rem' }}>
                            Enseignants contribuant à la formation au Centre Informatique
                        </p>
                        <div className="grid-2">
                            {autresEnseignants.map(e => (
                                <div key={e.nom} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                                        background: e.couleur, color: '#fff',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1rem'
                                    }}>{e.initiales}</div>
                                    <div>
                                        <div style={{ fontWeight: 600, marginBottom: '0.2rem' }}>{e.nom}</div>
                                        <div style={{ color: 'var(--gris)', fontSize: '0.82rem', marginBottom: '0.35rem' }}>{e.specialite}</div>
                                        <span style={{ background: 'var(--bleu-pale)', color: 'var(--bleu-fonce)', padding: '0.15rem 0.5rem', borderRadius: 999, fontSize: '0.72rem', fontWeight: 500 }}>
                                            {e.dept}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Rejoindre */}
            <section style={{ background: 'var(--bleu-pale)', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Vous êtes enseignant ou chercheur ?</h2>
                    <p style={{ color: 'var(--gris)', marginBottom: '1.5rem', maxWidth: 480, margin: '0 auto 1.5rem' }}>
                        Le Centre Informatique accueille des professionnels et académiciens passionnés par les technologies numériques.
                    </p>
                    <a href="/contact" className="btn btn-primary">Nous contacter →</a>
                </div>
            </section>

            {/* Modal profil */}
            <Modal enseignant={selected} onClose={() => setSelected(null)} />
        </>
    )
}
