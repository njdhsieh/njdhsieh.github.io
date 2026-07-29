import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
