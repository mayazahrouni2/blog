import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getResources, BACKEND_URL, getMediaURL } from '../services/api';
import { Download, FileText, Share2 } from 'lucide-react';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResources().then(res => {
      setResources(res.data);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const cblPhases = [
    {
      title: 'Engage',
      desc: 'The first step is identifying a relevant and meaningful challenge. This challenge should resonate deeply, connecting the project with a broader real-world context. The objective is to inspire curiosity and a sense of purpose, motivating deeper engagement throughout the project.',
      file: getMediaURL('media/pvs/engage_phase1.pdf')
    },
    {
      title: 'Investigate',
      desc: 'Once the challenge is defined, the focus shifts to research and exploration. This phase involves asking critical questions, gathering data, analyzing existing solutions, and identifying potential gaps. This investigative process doesn’t only provide a clearer understanding of the problem—it often uncovers new opportunities for innovation.',
      file: '#'
    },
    {
      title: 'Act',
      desc: 'The insights gained in the investigation phase are applied to create practical, impactful solutions. This stage involves designing, implementing, testing, and refining a product, system, or tool that addresses the challenge. It also emphasizes sharing the outcomes with others to foster further learning and collaboration.',
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
            Unlike traditional methods that focus primarily on acquiring theoretical knowledge, CBL emphasizes learning through action and collaboration.
            <br /><br />
            The process unfolds in three main stages, each designed to maximize engagement, exploration, and impact:
          </p>

          <img src="/cbl-phases.png" alt="CBL Phases" className="cbl-image" />
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


    </div>
  );
};

export default Resources;
