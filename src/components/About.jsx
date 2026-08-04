import './About.css'

const SKILLS = [
  'JavaScript (ES6+)', 'Node.js', 'React.js', 'Vue.js', 'Angular.js',
  'PHP', 'HTML/CSS', 'AWS', 'Docker', 'Git', 'Webpack', 'Playwright',
]

const HIGHLIGHTS = [
  { value: '15+', label: 'Years of experience' },
  { value: '3', label: 'Global organizations' },
  { value: '26', label: 'Countries shipped to' },
  { value: '40%+', label: 'Automation coverage built from zero' },
]

export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-hero">
          <div className="about-badge" role="status" aria-live="polite">
            <span aria-hidden="true" className="about-badge-dot" />
            Available for opportunities
          </div>
          <h1 id="about-heading" className="about-name">
            Lucy <span className="about-name-paren">(Meng-Chun)</span> Hsieh
          </h1>
          <p className="about-title">
            Staff-Level Frontend · Engineering Management · Technical Program Leadership
          </p>
          <p className="about-summary">
            15+ years driving engineering excellence and large-scale product delivery
            across global organizations. I build high-performing teams, modernize
            platforms, and align engineering execution with business strategy —
            from individual contributor to leading cross-functional teams of engineers,
            designers, and PMs.
          </p>
          <div className="about-links" role="list">
            <a href="mailto:njdhsieh@gmail.com" className="btn btn-primary" role="listitem">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Get in touch
            </a>
            <a href="https://www.linkedin.com/in/njdhsieh/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" role="listitem" aria-label="Visit Lucy's LinkedIn profile (opens in new tab)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/njdhsieh" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" role="listitem" aria-label="Visit Lucy's GitHub profile (opens in new tab)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
            <a href="#experience" className="btn btn-ghost" role="listitem">
              View experience
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>

        <dl className="about-stats" aria-label="Career highlights">
          {HIGHLIGHTS.map(({ value, label }) => (
            <div key={label} className="stat-card">
              <dt className="stat-label">{label}</dt>
              <dd className="stat-value">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="about-skills">
          <h2 className="section-label" id="skills-heading">Tech Stack</h2>
          <ul className="skills-grid" aria-labelledby="skills-heading">
            {SKILLS.map(skill => (
              <li key={skill} className="skill-tag">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
