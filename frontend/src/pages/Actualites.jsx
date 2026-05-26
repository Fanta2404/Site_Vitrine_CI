import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Calendar, MapPin, User, Camera,
    Trophy, Medal, GraduationCap, Clock, Search,
    Cpu, Radio, CreditCard, Database
} from 'lucide-react'

// ── IMPORTS DES IMAGES ──
import imgODC1 from '../assets/ODC Champion Afrique/FB_IMG_1779817568263.jpg'
import imgODC2 from '../assets/ODC Champion Afrique/FB_IMG_1779818338016.jpg'
import imgODC3 from '../assets/ODC Champion Afrique/FB_IMG_1779818346677.jpg'
import imgODC4 from '../assets/ODC Champion Afrique/FB_IMG_1779818863054.jpg'

import imgIoT1 from '../assets/Seminaire IoT/IMG-20260425-WA0011.jpg'
import imgIoT2 from '../assets/Seminaire IoT/IMG-20260425-WA0021.jpg'
import imgIoT3 from '../assets/Seminaire IoT/IMG-20260425-WA0023.jpg'
import imgIoT4 from '../assets/Seminaire IoT/IMG-20260425-WA0068.jpg'

import imgRobo1 from '../assets/Seminaire Robotique/IMG-20260418-WA0089.jpg'
import imgRobo2 from '../assets/Seminaire Robotique/IMG-20260418-WA0099.jpg'
import imgRobo3 from '../assets/Seminaire Robotique/IMG-20260418-WA0100.jpg'
import imgRobo4 from '../assets/Seminaire Robotique/IMG-20260418-WA0104.jpg'

import imgComp1 from '../assets/compétition sportive inter-licence/WhatsApp Image 2026-05-26 at 18.54.20.jpeg'
import imgComp2 from '../assets/compétition sportive inter-licence/WhatsApp Image 2026-05-26 at 18.54.20 (1).jpeg'
import imgComp3 from '../assets/compétition sportive inter-licence/WhatsApp Image 2026-05-26 at 18.54.20 (2).jpeg'
import imgComp4 from '../assets/compétition sportive inter-licence/WhatsApp Image 2026-05-26 at 18.54.21.jpeg'
import imgComp5 from '../assets/compétition sportive inter-licence/WhatsApp Image 2026-05-26 at 18.54.21 (1).jpeg'
import imgComp6 from '../assets/compétition sportive inter-licence/WhatsApp Image 2026-05-26 at 18.54.21 (2).jpeg'
import imgComp7 from '../assets/compétition sportive inter-licence/WhatsApp Image 2026-05-26 at 18.54.22.jpeg'

import imgUGANC from '../assets/uganc_building.png'

const actualites = [
    // ── ACTUALITÉ 1 : Compétition sportive inter-licence 2023 ──
    {
        id: 1,
        titre: 'Compétition Sportive Inter-Licence 2023',
        date: '2023',
        categorie: 'Inter-Licence',
        domaine: 'Compétition',
        img: imgComp1,
        galerie: [imgComp1, imgComp2, imgComp3, imgComp4, imgComp5, imgComp6, imgComp7],
        resume: 'Le Centre Informatique de l\'UGANC a organisé une grande compétition sportive inter-licence réunissant les étudiants des différentes promotions.',
        contenu: `En 2023, le Centre Informatique de l'Université Gamal Abdel Nasser de Conakry a organisé une grande compétition sportive inter-licence réunissant les étudiants des différentes promotions.

Cet événement avait pour objectif de :
• Renforcer la cohésion entre les étudiants
• Promouvoir l'esprit d'équipe
• Encourager les activités sportives et culturelles au sein du centre

Plusieurs disciplines sportives ont été organisées dans une ambiance conviviale et compétitive.

Cette initiative a permis de créer un moment de partage, de motivation et de solidarité entre les étudiants du Centre Informatique.`,
        lieu: 'Campus UGANC, Conakry',
        intervenant: 'Direction du Centre Informatique',
        couleur: '#006633',
    },

    // ── ACTUALITÉ 2 : Séminaires technologiques 2026 ──
    {
        id: 2,
        titre: 'Séminaire FinTech : Innovation Financière Numérique',
        date: 'Mars 2026',
        categorie: 'Séminaire',
        domaine: 'Fintech',
        img: imgUGANC,
        galerie: [], // Pas encore d'images
        resume: 'Formation intensive de 5 jours sur les technologies financières : Mobile Money, blockchain, inclusion financière numérique. Experts envoyés par ODC.',
        contenu: `Dans le cadre de la série de séminaires technologiques organisés en 2026, le Centre Informatique a accueilli une formation intensive de 5 jours dédiée à la FinTech.

Cette formation a été animée par des experts envoyés par le partenaire ODC (Orange Digital Center).

Au programme :
• Mobile Money : Orange Money, MTN MoMo et l'inclusion financière
• Blockchain et crypto-monnaies : opportunités et risques
• Développement d'applications fintech sécurisées
• Réglementation et cadre juridique en Guinée
• Opportunités entrepreneuriales dans la Fintech africaine

Ces activités ont permis aux étudiants de découvrir les nouvelles technologies, d'acquérir des compétences pratiques et d'échanger avec des experts internationaux.`,
        lieu: 'Amphithéâtre UGANC, Conakry',
        intervenant: 'Experts ODC (Orange Digital Center)',
        couleur: '#856404',
        nbImages: '2 à 4 images recommandées',
        typesImages: ['Experts invités', 'Salle de conférence', 'Étudiants en formation', 'Démonstrations techniques'],
    },
    {
        id: 3,
        titre: 'Séminaire Robotique : Technologies Autonomes',
        date: 'Mars 2026',
        categorie: 'Séminaire',
        domaine: 'Robotique',
        img: imgRobo1,
        galerie: [imgRobo1, imgRobo2, imgRobo3, imgRobo4],
        resume: 'Formation intensive de 5 jours sur la robotique industrielle et autonome, l\'IA embarquée et les applications pratiques. Experts envoyés par ODC.',
        contenu: `Suite au séminaire FinTech, le Centre Informatique a organisé une formation intensive de 5 jours consacrée à la Robotique.

Cette formation a été animée par des experts envoyés par le partenaire ODC (Orange Digital Center).

Au programme :
• Robots autonomes et intelligence artificielle embarquée
• Robotique collaborative et industrielle
• Applications pratiques de la robotique en Afrique
• Ateliers de conception et de programmation de robots

Les étudiants ont pu manipuler du matériel robotique et réaliser des projets pratiques encadrés par les experts internationaux.`,
        lieu: 'Centre Informatique UGANC, Conakry',
        intervenant: 'Experts ODC (Orange Digital Center)',
        couleur: '#1a6bc8',
    },
    {
        id: 4,
        titre: 'Séminaire IoT : Internet des Objets & Villes Intelligentes',
        date: 'Avril 2026',
        categorie: 'Séminaire',
        domaine: 'IoT',
        img: imgIoT1,
        galerie: [imgIoT1, imgIoT2, imgIoT3, imgIoT4],
        resume: 'Formation intensive de 5 jours sur l\'Internet des Objets : villes intelligentes, e-santé, agriculture connectée. Experts envoyés par ODC.',
        contenu: `Troisième volet de la série de séminaires technologiques 2026, cette formation intensive de 5 jours était consacrée à l'Internet des Objets (IoT).

Cette formation a été animée par des experts envoyés par le partenaire ODC (Orange Digital Center).

Au programme :
• Smart City : gestion intelligente de l'énergie, transport, sécurité urbaine
• E-santé : capteurs biomédicaux, télémédecine, monitoring à distance
• Agriculture connectée : irrigation intelligente, suivi des cultures
• Cas pratiques en Guinée et en Afrique de l'Ouest
• Programmation de capteurs et développement de solutions IoT

Les étudiants ont développé leur esprit d'innovation grâce à des ateliers pratiques intensifs.`,
        lieu: 'Centre Informatique UGANC, Conakry',
        intervenant: 'Experts ODC (Orange Digital Center)',
        couleur: '#0c5460',
    },
    {
        id: 5,
        titre: 'Séminaire Informatique Minière & Industrie 4.0',
        date: 'Avril 2026',
        categorie: 'Séminaire',
        domaine: 'Informatique Minière',
        img: imgUGANC,
        galerie: [], // Pas encore d'images
        resume: 'Formation intensive de 5 jours sur la digitalisation du secteur minier guinéen : données géologiques, drones, Big Data. Experts envoyés par ODC.',
        contenu: `Dernier volet de la série de séminaires technologiques 2026, cette formation intensive de 5 jours portait sur l'Informatique Minière.

Cette formation a été animée par des experts envoyés par le partenaire ODC (Orange Digital Center).

Au programme :
• Systèmes d'information géologique et minière
• Surveillance et monitoring des mines par IoT
• Drones et imagerie satellite pour l'exploration
• Sécurité informatique dans les infrastructures minières
• Big Data et analyse prédictive en géologie

La Guinée, riche en ressources minières, bénéficie de plus en plus des technologies numériques dans ce secteur stratégique. Ces séminaires témoignent de l'engagement du Centre Informatique dans la formation technologique de qualité.`,
        lieu: 'Centre Informatique UGANC, Conakry',
        intervenant: 'Experts ODC (Orange Digital Center)',
        couleur: '#5a3a1a',
        nbImages: '2 à 4 images recommandées',
        typesImages: ['Experts invités', 'Salle de conférence', 'Étudiants en formation', 'Démonstrations techniques'],
    },

    // ── ACTUALITÉ 3 : ODC Champion ──
    {
        id: 6,
        titre: 'UGANC Sacrée Championne d\'Afrique au ODC Champion',
        date: 'Avril 2026',
        categorie: 'Événement',
        domaine: 'Compétition',
        img: imgODC1,
        galerie: [imgODC1, imgODC2, imgODC3, imgODC4],
        resume: 'L\'équipe Team_1 UGANC a remporté le titre de championne d\'Afrique lors de la compétition Orange Digital Center Champion. Un moment historique pour la Guinée !',
        contenu: `L'équipe Team_1 UGANC de l'Université Gamal Abdel Nasser de Conakry a offert à la Guinée un moment historique en remportant le titre de championne d'Afrique lors de la compétition Orange Digital Center Champion (ODC Champion).

Cette victoire exceptionnelle représente une grande fierté pour :
• L'université
• Le Centre Informatique
• La Guinée entière

La compétition a réuni :
• 14 pays africains
• 357 équipes
• 1 354 participants

Lors de cette première édition de la Coupe Africaine des Nations de Coding, les étudiants ont affronté les meilleurs talents d'Afrique et du Moyen-Orient sur plusieurs épreuves :
• Algorithmique
• Innovation
• Résolution de problèmes
• Intelligence collective
• Programmation avancée

Grâce à leur talent, leur stratégie et leur esprit d'équipe, les étudiants de l'UGANC ont réussi à se démarquer dans cette compétition continentale organisée par le réseau ODC.

Cette victoire démontre :
• La qualité de la formation reçue à l'UGANC
• Le niveau des étudiants guinéens
• L'excellence scientifique et technologique du Centre Informatique

Dans une ambiance remplie de joie et d'émotion, les encadreurs ainsi que les autorités universitaires ont exprimé leur satisfaction et leur fierté à la suite de ce sacre continental.`,
        lieu: 'Compétition Continentale ODC',
        intervenant: 'Team_1 UGANC & Encadreurs',
        couleur: '#d4a017',
        nbImages: '5 à 8 images recommandées',
        typesImages: ['Équipe UGANC', 'Trophée', 'Compétition', 'Photo avec drapeau guinéen', 'Cérémonie', 'Coding challenge', 'Remise des prix'],
    },
]

const categories = ['Toutes', 'Séminaire', 'Inter-Licence', 'Événement']
const domaines = ['Tous', 'Robotique', 'IoT', 'Fintech', 'Informatique Minière', 'Compétition']

const couleursCat = {
    'Séminaire': { bg: '#e8f1fb', txt: '#1a6bc8', border: '#1a6bc8' },
    'Inter-Licence': { bg: '#e8f5ee', txt: '#006633', border: '#006633' },
    'Événement': { bg: '#fdf3d9', txt: '#856404', border: '#d4a017' },
}

const couleursDomaine = {
    'Robotique': { bg: '#e8f1fb', txt: '#1a6bc8' },
    'IoT': { bg: '#d1f2eb', txt: '#0c5460' },
    'Fintech': { bg: '#fdf3d9', txt: '#856404' },
    'Informatique Minière': { bg: '#f5f0e8', txt: '#5a3a1a' },
    'Compétition': { bg: '#f9eaed', txt: '#7a1a2e' },
}

function CarteActualite({ a, onClick }) {
    const c = couleursCat[a.categorie] || couleursCat['Événement']
    const d = couleursDomaine[a.domaine] || couleursDomaine['Compétition']
    return (
        <div className="actu-card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => onClick(a)}>
            <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                <img className="actu-img" src={a.img} alt={a.titre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: '0.5rem' }}>
                    <span style={{ background: c.border, color: '#fff', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 600, boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}>
                        {a.categorie}
                    </span>
                    {a.domaine && (
                        <span style={{ background: 'rgba(255,255,255,0.95)', color: d.txt, padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 600, boxShadow: '0 4px 10px rgba(0,0,0,0.1)', backdropFilter: 'blur(4px)' }}>
                            {a.domaine}
                        </span>
                    )}
                </div>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: '1.5rem', right: '1.5rem', height: '3px', background: a.couleur, borderRadius: '0 0 4px 4px' }} />
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}><Calendar size={14} /> {a.date}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', lineHeight: 1.4, color: '#1e293b', fontWeight: 700 }}>{a.titre}</h3>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                    {a.resume.substring(0, 110)}...
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}><MapPin size={14} /> {a.lieu.split(',')[0]}</span>
                    <span style={{ color: 'var(--bleu)', fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>Lire <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>→</span></span>
                </div>
            </div>
        </div>
    )
}

function Modal({ actu, onClose }) {
    if (!actu) return null
    const c = couleursCat[actu.categorie] || couleursCat['Événement']
    return (
        <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '1.5rem' }}>
            <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', maxWidth: 680, width: '100%', boxShadow: '0 32px 80px rgba(0,0,0,0.4)', maxHeight: '90vh', overflowY: 'auto' }}>
                <img src={actu.img} alt={actu.titre} style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ background: c.border, color: '#fff', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.78rem', fontWeight: 600 }}>{actu.categorie}</span>
                        <span style={{ background: 'var(--bleu-pale)', color: 'var(--bleu-fonce)', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.78rem' }}>{actu.domaine}</span>
                        <span style={{ color: 'var(--gris)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={14} /> {actu.date}</span>
                    </div>

                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: 1.3 }}>{actu.titre}</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem', background: 'var(--gris-clair)', borderRadius: 10, padding: '1rem' }}>
                        <div>
                            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--bleu)', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={12} /> Lieu</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--texte)' }}>{actu.lieu}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--bleu)', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={12} /> Intervenant</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--texte)' }}>{actu.intervenant}</div>
                        </div>
                    </div>

                    <div style={{ color: 'var(--gris)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
                        {actu.contenu}
                    </div>

                    {/* Galerie photo pour les événements qui ont des images réelles */}
                    {actu.galerie && actu.galerie.length > 0 && (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--bleu)', marginBottom: '0.75rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Camera size={16} /> Galerie Photos
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                                {actu.galerie.map((img, i) => (
                                    <div key={i} style={{ borderRadius: 8, overflow: 'hidden', height: 100 }}>
                                        <img src={img} alt={`Galerie ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', cursor: 'pointer', transition: 'transform 0.2s' }}
                                            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                                            onClick={() => window.open(img, '_blank')} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Section images recommandées (restant à ajouter) */}
                    {actu.typesImages && (
                        <div style={{ background: 'var(--bleu-pale)', borderRadius: 10, padding: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--bleu-fonce)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Camera size={14} /> Images à ajouter ({actu.nbImages})
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                {actu.typesImages.map(t => (
                                    <span key={t} style={{ background: '#fff', color: 'var(--bleu)', padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.75rem', border: '1px solid var(--border)' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                        <button onClick={onClose} className="btn btn-outline" style={{ fontSize: '0.88rem' }}>Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Actualites() {
    const [cat, setCat] = useState('Toutes')
    const [domaine, setDomaine] = useState('Tous')
    const [page, setPage] = useState(1)
    const [selected, setSelected] = useState(null)
    const parPage = 6

    const filtrees = actualites.filter(a => {
        const okCat = cat === 'Toutes' || a.categorie === cat
        const okDom = domaine === 'Tous' || a.domaine === domaine
        return okCat && okDom
    })

    const total = Math.ceil(filtrees.length / parPage)
    const affichees = filtrees.slice((page - 1) * parPage, page * parPage)

    const customStyles = `
        .actu-card {
            border-radius: 16px;
            background: #fff;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid #f1f5f9;
        }
        .actu-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            border-color: #e2e8f0;
        }
        .actu-card:hover .actu-img {
            transform: scale(1.05);
        }
        .actu-badge-hero {
            background: rgba(255, 255, 255, 0.15);
            color: #fff;
            padding: 0.4rem 1.25rem;
            border-radius: 999px;
            font-size: 0.85rem;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1.25rem;
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        .actu-btn-filter {
            border-radius: 999px !important;
            transition: all 0.2s ease !important;
        }
        .actu-btn-filter:hover {
            transform: scale(1.03);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
    `;

    return (
        <>
            <style>{customStyles}</style>
            {/* Hero */}
            <section style={{ position: 'relative', height: 360, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" alt="Actualités"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(14,74,145,0.92), rgba(0,195,163,0.7))' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '3rem 1.5rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <span className="actu-badge-hero">
                            <Radio size={16} /> Vie du centre & Actualités
                        </span>
                    </div>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', marginBottom: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                        Actualités & Événements
                    </h1>
                    <p style={{ opacity: 0.9, maxWidth: 680, fontSize: '1.1rem', lineHeight: 1.8, margin: '0 auto' }}>
                        Découvrez les dernières avancées, séminaires technologiques, compétitions inter-licences et conférences marquantes du Centre Informatique UGANC.
                    </p>
                </div>
            </section>

            {/* Filtres */}
            <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '1.25rem 0' }}>
                <div className="container">
                    {/* Catégories */}
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem', alignItems: 'center' }}>
                        <span style={{ color: 'var(--gris)', fontSize: '0.82rem', fontWeight: 600 }}>Catégorie :</span>
                        {categories.map(c => (
                            <button key={c} onClick={() => { setCat(c); setPage(1) }} className="btn actu-btn-filter"
                                style={{ background: cat === c ? 'var(--bleu)' : 'transparent', color: cat === c ? '#fff' : 'var(--bleu)', border: '1.5px solid var(--bleu)', fontSize: '0.82rem', padding: '0.35rem 0.9rem' }}>
                                {c}
                            </button>
                        ))}
                    </div>
                    {/* Domaines */}
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        <span style={{ color: 'var(--gris)', fontSize: '0.82rem', fontWeight: 600 }}>Domaine :</span>
                        {domaines.map(d => (
                            <button key={d} onClick={() => { setDomaine(d); setPage(1) }} className="btn actu-btn-filter"
                                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: domaine === d ? 'var(--bleu-fonce)' : 'transparent', color: domaine === d ? '#fff' : 'var(--gris)', border: '1.5px solid var(--border)', fontSize: '0.78rem', padding: '0.3rem 0.8rem' }}>
                                {d === 'Robotique' && <Cpu size={14} />}
                                {d === 'IoT' && <Radio size={14} />}
                                {d === 'Fintech' && <CreditCard size={14} />}
                                {d === 'Informatique Minière' && <Database size={14} />}
                                {d === 'Compétition' && <Trophy size={14} />}
                                <span>{d}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Séminaires en vedette */}
            {cat === 'Toutes' && domaine === 'Tous' && page === 1 && (
                <section style={{ background: 'var(--bleu-fonce)', color: '#fff', padding: '3rem 0' }}>
                    <div className="container">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h2 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <GraduationCap size={24} /> Séminaires Technologiques 2026
                                </h2>
                                <p style={{ opacity: 0.75, fontSize: '0.88rem' }}>Formations intensives de 5 jours chacune · Experts envoyés par ODC</p>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                            {[
                                { domaine: 'Fintech', icon: <CreditCard size={32} />, desc: 'Mobile Money, Blockchain, inclusion financière', couleur: '#b8860b', duree: '5 jours' },
                                { domaine: 'Robotique', icon: <Cpu size={32} />, desc: 'Robots autonomes, IA embarquée, applications industrielles', couleur: '#2272c3', duree: '5 jours' },
                                { domaine: 'IoT', icon: <Radio size={32} />, desc: 'Villes intelligentes, e-santé, agriculture connectée', couleur: '#0c7a6a', duree: '5 jours' },
                                { domaine: 'Info. Minière', icon: <Database size={32} />, desc: 'Digitalisation des mines, IoT industriel, Big Data', couleur: '#7a5a1a', duree: '5 jours' },
                            ].map(s => (
                                <div key={s.domaine}
                                    style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '1.25rem', cursor: 'pointer', border: '2px solid rgba(255,255,255,0.15)', transition: 'all 0.2s', borderTop: `3px solid ${s.couleur}` }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                >
                                    <div style={{ color: '#fff', marginBottom: '0.6rem' }}>{s.icon}</div>
                                    <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{s.domaine}</div>
                                    <div style={{ fontSize: '0.72rem', opacity: 0.65, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Clock size={12} /> {s.duree}
                                    </div>
                                    <div style={{ fontSize: '0.82rem', opacity: 0.78, lineHeight: 1.6 }}>{s.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ODC Champion - Highlight */}
            {cat === 'Toutes' && domaine === 'Tous' && page === 1 && (
                <section style={{ background: 'linear-gradient(135deg, #d4a017 0%, #b8860b 100%)', color: '#fff', padding: '3rem 0' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}
                            className="layout-2col">
                            <div>
                                <span style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '0.4rem 1rem', borderRadius: 999, fontSize: '0.8rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Trophy size={16} /> Moment historique
                                </span>
                                <h2 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                                    UGANC Championne d'Afrique au ODC Champion !
                                </h2>
                                <p style={{ opacity: 0.9, fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    L'équipe Team_1 UGANC a remporté la première édition de la Coupe Africaine des Nations de Coding face à 357 équipes venues de 14 pays.
                                </p>
                                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                                    {[
                                        { val: '14', label: 'Pays' },
                                        { val: '357', label: 'Équipes' },
                                        { val: '1354', label: 'Participants' },
                                        { val: '1ère', label: 'Place !' },
                                    ].map(s => (
                                        <div key={s.label} style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Playfair Display, serif' }}>{s.val}</div>
                                            <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={() => setSelected(actualites.find(a => a.id === 6))} className="btn" style={{ background: '#fff', color: '#d4a017', fontWeight: 700, fontSize: '0.9rem' }}>
                                    Lire l'article complet →
                                </button>
                            </div>
                            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                                <img src={imgODC1} alt="ODC Champion" style={{ width: '100%', height: 300, objectFit: 'cover', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Inter-Licence en vedette */}
            {cat === 'Toutes' && domaine === 'Tous' && page === 1 && (
                <section style={{ background: 'var(--bleu-pale)', padding: '2.5rem 0' }}>
                    <div className="container">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                            <div style={{ background: '#006633', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: 8, fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Trophy size={18} /> Inter-Licence
                            </div>
                            <p style={{ color: 'var(--gris)', fontSize: '0.9rem' }}>Compétitions sportives entre les promotions du Centre Informatique</p>
                        </div>
                        <div className="card" onClick={() => setSelected(actualites.find(a => a.id === 1))} style={{ cursor: 'pointer', display: 'flex', gap: '1.25rem', alignItems: 'center', borderLeft: '4px solid #006633' }}>
                            <div style={{ color: '#006633', flexShrink: 0 }}><Medal size={36} /></div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.25rem' }}>Compétition Sportive Inter-Licence 2023</div>
                                <div style={{ color: 'var(--gris)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                                    Grande compétition sportive réunissant les étudiants des différentes promotions pour renforcer la cohésion et l'esprit d'équipe.
                                </div>
                            </div>
                            <span style={{ color: 'var(--bleu)', fontSize: '0.82rem', fontWeight: 600, whiteSpace: 'nowrap' }}>Voir détails →</span>
                        </div>
                    </div>
                </section>
            )}

            {/* Grille actualités */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 className="section-title" style={{ marginBottom: '0.25rem' }}>
                                {cat === 'Toutes' ? 'Toutes les actualités' : cat}
                                {domaine !== 'Tous' ? ` — ${domaine}` : ''}
                            </h2>
                            <p style={{ color: 'var(--gris)', fontSize: '0.85rem' }}>{filtrees.length} résultat{filtrees.length > 1 ? 's' : ''}</p>
                        </div>
                        {(cat !== 'Toutes' || domaine !== 'Tous') && (
                            <button onClick={() => { setCat('Toutes'); setDomaine('Tous'); setPage(1) }} className="btn btn-outline" style={{ fontSize: '0.82rem' }}>
                                Réinitialiser les filtres ✕
                            </button>
                        )}
                    </div>

                    {affichees.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--gris)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                            <p>Aucune actualité trouvée pour cette sélection.</p>
                        </div>
                    ) : (
                        <div className="grid-3">
                            {affichees.map(a => <CarteActualite key={a.id} a={a} onClick={setSelected} />)}
                        </div>
                    )}

                    {/* Pagination */}
                    {total > 1 && (
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '3rem' }}>
                            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                                className="btn btn-outline" style={{ fontSize: '0.88rem', opacity: page === 1 ? 0.4 : 1 }}>← Précédent</button>
                            {Array.from({ length: total }, (_, i) => i + 1).map(p => (
                                <button key={p} onClick={() => setPage(p)} className="btn"
                                    style={{ width: 38, height: 38, padding: 0, background: p === page ? 'var(--bleu)' : 'transparent', color: p === page ? '#fff' : 'var(--bleu)', border: '1.5px solid var(--bleu)', fontSize: '0.9rem' }}>
                                    {p}
                                </button>
                            ))}
                            <button onClick={() => setPage(p => Math.min(total, p + 1))} disabled={page === total}
                                className="btn btn-outline" style={{ fontSize: '0.88rem', opacity: page === total ? 0.4 : 1 }}>Suivant →</button>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal détail */}
            <Modal actu={selected} onClose={() => setSelected(null)} />
        </>
    )
}
