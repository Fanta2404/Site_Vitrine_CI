import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
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
import bgUganc from '../assets/uganc_building.png';
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

const stats = [
    { val: '500+', label: 'Étudiants formés', icon: GraduationCap },
    { val: '20+', label: 'Enseignants experts', icon: Users },
    { val: '2', label: 'Filières spécialisées', icon: BookOpen },
    { val: '10+', label: 'Années d\'expérience', icon: Landmark },
]

const atouts = [
    { titre: 'Formation pratique', desc: 'Des TP et projets concrets dès la première année pour développer des compétences réelles.', icon: Wrench },
    { titre: 'Enseignants experts', desc: 'Des professionnels et académiciens passionnés, formés dans les meilleures universités.', icon: Users },
    { titre: 'Deux filières solides', desc: 'NTIC et Développement Logiciel pour des débouchés variés dans le numérique.', icon: Laptop },
    { titre: 'Réseau professionnel', desc: 'Partenariats avec des entreprises comme Orange, Huawei et MTN Guinée.', icon: Handshake },
]

const debouches = [
    { titre: 'Administrateur réseaux', icon: Network },
    { titre: 'Développeur fullstack', icon: Laptop },
    { titre: 'Ingénieur cybersécurité', icon: Lock },
    { titre: 'Chef de projet IT', icon: ClipboardList },
    { titre: 'Consultant informatique', icon: Target },
    { titre: 'Ingénieur cloud', icon: Cloud },
]

const actualites = [
    { titre: 'UGANC Championne d\'Afrique au ODC Champion', date: 'Avril 2026', cat: 'Événement', couleur: '#d4a017', icon: '🏆' },
    { titre: 'Séminaire Robotique — Experts ODC', date: 'Mars 2026', cat: 'Séminaire', couleur: '#1a6bc8', icon: '🤖' },
    { titre: 'Compétition Sportive Inter-Licence 2023', date: '2023', cat: 'Inter-Licence', couleur: '#006633', icon: '⚽' },
    { titre: 'Séminaire FinTech — Innovation Financière', date: 'Mars 2026', cat: 'Séminaire', couleur: '#856404', icon: '💳' },
]

const partenaires = [
    { nom: 'Orange Digital Center', img: logoOdc },
    { nom: 'Huawei', img: logoHuawei },
    { nom: 'MTN Guinée', img: logoMtn },
    { nom: 'SIMANDOU 2040', img: logoSimandou },
    { nom: 'ANSUTEN', img: logoAnsuten },
    { nom: 'Ministère ESRI', img: logoMesrsi },
    { nom: 'UGANC', img: logoUganc },
]

const temoignages = [
    { nom: 'Amadou Kouyaté', promo: 'NTIC 2024', texte: 'Le centre m\'a donné toutes les bases pour décrocher mon premier emploi en administration réseau.', initiales: 'AK' },
    { nom: 'Mariama Baldé', promo: 'DL 2023', texte: 'Les projets pratiques en développement web m\'ont permis de créer ma propre startup tech.', initiales: 'MB' },
    { nom: 'Ousmane Diallo', promo: 'NTIC 2025', texte: 'Une formation sérieuse avec des enseignants disponibles et passionnés.', initiales: 'OD' },
]

const galerieRapide = [
    { img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&q=80', titre: 'Salle informatique' },
    { img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80', titre: 'Travaux pratiques' },
    { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', titre: 'Conférence IA' },
]

const reseaux = [
    { nom: 'Facebook', icon: FacebookIcon, lien: '#' },
    { nom: 'LinkedIn', icon: LinkedinIcon, lien: '#' },
    { nom: 'YouTube', icon: YoutubeIcon, lien: '#' },
    { nom: 'Instagram', icon: InstagramIcon, lien: '#' },
]

export default function Accueil() {
    useScrollAnimation()

    return (
        <>
            {/* ── 1. HERO ── */}
            <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <img
                    src={bgUganc}
                    alt="Bâtiment UGANC Temple du Savoir"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(14,74,145,0.75) 0%, rgba(26,107,200,0.55) 100%)' }} />
                <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, background: 'rgba(212,160,23,0.08)', borderRadius: '50%' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '5rem 1.5rem' }}>
                    <span style={{ background: 'rgba(212,160,23,0.3)', color: '#f0c040', padding: '0.3rem 1rem', borderRadius: 999, fontSize: '0.82rem', fontWeight: 600, display: 'inline-block', marginBottom: '1.5rem', backdropFilter: 'blur(4px)' }}>
                        Université Gamal Abdel Nasser de Conakry
                    </span>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#fff', lineHeight: 1.2, maxWidth: 720, marginBottom: '1.25rem', textShadow: '0 4px 15px rgba(0,0,0,0.6)' }}>
                        Propulsez votre avenir<br />
                        <span style={{ color: '#f0c040' }}>numérique</span> avec nous
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.95)', maxWidth: 560, marginBottom: '2.5rem', lineHeight: 1.85, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        Le Centre Informatique de l'UGANC forme les ingénieurs et techniciens du numérique de demain.
                        Rejoignez nos filières <strong style={{ color: '#fff' }}>NTIC</strong> et <strong style={{ color: '#fff' }}>Développement Logiciel</strong>.
                    </p>
                    <div className="hero-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/departements" className="btn btn-gold" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>
                            Découvrir les formations →
                        </Link>
                        <Link to="/actualites" className="btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)', fontSize: '1rem', padding: '0.85rem 2rem' }}>
                            Voir les actualités
                        </Link>
                        <Link to="/contact" className="btn" style={{ background: 'transparent', color: '#f0c040', border: '1.5px solid rgba(212,160,23,0.5)', fontSize: '1rem', padding: '0.85rem 2rem' }}>
                            Contacter le centre
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── 2. STATS ── */}
            <section className="fade-in" style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '2.5rem 0' }}>
                <div className="container">
                    <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
                        {stats.map(s => (
                            <div key={s.label} style={{ padding: '1rem' }}>
                                <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center', color: 'var(--or)' }}><s.icon size={36} /></div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--bleu)', fontFamily: 'Playfair Display, serif' }}>{s.val}</div>
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
                                <Link to="/apropos" className="btn btn-primary">En savoir plus</Link>
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
                                <div style={{ flexShrink: 0, background: 'var(--vert-pale)', color: 'var(--vert)', padding: '0.6rem', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><a.icon size={28} /></div>
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
                                code: 'DL', couleur: 'var(--bordeaux)', bgCouleur: 'var(--bordeaux-pale)',
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
            <section className="section fade-in" style={{ background: 'var(--bleu-fonce)', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>
                        Nos débouchés professionnels
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '2.5rem' }}>
                        Qu'est-ce qu'on devient après la formation ?
                    </p>
                    <div className="grid-3">
                        {debouches.map(d => (
                            <div key={d.titre} style={{
                                background: 'rgba(255,255,255,0.1)', borderRadius: 12,
                                padding: '1.5rem', textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.15)',
                                transition: 'background 0.2s'
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            >
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem', color: '#f0c040' }}><d.icon size={40} /></div>
                                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff' }}>{d.titre}</div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <Link to="/departements" className="btn btn-gold">
                            Voir toutes les formations →
                        </Link>
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
                        {actualites.map(a => (
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
                        {galerieRapide.map(g => (
                            <div key={g.titre} style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', position: 'relative' }}>
                                <img src={g.img} alt={g.titre} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)',
                                    padding: '1rem', color: '#fff', fontWeight: 600, fontSize: '0.9rem'
                                }}>{g.titre}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 9. TÉMOIGNAGES ── */}
            <section className="section fade-in">
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Ce que disent nos diplômés</h2>
                    <p className="section-sub" style={{ textAlign: 'center' }}>Témoignages d'anciens étudiants</p>
                    <div className="grid-3">
                        {temoignages.map(t => (
                            <div key={t.nom} className="card">
                                <div style={{ color: 'var(--bleu)', fontSize: '2.5rem', lineHeight: 1, marginBottom: '0.75rem', fontFamily: 'Georgia, serif' }}>"</div>
                                <p style={{ color: 'var(--gris)', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.25rem', fontStyle: 'italic' }}>{t.texte}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--bleu)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>{t.initiales}</div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.nom}</div>
                                        <div style={{ color: 'var(--gris)', fontSize: '0.78rem' }}>Promo {t.promo}</div>
                                    </div>
                                </div>
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
                        {partenaires.map(p => (
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
                            <Link to="/contact" className="btn btn-primary">Envoyer un message →</Link>
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
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(14,74,145,0.65)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h2 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '0.75rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                        Rejoignez le Centre Informatique
                    </h2>
                    <p style={{ opacity: 0.85, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
                        Inscrivez-vous et construisez votre avenir dans le numérique avec nous dès la rentrée 2026.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                        <Link to="/contact" className="btn btn-gold" style={{ fontSize: '1rem' }}>
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
                                    background: 'rgba(255,255,255,0.12)',
                                    color: '#fff', borderRadius: 8,
                                    padding: '0.6rem 1.25rem',
                                    fontSize: '0.88rem', fontWeight: 500,
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    transition: 'background 0.2s', textDecoration: 'none'
                                }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
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
