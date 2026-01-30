import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPVs, BACKEND_URL } from '../services/api';
import { Calendar, X, FileText, ChevronRight } from 'lucide-react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPV, setSelectedPV] = useState(null);

  useEffect(() => {
    getPVs().then(res => {
      setPosts(res.data);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  return (
    <div className="posts-page">
      <h1 className="section-title">Project Repository: PVs</h1>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Synchronizing with the network...</p>
      ) : (
        <div className="posts-list" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {posts.length > 0 ? posts.map((post) => (
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
                  {post.meeting_date ?
                    new Date(post.meeting_date).toLocaleDateString('fr-FR') :
                    new Date(post.created_at).toLocaleDateString('fr-FR')}
                </div>
              </div>

              <h2 className="pv-title">{post.title}</h2>

              <p className="pv-description">
                {post.summary || (post.content ? post.content.substring(0, 300) + '...' : 'No summary available.')}
              </p>

              <div style={{ textAlign: 'center' }}>
                {post.file ? (
                  <a
                    href={post.file.startsWith('http') ? post.file : `${BACKEND_URL}${post.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green-modern"
                  >
                    Read More
                  </a>
                ) : (
                  <button
                    className="btn-green-modern"
                    onClick={() => setSelectedPV(post)}
                  >
                    Read More
                  </button>
                )}
              </div>
            </motion.div>
          )) : (
            <p style={{ textAlign: 'center' }}>The ledger is currently empty.</p>
          )}
        </div>
      )}

      {/* Full Content Modal */}
      <AnimatePresence>
        {selectedPV && (
          <div className="modal-overlay" onClick={() => setSelectedPV(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card modal-content"
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedPV(null)}>
                <X size={24} />
              </button>

              {selectedPV.image && (
                <div className="modal-image">
                  <img
                    src={selectedPV.image.startsWith('http') ? selectedPV.image : `${BACKEND_URL}${selectedPV.image}`}
                    alt={selectedPV.title}
                  />
                </div>
              )}

              <div className="modal-body">
                <div className="post-meta">
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                    <FileText size={14} /> PV
                  </span>
                  <span>
                    <Calendar size={14} /> {selectedPV.meeting_date ? new Date(selectedPV.meeting_date).toLocaleDateString() : new Date(selectedPV.created_at).toLocaleDateString()}
                  </span>
                </div>
                <h2>{selectedPV.title}</h2>
                <div className="full-text">
                  {selectedPV.content.split('\n').map((para, i) => (
                    <p key={i} style={{ marginBottom: '1rem' }}>{para}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Posts;
