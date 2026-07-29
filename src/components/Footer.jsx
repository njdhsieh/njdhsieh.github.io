import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-name">Lucy Hsieh</span>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/njdhsieh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="footer-sep">·</span>
            <a href="https://github.com/njdhsieh" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="footer-sep">·</span>
            <span className="footer-location">Taiwan</span>
          </div>
          <span className="footer-copy">
            © {new Date().getFullYear()} · Built with React + Vite
          </span>
        </div>
      </div>
    </footer>
  )
}
