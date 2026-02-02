import React from 'react';
import { motion } from 'framer-motion';
import { RESOURCES_DATA } from '../data/static_data';

const Resources = () => {
  const cblPhases = [
    {
      title: 'Engage',
      sections: [
        {
          subtitle: 'Problem & Context',
          content: 'Cryptocurrencies are digital assets powered by blockchain technology that enable peer-to-peer transactions without relying on traditional banks. While this innovation has transformed financial systems, it has also introduced major risks.\n\nIn 2025, crypto-related fraud reached alarming levels, with over $17 billion lost to crypto scams and $1.5 billion stolen through major exchange hacks, highlighting the urgent need for better monitoring and protection mechanisms.'
        },
        {
          subtitle: '💡 Big Idea',
          content: 'Cryptocurrency'
        },
        {
          subtitle: '❓ Essential Question',
          content: 'How can data analytics optimize crypto trading while detecting fraud and money laundering?'
        },
        {
          subtitle: '⚙️ Challenges',
          content: 'Managing real-time analysis of massive crypto transactions to optimize trading decisions while minimizing false alerts and detecting fraud, market manipulation, and money laundering remains a critical challenge in a highly volatile environment.'
        },
        {
          subtitle: '🌍 Sustainable Development Goals (SDGs)',
          content: 'This challenge directly contributes to several UN Sustainable Development Goals:\n\n• SDG 1 – No Poverty: Protecting individuals from financial fraud.\n• SDG 8 – Decent Work and Economic Growth: Supporting safer and more transparent digital economies.\n• SDG 9 – Industry, Innovation and Infrastructure: Encouraging responsible financial innovation.\n• SDG 10 – Reduced Inequalities: Limiting exploitation in unregulated financial systems.\n• SDG 17 – Partnerships for the Goals: Promoting collaboration between technology experts and institutions.'
        },
        {
          subtitle: '🤝 Our Partners',
          content: 'To ground our challenge in real-world expertise, we collaborate with:\n\n• Dar Blockchain, a blockchain innovation hub.\n• Hamza Mosli (@cryptounsy), a crypto expert and educator actively engaged in raising awareness around crypto risks and best practices.'
        }
      ],
      file: '/resources/engage_phase.pdf'
    },
    {
      title: 'Investigate',
      desc: 'Once the challenge is defined, the focus shifts to research and exploration. This phase involves asking critical questions and gathering data through rigorous analysis.',
      file: '#'
    },
    {
      title: 'Act',
      desc: 'The insights gained in the investigation phase are applied to create practical, impactful solutions. This stage involves designing, refining, and implementing meaningful interventions.',
      file: '#'
    }
  ];

  return (
    <div className="resources-page container">
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
            It encourages learners to identify high-impact problems, research them deeply, and implement real solutions.
          </p>
          <img
            src="/cbl-phases.png"
            alt="CBL Phases"
            className="cbl-image"
            style={{
              width: '100%',
              maxWidth: '800px',
              margin: '2rem auto',
              display: 'block',
              borderRadius: '24px',
              border: '1px solid rgba(45, 205, 132, 0.2)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          />
        </motion.div>
      </div>

      <div className="cbl-phases-vertical">
        {cblPhases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass-card phase-card-vertical"
          >
            <div className="phase-header">
              <h3>{phase.title} Phase</h3>
              <div className="phase-number">0{index + 1}</div>
            </div>

            <div className="phase-content">
              {phase.sections ? (
                <div className="phase-sections">
                  {phase.sections.map((section, sIndex) => (
                    <div key={sIndex} className="phase-section">
                      <h4>{section.subtitle}</h4>
                      <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{phase.desc}</p>
              )}
            </div>

            <div className="phase-footer">
              <a
                href={phase.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-green-modern ${phase.file === '#' ? 'disabled' : ''}`}
                onClick={(e) => phase.file === '#' && e.preventDefault()}
              >
                {phase.file === '#' ? 'Coming Soon' : 'View Presentation (PDF)'}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
