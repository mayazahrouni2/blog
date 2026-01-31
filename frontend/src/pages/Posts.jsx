import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';
import { PVS_DATA } from '../data/pvs_data';

const Posts = () => {
  return (
    <div className="posts-page">
      <h1 className="section-title">Project Repository: PVs</h1>

      <div className="posts-list" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {PVS_DATA.length > 0 ? PVS_DATA.map((post) => (
          <motion.div
            layout
            key={post.id}
            className="pv-card-dark"
          >
            <div className="pv-meta">
              <div className="pv-meta-item">
                <FileText size={18} color="var(--primary)" /> <span>PV</span>
              </div>
              <div className="pv-meta-item">
                <Calendar size={18} color="var(--primary)" />
                {new Date(post.meeting_date).toLocaleDateString('fr-FR')}
              </div>
            </div>

            <h2 className="pv-title">{post.title}</h2>

            <p className="pv-description">
              {post.summary || (post.content ? post.content.substring(0, 300) + '...' : 'No summary available.')}
            </p>

            <div style={{ textAlign: 'center' }}>
              {post.file ? (
                <a
                  href={post.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green-modern"
                >
                  Read PDF
                </a>
              ) : (
                <span className="btn-secondary" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                  No PDF Available
                </span>
              )}
            </div>
          </motion.div>
        )) : (
          <p style={{ textAlign: 'center' }}>Le registre est actuellement vide.</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
