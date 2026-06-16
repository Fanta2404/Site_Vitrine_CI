import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import api from '../api'
import {
    GraduationCap, Users, BookOpen, Landmark, Wrench, Laptop, Handshake,
    Network, Lock, ClipboardList, Target, Cloud, Signal, Radio, Smartphone,
    MapPin, Mail, Phone, Clock,
} from 'lucide-react'

import logoMesrsi from '../assets/logo_MESRSI.png';
import logoUganc from '../assets/logos_uganc.png';
import logoSimandou from '../assets/partenaires/simandou.png';
import logoAnsuten from '../assets/partenaires/ansuten.png';
import logoOdc from '../assets/partenaires/odc.png';
import logoHuawei from '../assets/partenaires/houawei.png';
import logoMtn from '../assets/partenaires/MTN.png';
import bgUganc from '../assets/uganc_hd_hero.png';
import imgNtic from '../assets/NTIC.png';
import imgDl from '../assets/DL.png';
import imgGlobe from '../assets/network_globe.png';

// Custom SVG social icons (lucide-react doesn't include brand icons)
const FacebookIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
)
const LinkedinIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
)
const YoutubeIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
    </svg>
)
const InstagramIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
)

const iconMap = {
    GraduationCap, Users, BookOpen, Landmark, Wrench, Laptop, Handshake,
    Network, Lock, ClipboardList, Target, Cloud, Signal, Radio, Smartphone,
    MapPin, Mail, Phone, Clock
}

const temoignages = [
    { nom: 'Amadou Kouyaté', promo: 'NTIC 2024', texte: 'Le centre m\'a donné toutes les bases pour décrocher mon premier emploi en administration réseau.', initiales: 'AK' },
    { nom: 'Mariama Baldé', promo: 'DL 2023', texte: 'Les projets pratiques en développement web m\'ont permis de créer ma propre startup tech.', initiales: 'MB' },
    { nom: 'Ousmane Diallo', promo: 'NTIC 2025', texte: 'Une formation sérieuse avec des enseignants disponibles et passionnés.', initiales: 'OD' },
]

const debouchesStatic = [
    { titre: 'Administrateur réseaux', icon: Network },
    { titre: 'Développeur fullstack', icon: Laptop },
    { titre: 'Ingénieur cybersécurité', icon: Lock },
    { titre: 'Chef de projet IT', icon: ClipboardList },
    { titre: 'Consultant informatique', icon: Target },
    { titre: 'Ingénieur cloud', icon: Cloud },
]

const reseaux = [
    { nom: 'Facebook', icon: FacebookIcon, lien: '#' },
    { nom: 'LinkedIn', icon: LinkedinIcon, lien: '#' },
    { nom: 'YouTube', icon: YoutubeIcon, lien: '#' },
    { nom: 'Instagram', icon: InstagramIcon, lien: '#' },
]

const fallbackEnseignants = [
    { id: 'f1', nom_prenom: 'Dr Ibrahima Kalil TOURE', grade: 'Docteur', specialite: 'Directeur Général du Centre Informatique / Maître-Assistant (CAMES)', couleur: 'var(--bleu)', initiales: 'IT', photo: null },
    { id: 'f2', nom_prenom: 'Dr Mohamed Dinah BANGOURA', grade: 'Docteur', specialite: 'Enseignant Chercheur / Dir. Général Dpt. CAEO', couleur: '#0A66C2', initiales: 'MB', photo: null },
    { id: 'f3', nom_prenom: 'M. Bakary MANSARE', grade: 'Ingénieur', specialite: 'Directeur de Programme NTIC / Consultant Biométrie', couleur: '#1a6bc8', initiales: 'BM', photo: null },
    { id: 'f4', nom_prenom: 'Dr Amara CAMARA', grade: 'Docteur', specialite: 'Directeur Général du RISTEL / Expert Transformation Numérique', couleur: '#0e4a91', initiales: 'AC', photo: null }
];

const fallbackPartners = [
    { nom: 'Simandou', img: logoSimandou },
    { nom: 'Ansuten', img: logoAnsuten },
    { nom: 'Orange Digital Center', img: logoOdc },
    { nom: 'Huawei', img: logoHuawei },
    { nom: 'MTN', img: logoMtn }
];

const fallbackGals = [
    { titre: 'Campus', img: bgUganc },
    { titre: 'Laboratoire NTIC', img: imgNtic },
    { titre: 'Développement', img: imgDl }
];

const fallbackActus = [
    { titre: 'Soutenance de la promotion 2026', date: 'Juillet 2026', cat: 'Académique', couleur: '#0e4a91', icon: '🎓' },
    { titre: 'Lancement du nouveau laboratoire', date: 'Juin 2026', cat: 'Événement', couleur: '#0A66C2', icon: '🚀' },
    { titre: 'Partenariat stratégique et innovation', date: 'Mai 2026', cat: 'Réseau', couleur: '#1a6bc8', icon: '🤝' },
    { titre: 'Nouveau programme spécialisé', date: 'Avril 2026', cat: 'Formation', couleur: 'var(--bleu)', icon: '💻' }
];

const fallbackStats = [
    { val: '2+', label: 'Départements', icon: Landmark },
    { val: '20+', label: 'Enseignants-Chercheurs', icon: Users },
    { val: '100+', label: 'Projets réalisés', icon: Laptop },
    { val: '15+', label: 'Partenaires', icon: Handshake }
];

const fallbackAtouts = [
    { titre: 'Pédagogie par projet', desc: 'Des projets concrets pour vous préparer au monde de l\'entreprise.', icon: Laptop },
    { titre: 'Laboratoires connectés', desc: 'Des équipements de pointe pour les réseaux, IoT et développement.', icon: Wrench },
    { titre: 'Partenariats institutionnels', desc: 'Des entreprises partenaires qui interviennent dans votre cursus.', icon: Handshake },
    { titre: 'Corps professoral d\'élite', desc: 'Docteurs et ingénieurs passionnés par la transmission du savoir.', icon: GraduationCap }
];

export default function Accueil() {
    useScrollAnimation()

    const [actus, setActus] = useState(fallbackActus);
    const [gals, setGals] = useState(fallbackGals);
    const [stats, setStats] = useState(fallbackStats);
    const [atouts, setAtouts] = useState(fallbackAtouts);
    const [partners, setPartners] = useState(fallbackPartners);
    const [enseignantsAPI, setEnseignantsAPI] = useState(fallbackEnseignants);

    useEffect(() => {
        const API_BASE = 'http://127.0.0.1:8001';
        api.get('api/actualites/').then(res => {
            if (res.data && res.data.length > 0) setActus(res.data.slice(0, 4).map(a => ({
                titre: a.titre,
                date: new Date(a.date_publication).toLocaleDateString(),
                cat: a.cat || 'Actualité', couleur: a.couleur || '#084C94', icon: a.icon || '📰'
            })))
        }).catch(err => console.error(err))

        api.get('api/galerie/').then(res => {
            if (res.data && res.data.length > 0) setGals(res.data.slice(0, 3).map(g => ({
                img: g.image.startsWith('http') ? g.image : `${API_BASE}/media/${g.image}`,
                titre: g.titre || 'Galerie'
            })))
        }).catch(err => console.error(err))

        api.get('api/statistiques/').then(res => {
            if (res.data && res.data.length > 0) setStats(res.data.map(s => ({
                val: s.valeur, label: s.label, icon: iconMap[s.icon_name] || Lock
            })))
        }).catch(err => console.error(err))

        api.get('api/atouts/').then(res => {
            if (res.data && res.data.length > 0) setAtouts(res.data.map(a => ({
                titre: a.titre, desc: a.description, icon: iconMap[a.icon_name] || Lock
            })))
        }).catch(err => console.error(err))

        api.get('api/partenaires/').then(res => {
            if (res.data && res.data.length > 0) setPartners(res.data.map(p => ({
                nom: p.nom, img: p.logo.startsWith('http') ? p.logo : `${API_BASE}/media/${p.logo}`
            })))
        }).catch(err => console.error(err))

        api.get('api/enseignants/').then(res => {
            if (res.data && res.data.length > 0) {
                setEnseignantsAPI(res.data.slice(0, 4).map(e => ({
                    id: e.id, nom_prenom: e.nom_prenom, grade: e.grade, specialite: e.specialite,
                    photo: e.photo ? (e.photo.startsWith('http') || e.photo.startsWith('/src/') || e.photo.startsWith('data:') ? e.photo : `${API_BASE}/media/${e.photo}`) : null,
                    couleur: e.couleur || 'var(--bleu)',
                    initiales: e.nom_prenom ? e.nom_prenom.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() : 'EN'
                })))
            }
        }).catch(err => console.error(err))
    }, []);

    return (
        <>
            {/* ── 1. HERO ── */}
            <section style={{ position: 'relative', background: '#000' }}>
                <div style={{ height: '75vh', width: '100%', position: 'relative' }}>
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(10, 37, 64, 0.7), rgba(8, 76, 148, 0.85))',
                        zIndex: 1
                    }}></div>
                    <img
                        src={bgUganc}
                        alt="Centre Informatique UGANC"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: 0 }}
                    />

                    <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h1 style={{ color: '#ffffff', fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', textShadow: '0 4px 12px rgba(0,0,0,0.5)', fontFamily: 'Poppins, sans-serif' }}>L'Excellence Numérique au <br />Centre Informatique</h1>
                        <p style={{ color: '#ffffff', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: 1.6, textShadow: '0 2px 6px rgba(0,0,0,0.4)', opacity: 0.95 }}>
                            Rejoignez l'élite technologique de Guinée à l'Université Gamal Abdel Nasser de Conakry. Formez-vous aux réseaux, au génie logiciel, et à la cybersécurité.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/departements" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', backgroundColor: '#0A66C2', border: 'none', boxShadow: '0 8px 24px rgba(10, 102, 194, 0.4)' }}>Découvrir nos filières</Link>
                            <Link to="/enseignants" className="btn btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', color: '#fff', borderColor: '#fff' }}>Rencontrer l'équipe</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. STATS ── */}
            <section className="fade-in" style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '2.5rem 0' }}>
                <div className="container">
                    <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
                        {stats.map(s => (
                            <div key={s.label} style={{ padding: '1rem' }}>
                                <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center', color: 'var(--bleu)' }}><s.icon size={36} /></div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--bleu)', fontFamily: 'Poppins, sans-serif' }}>{s.val}</div>
                                <div style={{ fontSize: '0.82rem', color: 'var(--gris)', marginTop: '0.2rem' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. QUI SOMMES-NOUS ── */}
            <section className="section fade-in">
                <div className="container">
                    <div className="layout-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="badge badge-vert" style={{ marginBottom: '1rem', display: 'inline-block' }}>Qui sommes-nous ?</span>
                            <h2 className="section-title">Former les talents numériques de Guinée</h2>
                            <p style={{ color: 'var(--gris)', lineHeight: 1.85, marginBottom: '1rem' }}>
                                Le Centre Informatique de l'UGANC est une structure académique spécialisée dans les <strong>technologies numériques</strong>, la <strong>cybersécurité</strong>, les <strong>réseaux</strong> et le <strong>développement logiciel</strong>.
                            </p>
                            <p style={{ color: 'var(--gris)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                                Rattaché à l'Université Gamal Abdel Nasser de Conakry, le centre prépare les étudiants aux défis technologiques du monde professionnel moderne à travers deux filières complémentaires.
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <Link to="/apropos" className="btn btn-orange">En savoir plus</Link>
                                <Link to="/enseignants" className="btn btn-outline">Notre équipe →</Link>
                            </div>
                        </div>
                        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img
                                src={imgGlobe}
                                alt="Étudiants en informatique"
                                style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. POURQUOI NOUS CHOISIR ── */}
            <section className="section fade-in" style={{ background: 'var(--gris-clair)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Pourquoi choisir le Centre Informatique ?</h2>
                    <p className="section-sub" style={{ textAlign: 'center' }}>
                        Un environnement moderne favorisant l'innovation, la pratique et l'excellence académique
                    </p>
                    <div className="grid-2">
                        {atouts.map(a => (
                            <div key={a.titre} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ flexShrink: 0, background: 'var(--bleu-pale)', color: 'var(--bleu)', padding: '0.6rem', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><a.icon size={28} /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{a.titre}</h3>
                                    <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.7 }}>{a.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. FILIÈRES ── */}
            <section className="section fade-in">
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Nos filières</h2>
                    <p className="section-sub" style={{ textAlign: 'center' }}>Deux parcours complémentaires pour intégrer le monde du numérique</p>
                    <div className="grid-2">
                        {[
                            {
                                code: 'NTIC', couleur: 'var(--bleu)', bgCouleur: 'var(--bleu-pale)',
                                nom: 'Nouvelles Technologies de l\'Information',
                                desc: 'Réseaux, cybersécurité, systèmes, cloud computing et nouvelles technologies.',
                                img: imgNtic,
                                lien: '/departements/ntic',
                                matieres: ['Réseaux informatiques', 'Cybersécurité', 'Cloud computing', 'Administration système'],
                            },
                            {
                                code: 'DL', couleur: 'var(--bleu-clair)', bgCouleur: 'var(--bleu-pale)',
                                nom: 'Développement Logiciel',
                                desc: 'Programmation, génie logiciel, bases de données et développement d\'applications.',
                                img: imgDl,
                                lien: '/departements',
                                matieres: ['Algorithmique', 'Développement web', 'Bases de données', 'Mobile Android'],
                            }
                        ].map(d => (
                            <div key={d.code} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                                <img src={d.img} alt={d.code} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
                                <div style={{ padding: '1.5rem', borderTop: `4px solid ${d.couleur}` }}>
                                    <span className="badge" style={{ background: d.bgCouleur, color: d.couleur, marginBottom: '0.75rem', display: 'inline-block', fontWeight: 700 }}>{d.code}</span>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{d.nom}</h3>
                                    <p style={{ color: 'var(--gris)', fontSize: '0.9rem', marginBottom: '1rem' }}>{d.desc}</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                                        {d.matieres.map(m => <span key={m} className="badge" style={{ background: d.bgCouleur, color: d.couleur, fontSize: '0.75rem' }}>{m}</span>)}
                                    </div>
                                    <Link to={d.lien} className="btn btn-outline" style={{ fontSize: '0.88rem', color: d.couleur, borderColor: d.couleur }}>
                                        Voir la filière →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. DÉBOUCHÉS ── */}
            <section className="section fade-in" style={{ background: '#0A66C2', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>
                        Nos débouchés professionnels
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '2.5rem' }}>
                        Qu'est-ce qu'on devient après la formation ?
                    </p>
                    <div className="grid-3">
                        {debouchesStatic.map(d => (
                            <div key={d.titre} style={{
                                background: 'rgba(255,255,255,0.08)', borderRadius: 12,
                                padding: '1.5rem', textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.12)',
                                transition: 'background 0.2s'
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                            >
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem', color: '#DFF3FF' }}><d.icon size={40} /></div>
                                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff' }}>{d.titre}</div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <Link to="/departements" className="btn" style={{ background: '#fff', color: 'var(--bleu)', padding: '0.8rem 2rem', fontWeight: 600 }}>
                            Voir toutes les formations →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── 6.5 NOS ENSEIGNANTS ── */}
            <section className="section fade-in" style={{ background: '#f8f9fc' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 className="section-title" style={{ marginBottom: '0.25rem' }}>Nos enseignants</h2>
                            <p style={{ color: 'var(--gris)', fontSize: '0.95rem' }}>Des docteurs, ingénieurs et experts passionnés qui forment les ingénieurs du numérique de demain.</p>
                        </div>
                        <Link to="/enseignants" className="btn btn-outline" style={{ fontSize: '0.88rem' }}>Voir toute l'équipe →</Link>
                    </div>
                    <div className="grid-4">
                        {enseignantsAPI.map(e => (
                            <div key={e.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                                <div style={{ position: 'relative', height: 220, background: 'var(--gris-clair)' }}>
                                    {e.photo ? (
                                        <img src={e.photo} alt={e.nom_prenom} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                    ) : (
                                        <div style={{ position: 'absolute', inset: 0, background: e.couleur, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2.5rem' }}>
                                            {e.initiales}
                                        </div>
                                    )}
                                    <div style={{ position: 'absolute', top: 10, left: 10, background: e.grade === 'Docteur' ? 'rgba(14,74,145,0.9)' : 'rgba(122,26,46,0.9)', color: '#fff', padding: '0.2rem 0.65rem', borderRadius: 999, fontSize: '0.72rem', fontWeight: 600 }}>{e.grade || 'Enseignant'}</div>
                                </div>
                                <div style={{ padding: '1.1rem', borderTop: `3px solid ${e.couleur}` }}>
                                    <h3 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', lineHeight: 1.3, color: 'var(--texte)' }}>{e.nom_prenom}</h3>
                                    <p style={{ color: e.couleur, fontSize: '0.78rem', fontWeight: 600, marginBottom: '0', lineHeight: 1.4 }}>{e.specialite}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. ACTUALITÉS ── */}
            <section className="section fade-in">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 className="section-title" style={{ marginBottom: '0.25rem' }}>Actualités récentes</h2>
                            <p style={{ color: 'var(--gris)', fontSize: '0.95rem' }}>Les dernières nouvelles du Centre Informatique</p>
                        </div>
                        <Link to="/actualites" className="btn btn-outline" style={{ fontSize: '0.88rem' }}>Toutes les actualités →</Link>
                    </div>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {actus.map(a => (
                            <div key={a.titre} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', borderLeft: `4px solid ${a.couleur}` }}>
                                <div style={{ fontSize: '1.8rem', flexShrink: 0 }}>{a.icon}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 600, marginBottom: '0.2rem' }}>{a.titre}</div>
                                    <div style={{ color: 'var(--gris)', fontSize: '0.82rem' }}>{a.date}</div>
                                </div>
                                <span className="badge" style={{ background: a.couleur + '20', color: a.couleur, fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                                    {a.cat}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 8. GALERIE RAPIDE ── */}
            <section className="section fade-in" style={{ background: 'var(--gris-clair)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 className="section-title" style={{ marginBottom: '0.25rem' }}>Notre cadre de vie</h2>
                            <p style={{ color: 'var(--gris)', fontSize: '0.95rem' }}>Aperçu du Centre Informatique</p>
                        </div>
                        <Link to="/galerie" className="btn btn-outline" style={{ fontSize: '0.88rem' }}>Voir la galerie →</Link>
                    </div>
                    <div className="grid-3">
                        {gals.map(g => (
                            <div key={g.titre} style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', position: 'relative' }}>
                                <img src={g.img} alt={g.titre} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0,
                                    background: 'linear-gradient(to top, rgba(10,37,64,0.75), transparent)',
                                    padding: '1rem', color: '#fff', fontWeight: 600, fontSize: '0.9rem'
                                }}>{g.titre}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── 10. PARTENAIRES ── */}
            <section className="fade-in" style={{ background: 'var(--gris-clair)', padding: '3rem 0' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Nos partenaires</h2>
                    <p className="section-sub" style={{ textAlign: 'center' }}>Ils nous font confiance</p>
                    <div className="partenaires-flex" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
                        {partners.map(p => (
                            <div key={p.nom} style={{
                                background: '#fff', borderRadius: 12,
                                padding: '1rem 1.5rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: '1px solid var(--border)',
                                boxShadow: 'var(--shadow)',
                                height: 85, minWidth: 160
                            }}>
                                <img src={p.img} alt={p.nom} title={p.nom} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 11. CONTACT RAPIDE ── */}
            <section className="section fade-in">
                <div className="container">
                    <div className="layout-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="badge badge-vert" style={{ marginBottom: '1rem', display: 'inline-block' }}>Nous trouver</span>
                            <h2 className="section-title">Venez nous rendre visite</h2>
                            <p style={{ color: 'var(--gris)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                                Le Centre Informatique est situé au sein du campus de l'Université Gamal Abdel Nasser de Conakry.
                            </p>
                            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                                {[
                                    { icon: MapPin, txt: 'UGANC, Conakry, République de Guinée' },
                                    { icon: Mail, txt: 'centre-info@uganc.edu.gn' },
                                    { icon: Phone, txt: '+224 000 000 000' },
                                    { icon: Clock, txt: 'Lundi – Vendredi : 08h00 – 17h00' },
                                ].map(c => (
                                    <div key={c.txt} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--gris)', fontSize: '0.9rem' }}>
                                        <div style={{ color: 'var(--bleu)', display: 'flex' }}><c.icon size={20} /></div>
                                        {c.txt}
                                    </div>
                                ))}
                            </div>
                            <Link to="/contact" className="btn btn-orange">Envoyer un message →</Link>
                        </div>
                        {/* Carte Google Maps embed */}
                        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', height: 320 }}>
                            <iframe
                                title="Localisation UGANC"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.0!2d-13.6773!3d9.5370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd0b6b8b8b8b8%3A0x1!2sUniversit%C3%A9+Gamal+Abdel+Nasser+de+Conakry!5e0!3m2!1sfr!2sgn!4v1"
                                width="100%" height="100%"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 12. CTA FINAL + RÉSEAUX SOCIAUX ── */}
            <section className="fade-in" style={{ position: 'relative', overflow: 'hidden', padding: '5rem 0', color: '#fff' }}>
                <img
                    src={bgUganc}
                    alt="Campus"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h2 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', marginBottom: '0.75rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                        Rejoignez le Centre Informatique
                    </h2>
                    <p style={{ opacity: 0.85, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
                        Inscrivez-vous et construisez votre avenir dans le numérique avec nous dès la rentrée 2026.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                        <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--bleu)', fontSize: '1rem', fontWeight: 600 }}>
                            S'inscrire maintenant
                        </Link>
                        <Link to="/departements" className="btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)', fontSize: '1rem' }}>
                            Voir les formations
                        </Link>
                    </div>

                    {/* Réseaux sociaux */}
                    <div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '1rem' }}>Suivez-nous sur les réseaux</p>
                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {reseaux.map(r => (
                                <a key={r.nom} href={r.lien} style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    color: '#fff', borderRadius: 8,
                                    padding: '0.6rem 1.25rem',
                                    fontSize: '0.88rem', fontWeight: 500,
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    transition: 'background 0.2s', textDecoration: 'none'
                                }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(10,102,194,0.3)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                >
                                    <r.icon size={18} /> {r.nom}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
