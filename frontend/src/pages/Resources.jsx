import React from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
  const cblPhases = [
    {
      title: 'Engage',
      number: '01',
      description: 'The journey begins by connecting with the challenge and understanding its impact.',
      file: '/resources/engage_phase.pdf'
    },
    {
      title: 'Investigate',
      number: '02',
      description: 'Conducting in-depth research and validation to find sustainable solutions.',
      desc: 'Once the challenge is defined, the focus shifts to research and exploration. This phase involves asking critical questions and gathering data through rigorous analysis.',
      file: '#'
    },
    {
      title: 'Act',
      number: '03',
      description: 'Executing solutions and evaluating their real-world impact.',
      desc: 'The insights gained in the investigation phase are applied to create practical, impactful solutions. This stage involves designing, refining, and implementing meaningful interventions.',
      file: '#'
    }
  ];

  const sdgs = [
    { id: 1, src: '/sdg/sdg1.png', alt: 'No Poverty' },
    { id: 8, src: '/sdg/sdg8.png', alt: 'Decent Work' },
    { id: 9, src: '/sdg/sdg9.png', alt: 'Industry & Innovation' },
    { id: 10, src: '/sdg/sdg10.png', alt: 'Reduced Inequalities' },
    { id: 17, src: '/sdg/sdg17.png', alt: 'Partnerships' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <div className="resources-page container">
      {/* Introduction */}
      <div className="cbl-intro">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="cbl-main-title">Challenge Based Learning</h1>
          <h2 className="cbl-subtitle">What is Challenge-Based Learning (CBL)?</h2>
          <p className="cbl-description">
            Challenge-Based Learning is an educational and problem-solving approach centered on tackling real-world challenges.
          </p>
          <img
            src="/cbl-phases-green.png"
            alt="CBL Phases"
            className="cbl-image"
            style={{
              width: '100%',
              maxWidth: '900px',
              margin: '3rem auto',
              display: 'block',
              borderRadius: '16px',
              border: '1px solid rgba(45, 205, 132, 0.3)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
            }}
          />
        </motion.div>
      </div>

      <div className="cbl-phases-vertical">
        {cblPhases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card phase-card-vertical"
          >
            <div className="phase-header-premium">
              <div className="phase-title-container">
                <h3 className="phase-title">{phase.title} Phase</h3>
                <p className="phase-description-premium">{phase.description}</p>
              </div>
              <div className="phase-number-side">{phase.number}</div>
            </div>

            <div className="phase-content">
              {phase.title === 'Engage' ? (
                <motion.div
                  className="engage-flow"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Problem & Context */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Problem & Context</h4>
                    <p className="phase-section-content">
                      In 2025, crypto-related fraud reached alarming levels, with over $17 billion lost to scams,
                      highlighting the urgent need for better monitoring and protection mechanisms.
                    </p>
                  </motion.div>

                  <motion.div className="flow-arrow" variants={arrowVariants}>↓</motion.div>

                  {/* Big Idea */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Big Idea</h4>
                    <p className="phase-section-content" style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
                      Cryptocurrency
                    </p>
                  </motion.div>

                  <motion.div className="flow-arrow" variants={arrowVariants}>↓</motion.div>

                  {/* Essential Question */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Essential Question</h4>
                    <p className="phase-section-content">
                      How can data analytics optimize crypto trading while detecting fraud and money laundering?
                    </p>
                  </motion.div>

                  <motion.div className="flow-arrow" variants={arrowVariants}>↓</motion.div>

                  {/* Challenges */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Challenges</h4>
                    <p className="phase-section-content">
                      Managing real-time analysis of massive crypto transactions to optimize trading decisions while
                      minimizing false alerts and detecting fraud in a highly volatile environment.
                    </p>
                  </motion.div>

                  <motion.div className="flow-arrow" variants={arrowVariants}>↓</motion.div>

                  {/* SDGs */}
                  <motion.div className="sdg-display" variants={itemVariants}>
                    <h4 className="sdg-title">Sustainable Development Goals (SDGs)</h4>
                    <div className="sdg-grid">
                      {sdgs.map((sdg, i) => (
                        <motion.div
                          key={sdg.id}
                          className="sdg-item"
                          variants={{
                            hidden: { scale: 0, opacity: 0 },
                            visible: { scale: 1, opacity: 1, transition: { delay: i * 0.1 } }
                          }}
                        >
                          <img src={sdg.src} alt={sdg.alt} title={sdg.alt} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <p className="phase-desc-main" style={{ marginTop: '1.5rem' }}>{phase.desc}</p>
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
