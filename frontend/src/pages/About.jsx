import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const team = [
    { name: 'Amina Boujmil', image: 'Amina Boujmil.jpeg' },
    { name: 'Maya Zahrouni', image: 'Maya Zahrouni.jpg' },
    { name: 'Mohamed Hamza Allani', image: 'Mohamed Hamza Allani.jpg' },
    { name: 'Nour Mokhtar', image: 'Nour Mokhtar.jpg' },
    { name: 'Omar Riahi', image: 'Omar Riahi.jpeg' },
    { name: 'Rania Ben Traki', image: 'Rania Ben Traki.jpeg' }
  ];

  const BACKEND_URL = 'http://localhost:8000/media/team/';

  return (
    <div className="about-page">
      <h1 className="section-title">The Node Operators</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Meet our elite team of AI Engineers driving the future of blockchain intelligence.
      </p>

      <div className="team-grid">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card team-card"
          >
            <div className="member-image">
              <img src={`${BACKEND_URL}${member.image}`} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <span className="role">AI Engineer</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
