import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CloudCanvas from './components/canvas/Clouds'
import Sun from './components/Sun'

import { useState } from 'react'
import ModuleBlock from './components/ModuleBlock'
import MyImage from './components/MyImage'
// import Rain from './components/Rain'

const App = () => {
  const [firstClicked, setFirstClicked] = useState(false)

  return (
    <>
        <CloudCanvas clicked={firstClicked} handleClick={()=>setFirstClicked(!firstClicked)}/>
        {/* <Rain clicked={firstClicked}/> */}
   
  
   <div className='w-screen h-screen flex flex-row justify-stretch'>
   <Sun 
          clicked={firstClicked}   
          onClick={()=>setFirstClicked(!firstClicked)}
        />
      <header>
        

      </header>
      <nav className='absolute'>
      <NavBar />    

      </nav>

  
      <main className='flex flex-col place-items-center place-content-center w-full sm:max-w-3xl h-full m-auto flex-wrap'>
        <About />
        <MyImage />
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
