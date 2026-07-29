import './Projects.css'

const PROJECTS = [
  {
    title: 'Yahoo International Homepage Platform',
    company: 'Yahoo! Inc.',
    tags: ['Node.js', 'React', 'PHP', 'Team Leadership'],
    description:
      'Led engineering for 16 international Yahoo homepage versions across 26 countries. Owned the full tech refresh — migrating legacy PHP systems to a unified Node.js/React architecture. Decommissioned 8 legacy editions while maintaining zero-downtime delivery.',
    highlights: ['26 countries', 'PHP → Node.js migration', 'Olympic & Ukraine war special pages'],
    type: 'Platform Engineering',
  },
  {
    title: 'Playwright Automation Framework',
    company: 'Rhinoshield',
    tags: ['Playwright', 'Testing', 'CI/CD', 'QA Automation'],
    description:
      'Built Rhinoshield\'s first end-to-end automation testing framework from scratch using Playwright. Achieved 40%+ regression coverage, significantly accelerating QA cycles for new product and device launches.',
    highlights: ['40%+ coverage', 'From zero to production', 'Accelerated QA cycles'],
    type: 'Engineering Infrastructure',
  },
  {
    title: 'Ditto Desktop Platform',
    company: 'Rhinoshield',
    tags: ['Product Leadership', 'Shopify API', 'SDK', 'UI/UX'],
    description:
      'Led product and engineering for the Ditto personalized desktop platform. Drove a major tech refresh replacing deprecated Shopify APIs with a custom in-house Cart Sharing SDK, improving system extensibility and user experience.',
    highlights: ['Cart Sharing SDK', 'Shopify API migration', 'Cross-functional team of 4'],
    type: 'Product & Engineering',
  },
  {
    title: 'Panasonic Smart TV Web App',
    company: 'KKCompany',
    tags: ['React.js', 'Flux', 'ES6', 'Smart TV'],
    description:
      'Developed Panasonic\'s Smart TV web application at KKStream using React.js, Flux, and ES6. One of the early adoptions of React in a production consumer electronics context in Taiwan.',
    highlights: ['React + Flux', 'Smart TV platform', 'Early React adopter in TW'],
    type: 'Frontend Engineering',
  },
  {
    title: 'Yahoo Global News',
    company: 'Yahoo! Inc.',
    tags: ['Node.js', 'PHP', 'Personalization', 'Scrum'],
    description:
      'Built Yahoo Global News from scratch — a high-traffic, personalized news product serving cross-region audiences. The project won the 2011 Yahoo Super Star Award. Led the project as Scrum Master and principal engineer.',
    highlights: ['2011 Yahoo Super Star Award', 'Built from scratch', 'Cross-region delivery'],
    type: 'Frontend Engineering',
  },
  {
    title: 'KKStream B2B OTT Platform',
    company: 'KKCompany',
    tags: ['PHP (Laravel)', 'Angular.js', 'B2B', 'Japan OTT'],
    description:
      'Led the Japan OTT service launch and B2B video service platform development. Managed 11 developers across Web, iOS, Android, API, and QA. Built scalable health guild system across multiple platforms.',
    highlights: ['Japan OTT launch', '11-person team', 'Multi-platform delivery'],
    type: 'Platform Engineering',
  },
]

const TYPE_COLORS = {
  'Platform Engineering': '#7c6af7',
  'Engineering Infrastructure': '#4ade80',
  'Product & Engineering': '#f59e0b',
  'Frontend Engineering': '#38bdf8',
  'Full-Stack Engineering': '#f472b6',
}

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Work</span>
          <h2 className="section-title">Key Projects</h2>
          <p className="section-desc">
            Selected initiatives across engineering leadership, platform architecture, and product delivery.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-top">
                <span
                  className="project-type"
                  style={{ color: TYPE_COLORS[project.type] || 'var(--accent)' }}
                >
                  {project.type}
                </span>
                <span className="project-company">{project.company}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((h, j) => (
                  <span key={j} className="highlight-tag">{h}</span>
                ))}
              </div>

              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
