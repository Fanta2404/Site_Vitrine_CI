import { useState, useEffect } from 'react'
import api from '../api'
import { Landmark, BookOpen, Library, Tags, Mail } from 'lucide-react'

// Imports des images locales pour le fallback (Mock data)
import imgToure from '../assets/enseignants/Dr_Himi_Deen_Toure.jpeg'
import imgConde from '../assets/enseignants/Dr_Naby_conde.png'
import imgCamara from '../assets/enseignants/Dr_camara.jpeg'
import imgKalil from '../assets/enseignants/Dr_kalil_toure.png'
import imgKokouma from '../assets/enseignants/Dr_kokouma.png'
import imgKaba from '../assets/enseignants/Dr_moustapha_kaba.png'
import imgBarry from '../assets/enseignants/M_Barry.png'
import imgConte from '../assets/enseignants/M_conte.png'
import imgMansare from '../assets/enseignants/M_manssare.jpeg'

const filtres = ['Tous', 'DL', 'NTIC', 'DL/NTIC', 'Docteur', 'Direction']

const API_BASE = 'http://127.0.0.1:8001'

const mockEnseignants = [
    { id: 1, nom_prenom: 'Dr Mohamed Dinah BANGOURA', grade: 'Docteur', specialite: 'Statistique Appliquée', departement_nom: 'DL/NTIC', email: 'dinahmohamed89@gmail.com', couleur: '#0A66C2', photo: null, cours: 'Statistique Descriptive, Probabilités, Statistique Math.', bio: "Enseignant chercheur au Dpt de Mathématiques. Consultant indépendant et DG du Centre d'Analyse Economique et Opérationnelle (CAEO)." },
    { id: 2, nom_prenom: 'M. Bakary MANSARE', grade: 'Directeur de Programme', specialite: 'Génie Logiciel', departement_nom: 'DL', email: 'mansagui2013@gmail.com', couleur: '#084C94', photo: imgMansare, cours: 'Génie Logiciel, VB.NET, C++, Java/J2EE, IA', bio: "Directeur de Programme NTIC au Centre informatique. Enseignant chercheur depuis 2007. Impliqué dans la direction de nombreux projets de fin d'études technologiques." },
    { id: 3, nom_prenom: 'M. Mouctar BARRY', grade: 'Chef de Département', specialite: 'Analyse et Programmation', departement_nom: 'NTIC', email: 'moucto_barry@yahoo.fr', couleur: '#0A66C2', photo: imgBarry, cours: 'Algorithmique, Langage C, Base de Données', bio: "Chef de Département des Nouvelles Technologies. Professeur d'algorithmique et programmation. Ingénieur Informaticien expérimenté dans les bases de données et les réseaux." },
    { id: 4, nom_prenom: 'Dr Ousmane TOURE', grade: 'Docteur', specialite: 'Recherche Opérationnelle', departement_nom: 'DL/NTIC', email: 'ousmantour75@gmail.com', couleur: '#084C94', photo: null, cours: 'Statistiques, Recherche Opérat., Tech. Décisionnelles', bio: "Enseignant-Chercheur et Directeur Général Adjoint chargé des études au Centre d'Analyse Economique et Opérationnelle (CAEO)." },
    { id: 5, nom_prenom: 'Pr Binko Mamady TOURE', grade: 'Professeur Titulaire', specialite: 'Modélisation Mathématique', departement_nom: 'Direction', email: 'bmtoure@gmail.com', couleur: '#0A66C2', photo: null, cours: 'Informatique (Bases de Données et Programmation)', bio: "Professeur Titulaire des Universités, Membre de l'Académie des Sciences de Guinée. Ancien Secrétaire Général du MESRS. Une figure de proue dans la recherche et l'innovation." },
    { id: 6, nom_prenom: 'M. Damang Lancinè Saran', grade: 'Directeur de Programme', specialite: 'Informatique Industrielle', departement_nom: 'NTIC', email: 'damanglancine@gmail.com', couleur: '#084C94', photo: null, cours: 'Python, Java/J2EE, POO, Systèmes Temps Réel, VHDL', bio: "Expert en digitalisation et développement. Compétences approfondies en Big Data, Machine Learning, et programmation de systèmes embarqués." },
    { id: 7, nom_prenom: 'Dr Tchandikou Assimiou TCHEDRE', grade: 'Docteur', specialite: 'Développement Logiciel', departement_nom: 'DL', email: 'tchedrasse@gmail.com', couleur: '#0A66C2', photo: null, cours: 'Ingénierie Pédagogique Numérique', bio: "Directeur de Programme de Licence Informatique (DL). Expert en digitalisation de la formation, gouvernance SI et assurance qualité. Membre du Conseil Scientifique de l'UGANC." },
    { id: 8, nom_prenom: 'M. Mohamed CONTE', grade: 'DGA / Enseignant', specialite: 'Robotique et Réseaux', departement_nom: 'NTIC', email: 'mohamed.conte@uganc.edu.gn', couleur: '#084C94', photo: imgConte, cours: 'Logique Num., Archi. Ordinateurs, Réseaux, Sécurité', bio: "Directeur Général Adjoint. Docteur en réseaux informatiques sans fil. Formateur en maintenance du matériel, logiciel et des réseaux informatiques." },
    { id: 9, nom_prenom: 'M. KANTE Abdourahamane', grade: 'Ingénieur', specialite: 'Base de Données', departement_nom: 'DL', email: 'badomani92@gmail.com', couleur: '#0A66C2', photo: null, cours: 'Python, SQL Server, Pascal, C', bio: "Ingénieur développeur full stack et Analyste en Base de données. Expertise en méthodes agiles, développement web/mobile et gestion de projets SI complexes." },
    { id: 10, nom_prenom: 'Dr Naby Nouhou N. CONDE', grade: 'Docteur', specialite: 'Cybersécurité & Réseaux', departement_nom: 'NTIC', email: 'dr.nabyconde@gmail.com', couleur: '#084C94', photo: imgConde, cours: 'Cybersécurité, Réseaux, Intégration', bio: "Docteur en Technologie de l'Information. Compétent en stratégie de sécurité, réseaux de systèmes répartis et gestion de projets." },
    { id: 11, nom_prenom: 'Dr Amara CAMARA', grade: 'Docteur', specialite: 'Réseaux Sans Fil & Sécurité', departement_nom: 'NTIC', email: 'amaramacenta@gmail.com', couleur: '#0A66C2', photo: imgCamara, cours: 'Bases de Données, Sécurité Informatique', bio: "Directeur Général du RISTEL et expert en transformation numérique. Concepteur de la plateforme d'évaluation en ligne de l'ANAQ." },
    { id: 12, nom_prenom: 'Dr Himi Deen TOURE', grade: 'Docteur', specialite: 'NTIC & Gouvernance', departement_nom: 'Direction', email: 'himideen.toure@primature.gov.gn', couleur: '#084C94', photo: imgToure, cours: 'Télécommunications, Informatique, Réseaux', bio: "Conseiller du Premier Ministre en charge des Télécommunications et des Nouvelles Technologies. Expert dans le suivi des projets publics et la transformation digitale de l'État." },
    { id: 13, nom_prenom: 'Dr Ibrahima Kalil TOURE', grade: 'Docteur', specialite: 'Systèmes SI & Technologies', departement_nom: 'Direction', email: 'ibrahima.k.toure@ci.edu.gn', couleur: '#084C94', photo: imgKalil, cours: 'Administration Réseau Linux', bio: "Directeur Général du Centre Informatique de l'UGANC. Membre Correspondant à l'Académie des Sciences de Guinée. Ses recherches incluent l'IoT, et les SI." },
    { id: 14, nom_prenom: 'Dr Moustapha KABA', grade: 'Docteur', specialite: 'Base de Données', departement_nom: 'DL', email: 'moustoka@yahoo.fr', couleur: '#0A66C2', photo: imgKaba, cours: 'Base de Données, SI, CSI', bio: "Ingénieur Informaticien et Gestionnaire. Chef de département Formation et développement au Centre Informatique." },
    { id: 15, nom_prenom: 'Pr Mamadou Lamarana BAH', grade: 'Professeur Titulaire', specialite: 'Sciences des Matériaux', departement_nom: 'Direction', email: 'bamadou.lamar@gmail.com', couleur: '#0A66C2', photo: null, cours: 'Logique Num., Architecture Ordinateurs, Micropro.', bio: "Directeur Général du Centre Informatique. Docteur en Sciences des Matériaux avec félicitations du jury et Maître de conférences." },
    { id: 16, nom_prenom: 'M. TOURE Moussa', grade: 'Ingénieur', specialite: 'Réseaux & Logiciel', departement_nom: 'DL/NTIC', email: 'moussabinko@gmail.com', couleur: '#084C94', photo: null, cours: 'Java, Base de Données', bio: "Génie Informatique et Mastère en Administration des affaires. Fortes compétences en programmation Java, bases de données et administration réseau." },
    { id: 17, nom_prenom: 'M. Chérif Sidi Mohamed DIALLO', grade: 'Ingénieur', specialite: 'Dév. d\'Application & DevOps', departement_nom: 'DL', email: 'CherifSidiMohamed.DIALLO@orange-sonatel.com', couleur: '#0A66C2', photo: null, cours: 'Java, JavaScript, Python, PHP, DevOps', bio: "Ingénieur en développement full stack et DevOps avec de solides compétences en agilité, bases de données et framework modernes." },
    { id: 18, nom_prenom: 'M. DIALLO Amadou Oury', grade: 'Ingénieur', specialite: 'Informatique & Télécoms', departement_nom: 'DL/NTIC', email: 'madououry@yahoo.fr', couleur: '#084C94', photo: null, cours: 'Programmation, Base de Données, Modélisation', bio: "Ingénieur titulaire d'un Master en Informatique & Télécommunication. Expérimenté dans la conception SOA, J2EE et bases de données relationnelles." },
    { id: 19, nom_prenom: 'M. Mamadou Hamady BAH', grade: 'Ingénieur', specialite: 'Réseaux & Systèmes Info.', departement_nom: 'NTIC', email: 'iptechwosel2@gmail.com', couleur: '#0A66C2', photo: null, cours: 'Oracle SQL, Windows Server, CCNA', bio: "Ingénieur réseaux certifié (CCNA, MikroTik). Solides compétences en bases de données Oracle et virtualisation." },
    { id: 20, nom_prenom: 'M. Moussa CAMARA', grade: 'Ingénieur', specialite: 'Télécommunications & SI', departement_nom: 'NTIC', email: 'mouscal977@gmail.com', couleur: '#084C94', photo: null, cours: 'Télécommunications, Syst. Exploitation', bio: "Ingénieur en télécommunications. Consultant et ingénieur développeur de bases de données et systèmes d'information." },
    { id: 21, nom_prenom: 'Dr Ibrahima Sory Kokouma DIALLO', grade: 'Docteur', specialite: 'Intelligence Artificielle', departement_nom: 'NTIC', email: 'iskdiallo@ci.edu.gn', couleur: '#0A66C2', photo: imgKokouma, cours: "POO, C++, Système d'Exploitation", bio: "Directeur à la Recherche. Docteur en Intelligence Artificielle, enseignant chercheur." }
]




function CarteEnseignant({ e, onClick }) {
    const isLocal = typeof e.photo === 'string' && (e.photo.startsWith('/src/') || e.photo.startsWith('/assets/') || e.photo.startsWith('data:'));
    const imgSrc = e.photo ? (e.photo.startsWith('http') || isLocal ? e.photo : `${API_BASE}/media/${e.photo}`) : null
    const initiales = e.nom_prenom ? e.nom_prenom.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() : 'EN'
    const couleur = e.couleur || 'var(--bleu)'
    const coursArr = e.cours ? e.cours.split(',').map(c => c.trim()) : []

    return (
        <div
            onClick={() => onClick(e)}
            className="card"
            style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
        >
            {/* Photo */}
            <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: 'var(--gris-clair)' }}>
                {imgSrc ? (
                    <>
                        <img
                            src={imgSrc}
                            alt={e.nom_prenom}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.3s' }}
                            onMouseEnter={ev => ev.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={ev => ev.target.style.transform = 'scale(1)'}
                            onError={ev => { ev.target.style.display = 'none'; ev.target.nextSibling.style.display = 'flex' }}
                        />
                        <div style={{
                            display: 'none', position: 'absolute', inset: 0,
                            background: couleur, color: '#fff',
                            alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2.5rem'
                        }}>{initiales}</div>
                    </>
                ) : (
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: couleur, color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2.5rem'
                    }}>{initiales}</div>
                )}

                {/* Badge grade */}
                <div style={{
                    position: 'absolute', top: 10, left: 10,
                    background: e.grade === 'Docteur' ? 'rgba(14,74,145,0.9)' : 'rgba(122,26,46,0.9)',
                    color: '#fff', padding: '0.2rem 0.65rem',
                    borderRadius: 999, fontSize: '0.72rem', fontWeight: 600
                }}>{e.grade || 'Enseignant'}</div>
            </div>

            {/* Infos */}
            <div style={{ padding: '1.1rem', borderTop: `3px solid ${couleur}` }}>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', lineHeight: 1.3, color: 'var(--texte)' }}>{e.nom_prenom}</h3>
                <p style={{ color: couleur, fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.4 }}>{e.specialite}</p>

                {/* Cours */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.6rem' }}>
                    {coursArr.slice(0, 2).map(c => (
                        <span key={c} style={{ background: 'var(--bleu-pale)', color: 'var(--bleu-fonce)', padding: '0.15rem 0.5rem', borderRadius: 999, fontSize: '0.7rem', fontWeight: 500 }}>
                            {c}
                        </span>
                    ))}
                    {coursArr.length > 2 && (
                        <span style={{ background: 'var(--gris-clair)', color: 'var(--gris)', padding: '0.15rem 0.5rem', borderRadius: 999, fontSize: '0.7rem' }}>
                            +{coursArr.length - 2}
                        </span>
                    )}
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--gris)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Landmark size={14} /> {e.departement_nom || 'Centre Informatique'}
                </div>
            </div>
        </div>
    )
}

function Modal({ enseignant, onClose }) {
    if (!enseignant) return null
    const e = enseignant
    const isLocal = typeof e.photo === 'string' && (e.photo.startsWith('/src/') || e.photo.startsWith('/assets/') || e.photo.startsWith('data:'));
    const imgSrc = e.photo ? (e.photo.startsWith('http') || isLocal ? e.photo : `${API_BASE}/media/${e.photo}`) : null
    const coursArr = e.cours ? e.cours.split(',').map(c => c.trim()) : []
    const tagsArr = e.tags ? e.tags.split(',').map(t => t.trim()) : []

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
                onClick={ev => ev.stopPropagation()}
                style={{
                    background: '#fff', borderRadius: 16,
                    overflow: 'hidden', maxWidth: 600, width: '100%',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
                    maxHeight: '90vh', overflowY: 'auto'
                }}
            >
                <div style={{
                    display: 'grid', gridTemplateColumns: '180px 1fr',
                    background: `linear-gradient(135deg, var(--bleu-fonce), var(--bleu))`,
                    color: '#fff', minHeight: 180
                }}>
                    <div style={{ overflow: 'hidden' }}>
                        {imgSrc && <img src={imgSrc} alt={e.nom_prenom} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} onError={ev => { ev.target.style.display = 'none' }} />}
                    </div>
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span style={{ background: 'rgba(255,255,255,0.25)', color: '#DFF3FF', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.72rem', fontWeight: 600, display: 'inline-block', marginBottom: '0.5rem', width: 'fit-content' }}>
                            {e.grade}
                        </span>
                        <h2 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                            {e.nom_prenom}
                        </h2>
                        <p style={{ opacity: 0.85, fontSize: '0.82rem', lineHeight: 1.5 }}>{e.specialite}</p>
                    </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                    {e.email && <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Mail size={16} /> Contact
                        </div>
                        <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.8 }}><a href={`mailto:${e.email}`} style={{ color: 'var(--bleu)', textDecoration: 'none' }}>{e.email}</a></p>
                    </div>}

                    {e.bio && <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <BookOpen size={16} /> Biographie
                        </div>
                        <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.8 }}>{e.bio}</p>
                    </div>}

                    {coursArr.length > 0 && <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)', fontSize: '0.85rem', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Library size={16} /> Cours enseignes
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {coursArr.map(c => (
                                <span key={c} style={{ background: 'var(--bleu-pale)', color: 'var(--bleu-fonce)', padding: '0.3rem 0.8rem', borderRadius: 999, fontSize: '0.82rem', fontWeight: 500 }}>
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>}

                    {tagsArr.length > 0 && <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)', fontSize: '0.85rem', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Tags size={16} /> Domaines d'expertise
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {tagsArr.map(t => (
                                <span key={t} style={{ background: 'var(--gris-clair)', color: 'var(--texte)', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.78rem' }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>}

                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                        <button onClick={onClose} className="btn btn-outline" style={{ fontSize: '0.88rem' }}>
                            Fermer
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
    const [enseignantsAPI, setEnseignantsAPI] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get('api/enseignants/')
            .then(res => {
                if (res.data && res.data.length > 0) {
                    setEnseignantsAPI(res.data)
                } else {
                    setEnseignantsAPI(mockEnseignants)
                }
                setLoading(false)
            })
            .catch(err => {
                console.error("API Error", err)
                setEnseignantsAPI(mockEnseignants)
                setLoading(false)
            })
    }, [])

    const liste = enseignantsAPI.filter(e => {
        if (filtre === 'Tous') return true
        if (filtre === 'DL') return e.departement_nom === 'DL'
        if (filtre === 'NTIC') return e.departement_nom === 'NTIC'
        if (filtre === 'DL/NTIC') return e.departement_nom === 'DL/NTIC'
        if (filtre === 'Docteur') return e.grade && e.grade.toLowerCase().includes('docteur')
        if (filtre === 'Direction') {
            const spec = (e.specialite || '').toLowerCase();
            const grade = (e.grade || '').toLowerCase();
            const bio = (e.bio || '').toLowerCase();
            return e.departement_nom === 'Direction' || spec.includes('direction') || spec.includes('directeur') || grade.includes('directeur') || grade.includes('direction') || bio.includes('directeur');
        }
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
                    <span style={{ background: 'rgba(255,255,255,0.25)', color: '#DFF3FF', padding: '0.3rem 1rem', borderRadius: 999, fontSize: '0.82rem', fontWeight: 600, display: 'inline-block', marginBottom: '1rem' }}>
                        Équipe pédagogique
                    </span>
                    <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>
                        Nos enseignants
                    </h1>
                    <p style={{ opacity: 0.85, maxWidth: 560, fontSize: '1rem', lineHeight: 1.8 }}>
                        Des docteurs, ingénieurs et experts passionnés qui forment les ingénieurs du numérique de demain.
                    </p>

                    {/* Stats rapides */}
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        {[
                            { val: enseignantsAPI.filter(e => e.grade === 'Docteur').length, label: 'Docteurs' },
                            { val: enseignantsAPI.length, label: 'Enseignants au total' },
                            { val: new Set(enseignantsAPI.map(e => e.departement_nom).filter(Boolean)).size || 2, label: 'Départements' },
                        ].map(s => (
                            <div key={s.label}>
                                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#DFF3FF', fontFamily: 'Poppins, sans-serif' }}>{s.val}+</div>
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
                    {filtres.map(f => {
                        const count = f === 'Tous' ? enseignantsAPI.length :
                            f === 'DL' ? enseignantsAPI.filter(e => e.departement_nom === 'DL').length :
                                f === 'NTIC' ? enseignantsAPI.filter(e => e.departement_nom === 'NTIC').length :
                                    f === 'DL/NTIC' ? enseignantsAPI.filter(e => e.departement_nom === 'DL/NTIC').length :
                                        f === 'Docteur' ? enseignantsAPI.filter(e => e.grade && e.grade.toLowerCase().includes('docteur')).length :
                                            enseignantsAPI.filter(e => {
                                                const sp = (e.specialite || '').toLowerCase();
                                                const gr = (e.grade || '').toLowerCase();
                                                const bi = (e.bio || '').toLowerCase();
                                                return e.departement_nom === 'Direction' || sp.includes('direction') || sp.includes('directeur') || gr.includes('directeur') || gr.includes('direction') || bi.includes('directeur') || bi.includes('direction');
                                            }).length;

                        return (
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
                                {f} ({count})
                            </button>
                        )
                    })}
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
