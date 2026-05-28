import React from 'react';

export default function Degree({ data }) {
  return (
    <div>
      <h2 className="section-title">Degree</h2>
      <p className="degree-intro">
        My current academic background and focus areas.
      </p>
      <div className="degree-grid">
        <article className="degree-card">
          <p className="degree-label">Program</p>
          <h3 className="degree-title">{data.degree.program}</h3>
          <p className="degree-school">{data.degree.school}</p>
          <p className="degree-year">{data.degree.year}</p>
          <p className="degree-note">{data.degree.note}</p>
        </article>
      </div>
    </div>
  );
}
