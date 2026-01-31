import React from 'react';
import { motion } from 'framer-motion';
import { PARTNERS_DATA } from '../data/static_data';
import { ExternalLink } from 'lucide-react';

const Partners = () => {
    return (
        <div className="partners-page">
            <h1 className="section-title">Our Partners</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem' }}>
                Collaborating with industry leaders to deliver excellence.
            </p>

            <div className="partners-grid">
                {PARTNERS_DATA.map((partner) => (
                    <motion.div
                        key={partner.id}
                        whileHover={{ scale: 1.05 }}
                        className="glass-card partner-card"
                    >
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="partner-logo"
                            onError={(e) => {
                                e.target.src = 'https://placehold.co/200x100/1a1a1a/7dbb33?text=Logo';
                            }}
                        />
                        <h3>{partner.name}</h3>
                        {partner.website && (
                            <a href={partner.website} target="_blank" rel="noopener noreferrer" className="partner-link">
                                Visit Website <ExternalLink size={16} />
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Partners;

