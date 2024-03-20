import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CloudCanvas from './components/canvas/Clouds'

const App = () => {
  return (
    <>
    <CloudCanvas />
    <NavBar />
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default App
