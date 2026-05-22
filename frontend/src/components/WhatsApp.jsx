export default function WhatsApp() {
    const numero = '224000000000' // ← remplace par le vrai numéro
    const message = encodeURIComponent('Bonjour, je souhaite avoir des informations sur les formations du Centre Informatique UGANC.')
    const lien = `https://wa.me/${numero}?text=${message}`

    return (
        <a
            href={lien}
            target="_blank"
            rel="noopener noreferrer"
            title="Contacter sur WhatsApp"
            className="btn-whatsapp"
            style={{
                position: 'fixed', bottom: '1.5rem', right: '1.5rem',
                width: 52, height: 52,
                background: '#25d366', color: '#fff',
                borderRadius: '50%', zIndex: 999,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                animation: 'pulse-wa 2s infinite'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)' }}
        >
            <style>{`
        @keyframes pulse-wa {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45); }
          50% { box-shadow: 0 4px 30px rgba(37,211,102,0.7); }
        }
      `}</style>
            💬
        </a>
    )
}
