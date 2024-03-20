import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CloudCanvas from './components/canvas/Clouds'
import Sun from './components/Sun'

import { useState } from 'react'

const App = () => {
  const [firstClicked, setFirstClicked] = useState(false)

  return (
    <>
      <CloudCanvas firstClicked={firstClicked} handleFirstClick={()=>setFirstClicked(!firstClicked)}/>
      <NavBar />
      <main className='w-screen h-screen'>
        <Sun 
          clicked={firstClicked}   
          onClick={()=>setFirstClicked(!firstClicked)}
         />
        <About />
        <Projects />
        <Contact />

      </main>
 

    </>
  )
}

export default App
