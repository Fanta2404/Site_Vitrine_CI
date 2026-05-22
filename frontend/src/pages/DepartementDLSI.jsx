import { useState } from 'react'
import { Link } from 'react-router-dom'

const debouches = [
    { titre: 'Développeur fullstack sécurisé', icon: '💻' },
    { titre: 'Ingénieur cybersécurité', icon: '🔐' },
    { titre: 'Analyste en vulnérabilités', icon: '🔍' },
    { titre: 'Administrateur bases de données', icon: '🗄️' },
    { titre: 'Développeur mobile sécurisé', icon: '📱' },
    { titre: 'Ingénieur DevSecOps', icon: '⚙️' },
    { titre: 'Consultant en sécurité SI', icon: '🎯' },
    { titre: 'Chef de projet IT sécurisé', icon: '📋' },
    { titre: 'Auditeur en sécurité informatique', icon: '📊' },
    { titre: 'Créateur de startup tech', icon: '🚀' },
]

const structureGenerale = [
    { champ: 'A', nom: 'Formation académique', credits: 75 },
    { champ: 'B', nom: 'Formation professionnelle', credits: 60 },
    { champ: 'C', nom: 'Initiation à la Recherche', credits: 30 },
    { champ: 'D', nom: 'Outils de communication', credits: 15 },
]

const semestres = [
    {
        niveau: 'Licence 1',
        semestres: [
            {
                num: 'Semestre 1', credits: 30,
                ues: [
                    {
                        code: 'DLSI1101', titre: 'Informatique de base', credits: 6,
                        cours: [
                            { code: '01-DLSI-1101', titre: 'Compétences numériques', credits: 3, cm: 0, td: 10, tp: 40 },
                            { code: '02-DLSI-1101', titre: 'Fondements de la Sécurité Informatique', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1102', titre: 'Mathématiques 1', credits: 6,
                        cours: [
                            { code: '01-DLSI-1102', titre: 'Algèbre et Logique Mathématique pour la Sécurité', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '02-DLSI-1204', titre: 'Analyse Numérique Appliquée à la Sécurité', credits: 3, cm: 30, td: 15, tp: 0 },
                        ]
                    },
                    {
                        code: 'DLSI1103', titre: 'Algorithmique et Programmation 1', credits: 6,
                        cours: [
                            { code: '01-DLSI-1103', titre: 'Algorithmique', credits: 4, cm: 45, td: 15, tp: 0 },
                            { code: '02-DLSI-1103', titre: 'Langage C', credits: 1, cm: 0, td: 0, tp: 25 },
                            { code: '03-DLSI-1103', titre: 'Langage Python 1', credits: 1, cm: 0, td: 0, tp: 25 },
                        ]
                    },
                    {
                        code: 'DLSI1104', titre: 'Mathématiques 2', credits: 6,
                        cours: [
                            { code: '01-DLSI-1104', titre: 'Statistique Appliquée à l\'Analyse des Risques Cyber', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI-1204', titre: 'Probabilité et Modélisation des Incidents', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1105', titre: 'Langue et Technique de Communication 1', credits: 6,
                        cours: [
                            { code: '01-DLSI-1105', titre: 'Technique de l\'Expression', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI-1105', titre: 'Anglais Général', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                ]
            },
            {
                num: 'Semestre 2', credits: 30,
                ues: [
                    {
                        code: 'DLSI1201', titre: 'Algorithmique et Programmation 2', credits: 6,
                        cours: [
                            { code: '01-DLSI1201', titre: 'Structure de Données et Algorithmique', credits: 4, cm: 45, td: 15, tp: 0 },
                            { code: '02-DLSI1201', titre: 'Langage C 2', credits: 1, cm: 0, td: 0, tp: 25 },
                            { code: '03-DLSI1201', titre: 'Langage Python 2', credits: 1, cm: 0, td: 0, tp: 25 },
                        ]
                    },
                    {
                        code: 'DLSI1202', titre: 'Circuits Logiques et Architecture des Ordinateurs', credits: 6,
                        cours: [
                            { code: '01-DLSI1202', titre: 'Logique', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1202', titre: 'Architecture des ordinateurs', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1203', titre: 'Conception et Fondement des SI Sécurisé (CFSIS)', credits: 6,
                        cours: [
                            { code: '01-DLSI1203', titre: 'Conception des SI (MERISE) Sécurisées', credits: 4, cm: 45, td: 15, tp: 0 },
                            { code: '02-DLSI1203', titre: 'Initiation Sécurité des SI', credits: 2, cm: 20, td: 10, tp: 0 },
                        ]
                    },
                    {
                        code: 'DLSI1204', titre: 'Mathématiques 3', credits: 6,
                        cours: [
                            { code: '01-DLSI1204', titre: 'Recherche Opérationnelle pour l\'Analyse de Risques Cyber', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1204', titre: 'Théorie des Graphes Appliquée à la Sécurité Réseau', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1205', titre: 'Langue et Technique de Communication 2', credits: 6,
                        cours: [
                            { code: '01-DLSI1205', titre: 'Anglais Technique 1', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1205', titre: 'Technique d\'Expression', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                ]
            }
        ]
    },
    {
        niveau: 'Licence 2',
        semestres: [
            {
                num: 'Semestre 3', credits: 30,
                ues: [
                    {
                        code: 'DLSI1301', titre: 'Programmation', credits: 6,
                        cours: [
                            { code: '01-DLSI1301', titre: 'Programmation Orientée Objet Sécurisée et C++', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1301', titre: 'Applications de Bureau et Design Patterns Sécurisés (Java)', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1302', titre: 'Conception et Exploitation de Base de Données Sécurisée', credits: 6,
                        cours: [
                            { code: '01-DLSI1302', titre: 'Base de Données', credits: 4, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1302', titre: 'MySQL', credits: 1, cm: 0, td: 0, tp: 25 },
                            { code: '03-DLSI1302', titre: 'Oracle 1', credits: 1, cm: 0, td: 0, tp: 25 },
                        ]
                    },
                    {
                        code: 'DLSI1303', titre: 'Réseaux Informatiques', credits: 6,
                        cours: [
                            { code: '01-DLSI1303', titre: 'Réseaux Informatiques et Sécurité', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1303', titre: 'Administration Réseaux et Sécurité (CCNA)', credits: 3, cm: 30, td: 15, tp: 0 },
                        ]
                    },
                    {
                        code: 'DLSI1304', titre: 'Développements Web I', credits: 6,
                        cours: [
                            { code: '01-DLSI1304', titre: 'Développement Web Sécurisé (HTML, CSS, JS)', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1304', titre: 'Développement Web Sécurisé (PHP/Node.js)', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1305', titre: 'Langue et Technique de Communication 3', credits: 6,
                        cours: [
                            { code: '01-DLSI1305', titre: 'Outils de Communication', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1305', titre: 'Entrepreneuriat et Gestion de Projets IT Sécurisés', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                ]
            },
            {
                num: 'Semestre 4', credits: 30,
                ues: [
                    {
                        code: 'DLSI1401', titre: 'Administration Réseaux Avancée', credits: 6,
                        cours: [
                            { code: '01-DLSI1401', titre: 'Administration Réseaux sous Windows Serveur', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1401', titre: 'Administration Réseaux sous Unix / Linux', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1402', titre: 'Systèmes d\'Exploitation', credits: 6,
                        cours: [
                            { code: '01-DLSI1402', titre: 'Concepts des Systèmes d\'exploitation', credits: 4, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1402', titre: 'SE Sécurisé Windows / Mac OS', credits: 1, cm: 0, td: 0, tp: 15 },
                            { code: '03-DLSI1402', titre: 'SE Sécurisé Linux / Unix', credits: 1, cm: 0, td: 0, tp: 15 },
                        ]
                    },
                    {
                        code: 'DLSI1403', titre: 'Développement Web II', credits: 6,
                        cours: [
                            { code: '01-DLSI1403', titre: 'Développement Web Sécurisé avec Laravel', credits: 2, cm: 10, td: 0, tp: 20 },
                            { code: '02-DLSI1403', titre: 'Programmation Web Sécurisé avec C#', credits: 2, cm: 10, td: 0, tp: 20 },
                            { code: '03-DLSI1403', titre: 'Programmation Python pour Web', credits: 2, cm: 10, td: 0, tp: 20 },
                        ]
                    },
                    {
                        code: 'DLSI1404', titre: 'Modélisation de BD Objet', credits: 6,
                        cours: [
                            { code: '01-DLSI1404', titre: 'UML / VISIO', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1404', titre: 'MERISE 2', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1405', titre: 'Cybersécurité et Intelligence Artificielle', credits: 6,
                        cours: [
                            { code: '01-DLSI1405', titre: 'Intelligence Artificielle', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1405', titre: 'Cybersécurité', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                ]
            }
        ]
    },
    {
        niveau: 'Licence 3',
        semestres: [
            {
                num: 'Semestre 5', credits: 30,
                ues: [
                    {
                        code: 'DLSI1501', titre: 'Droit & Sécurité des Données', credits: 6,
                        cours: [
                            { code: '01-DLSI1501', titre: 'Droit Numérique', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1501', titre: 'Cryptologie', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1502', titre: 'Administration des Bases de Données', credits: 6,
                        cours: [
                            { code: '01-DLSI1502', titre: 'Administration sous Oracle', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '02-DLSI1502', titre: 'SQL Server', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1503', titre: 'Génie Logiciel', credits: 6,
                        cours: [
                            { code: '01-DLSI1503', titre: 'Génie Logiciel et Pratiques Sécurisées', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1503', titre: 'Processus Agiles et DevSecOps', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1504', titre: 'Programmation Avancée', credits: 6,
                        cours: [
                            { code: '01-DLSI1504', titre: 'JEE', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1504', titre: 'Développement Mobile Sécurisé', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1505', titre: 'Langue et Technique de Communication 4', credits: 6,
                        cours: [
                            { code: '01-DLSI1505', titre: 'Rédaction Administrative', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1505', titre: 'Anglais Informatique', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                ]
            },
            {
                num: 'Semestre 6', credits: 30,
                ues: [
                    {
                        code: 'DLSI1601', titre: 'Recherche', credits: 6,
                        cours: [
                            { code: '01-DLSI1601', titre: 'Méthodologie de Rédaction Scientifique en Informatique', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-DLSI1601', titre: 'Éthique, Déontologie et Réglementation', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'DLSI1602', titre: 'Gouvernance des Systèmes d\'Information', credits: 6,
                        cours: [
                            { code: '01-DLSI1602', titre: 'Gouvernance IT', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '02-DLSI1602', titre: 'Gestion des Projets Informatique', credits: 3, cm: 30, td: 15, tp: 0 },
                        ]
                    },
                    {
                        code: 'DLSI1603', titre: 'Projet de Fin d\'Études', credits: 18,
                        cours: [
                            { code: '01-DLSI1603', titre: 'Projet de fin d\'études DLSI', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '02-DLSI1603', titre: 'Projet Intégrateur', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '03-DLSI1603', titre: 'Mémoire de fin de cycle DLSI', credits: 12, cm: 0, td: 0, tp: 0 },
                        ]
                    },
                ]
            }
        ]
    }
]

const sections = [
    { id: 'debouches', label: 'Nos Débouchés', icon: '💻' },
    { id: 'admission', label: 'Admission & Inscription', icon: '🎯' },
    { id: 'programmes', label: 'Programmes Offerts', icon: '🎓' },
    { id: 'structure', label: 'Structure de la Formation', icon: '📐' },
]

function CarteSection({ icon, label, onClick, actif }) {
    return (
        <div onClick={onClick} style={{
            background: actif ? 'var(--bordeaux)' : '#9b2235',
            color: '#fff', borderRadius: 12,
            padding: '1.75rem 1rem', textAlign: 'center',
            cursor: 'pointer',
            border: actif ? '3px solid var(--or)' : '3px solid transparent',
            transform: actif ? 'translateY(-4px)' : 'none',
            transition: 'all 0.2s',
            boxShadow: actif ? '0 8px 24px rgba(122,26,46,0.35)' : '0 2px 8px rgba(0,0,0,0.1)'
        }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.6rem' }}>{icon}</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.4 }}>{label}</div>
        </div>
    )
}

function UECard({ ue }) {
    const [ouvert, setOuvert] = useState(false)
    return (
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, marginBottom: '0.75rem', overflow: 'hidden' }}>
            <div onClick={() => setOuvert(!ouvert)} style={{
                padding: '1rem 1.25rem', display: 'flex',
                alignItems: 'center', justifyContent: 'space-between',
                cursor: 'pointer', background: ouvert ? 'var(--bordeaux-pale)' : '#fff',
                transition: 'background 0.15s'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ background: 'var(--bordeaux)', color: '#fff', borderRadius: 6, padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                        {ue.code}
                    </span>
                    <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{ue.titre}</span>
                    <span className="badge badge-bordeaux" style={{ fontSize: '0.72rem' }}>{ue.credits} cr</span>
                </div>
                <span style={{ color: 'var(--bordeaux)', fontSize: '0.9rem', transition: 'transform 0.2s', transform: ouvert ? 'rotate(180deg)' : 'none' }}>▼</span>
            </div>
            {ouvert && (
                <div style={{ borderTop: '1px solid var(--border)', background: '#fdf9fa' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                        <thead>
                            <tr style={{ background: 'var(--bordeaux-pale)' }}>
                                {['Code', 'Intitulé du cours', 'Crédits', 'CM', 'TD', 'TP'].map(h => (
                                    <th key={h} style={{ padding: '0.6rem 1rem', textAlign: h === 'Intitulé du cours' ? 'left' : 'center', fontWeight: 600, color: 'var(--bordeaux)', borderBottom: '1px solid var(--border)' }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {ue.cours.map((c, i) => (
                                <tr key={c.code} style={{ background: i % 2 === 0 ? '#fff' : '#fdf5f6', borderBottom: '1px solid var(--border)' }}>
                                    <td style={{ padding: '0.6rem 1rem', color: 'var(--bordeaux)', fontWeight: 500, fontSize: '0.78rem' }}>{c.code}</td>
                                    <td style={{ padding: '0.6rem 1rem', color: 'var(--texte)' }}>{c.titre}</td>
                                    <td style={{ padding: '0.6rem 1rem', textAlign: 'center' }}>
                                        <span style={{ background: 'var(--bordeaux-pale)', color: 'var(--bordeaux)', padding: '0.15rem 0.5rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 600 }}>{c.credits} cr</span>
                                    </td>
                                    <td style={{ padding: '0.6rem 1rem', textAlign: 'center', color: 'var(--gris)', fontSize: '0.82rem' }}>{c.cm > 0 ? `${c.cm}h` : '—'}</td>
                                    <td style={{ padding: '0.6rem 1rem', textAlign: 'center', color: 'var(--gris)', fontSize: '0.82rem' }}>{c.td > 0 ? `${c.td}h` : '—'}</td>
                                    <td style={{ padding: '0.6rem 1rem', textAlign: 'center', color: 'var(--gris)', fontSize: '0.82rem' }}>{c.tp > 0 ? `${c.tp}h` : '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default function DepartementDLSI() {
    const [section, setSection] = useState('debouches')

    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', minHeight: 320, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80" alt="DLSI"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(90,10,25,0.92), rgba(122,26,46,0.7))' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '4rem 1.5rem' }}>
                    <span style={{ background: 'rgba(212,160,23,0.25)', color: '#f0c040', padding: '0.3rem 1rem', borderRadius: 999, fontSize: '0.82rem', fontWeight: 600, display: 'inline-block', marginBottom: '1rem' }}>
                        Département DLSI
                    </span>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
                        Développement Logiciel<br />& Sécurité Informatique
                    </h1>
                    <p style={{ opacity: 0.88, maxWidth: 580, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        180 crédits — 6 semestres — Formation orientée sécurité, développement et cybersécurité.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {['🎓 Licence — 3 ans', '📚 Master — 2 ans', '🔐 Spécialisation Cybersécurité'].map(t => (
                            <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '0.35rem 0.9rem', borderRadius: 999, fontSize: '0.82rem' }}>{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Structure générale */}
            <section style={{ background: 'var(--bordeaux)', padding: '2rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                        {structureGenerale.map(c => (
                            <div key={c.champ} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '1.25rem', borderLeft: '4px solid rgba(255,204,0,0.5)', color: '#fff' }}>
                                <div style={{ fontSize: '0.72rem', opacity: 0.7, marginBottom: '0.25rem', fontWeight: 600, textTransform: 'uppercase' }}>Champ {c.champ}</div>
                                <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.3rem' }}>{c.nom}</div>
                                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f0c040', fontFamily: 'Playfair Display, serif' }}>{c.credits} <span style={{ fontSize: '0.82rem', opacity: 0.8 }}>crédits</span></div>
                            </div>
                        ))}
                        <div style={{ background: 'rgba(255,204,0,0.15)', borderRadius: 10, padding: '1.25rem', borderLeft: '4px solid #f0c040', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ fontSize: '0.72rem', opacity: 0.7, marginBottom: '0.25rem', fontWeight: 600, textTransform: 'uppercase' }}>Total</div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f0c040', fontFamily: 'Playfair Display, serif' }}>180 <span style={{ fontSize: '0.82rem', opacity: 0.8 }}>crédits</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tuiles */}
            <section style={{ background: '#9b2235', padding: '2rem 0' }}>
                <div className="container">
                    <div className="tuiles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                        {sections.map(s => (
                            <CarteSection key={s.id} icon={s.icon} label={s.label} actif={section === s.id} onClick={() => setSection(s.id)} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contenu */}
            <section className="section">
                <div className="container">

                    {section === 'debouches' && (
                        <div>
                            <h2 className="section-title" style={{ color: 'var(--bordeaux)' }}>Nos Débouchés</h2>
                            <p style={{ color: 'var(--gris)', maxWidth: 700, marginBottom: '2rem', lineHeight: 1.8 }}>
                                La formation en Licence DLSI prépare les étudiants aux métiers du développement logiciel sécurisé et de la cybersécurité, secteurs en forte demande.
                            </p>
                            <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
                                {debouches.map(d => (
                                    <div key={d.titre} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'var(--bordeaux-pale)', border: '1px solid #f0c4cc', borderRadius: 10, borderLeft: '4px solid var(--bordeaux)' }}>
                                        <span style={{ fontSize: '1.5rem' }}>{d.icon}</span>
                                        <span style={{ fontWeight: 500, color: 'var(--bordeaux)' }}>{d.titre}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {section === 'admission' && (
                        <div>
                            <h2 className="section-title" style={{ color: 'var(--bordeaux)' }}>Admission & Inscription</h2>
                            <p style={{ color: 'var(--gris)', maxWidth: 700, marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Conditions conformes au règlement des études de licence de l'UGANC.
                            </p>
                            <div style={{ display: 'grid', gap: '1.25rem' }}>
                                {[
                                    { titre: '📋 Processus d\'admission', contenu: 'Dépôt du dossier au service de scolarité, transmission aux comités de programmes, évaluation selon les critères d\'admission, proclamation des résultats.' },
                                    { titre: '✅ Conditions d\'admission', contenu: 'Baccalauréat complet ou diplôme équivalent. Bonne maîtrise du français. Répondre aux conditions spécifiques de l\'institution.' },
                                    { titre: '📌 Types de décisions', contenu: 'Admission définitive, Admission conditionnelle, ou Rejet. Valable uniquement pour le programme et la période concernés.' },
                                    { titre: '📝 Inscription', contenu: 'Inscription obligatoire en début d\'année universitaire. Temps plein : 30 crédits/semestre. Maximum autorisé : 42 crédits/semestre.' },
                                ].map(a => (
                                    <div key={a.titre} className="card" style={{ borderLeft: '5px solid var(--bordeaux)' }}>
                                        <div style={{ fontWeight: 700, color: 'var(--bordeaux)', marginBottom: '0.6rem' }}>{a.titre}</div>
                                        <p style={{ color: 'var(--gris)', fontSize: '0.92rem', lineHeight: 1.8 }}>{a.contenu}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {section === 'programmes' && (
                        <div>
                            <h2 className="section-title" style={{ color: 'var(--bordeaux)' }}>Programmes Offerts</h2>
                            <p style={{ color: 'var(--gris)', maxWidth: 700, marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Le département DLSI prépare les étudiants à des carrières dans le développement sécurisé et la cybersécurité.
                            </p>
                            <div className="grid-3">
                                {[
                                    { titre: 'Licence DLSI', duree: '3 ans — 6 semestres — 180 crédits', icon: '🎓', couleur: 'var(--bordeaux)' },
                                    { titre: 'Master Cybersécurité', duree: '2 ans — Spécialisation sécurité avancée', icon: '🔐', couleur: '#5a3a8a' },
                                    { titre: 'Doctorat', duree: 'Informatique & Sécurité des Systèmes', icon: '🏛️', couleur: '#856404' },
                                ].map(p => (
                                    <div key={p.titre} className="card" style={{ textAlign: 'center', borderTop: `4px solid ${p.couleur}` }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{p.icon}</div>
                                        <h3 style={{ color: p.couleur, fontSize: '1.1rem', marginBottom: '0.6rem' }}>{p.titre}</h3>
                                        <p style={{ color: 'var(--gris)', fontSize: '0.88rem', lineHeight: 1.7 }}>{p.duree}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {section === 'structure' && (
                        <div>
                            <h2 className="section-title" style={{ color: 'var(--bordeaux)' }}>Structure de la Formation</h2>
                            <p style={{ color: 'var(--gris)', maxWidth: 700, marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Le cursus DLSI (180 crédits) est structuré en 6 semestres de 30 crédits chacun. Cliquez sur une UE pour voir le détail.
                            </p>
                            {semestres.map(niveau => (
                                <div key={niveau.niveau} style={{ marginBottom: '3rem' }}>
                                    <div style={{ background: 'linear-gradient(135deg, var(--bordeaux), #9b2235)', color: '#fff', borderRadius: 10, padding: '0.85rem 1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ fontSize: '1.4rem' }}>🎓</span>
                                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700 }}>{niveau.niveau}</span>
                                    </div>
                                    {niveau.semestres.map(sem => (
                                        <div key={sem.num} style={{ marginBottom: '2rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                                <div style={{ background: 'var(--bordeaux-pale)', color: 'var(--bordeaux)', borderRadius: 8, padding: '0.5rem 1.25rem', fontWeight: 700, fontSize: '0.92rem', border: '1px solid #f0c4cc', display: 'inline-block' }}>
                                                    📅 {sem.num}
                                                </div>
                                                <span className="badge badge-bordeaux">{sem.credits} crédits</span>
                                            </div>
                                            {sem.ues.map(ue => <UECard key={ue.code} ue={ue} />)}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: 'var(--bordeaux)', color: '#fff', padding: '3.5rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', marginBottom: '0.75rem' }}>
                        Intéressé par la filière DLSI ?
                    </h2>
                    <p style={{ opacity: 0.85, marginBottom: '1.75rem', maxWidth: 480, margin: '0 auto 1.75rem' }}>
                        Rejoignez notre département et spécialisez-vous dans le développement logiciel sécurisé et la cybersécurité.
                    </p>
                    <Link to="/contact" className="btn btn-gold" style={{ fontSize: '1rem', padding: '0.8rem 2rem' }}>
                        S'inscrire au département →
                    </Link>
                </div>
            </section>
        </>
    )
}
