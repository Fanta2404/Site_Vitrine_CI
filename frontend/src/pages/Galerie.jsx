const images = [
    { url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', cat: 'Formation' },
    { url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', cat: 'Infrastructure' },
    { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', cat: 'Vivre au CI' },
    { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80', cat: 'Formation' },
    { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80', cat: 'Infrastructure' },
    { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80', cat: 'Digital' },
]

export default function Galerie() {
    return (
        <>
            <section style={{ height: 320, display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, var(--bleu-fonce) 0%, var(--bleu) 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -50, right: -50, width: 300, height: 300, background: 'rgba(212,160,23,0.1)', borderRadius: '50%' }} />
                <div className="container">
                    <span className="badge badge-blue" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Portfolio</span>
                    <h1 style={{ fontSize: '3.5rem', color: '#fff', marginTop: '1rem', fontWeight: 900 }}>Focus & Vision</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ columns: '3 250px', gap: '1.5rem' }}>
                        {images.map((img, i) => (
                            <div key={i} className="card" style={{ padding: 0, overflow: 'hidden', breakInside: 'avoid', marginBottom: '1.5rem', border: 'none' }}>
                                <div style={{ position: 'relative', overflow: 'hidden' }}>
                                    <img src={img.url} alt={img.cat} style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s' }} />
                                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem' }}>
                                        <span className="badge badge-blue" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', color: 'var(--bleu-fonce)' }}>{img.cat}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
