import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section style={{
            minHeight: '80vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '3rem 1.5rem'
        }}>
            <div>
                <div style={{
                    fontSize: '8rem', fontFamily: 'Playfair Display, serif',
                    fontWeight: 700, color: 'var(--vert)', lineHeight: 1,
                    marginBottom: '1rem', opacity: 0.15
                }}>404</div>
                <div style={{ marginTop: '-4rem' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                    <h1 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>Page introuvable</h1>
                    <p style={{ color: 'var(--gris)', maxWidth: 420, margin: '0 auto 2rem', lineHeight: 1.8 }}>
                        La page que vous cherchez n'existe pas ou a été déplacée.
                        Revenez à l'accueil pour continuer votre navigation.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/" className="btn btn-primary">← Retour à l'accueil</Link>
                        <Link to="/contact" className="btn btn-outline">Nous contacter</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
