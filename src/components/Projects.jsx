import { useTranslation } from 'react-i18next'
import './Projects.css'

const TYPE_COLORS = {
  'Platform Engineering':        '#7c6af7',
  'Engineering Infrastructure':  '#4ade80',
  'Product & Engineering':       '#f59e0b',
  'Frontend Engineering':        '#38bdf8',
  'Full-Stack Engineering':      '#f472b6',
  '平台工程':    '#7c6af7',
  '工程基礎建設': '#4ade80',
  '產品與工程':  '#f59e0b',
  '前端工程':    '#38bdf8',
  '全端工程':    '#f472b6',
}

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true })

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label" aria-hidden="true">{t('projects.label')}</span>
          <h2 id="projects-heading" className="section-title">{t('projects.title')}</h2>
          <p className="section-desc">{t('projects.desc')}</p>
        </div>

        <ul className="projects-grid" aria-label="Key projects">
          {items.map((project, i) => (
            <li key={i} className="project-card">
              <div className="project-top">
                <span
                  className="project-type"
                  style={{ color: TYPE_COLORS[project.type] || 'var(--accent)' }}
                  aria-label={`${t('projects.categoryLabel')}: ${project.type}`}
                >
                  {project.type}
                </span>
                <span className="project-company" aria-label={`${t('projects.companyLabel')}: ${project.company}`}>
                  {project.company}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="project-highlights" aria-label={t('projects.highlightsLabel')}>
                {project.highlights.map((h, j) => <li key={j} className="highlight-tag">{h}</li>)}
              </ul>
              <ul className="project-tags" aria-label={t('projects.techLabel')}>
                {project.tags.map((tag, j) => <li key={j} className="tech-tag">{tag}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
