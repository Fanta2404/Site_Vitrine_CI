export default function Contact() {
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
                                    <div style={{ fontSize: '2rem' }}>📍</div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Localisation</div>
                                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)' }}>Dixinn, Conakry 33139</div>
                                    </div>
                                </div>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ fontSize: '2rem' }}>✉️</div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Email</div>
                                        <div style={{ fontWeight: 700, color: 'var(--bleu-fonce)' }}>direction@ci.edu.gn</div>
                                    </div>
                                </div>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ fontSize: '2rem' }}>📞</div>
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
                            <form style={{ display: 'grid', gap: '1.5rem' }}>
                                <div className="form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--bleu-fonce)' }}>Nom Complet</label>
                                        <input type="text" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-alt)' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--bleu-fonce)' }}>Email</label>
                                        <input type="email" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-alt)' }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--bleu-fonce)' }}>Sujet</label>
                                    <input type="text" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-alt)' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--bleu-fonce)' }}>Message</label>
                                    <textarea rows="5" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-alt)', resize: 'none' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>Envoyer le message ✉️</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
