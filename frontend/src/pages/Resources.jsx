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
      file: '/resources/investigate_phase.pdf'
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
    { id: 8, src: '/sdg/sdg8.png', alt: 'Decent Work' },
    { id: 9, src: '/sdg/sdg9.png', alt: 'Industry & Innovation' },
    { id: 12, src: '/sdg/sdg12.png', alt: 'Responsible Consumption' },
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
              border: '1px solid rgba(59, 130, 246, 0.3)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
              filter: 'hue-rotate(60deg)'
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
                      In 2025, Organizations struggle with fragmented documentation, weak traceability, unclear certification management, and non-standardized structures. Procedures are often updated only before audits, with no reliable system to track versions or responsibilities, leading to inefficiencies and compliance risks.
                    </p>
                  </motion.div>

                  <motion.div className="flow-arrow" variants={arrowVariants}>↓</motion.div>

                  {/* Big Idea */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Big Idea</h4>
                    <p className="phase-section-content" style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
                      Audit & Compliance
                    </p>
                  </motion.div>

                  <motion.div className="flow-arrow" variants={arrowVariants}>↓</motion.div>

                  {/* Essential Question */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Essential Question</h4>
                    <p className="phase-section-content">
                      How can Tunisian organizations ensure continuous integrity and compliance in the face of certification and audit requirements?
                    </p>
                  </motion.div>

                  <motion.div className="flow-arrow" variants={arrowVariants}>↓</motion.div>

                  {/* Challenges */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Challenges</h4>
                    <p className="phase-section-content">
                      manage procedures and documents that enables organizations to monitor and control their practices transparently while ensuring quality, compliance, and successful audits and certifications?                    </p>
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
              ) : phase.title === 'Investigate' ? (
                <motion.div
                  className="investigate-flow"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/*Guiding Questions */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Guiding Questions</h4>
                    <p className="phase-section-content">
                      We framed the core challenge: how to keep organizations continuously audit-ready, automate compliance verification, and design the best architecture to support document, audit, and ISO certification workflows.
                    </p>
                  </motion.div>

                  <motion.div className="flow-arrow" variants={arrowVariants}>↓</motion.div>

                  {/*Question Sections */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Question Sections</h4>
                    <p className="phase-section-content">
                      We structured the investigation across 9 lenses to ensure full coverage:
                      <strong> Business Understanding, User, Technical & AI, Ethics & Security, Legal & Regulatory, Adoption & Trust, Economic & Social, Data , state of the art , study of the existing</strong>
                    </p>
                  </motion.div>

                  <motion.div className="flow-arrow" variants={arrowVariants}>↓</motion.div>

                  {/* Guiding Activities */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Guiding Activities</h4>
                    <div className="phase-section-content">
                      <p>
                        To answer those questions, we conducted professional interviews, benchmarked existing solutions, analyzed real practices and procedures, and assessed the technical feasibility of a multi-agent approach.
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                          <strong>State of the Art:</strong> We reviewed current QMS platforms (Qualipro, ETQ, QCERT360) and identified limits: low customization, weak automation, and missing depth in CAPA & risk management.
                        </li>
                        <li>
                          <strong>Study of the Existing:</strong> We highlighted the real operational pain: dispersed documents, lack of traceability, and manual audit preparation, resulting in high compliance risk.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div className="flow-arrow" variants={arrowVariants}>↓</motion.div>

                  {/* Synthesis */}
                  <motion.div className="flow-step" variants={itemVariants}>
                    <h4 className="phase-section-subtitle">Synthesis</h4>
                    <div className="phase-section-content">
                      <p style={{ marginBottom: '1rem' }}>Our investigation highlights a clear gap between:</p>

                      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li style={{ display: 'flex', gap: '0.75rem' }}>
                          <span style={{ color: 'var(--primary)' }}>•</span>
                          <span><strong>Market gap:</strong> Existing QMS solutions are either too heavy/expensive or too limited in automation, CAPA depth, and risk management.</span>
                        </li>
                        <li style={{ display: 'flex', gap: '0.75rem' }}>
                          <span style={{ color: 'var(--primary)' }}>•</span>
                          <span><strong>Operational reality:</strong> The "study of existing" environment remains highly manual with dispersed documents and poor traceability.</span>
                        </li>
                      </ul>

                      <div style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        padding: '1.25rem',
                        borderRadius: '12px',
                        borderLeft: '4px solid var(--primary)',
                        marginTop: '1.5rem'
                      }}>
                        <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.5rem' }}>Conclusion:</strong>
                        QUALINOVA is positioned as a simple, automated, audit-ready solution powered by a multi-agent architecture that structures evidence collection, compliance evaluation, non-conformity handling, and CAPA—ensuring strong traceability and operational control.
                      </div>
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
