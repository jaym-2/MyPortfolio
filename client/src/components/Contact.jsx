import React from 'react';

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.5 21v-8h2.7l.4-3H13.5V3.8c0-.9.2-1.5 1.5-1.5h1.6V.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.4v8h3.1z"/>
  </svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export default function Contact({ data }) {
  return (
    <div>
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">
        I'm always open to interesting projects, collaborations, or just a good conversation about tech. Feel free to reach out through any of the channels below.
      </p>
      <div className="contact-links">
        <a className="contact-link" href={`mailto:${data.contact.email}`}>
          <EmailIcon />
          <span className="contact-link-label">{data.contact.email}</span>
        </a>
        <a className="contact-link" href={data.contact.facebook} target="_blank" rel="noreferrer">
          <FacebookIcon />
          <span className="contact-link-label">Facebook</span>
        </a>
        <a className="contact-link" href={data.contact.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
          <span className="contact-link-label">GitHub</span>
        </a>
      </div>
    </div>
  );
}
