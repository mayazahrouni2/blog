import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getTeam } from '../services/api';

const About = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeam()
      .then(res => {
        setTeam(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching team:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="about-page">
        <h1 className="section-title">The Node Operators</h1>
        <div style={{ textAlign: 'center', color: 'var(--primary-color)' }}>Chargement de l'équipe...</div>
      </div>
    );
  }

  return (
    <div className="about-page">
      <h1 className="section-title">The Node Operators</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Meet our elite team of AI Engineers driving the future of blockchain intelligence.
      </p>

      <div className="team-grid">
        {team.map((member, index) => (
          <motion.div
            key={member.id || member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card team-card"
          >
            <div className="member-image">
              <img
                src={
                  member.image
                    ? (member.image.startsWith('http')
                      ? member.image.replace('http://', 'https://')
                      : `https://blog-backend-lh4a.onrender.com${member.image}`)
                    : 'https://via.placeholder.com/400x500/000000/00ff00?text=AI+Engineer'
                }
                alt={member.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500/000000/00ff00?text=AI+Engineer';
                }}
              />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <span className="role">{member.role || 'AI Engineer'}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
