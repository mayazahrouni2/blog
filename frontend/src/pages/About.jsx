import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_DATA } from '../data/team_data';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="section-title">The Node Operators</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Meet our elite team of AI Engineers driving the future of blockchain intelligence.
      </p>

      <div className="team-grid">
        {TEAM_DATA.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card team-card"
          >
            <div className="member-image">
              <img
                src={member.image}
                alt={member.name}
                onError={(e) => {
                  e.target.src = 'https://placehold.co/400x500/0b0b0b/39ff14?text=AI+Engineer';
                }}
              />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <span className="role">{member.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;

