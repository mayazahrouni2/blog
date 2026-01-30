import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Coins, Users, FileText, Download, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'About Us', path: '/about', icon: <Users size={18} /> },
    { name: 'PVs', path: '/pvs', icon: <FileText size={18} /> },
    { name: 'Partners', path: '/partners', icon: <Briefcase size={18} /> },
    { name: 'Resources', path: '/resources', icon: <Download size={18} /> },
  ];

  return (
    <nav className="glass-nav">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <Coins className="logo-icon" />
          <span>CRYPTO LEDGER</span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="mobile-link"
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
