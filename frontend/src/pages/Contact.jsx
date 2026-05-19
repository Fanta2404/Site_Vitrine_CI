import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })
    const [envoye, setEnvoye] = useState(false)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
        // TODO: connecter avec l'API Django
        console.log('Message envoyé:', form)
        setEnvoye(true)
        setForm({ nom: '', email: '', sujet: '', message: '' })
        setTimeout(() => setEnvoye(false), 4000)
    }

    return (
        <>
            <section style={{ background: 'var(--vert-pale)', padding: '4rem 0 2rem' }}>
                <div className="container">
                    <span className="badge badge-vert" style={{ marginBottom: '1rem' }}>Contact</span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>Contactez-nous</h1>
                    <p style={{ color: 'var(--gris)', maxWidth: 520 }}>Une question sur nos formations ? Écrivez-nous, nous vous répondrons dans les plus brefs délais.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', alignItems: 'start' }}>

                        {/* Infos contact */}
                        <div>
                            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Nos coordonnées</h2>
                            {[
                                { icon: '📍', titre: 'Adresse', val: 'Université Gamal Abdel Nasser\nConakry, République de Guinée' },
                                { icon: '✉️', titre: 'Email', val: 'centre-info@uganc.edu.gn' },
                                { icon: '📞', titre: 'Téléphone', val: '+224 000 000 000' },
                                { icon: '🕐', titre: 'Horaires', val: 'Lundi – Vendredi\n08h00 – 17h00' },
                            ].map(c => (
                                <div key={c.titre} className="card" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '1.5rem' }}>{c.icon}</div>
                                    <div>
                                        <div style={{ fontWeight: 600, color: 'var(--vert)', fontSize: '0.88rem', marginBottom: '0.2rem' }}>{c.titre}</div>
                                        <div style={{ color: 'var(--gris)', fontSize: '0.88rem', whiteSpace: 'pre-line' }}>{c.val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Formulaire */}
                        <div className="card">
                            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Envoyer un message</h2>

                            {envoye && (
                                <div style={{ background: 'var(--vert-pale)', border: '1px solid var(--vert)', color: 'var(--vert)', padding: '0.75rem 1rem', borderRadius: 8, marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                                    ✅ Message envoyé avec succès ! Nous vous répondrons bientôt.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.4rem' }}>Nom complet *</label>
                                        <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Ex: Mamadou Diallo"
                                            style={{ width: '100%', padding: '0.6rem 0.85rem', border: '1px solid var(--border)', borderRadius: 8, fontSize: '0.9rem', fontFamily: 'DM Sans, sans-serif', outline: 'none' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.4rem' }}>Email *</label>
                                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="exemple@mail.com"
                                            style={{ width: '100%', padding: '0.6rem 0.85rem', border: '1px solid var(--border)', borderRadius: 8, fontSize: '0.9rem', fontFamily: 'DM Sans, sans-serif', outline: 'none' }} />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.4rem' }}>Sujet *</label>
                                    <input name="sujet" value={form.sujet} onChange={handleChange} required placeholder="Ex: Inscription licence NTIC"
                                        style={{ width: '100%', padding: '0.6rem 0.85rem', border: '1px solid var(--border)', borderRadius: 8, fontSize: '0.9rem', fontFamily: 'DM Sans, sans-serif', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.4rem' }}>Message *</label>
                                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Votre message..."
                                        style={{ width: '100%', padding: '0.6rem 0.85rem', border: '1px solid var(--border)', borderRadius: 8, fontSize: '0.9rem', fontFamily: 'DM Sans, sans-serif', outline: 'none', resize: 'vertical' }} />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>
                                    Envoyer le message ✉️
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
