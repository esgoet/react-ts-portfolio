import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CloudCanvas from './components/canvas/Clouds'
import Sun from './components/Sun'

import { useState } from 'react'
// import Rain from './components/Rain'

const App = () => {
  const [firstClicked, setFirstClicked] = useState(false)

  return (
    <>
        <CloudCanvas clicked={firstClicked} handleClick={()=>setFirstClicked(!firstClicked)}/>
        {/* <Rain clicked={firstClicked}/> */}
  
   <div className='w-screen h-screen flex flex-col justify-stretch overflow-hidden'>
      <header>
        

      </header>
      <nav className='absolute'>
      <NavBar />    

      </nav>

  
      <main>
        <Sun 
          clicked={firstClicked}   
          onClick={()=>setFirstClicked(!firstClicked)}
        />
  
        <About />
        <Projects />
        <Contact />

      </main>
      <footer>
      </footer>


   </div>
       

    </>
  )
}

export default App
