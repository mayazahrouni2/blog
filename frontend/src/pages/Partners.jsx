import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getPartners } from '../services/api';
import { ExternalLink } from 'lucide-react';

const Partners = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPartners().then(res => {
            setPartners(res.data);
            setLoading(false);
        }).catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, []);

    return (
        <div className="partners-page">
            <h1 className="section-title">Our Partners</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem' }}>
                Collaborating with industry leaders to deliver excellence.
            </p>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Loading partners...</p>
            ) : (
                <div className="partners-grid">
                    {partners.length > 0 ? partners.map((partner) => (
                        <motion.div
                            key={partner.id}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card partner-card"
                        >
                            <img
                                src={partner.logo?.startsWith('http') ? partner.logo.replace('http://', 'https://') : `https://blog-backend-lh4a.onrender.com${partner.logo}`}
                                alt={partner.name}
                                className="partner-logo"
                            />
                            <h3>{partner.name}</h3>
                            {partner.website && (
                                <a href={partner.website} target="_blank" rel="noopener noreferrer" className="partner-link">
                                    Visit Website <ExternalLink size={16} />
                                </a>
                            )}
                        </motion.div>
                    )) : (
                        <p style={{ gridColumn: '1/-1', textAlign: 'center' }}>No partners added yet.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Partners;
