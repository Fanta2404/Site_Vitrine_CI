import { useState } from 'react'
import { Link } from 'react-router-dom'

// ===================== DONNÉES =====================

const debouches = [
    { titre: 'Chef de projet informatique', icon: '📋' },
    { titre: 'Ingénieur systèmes et réseaux', icon: '🖧' },
    { titre: 'Ingénieur d\'études', icon: '🔬' },
    { titre: 'Développeur d\'applications', icon: '💻' },
    { titre: 'Concepteur de bases de données', icon: '🗄️' },
    { titre: 'Webmaster', icon: '🌐' },
    { titre: 'Gestionnaire de parc informatique', icon: '🖥️' },
    { titre: 'Administrateur réseaux', icon: '🔧' },
    { titre: 'Consultant informatique', icon: '🤝' },
    { titre: 'Créateur d\'entreprise', icon: '🚀' },
]

const admission = [
    {
        titre: 'Processus d\'admission',
        contenu: 'L\'admission suit les règles et critères établis par le règlement des études, complété par des régulations spécifiques si nécessaire. Le dossier est déposé au service de scolarité, transmis aux comités de programmes, évalué selon les critères, puis les résultats sont proclamés par le responsable du service.'
    },
    {
        titre: 'Conditions d\'admission',
        contenu: 'Être titulaire d\'un baccalauréat complet ou d\'un diplôme équivalent. Répondre aux conditions de l\'institution. Avoir une bonne maîtrise du français, avec des exigences pédagogiques possibles pour certains programmes.'
    },
    {
        titre: 'Types de décisions',
        contenu: 'Les décisions incluent : Admission définitive, Admission conditionnelle, ou Rejet. Chaque décision est valable uniquement pour le programme et la période concernés.'
    },
    {
        titre: 'Inscription',
        contenu: 'Chaque étudiant admis doit s\'inscrire en début d\'année universitaire. Un étudiant régulier peut s\'inscrire à temps plein (30 crédits/semestre) ou à temps partiel (moins de 30 crédits). Un étudiant ne peut inscrire plus de 42 crédits par semestre.'
    },
]

const programmes = [
    { titre: 'Licence NTIC', duree: '3 ans — 6 semestres', couleur: 'var(--primary)', icon: '🎓' },
    { titre: 'Master Informatique', duree: '2 ans — 4 semestres', couleur: 'var(--primary-light)', icon: '📚' },
    { titre: 'Doctorat', duree: 'Maths, Physique, Télécommunication & Informatique', couleur: 'var(--secondary)', icon: '🏛️' },
]

const semestres = [
    {
        niveau: 'Licence 1',
        semestres: [
            {
                num: 'Semestre 1',
                cours: [
                    {
                        titre: 'Atelier Informatique',
                        credits: '6 crédits',
                        objectif: 'Initier les étudiants aux systèmes d\'exploitation (Windows, Linux) et aux applications de bureautique. Apprentissage des fonctionnalités d\'Excel, de la sécurité informatique et des navigateurs web.',
                        contenu: 'Windows & Linux, gestion de fichiers, Microsoft Office / LibreOffice, tableurs, sécurité informatique, navigateurs web, commandes de base Linux.',
                        prerequis: 'Aucun prérequis',
                        volume: '60h',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Mathématiques',
                        credits: '6 crédits',
                        objectif: 'Établir les bases mathématiques essentielles pour l\'informatique : algèbre, logique, probabilités et statistiques avec illustrations pratiques.',
                        contenu: 'Espace vectoriel, calcul matriciel, applications linéaires, résolution de systèmes linéaires, probabilités, analyse combinatoire, variables aléatoires.',
                        prerequis: 'Aucun prérequis',
                        volume: '60h',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Algorithmique et Techniques de Programmation 1',
                        credits: '6 crédits',
                        objectif: 'Développer des compétences pour analyser et résoudre des problèmes en traduisant les solutions en langage de programmation (C, Python, Java).',
                        contenu: 'Types de données, opérateurs, structures de contrôle, boucles, fonctions, passage par valeur/adresse. Langages : C, Python, Java.',
                        prerequis: 'Aucun prérequis',
                        volume: '60h — 45CM + 15TP',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Logique et Architecture',
                        credits: '6 crédits',
                        objectif: 'Développer une compréhension des langages numériques, de la logique mathématique et des circuits logiques.',
                        contenu: 'Systèmes de numération (binaire, octal, hex), algèbre de Boole, portes logiques, circuits combinatoires et séquentiels, architecture d\'ordinateur.',
                        prerequis: 'Aucun prérequis',
                        volume: '60h',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Langue et Technique de Communication 1',
                        credits: '6 crédits',
                        objectif: 'Initier les étudiants à la lecture et à l\'écriture en français. Compréhension des mécanismes linguistiques et amélioration des relations interpersonnelles.',
                        contenu: 'Communication écrite, communiqué de presse, lettres de motivation, écriture journalistique, techniques d\'argumentation.',
                        prerequis: 'Aucun prérequis',
                        volume: '50h',
                        profs: 'À définir',
                    },
                ]
            },
            {
                num: 'Semestre 2',
                cours: [
                    {
                        titre: 'Algorithmique et Technique de Programmation 2',
                        credits: '6 crédits',
                        objectif: 'Mise en œuvre d\'algorithmes de gestion des structures de données : vecteurs, fichiers, listes, piles, files, graphes, tables et arbres.',
                        contenu: 'Structures de données, tri et recherche, C / Python / Java avancés. Structure de données (3cr), Langage C2 (1cr), Python2 (1cr), Java2 (1cr).',
                        prerequis: 'Algorithmique et Technique de Programmation 1',
                        volume: '150h total',
                        profs: 'Dr Ibrahima Camara, Mr Mouctar Barry, Mr Kanté',
                    },
                    {
                        titre: 'Architecture des Ordinateurs',
                        credits: '6 crédits',
                        objectif: 'Explorer l\'organisation d\'un micro-ordinateur et l\'impact de ses composants sur les performances. Fonctionnement du microprocesseur et interaction avec la mémoire vive.',
                        contenu: 'Modèle de Von Neumann, types de mémoires, microprocesseur, architecture pipeline et superscalaire, langages et machines virtuelles.',
                        prerequis: 'Logique',
                        volume: '60h — 30CM + 20TP',
                        profs: 'Dr Lamarana Bah',
                    },
                    {
                        titre: 'Analyse et Conception du Système d\'Information (ACSI)',
                        credits: '6 crédits',
                        objectif: 'Maîtriser l\'analyse et la conception d\'applications en adoptant la méthode Merise. Étude de l\'algèbre relationnelle.',
                        contenu: 'Système d\'information en entreprise, méthode MERISE, modèle conceptuel des données, entités, cardinalités, normalisation, dépendances fonctionnelles. Outils : Power AMC.',
                        prerequis: 'Aucun prérequis',
                        volume: '90h total',
                        profs: 'Mr Moustapha Kaba',
                    },
                    {
                        titre: 'Technologie Web 1',
                        credits: '6 crédits',
                        objectif: 'Maîtriser HTML5, CSS3 et les bases de JavaScript pour créer des pages web interactives et bien structurées.',
                        contenu: 'HTML5 (liens, tableaux, formulaires), CSS3 (mise en forme, personnalisation), JavaScript (interactions dynamiques, gestion formulaires).',
                        prerequis: 'Aucun prérequis',
                        volume: '80h total',
                        profs: 'Mr Assimiou Tchédré',
                    },
                    {
                        titre: 'Langue et Technique de Communication 2',
                        credits: '6 crédits',
                        objectif: 'Maîtriser la langue anglaise et développer des compétences de communication essentielles pour l\'environnement professionnel.',
                        contenu: 'Thématiques culturelles, communication orale et écrite, Français technique (3cr), Langue Anglaise (3cr).',
                        prerequis: 'LTC 1',
                        volume: '100h total',
                        profs: 'Mr Sékou Touré, Mr Diallo',
                    },
                ]
            }
        ]
    },
    {
        niveau: 'Licence 2',
        semestres: [
            {
                num: 'Semestre 3',
                cours: [
                    {
                        titre: 'Programmation Orientée Objet et Langages',
                        credits: '6 crédits',
                        objectif: 'Maîtriser la POO et le développement d\'applications complexes avec C++, Java, C# et Python avancé.',
                        contenu: 'Classes, héritage, encapsulation, polymorphisme, surdéfinition d\'opérateurs, gestion des erreurs. Langages : C++, Java, C#, Python.',
                        prerequis: 'Algorithmique et Technique de Programmation 1',
                        volume: '150h total',
                        profs: 'Dr Ibrahima Sory Kokouma Diallo, Mr Kanté',
                    },
                    {
                        titre: 'Système de Gestion des Bases de Données (SGBD)',
                        credits: '6 crédits',
                        objectif: 'Approfondir la conception et la mise en œuvre des bases de données relationnelles. Maîtriser MySQL, Oracle et Microsoft Access.',
                        contenu: 'Algèbre relationnelle, SQL, MySQL (installation, architecture, sécurité), Oracle (architecture, gestion utilisateurs), optimisation des performances.',
                        prerequis: 'ACSI',
                        volume: '135h total',
                        profs: 'Mr Moustapha Kaba, Dr Assimiou Tchedré, Dr Ibrahima kalil Touré',
                    },
                    {
                        titre: 'Économie et Gestion',
                        credits: '6 crédits',
                        objectif: 'Comprendre le fonctionnement et l\'organisation des entreprises, la comptabilité générale et le calcul de profit.',
                        contenu: 'Entreprise et environnement, organisation interne, techniques de communication, comptabilité financière, états financiers, bilan.',
                        prerequis: 'Aucun prérequis',
                        volume: '100h total',
                        profs: 'Mr Keïta, Mr Kanté',
                    },
                    {
                        titre: 'Réseaux Informatiques',
                        credits: '6 crédits',
                        objectif: 'Maîtriser les concepts fondamentaux des réseaux, créer un réseau local et comprendre l\'adressage IP et l\'interconnexion des réseaux.',
                        contenu: 'Normalisation, architectures réseaux, adressage IP, interconnexion des réseaux, segmentation, services réseau primaires.',
                        prerequis: 'Aucun prérequis',
                        volume: '60h — 45CM + 15TP',
                        profs: 'Mr Mahmadou Diallo',
                    },
                    {
                        titre: 'Langue et Technique de Communication 3',
                        credits: '6 crédits',
                        objectif: 'Accompagner les étudiants vers un niveau intermédiaire en communication. Développement de l\'écoute active et de la communication interpersonnelle.',
                        contenu: 'Différences culturelles, monde du travail, surmonter les freins à la communication, Français technique, Anglais.',
                        prerequis: 'LTC 2',
                        volume: '100h total',
                        profs: 'Mr Sékou Touré, Mr Diallo',
                    },
                ]
            },
            {
                num: 'Semestre 4',
                cours: [
                    {
                        titre: 'Administration Réseaux',
                        credits: '6 crédits',
                        objectif: 'Former des administrateurs réseau capables d\'installer des services essentiels, garantir la sécurité des données et gérer les droits d\'accès.',
                        contenu: 'Apache HTTP, Windows Server, Postfix/Dovecot, création de sites web. Windows Server (3cr) + Unix/Linux (3cr).',
                        prerequis: 'Réseaux Informatiques',
                        volume: '100h total',
                        profs: 'Dr Amara, Dr Ibrahima Kalil Touré',
                    },
                    {
                        titre: 'Théorie des Systèmes d\'Exploitation',
                        credits: '8 crédits',
                        objectif: 'Explorer la structure et le fonctionnement des systèmes informatiques : processus, threads, ordonnancement, synchronisation, gestion mémoire.',
                        contenu: 'Évolution des OS, processus et ressources, algorithmes d\'ordonnancement, sections critiques, E/S physiques, gestion de la mémoire. Pratique : Windows + Linux.',
                        prerequis: 'POO & Langages',
                        volume: '100h total',
                        profs: 'Dr Ibrahima Sory Kokouma Diallo, Dr Ibrahima Kalil Touré',
                    },
                    {
                        titre: 'Technologie Web 2',
                        credits: '6 crédits',
                        objectif: 'Maîtriser PHP, C# ASP.NET MVC et Python pour créer des sites web dynamiques avec gestion de bases de données.',
                        contenu: 'PHP 7 (syntaxe, formulaires, sessions, cookies, POO, MySQL), C# ASP.NET MVC 6, Bootstrap, Identity, SQL Entity Framework, déploiement web.',
                        prerequis: 'Technologie Web 1',
                        volume: '110h total',
                        profs: 'Mr Touré, Mr Kanté',
                    },
                    {
                        titre: 'Réseaux Mobiles 1 et Technologie Sans Fil',
                        credits: '6 crédits',
                        objectif: 'Comprendre les principes fondamentaux des réseaux sans fil et mobiles : GSM, IEEE 802.11, Bluetooth, évolution 3G → 5G.',
                        contenu: 'GSM, GPRS, UMTS, WiFi IEEE 802.11, Bluetooth, ZigBee, réseaux ad hoc, QoS, architecture 3G/4G/5G, mobilité et ubiquité.',
                        prerequis: 'Réseaux Informatiques',
                        volume: '90h — 60CM + 30TP',
                        profs: 'Mr Mahmadou Diallo',
                    },
                    {
                        titre: 'Intelligence Artificielle et Cybersécurité',
                        credits: '6 crédits',
                        objectif: 'Découvrir les fondements de l\'Intelligence Artificielle et les principes de la cybersécurité pour protéger les systèmes d\'information modernes.',
                        contenu: 'Introduction à l\'IA : apprentissage automatique, réseaux de neurones, algorithmes intelligents. Cybersécurité : menaces, attaques, cryptographie, protection des systèmes. Mini-projets pratiques IA & Cybersécurité.',
                        prerequis: 'Aucun prérequis',
                        volume: '100h total',
                        profs: 'Mr Bakary Mansaré, Dr Touré',
                    },
                ]
            }
        ]
    },
    {
        niveau: 'Licence 3',
        semestres: [
            {
                num: 'Semestre 5',
                cours: [
                    {
                        titre: 'Droit & Sécurité Informatique',
                        credits: '6 crédits',
                        objectif: 'Comprendre les enjeux juridiques des TIC, la loi 037 sur la cybersécurité en Guinée et les techniques de protection des systèmes informatiques.',
                        contenu: 'Introduction au droit informatique, loi 037 Guinée, cybersécurité et protection des données, contrôle d\'accès, cryptographie, failles Internet, techniques de piraterie.',
                        prerequis: 'Aucun prérequis',
                        volume: '60h — 40CM + 20TP',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Réseaux et Systèmes Répartis',
                        credits: '6 crédits',
                        objectif: 'Acquérir des connaissances sur la conception d\'applications réparties via RMI et CORBA. Implémenter des systèmes d\'architectures distribuées.',
                        contenu: 'Architecture des systèmes répartis, appels de procédures à distance (RPC), client-serveur, POO distribuée, algorithmes distribués, CORBA, DCOM.',
                        prerequis: 'Aucun prérequis',
                        volume: '60h — 40CM + 20TP',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Génie Logiciel',
                        credits: '6 crédits',
                        objectif: 'Gérer un projet informatique complet : documents de soumission, définition de contrats, solutions techniques, qualité logicielle.',
                        contenu: 'Management des SI, rédaction des documents de soumission, spécification des besoins, conception, planification de projet, tests et mise en œuvre.',
                        prerequis: 'Aucun prérequis',
                        volume: '60h — 30CM + 30TP',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Réseaux à Hauts Débits',
                        credits: '3 crédits',
                        objectif: 'Comprendre les éléments clés des réseaux à hauts débits : RNIS, FDDI, supports physiques et couches de transmission.',
                        contenu: 'RNIS, relais de trames, FDDI, Ethernet, VLAN ATM, couche AAL, cuivre et fibre optique, technologies XDSL.',
                        prerequis: 'Aucun prérequis',
                        volume: '50h — 20CM + 30TP',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Langue et Technique de Communication 5',
                        credits: '6 crédits',
                        objectif: 'Maîtriser l\'anglais informatique pour naviguer dans la documentation technique. Rédiger des rapports d\'activité et des courriers administratifs en français soutenu.',
                        contenu: 'Histoire et catégories d\'ordinateurs, CPU, mémoires primaires/secondaires, communication professionnelle, conduite de réunions, rédaction de rapports.',
                        prerequis: 'LTC 4',
                        volume: '100h total',
                        profs: 'Mr Sékou Touré, Mr Diallo',
                    },
                ]
            },
            {
                num: 'Semestre 6',
                cours: [
                    {
                        titre: 'Gestion des Projets',
                        credits: '6 crédits',
                        objectif: 'Concevoir, planifier et organiser efficacement un projet en appliquant la méthode Agile/Scrum.',
                        contenu: 'État d\'esprit Agile, Agile vs méthodes traditionnelles, Scrum (5 événements, rôles PO/SM), Kanban, gestion et suivi de projet.',
                        prerequis: 'Aucun prérequis',
                        volume: '100h total',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Virtualisation et Cloud Computing',
                        credits: '6 crédits',
                        objectif: 'Maîtriser les principes de virtualisation, les solutions de stockage et les modèles Cloud (privé, public, hybride).',
                        contenu: 'IaaS, hyperviseurs, machines virtuelles, containers, migration, switches virtuels, Xen/KVM/VMware, Cloud Computing (Amazon, Microsoft, Google).',
                        prerequis: 'Aucun prérequis',
                        volume: '70h — 40CM + 30TP',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Services et Réseaux de Communication',
                        credits: '6 crédits',
                        objectif: 'Analyser les technologies essentielles à la création d\'infrastructures de transport de paquets sur Internet. Garantir des communications performantes.',
                        contenu: 'Protocoles OSPF/RIP/BGP, tunnels VPN, réseaux métropolitains, SDH/ATM, réseaux optiques WDM, IP mobile, IPv6, MPLS/GMPLS.',
                        prerequis: 'Aucun prérequis',
                        volume: '100h — 60CM + 40TP',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Gouvernance IT',
                        credits: '6 crédits',
                        objectif: 'Explorer les enjeux de la gouvernance IT et les référentiels associés. Transformer les DSI en entités génératrices de valeur.',
                        contenu: 'Concepts fondamentaux, enjeux critiques des IT, évaluation de la maturité SI, zones à risque, plan d\'action stratégique, monitoring des objectifs.',
                        prerequis: 'Aucun prérequis',
                        volume: '60h — 60CM',
                        profs: 'À définir',
                    },
                    {
                        titre: 'Stage et Projet Réseaux',
                        credits: '6 crédits',
                        objectif: 'Acquérir une première expérience professionnelle en mettant en œuvre ses compétences dans un projet réseau complet en entreprise.',
                        contenu: 'Stage en entreprise (3cr), Projet Réseaux au choix (3cr). Travail collaboratif, conception et réalisation d\'un projet de bout en bout.',
                        prerequis: 'LTC 2',
                        volume: '100h total',
                        profs: 'Encadreurs professionnels',
                    },
                ]
            }
        ]
    }
]

// ===================== COMPOSANTS =====================

const sections = [
    { id: 'debouches', label: 'Nos Débouchés', icon: '🖧' },
    { id: 'admission', label: 'Admission & Inscription', icon: '🎯' },
    { id: 'programmes', label: 'Programmes Offerts', icon: '🎓' },
    { id: 'structure', label: 'Structure de la Formation', icon: '📐' },
]

function CarteSection({ icon, label, onClick, actif }) {
    return (
        <div
            onClick={onClick}
            style={{
                background: actif ? 'var(--primary)' : 'var(--primary-light)',
                color: '#fff',
                borderRadius: 12,
                padding: '2rem 1rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: actif ? '3px solid var(--accent)' : '3px solid transparent',
                boxShadow: actif ? 'var(--shadow-lg)' : 'var(--shadow)',
                transform: actif ? 'translateY(-4px)' : 'none',
            }}
            onMouseEnter={e => { if (!actif) e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { if (!actif) e.currentTarget.style.transform = 'none' }}
        >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{icon}</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{label}</div>
        </div>
    )
}

function CarteCours({ cours }) {
    const [ouvert, setOuvert] = useState(false)
    return (
        <div className="card" style={{
            padding: 0,
            marginBottom: '1rem',
            overflow: 'hidden',
            borderLeft: ouvert ? '6px solid var(--primary)' : '6px solid var(--border)'
        }}>
            <div
                onClick={() => setOuvert(!ouvert)}
                style={{
                    padding: '1.25rem 1.75rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: ouvert ? 'var(--bg-alt)' : '#fff',
                    transition: 'background 0.2s'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="badge badge-blue">{cours.credits}</span>
                    <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>{cours.titre}</span>
                </div>
                <span style={{
                    color: 'var(--primary)',
                    fontSize: '1.2rem',
                    transition: 'transform 0.3s',
                    transform: ouvert ? 'rotate(180deg)' : 'none'
                }}>▼</span>
            </div>

            {ouvert && (
                <div style={{ padding: '2rem', background: '#fff', borderTop: '1px solid var(--border)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                        <div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>🎯 Objectifs pédagogiques</div>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.8 }}>{cours.objectif}</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>📖 Contenu du programme</div>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.8 }}>{cours.contenu}</p>
                        </div>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ℹ️ Informations clés</div>
                            <div style={{ display: 'grid', gap: '0.75rem' }}>
                                <div style={{ fontSize: '0.88rem' }}><strong>Volume Horaire :</strong> {cours.volume}</div>
                                <div style={{ fontSize: '0.88rem' }}><strong>Prérequis :</strong> {cours.prerequis}</div>
                                <div style={{ fontSize: '0.88rem' }}><strong>Équipe Enseignante :</strong> {cours.profs}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// ===================== PAGE PRINCIPALE =====================

export default function DepartementNTIC() {
    const [section, setSection] = useState('debouches')

    return (
        <>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: 480,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--primary)'
            }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)', zIndex: 1 }} />
                <div className="container" style={{ position: 'relative', zIndex: 10, color: '#fff' }}>
                    <span className="badge badge-blue" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', marginBottom: '1.5rem' }}>Spécialisation d'Excellence</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', marginBottom: '1.5rem', fontWeight: 900, lineHeight: 1.1 }}>
                        Département NTIC
                    </h1>
                    <p style={{ opacity: 0.8, maxWidth: 650, fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                        Maîtrisez les architectures réseaux, la cybersécurité et le Cloud Computing pour devenir un architecte du monde numérique de demain.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.25rem', borderRadius: 999, fontSize: '0.85rem', fontWeight: 600 }}>🎓 Licence — 3 ans</span>
                        <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.25rem', borderRadius: 999, fontSize: '0.85rem', fontWeight: 600 }}>📚 Master — 2 ans</span>
                        <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.25rem', borderRadius: 999, fontSize: '0.85rem', fontWeight: 600 }}>🏛️ Doctorat</span>
                    </div>
                </div>
            </section>

            {/* Navigation Tiles (Blue Tiles) */}
            <section style={{ background: 'var(--primary)', padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {sections.map(s => (
                            <CarteSection
                                key={s.id}
                                icon={s.icon}
                                label={s.label}
                                actif={section === s.id}
                                onClick={() => setSection(s.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Content */}
            <section className="section" style={{ background: 'var(--bg-alt)' }}>
                <div className="container">

                    {/* ── Débouchés ── */}
                    {section === 'debouches' && (
                        <div>
                            <div style={{ marginBottom: '4rem' }}>
                                <span className="badge badge-blue">Carrières</span>
                                <h2 className="section-title">Métiers & Opportunités</h2>
                                <p className="section-sub">Les diplômés NTIC occupent des postes clés au cœur de la transformation numérique des entreprises.</p>
                            </div>
                            <div className="grid-2">
                                {debouches.map(d => (
                                    <div key={d.titre} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <div style={{ fontSize: '2.5rem', background: 'var(--primary-pale)', width: 64, height: 64, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{d.icon}</div>
                                        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>{d.titre}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="card" style={{ background: 'var(--primary)', color: '#fff', marginTop: '3rem', textAlign: 'center' }}>
                                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>📈 Poursuite de Cursus</h3>
                                <p style={{ opacity: 0.8, maxWidth: 800, margin: '0 auto' }}>
                                    Nos diplômés de licence ont un accès privilégié à nos programmes de <strong>Master en Intelligence Artificielle</strong> et en <strong>Réseaux Mobiles</strong>, ainsi qu'aux parcours de doctorat.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* ── Admission ── */}
                    {section === 'admission' && (
                        <div>
                            <div style={{ marginBottom: '4rem' }}>
                                <span className="badge badge-blue">Candidature</span>
                                <h2 className="section-title">Admission & Inscription</h2>
                                <p className="section-sub">Rejoignez l'un des départements les plus prestigieux de l'université.</p>
                            </div>
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {admission.map((a, i) => (
                                    <div key={i} className="card" style={{ borderLeft: '8px solid var(--primary)' }}>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                            <span style={{ color: 'var(--primary-light)' }}>{['01', '02', '03', '04'][i]}</span>
                                            {a.titre}
                                        </h3>
                                        <p style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>{a.contenu}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── Programmes ── */}
                    {section === 'programmes' && (
                        <div>
                            <div style={{ marginBottom: '4rem' }}>
                                <span className="badge badge-blue">Formation</span>
                                <h2 className="section-title">Certifications & Diplômes</h2>
                                <p className="section-sub">Un parcours académique complet, de la Licence au Doctorat.</p>
                            </div>
                            <div className="grid-3">
                                {programmes.map(p => (
                                    <div key={p.titre} className="card" style={{ textAlign: 'center', borderTop: `8px solid ${p.couleur}` }}>
                                        <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{p.icon}</div>
                                        <h3 style={{ color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>{p.titre}</h3>
                                        <p style={{ color: 'var(--text-light)', fontWeight: 600 }}>{p.duree}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── Structure ── */}
                    {section === 'structure' && (
                        <div>
                            <div style={{ marginBottom: '4rem' }}>
                                <span className="badge badge-blue">Syllabus</span>
                                <h2 className="section-title">Cheminement Académique</h2>
                                <p className="section-sub">Détails des unités d'enseignement pour les 6 semestres de licence.</p>
                            </div>
                            {semestres.map(niveau => (
                                <div key={niveau.niveau} style={{ marginBottom: '5rem' }}>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem'
                                    }}>
                                        <div style={{ width: 48, height: 48, background: 'var(--primary)', color: '#fff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem' }}>
                                            {niveau.niveau.split(' ')[1]}
                                        </div>
                                        <h3 style={{ fontSize: '2rem', fontFamily: '"DM Sans", sans-serif', fontWeight: 800 }}>{niveau.niveau}</h3>
                                    </div>
                                    {niveau.semestres.map(sem => (
                                        <div key={sem.num} style={{ marginBottom: '3rem' }}>
                                            <div className="badge badge-blue" style={{ marginBottom: '1.5rem', padding: '0.5rem 1.5rem' }}>{sem.num}</div>
                                            {sem.cours.map(c => <CarteCours key={c.titre} cours={c} />)}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Final */}
            <section className="section" style={{ background: 'var(--primary)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>Prêt à concevoir le futur ?</h2>
                    <p style={{ opacity: 0.7, maxWidth: 600, margin: '0 auto 3rem' }}>
                        Inscrivez-vous dès maintenant pour la prochaine rentrée académique au Département NTIC.
                    </p>
                    <Link to="/contact" className="btn" style={{ background: 'var(--accent)', color: '#000', padding: '1rem 3rem', fontWeight: 800 }}>
                        Postuler en ligne
                    </Link>
                </div>
            </section>
        </>
    )
}
