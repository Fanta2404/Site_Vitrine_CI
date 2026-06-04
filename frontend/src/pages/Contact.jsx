import { MapPin, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import api from '../api'

export default function Contact() {
    const [formData, setFormData] = useState({ nom: '', email: '', sujet: '', message: '' })
    const [status, setStatus] = useState(null)

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.post('api/contact/', formData)
            setStatus('success')
            setFormData({ nom: '', email: '', sujet: '', message: '' })
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error)
            setStatus('error')
        }
    }

    return (
        <>
            <section style={{ height: 320, display: 'flex', alignItems: 'center', background: 'var(--bleu-fonce)' }}>
                <div className="container">
                    <span className="badge badge-blue" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Assistance</span>
                    <h1 style={{ fontSize: '3.5rem', color: '#fff', marginTop: '1rem', fontWeight: 900 }}>Connectez-vous au C.I</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="layout-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'flex-start' }}>
                        <div>
                            <h2 className="section-title">Prenons contact</h2>
                            <p style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.1rem' }}>Notre équipe pédagogique et administrative est à votre écoute pour toute question.</p>

                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--bleu)' }}><MapPin size={32} /></div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Localisation</div>
                                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)' }}>Dixinn, Conakry 33139</div>
                                    </div>
                                </div>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--bleu)' }}><Mail size={32} /></div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Email</div>
                                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)' }}>direction@ci.edu.gn</div>
                                    </div>
                                </div>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--bleu)' }}><Phone size={32} /></div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Téléphone & Mobile</div>
                                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)' }}>
                                            +224 624 08 45 01<br />
                                            +224 657 99 43 57
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ padding: '3rem' }}>
                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                {status === 'success' && (
                                    <div style={{ padding: '1rem', background: '#d1fae5', color: '#065f46', borderRadius: '8px', fontSize: '0.9rem' }}>
                                        Votre message a bien été envoyé ! Un e-mail de confirmation vous a été envoyé.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div style={{ padding: '1rem', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', fontSize: '0.9rem' }}>
                                        Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.
                                    </div>
                                )}
                                <div className="form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--bleu-fonce)' }}>Nom Complet</label>
                                        <input type="text" name="nom" required value={formData.nom} onChange={handleChange} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-alt)' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--bleu-fonce)' }}>Email</label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleChange} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-alt)' }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--bleu-fonce)' }}>Sujet</label>
                                    <input type="text" name="sujet" required value={formData.sujet} onChange={handleChange} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-alt)' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--bleu-fonce)' }}>Message</label>
                                    <textarea name="message" required value={formData.message} onChange={handleChange} rows="5" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-alt)', resize: 'none' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={status === 'success'} style={{ width: '100%', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    Envoyer le message <Mail size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
