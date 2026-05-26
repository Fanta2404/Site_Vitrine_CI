import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Network, Monitor, Lock, Laptop, Database, Globe, Wrench, Target,
    ClipboardList, Rocket, CheckCircle, MapPin, FileText, GraduationCap,
    BookOpen, Landmark, Layers, Calendar, TrendingUp, AlertTriangle
} from 'lucide-react'

const debouches = [
    { titre: 'Administrateur réseaux', icon: Network },
    { titre: 'Ingénieur systèmes', icon: Monitor },
    { titre: 'Ingénieur cybersécurité', icon: Lock },
    { titre: 'Développeur d\'applications', icon: Laptop },
    { titre: 'Concepteur de bases de données', icon: Database },
    { titre: 'Webmaster', icon: Globe },
    { titre: 'Gestionnaire de parc informatique', icon: Wrench },
    { titre: 'Consultant informatique', icon: Target },
    { titre: 'Chef de projet informatique', icon: ClipboardList },
    { titre: 'Créateur d\'entreprise IT', icon: Rocket },
]

const admission = [
    { titre: 'Processus d\'admission', icon: ClipboardList, contenu: 'L\'admission suit les règles et critères établis par le règlement des études. Le dossier est déposé au service de scolarité, transmis aux comités de programmes, évalué selon les critères d\'admission, puis les résultats sont proclamés par le responsable du service.' },
    { titre: 'Conditions d\'admission', icon: CheckCircle, contenu: 'Être titulaire d\'un baccalauréat complet ou d\'un diplôme équivalent. Répondre aux conditions de l\'institution. Avoir une bonne maîtrise du français, avec des exigences pédagogiques possibles pour certains programmes.' },
    { titre: 'Types de décisions', icon: MapPin, contenu: 'Les décisions incluent : Admission définitive, Admission conditionnelle, ou Rejet. Chaque décision est valable uniquement pour le programme et la période concernés.' },
    { titre: 'Inscription', icon: FileText, contenu: 'Chaque étudiant admis doit s\'inscrire en début d\'année universitaire. Temps plein : 30 crédits/semestre. Temps partiel : moins de 30 crédits. Maximum autorisé : 42 crédits/semestre.' },
]

const programmes = [
    { titre: 'Licence NTIC', duree: '3 ans — 6 semestres — 180 crédits', couleur: 'var(--bleu)', icon: GraduationCap },
    { titre: 'Master Informatique', duree: '2 ans — 4 semestres', couleur: '#5a3a8a', icon: BookOpen },
    { titre: 'Doctorat', duree: 'Maths, Physique, Télécommunication & Informatique', couleur: '#856404', icon: Landmark },
]

const structure = {
    generale: [
        { champ: 'A', nom: 'Formation académique', credits: 87, couleur: 'var(--bleu)' },
        { champ: 'B', nom: 'Formation professionnelle', credits: 69, couleur: 'var(--bordeaux)' },
        { champ: 'C', nom: 'Initiation à la Recherche', credits: 6, couleur: '#856404' },
        { champ: 'D', nom: 'Outils de communication', credits: 18, couleur: '#0c5460' },
    ]
}

const semestres = [
    {
        niveau: 'Licence 1',
        semestres: [
            {
                num: 'Semestre 1', code: 'S1', credits: 30,
                ues: [
                    {
                        code: 'INF-1101', titre: 'Mathématiques 1', credits: 6,
                        cours: [
                            { code: '01-INF-1101', titre: 'Algèbre 1', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '02-MTH-1101', titre: 'Analyse 1', credits: 3, cm: 30, td: 15, tp: 0 },
                        ]
                    },
                    {
                        code: 'INF-1102', titre: 'Physique de l\'ingénieur', credits: 6,
                        cours: [
                            { code: '01-INF-1102', titre: 'Mécanique du point', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '02-MTH-1102', titre: 'Électrostatique et électromagnétisme', credits: 3, cm: 30, td: 15, tp: 0 },
                        ]
                    },
                    {
                        code: 'INF-1103', titre: 'Algorithme et Programmation', credits: 6,
                        cours: [
                            { code: '01-INF-1103', titre: 'Algorithme 1', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1103', titre: 'Programmation en C', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1104', titre: 'Informatique de base', credits: 6,
                        cours: [
                            { code: '01-INF-1104', titre: 'Outil Informatique', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1104', titre: 'Compétences Numériques et Utilisation de l\'IA', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1105', titre: 'Architecture des ordinateurs et maintenance', credits: 6,
                        cours: [
                            { code: '01-INF-1105', titre: 'Architecture des ordinateurs', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1105', titre: 'Maintenance informatique', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                ]
            },
            {
                num: 'Semestre 2', code: 'S2', credits: 30,
                ues: [
                    {
                        code: 'INF-1201', titre: 'Mathématiques 2', credits: 6,
                        cours: [
                            { code: '01-INF-1201', titre: 'Algèbre 2', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '02-INF-1201', titre: 'Analyse 2', credits: 3, cm: 30, td: 15, tp: 0 },
                        ]
                    },
                    {
                        code: 'INF-1202', titre: 'Circuit logique', credits: 6,
                        cours: [
                            { code: '01-INF-1202', titre: 'Algèbre de Boole', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1202', titre: 'Circuit logique', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1203', titre: 'Anglais de Base', credits: 6,
                        cours: [
                            { code: '01-INF-1203', titre: 'Anglais 1', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '02-INF-1203', titre: 'Anglais 2', credits: 3, cm: 30, td: 15, tp: 0 },
                        ]
                    },
                    {
                        code: 'INF-1204', titre: 'Algorithme et structure de données', credits: 6,
                        cours: [
                            { code: '01-INF-1204', titre: 'Algorithme 2', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1204', titre: 'Structure de données', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1205', titre: 'Technique d\'expression et de communication', credits: 6,
                        cours: [
                            { code: '01-INF-1205', titre: 'Technique d\'expression', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1205', titre: 'Outils de communication', credits: 3, cm: 30, td: 10, tp: 10 },
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
                num: 'Semestre 3', code: 'S3', credits: 30,
                ues: [
                    {
                        code: 'INF-1301', titre: 'Système d\'exploitation et virtualisation', credits: 6,
                        cours: [
                            { code: '01-INF-1301', titre: 'Système d\'exploitation / Linux', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1301', titre: 'Virtualisation des systèmes', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1302', titre: 'Conception des sites Web', credits: 6,
                        cours: [
                            { code: '01-INF-1302', titre: 'HTML / CSS', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1302', titre: 'PHP', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1303', titre: 'Anglais technique', credits: 6,
                        cours: [
                            { code: '01-INF-1303', titre: 'Anglais technique 1', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1303', titre: 'Anglais technique 2', credits: 3, cm: 30, td: 15, tp: 0 },
                        ]
                    },
                    {
                        code: 'INF-1304', titre: 'POO et C++', credits: 6,
                        cours: [
                            { code: '01-INF-1304', titre: 'POO / JAVA', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1304', titre: 'C++', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1305', titre: 'Statistique et Probabilité', credits: 6,
                        cours: [
                            { code: '01-INF-1305', titre: 'Statistique', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1305', titre: 'Probabilité', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                ]
            },
            {
                num: 'Semestre 4', code: 'S4', credits: 30,
                ues: [
                    {
                        code: 'INF-1401', titre: 'Analyse et conception des SI', credits: 6,
                        cours: [
                            { code: '01-INF-1401', titre: 'Merise', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1401', titre: 'UML', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1402', titre: 'JavaScript / Bootstrap / LARAVEL', credits: 6,
                        cours: [
                            { code: '01-INF-1402', titre: 'JavaScript', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1402', titre: 'Bootstrap / LARAVEL', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1403', titre: 'Optimisation', credits: 6,
                        cours: [
                            { code: '01-INF-1403', titre: 'Théorie des graphes', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1403', titre: 'Recherche Opérationnelle', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1404', titre: 'Réseaux informatique', credits: 6,
                        cours: [
                            { code: '01-INF-1404', titre: 'Généralité sur les réseaux : CCNET', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1404', titre: 'Structure des Réseaux : CCNA', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1405', titre: 'JAVA', credits: 6,
                        cours: [
                            { code: '01-INF-1405', titre: 'Java 2', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1405', titre: 'Python', credits: 3, cm: 30, td: 10, tp: 10 },
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
                num: 'Semestre 5', code: 'S5', credits: 30,
                ues: [
                    {
                        code: 'INF-1501', titre: 'Bases de données', credits: 6,
                        cours: [
                            { code: '01-INF-1501', titre: 'Gestion de bases de données / PostgreSQL', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1501', titre: 'Bases de données relationnelles', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1502', titre: 'Analyse numérique pour Ingénieurs', credits: 6,
                        cours: [
                            { code: '01-INF-1502', titre: 'Calcul numérique', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '02-INF-1502', titre: 'Matlab / Scilab / Python', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1503', titre: 'Administration Système', credits: 6,
                        cours: [
                            { code: '01-INF-1503', titre: 'Administration sous Windows', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1503', titre: 'Administration Linux', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1504', titre: 'IPDL : Ingénierie de Processus et Développement Logiciel', credits: 6,
                        cours: [
                            { code: '01-INF-1504', titre: 'Génie logiciel', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1504', titre: 'Processus Agile / Scrum / UP', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1505', titre: 'IA et IoT', credits: 6,
                        cours: [
                            { code: '01-INF-1505', titre: 'Introduction à l\'IA', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1505', titre: 'Introduction à l\'IoT', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                ]
            },
            {
                num: 'Semestre 6', code: 'S6', credits: 30,
                ues: [
                    {
                        code: 'INF-1601', titre: 'Ingénierie des Applications et Systèmes de Données', credits: 6,
                        cours: [
                            { code: '01-INF-1601', titre: 'Administration des Bases de données ORACLE', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1601', titre: 'Applications de bureau et designs patterns', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1602', titre: 'Entrepreneuriat et Gestion des projets', credits: 6,
                        cours: [
                            { code: '01-INF-1602', titre: 'Entrepreneuriat', credits: 3, cm: 30, td: 15, tp: 0 },
                            { code: '02-INF-1602', titre: 'Gestion des projets', credits: 3, cm: 30, td: 15, tp: 0 },
                        ]
                    },
                    {
                        code: 'INF-1603', titre: 'Sécurité informatique et Cryptographie', credits: 6,
                        cours: [
                            { code: '01-INF-1603', titre: 'Sécurité des SI', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1603', titre: 'Cryptographie', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                    {
                        code: 'INF-1604', titre: 'Réseaux sans fil et Téléphonie IP', credits: 6,
                        cours: [
                            { code: '01-INF-1604', titre: 'Réseaux sans fil et Téléphonie IP', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1604', titre: 'Téléphonie Mobile', credits: 3, cm: 30, td: 15, tp: 0 },
                        ]
                    },
                    {
                        code: 'INF-1605', titre: 'Vulnérabilités', credits: 6,
                        cours: [
                            { code: '01-INF-1605', titre: 'Vulnérabilité réseaux mobile et filaires', credits: 3, cm: 30, td: 10, tp: 10 },
                            { code: '02-INF-1605', titre: 'Vulnérabilité Web et des applications', credits: 3, cm: 30, td: 10, tp: 10 },
                        ]
                    },
                ]
            }
        ]
    }
]

const sections = [
    { id: 'debouches', label: 'Nos Débouchés', icon: Network },
    { id: 'admission', label: 'Admission & Inscription', icon: Target },
    { id: 'programmes', label: 'Programmes Offerts', icon: GraduationCap },
    { id: 'structure', label: 'Structure de la Formation', icon: Layers },
]

function CarteSection({ icon: Icon, label, onClick, actif }) {
    return (
        <div onClick={onClick} style={{
            background: actif ? 'var(--bleu-fonce)' : 'var(--bleu)',
            color: '#fff', borderRadius: 12, padding: '1.75rem 1rem',
            textAlign: 'center', cursor: 'pointer',
            border: actif ? '3px solid var(--or)' : '3px solid transparent',
            boxShadow: actif ? '0 8px 24px rgba(14,74,145,0.35)' : '0 2px 8px rgba(0,0,0,0.1)',
            transform: actif ? 'translateY(-4px)' : 'none',
            transition: 'all 0.2s'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.6rem' }}><Icon size={36} /></div>
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
                cursor: 'pointer', background: ouvert ? 'var(--bleu-pale)' : '#fff',
                transition: 'background 0.15s'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ background: 'var(--bleu)', color: '#fff', borderRadius: 6, padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                        {ue.code}
                    </span>
                    <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{ue.titre}</span>
                    <span className="badge badge-bleu" style={{ fontSize: '0.72rem' }}>{ue.credits} cr</span>
                </div>
                <span style={{ color: 'var(--bleu)', fontSize: '0.9rem', transition: 'transform 0.2s', transform: ouvert ? 'rotate(180deg)' : 'none' }}>▼</span>
            </div>

            {ouvert && (
                <div style={{ borderTop: '1px solid var(--border)', background: '#fafcff' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                        <thead>
                            <tr style={{ background: 'var(--bleu-pale)' }}>
                                <th style={{ padding: '0.6rem 1rem', textAlign: 'left', fontWeight: 600, color: 'var(--bleu-fonce)', borderBottom: '1px solid var(--border)' }}>Code</th>
                                <th style={{ padding: '0.6rem 1rem', textAlign: 'left', fontWeight: 600, color: 'var(--bleu-fonce)', borderBottom: '1px solid var(--border)' }}>Intitulé du cours</th>
                                <th style={{ padding: '0.6rem 1rem', textAlign: 'center', fontWeight: 600, color: 'var(--bleu-fonce)', borderBottom: '1px solid var(--border)' }}>Crédits</th>
                                <th style={{ padding: '0.6rem 1rem', textAlign: 'center', fontWeight: 600, color: 'var(--bleu-fonce)', borderBottom: '1px solid var(--border)' }}>CM</th>
                                <th style={{ padding: '0.6rem 1rem', textAlign: 'center', fontWeight: 600, color: 'var(--bleu-fonce)', borderBottom: '1px solid var(--border)' }}>TD</th>
                                <th style={{ padding: '0.6rem 1rem', textAlign: 'center', fontWeight: 600, color: 'var(--bleu-fonce)', borderBottom: '1px solid var(--border)' }}>TP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ue.cours.map((c, i) => (
                                <tr key={c.code} style={{ background: i % 2 === 0 ? '#fff' : '#f8fbff', borderBottom: '1px solid var(--border)' }}>
                                    <td style={{ padding: '0.6rem 1rem', color: 'var(--bleu)', fontWeight: 500, fontSize: '0.78rem' }}>{c.code}</td>
                                    <td style={{ padding: '0.6rem 1rem', color: 'var(--texte)' }}>{c.titre}</td>
                                    <td style={{ padding: '0.6rem 1rem', textAlign: 'center' }}>
                                        <span style={{ background: 'var(--bleu-pale)', color: 'var(--bleu-fonce)', padding: '0.15rem 0.5rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 600 }}>{c.credits} cr</span>
                                    </td>
                                    <td style={{ padding: '0.6rem 1rem', textAlign: 'center', color: 'var(--gris)', fontSize: '0.82rem' }}>{c.cm}h</td>
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

export default function DepartementNTIC() {
    const [section, setSection] = useState('debouches')

    return (
        <>
            {/* Hero */}
            <section style={{ position: 'relative', minHeight: 320, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80" alt="NTIC"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(14,74,145,0.92), rgba(26,107,200,0.7))' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '4rem 1.5rem' }}>
                    <span style={{ background: 'rgba(212,160,23,0.25)', color: '#f0c040', padding: '0.3rem 1rem', borderRadius: 999, fontSize: '0.82rem', fontWeight: 600, display: 'inline-block', marginBottom: '1rem' }}>
                        Département NTIC
                    </span>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
                        Nouvelles Technologies de<br />l'Information et de la Communication
                    </h1>
                    <p style={{ opacity: 0.88, maxWidth: 580, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        180 crédits — 6 semestres — Formations académique, professionnelle et recherche.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {[
                            { text: 'Licence — 3 ans', icon: GraduationCap },
                            { text: 'Master — 2 ans', icon: BookOpen },
                            { text: 'Doctorat', icon: Landmark }
                        ].map(t => (
                            <span key={t.text} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '0.35rem 0.9rem', borderRadius: 999, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                                <t.icon size={16} /> {t.text}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Structure générale */}
            <section style={{ background: 'var(--bleu-fonce)', padding: '2rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                        {structure.generale.map(c => (
                            <div key={c.champ} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '1.25rem', borderLeft: `4px solid ${c.couleur === 'var(--bleu)' ? '#60a5fa' : c.couleur === 'var(--bordeaux)' ? '#f87171' : '#fbbf24'}`, color: '#fff' }}>
                                <div style={{ fontSize: '0.72rem', opacity: 0.7, marginBottom: '0.25rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Champ {c.champ}</div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>{c.nom}</div>
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

            {/* Tuiles navigation */}
            <section style={{ background: 'var(--bleu)', padding: '2rem 0' }}>
                <div className="container">
                    <div className="tuiles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                        {sections.map(s => (
                            <CarteSection key={s.id} icon={s.icon} label={s.label} actif={section === s.id} onClick={() => setSection(s.id)} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contenu dynamique */}
            <section className="section">
                <div className="container">

                    {section === 'debouches' && (
                        <div>
                            <h2 className="section-title">Nos Débouchés</h2>
                            <p style={{ color: 'var(--gris)', maxWidth: 700, marginBottom: '2rem', lineHeight: 1.8 }}>
                                La formation en Licence NTIC permet aux étudiants d'acquérir des compétences solides dans les technologies de l'information. À l'issue de cette formation, les diplômés peuvent exercer dans différents métiers du numérique.
                            </p>
                            <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
                                {debouches.map(d => (
                                    <div key={d.titre} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'var(--bleu-pale)', border: '1px solid var(--border)', borderRadius: 10, borderLeft: '4px solid var(--bleu)' }}>
                                        <div style={{ display: 'flex', color: 'var(--bleu)' }}><d.icon size={26} /></div>
                                        <span style={{ fontWeight: 500, color: 'var(--bleu-fonce)' }}>{d.titre}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{ background: '#e8f4ff', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem' }}>
                                <div style={{ fontWeight: 600, color: 'var(--bleu-fonce)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <TrendingUp size={18} /> Poursuites d'études
                                </div>
                                <p style={{ color: 'var(--gris)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                                    Cette formation offre la possibilité de poursuivre en <strong>Master en Informatique</strong> (4 semestres) puis en <strong>Doctorat</strong> en Maths, Physique, Télécommunication et Informatique.
                                </p>
                            </div>
                        </div>
                    )}

                    {section === 'admission' && (
                        <div>
                            <h2 className="section-title">Admission & Période d'inscription</h2>
                            <p style={{ color: 'var(--gris)', maxWidth: 700, marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Les processus et conditions d'admission sont conformes au règlement des études de licence de l'Université Gamal Abdel Nasser de Conakry.
                            </p>
                            <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2.5rem' }}>
                                {admission.map(a => (
                                    <div key={a.titre} className="card" style={{ borderLeft: '5px solid var(--bleu)' }}>
                                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <a.icon size={18} /> {a.titre}
                                        </div>
                                        <p style={{ color: 'var(--gris)', fontSize: '0.92rem', lineHeight: 1.8 }}>{a.contenu}</p>
                                    </div>
                                ))}
                            </div>
                            <div style={{ background: 'var(--or-pale)', border: '1px solid #ffe082', borderRadius: 12, padding: '1.25rem' }}>
                                <div style={{ fontWeight: 600, color: '#7a5a00', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <AlertTriangle size={18} /> Important
                                </div>
                                <p style={{ color: '#6d4c00', fontSize: '0.9rem', lineHeight: 1.8 }}>
                                    Maximum autorisé : <strong>42 crédits par semestre</strong>. Les périodes d'inscription sont définies par le calendrier universitaire.
                                </p>
                            </div>
                        </div>
                    )}

                    {section === 'programmes' && (
                        <div>
                            <h2 className="section-title">Programmes Offerts</h2>
                            <p style={{ color: 'var(--gris)', maxWidth: 700, marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Le département NTIC offre trois programmes académiques du niveau licence jusqu'au doctorat.
                            </p>
                            <div className="grid-3">
                                {programmes.map(p => (
                                    <div key={p.titre} className="card" style={{ textAlign: 'center', borderTop: `4px solid ${p.couleur}` }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: p.couleur, marginBottom: '1rem' }}><p.icon size={44} strokeWidth={1.5} /></div>
                                        <h3 style={{ color: p.couleur, fontSize: '1.1rem', marginBottom: '0.6rem' }}>{p.titre}</h3>
                                        <p style={{ color: 'var(--gris)', fontSize: '0.88rem', lineHeight: 1.7 }}>{p.duree}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {section === 'structure' && (
                        <div>
                            <h2 className="section-title">Structure de la Formation</h2>
                            <p style={{ color: 'var(--gris)', maxWidth: 700, marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Le cursus de licence NTIC (180 crédits) est structuré en 6 semestres de 30 crédits chacun, répartis sur 3 années. Cliquez sur une UE pour voir le détail des cours.
                            </p>
                            {semestres.map(niveau => (
                                <div key={niveau.niveau} style={{ marginBottom: '3rem' }}>
                                    <div style={{ background: 'linear-gradient(135deg, var(--bleu-fonce), var(--bleu))', color: '#fff', borderRadius: 10, padding: '0.85rem 1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <GraduationCap size={24} />
                                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700 }}>{niveau.niveau}</span>
                                    </div>
                                    {niveau.semestres.map(sem => (
                                        <div key={sem.num} style={{ marginBottom: '2rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                                <div style={{ background: 'var(--bleu-pale)', color: 'var(--bleu-fonce)', borderRadius: 8, padding: '0.5rem 1.25rem', fontWeight: 700, fontSize: '0.92rem', border: '1px solid var(--border)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                                                    <Calendar size={16} /> {sem.num}
                                                </div>
                                                <span className="badge badge-bleu">{sem.credits} crédits</span>
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
            <section style={{ background: 'linear-gradient(135deg, var(--bleu-fonce), var(--bleu))', color: '#fff', padding: '5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', zIndex: 0 }} />
                <div style={{ position: 'absolute', bottom: -100, left: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)', zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 700, marginBottom: '1.2rem' }}>
                        Intéressé par la filière NTIC ?
                    </h2>
                    <p style={{ opacity: 0.9, fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: 650, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                        Rejoignez notre département et construisez votre avenir professionnel dans les réseaux, l'administration système et les technologies numériques.
                    </p>
                    <Link to="/contact" className="btn btn-gold" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem', fontWeight: 600, borderRadius: 50, boxShadow: '0 8px 24px rgba(212,160,23,0.3)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        S'inscrire au département →
                    </Link>
                </div>
            </section>
        </>
    )
}
