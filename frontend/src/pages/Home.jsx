import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Cpu, Database, Globe, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="hero-title">The Future of <br /> <span>Blockchain Development.</span></h1>
          <p className="hero-subtitle">
            Tracking our team's progress on the chain. Explore meeting PVs,
            technical resources, and our partner ecosystem in a transparent portal.
          </p>
          <div className="hero-actions">
            <NavLink to="/pvs" className="btn-primary">
              View All PVs <ArrowRight size={20} />
            </NavLink>
            <NavLink to="/about" className="btn-secondary">
              The Node Operators
            </NavLink>
          </div>
        </motion.div>
      </section>

      <section className="highlights">
        <h2 className="section-title">Core Protocol</h2>
        <div className="highlights-grid">
          <HighlightCard
            icon={<Cpu size={32} />}
            title="Smart Execution"
            desc="Automated workflows and smart contract logic driving our project efficiency."
          />
          <HighlightCard
            icon={<Database size={32} />}
            title="Immutable Records"
            desc="All meeting PVs and progress reports are stored as permanent project history."
          />
          <HighlightCard
            icon={<Globe size={32} />}
            title="Global Scale"
            desc="Collaborating with international partners across the decentralized web."
          />
        </div>
      </section>
    </div>
  );
};

const HighlightCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-card"
    style={{ padding: '2rem' }}
  >
    <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
      {icon}
    </div>
    <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)' }}>{desc}</p>
  </motion.div>
);

export default Home;
