import React from 'react';

export default function Achievements({ data }) {
  const achievements = data.achievements || [];

  return (
    <div>
      <h2 className="section-title">Achievements</h2>
      <p className="degree-intro">
        A few milestones and learning highlights I’m proud of so far.
      </p>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <article className="achievement-card" key={index}>
            <p className="achievement-badge">Achievement {index + 1}</p>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-text">{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
