import React from 'react';

export default function About({ data }) {
  return (
    <div>
      <h2 className="section-title">About Me</h2>
      <div className="about-text">
        {data.about.map((para, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/(John|student)/g, '<strong>$1</strong>') }} />
        ))}
      </div>

      <div style={{ marginTop: '56px' }}>
        <h2 className="section-title">Tech Stack</h2>
        <p className="tech-intro">
          I work with a broad range of modern web technologies, from frontend and backend development.
        </p>
        <div className="tech-grid">
          {data.techStack.map((tech) => (
            <div key={tech.name} className="tech-item">
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
