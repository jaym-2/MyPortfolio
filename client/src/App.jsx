import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Degree from './components/Degree';
import Contact from './components/Contact';

function App() {
  const [data, setData] = useState(null);
  const [activeSection, setActiveSection] = useState('about');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'degree', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return (
    <div className="loading-screen">
      <div className="loading-dot"></div>
    </div>
  );

  if (!data) return <div className="loading-screen"><p>Could not load data.</p></div>;

  return (
    <div className="app">
      <Sidebar data={data} activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <section id="about"><About data={data} /></section>
        <section id="degree"><Degree data={data} /></section>
        <section id="contact"><Contact data={data} /></section>
      </main>
    </div>
  );
}

export default App;
