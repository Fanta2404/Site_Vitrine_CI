import React from 'react';

const Card = ({ title, description, icon, link, className = "" }) => {
    return (
        <div className={`bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 border border-slate-100 group ${className}`}>
            {icon && (
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
            {link && (
                <a href={link} className="inline-flex items-center text-indigo-600 font-semibold hover:gap-2 transition-all">
                    En savoir plus
                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            )}
        </div>
    );
};

export default Card;
