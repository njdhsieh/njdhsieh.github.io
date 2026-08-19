import { useTranslation } from 'react-i18next'
import './Experience.css'

export default function Experience() {
  const { t } = useTranslation()
  const jobs = t('experience.jobs', { returnObjects: true })

  return (
    <section id="experience" className="experience section" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label" aria-hidden="true">{t('experience.label')}</span>
          <h2 id="experience-heading" className="section-title">{t('experience.title')}</h2>
          <p className="section-desc">{t('experience.desc')}</p>
        </div>

        <ol className="timeline" aria-label="Work history">
          {jobs.map((job, i) => (
            <li key={i} className="timeline-company">
              <div className="timeline-company-header">
                <div className="timeline-dot" aria-hidden="true" />
                <div>
                  <span className="timeline-company-name">{job.company}</span>
                  <span className="timeline-company-period">
                    <span className="sr-only">, </span>{job.period}
                  </span>
                </div>
              </div>
              <div className="timeline-roles">
                {job.roles.map((role, j) => (
                  <article key={j} className="role-card">
                    <div className="role-header">
                      <h3 className="role-title">{role.title}</h3>
                      <time className="role-period">{role.period}</time>
                    </div>
                    <ul className="role-bullets">
                      {role.bullets.map((b, k) => <li key={k}>{b}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
