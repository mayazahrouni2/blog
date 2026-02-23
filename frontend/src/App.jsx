import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Partners from './pages/Partners';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <div className="bg-grain"></div>
      <div className="bg-grid"></div>
      <Navbar />
      <main className="container" style={{ padding: '2rem 0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pvs" element={<Posts />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
      <footer style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
        <p>© 2026 QUALINOVA. AI-Powered Compliance Management.</p>
      </footer>
    </Router>
  );
}

export default App;
