import React from 'react';
import { motion } from 'framer-motion';
import { RESOURCES_DATA } from '../data/static_data';

const Resources = () => {
  const cblPhases = [
    {
      title: 'Engage',
      desc: 'The first step is identifying a relevant and meaningful challenge. This challenge should resonate deeply, connecting the project with a broader real-world context.',
      file: '/resources/engage_phase.pdf'
    },
    {
      title: 'Investigate',
      desc: 'Once the challenge is defined, the focus shifts to research and exploration. This phase involves asking critical questions and gathering data.',
      file: '#'
    },
    {
      title: 'Act',
      desc: 'The insights gained in the investigation phase are applied to create practical, impactful solutions. This stage involves designing and refining.',
      file: '#'
    }
  ];

  return (
    <div className="resources-page">
      <div className="cbl-intro">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="cbl-main-title">Challenge Based Learning</h1>
          <h2 className="cbl-subtitle">What is Challenge-Based Learning (CBL)?</h2>
          <p className="cbl-description">
            Challenge-Based Learning is an educational and problem-solving approach centered on tackling real-world challenges.
            At its core, CBL transforms abstract ideas into actionable outcomes by following a practical, structured process.
          </p>
        </motion.div>
      </div>

      <div className="cbl-phases-grid">
        {cblPhases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card phase-card"
          >
            <h3>{phase.title}</h3>
            <p>{phase.desc}</p>
            <a href={phase.file} target="_blank" rel="noopener noreferrer" className="btn-green-modern">
              View Presentation
            </a>
          </motion.div>
        ))}
      </div>

      <div className="extra-resources" style={{ marginTop: '4rem' }}>
        <h2 className="section-title">Additional Resources</h2>
        <div className="partners-grid">
          {RESOURCES_DATA.map(resource => (
            <div key={resource.id} className="glass-card" style={{ padding: '1.5rem' }}>
              <h3>{resource.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{resource.description}</p>
              <a href={resource.file} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;

