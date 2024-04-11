import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import CloudCanvas from './components/canvas/Clouds'
import Sun from './components/Sun'

import { useState } from 'react'
import MyImage from './components/MyImage'
import MyArt from './components/MyArt'
import Hello from './components/Hello'
import Background from './components/Background'
import Interests from './components/Interests'
import MyTech from './components/MyTech'
import ContactForm from './components/ContactForm'
import ContactBlurb from './components/ContactBlurb'
// import Rain from './components/Rain'

const App = () => {
  const [firstClicked, setFirstClicked] = useState(false)
  // const [currentSection, setCurrentSection]= useState(null)

  return (
    <>
        <CloudCanvas clicked={firstClicked} handleClick={()=>setFirstClicked(!firstClicked)}/>
        {/* <Rain clicked={firstClicked}/> */}
        <div className='sm:max-w-5xl sm:mx-auto relative -top-10'>
        <Sun 
          clicked={firstClicked}   
          onClick={()=>setFirstClicked(!firstClicked)}
        />
        </div>

  
   <div className={`w-screen h-full transition duration-[3000ms] delay-200 ${firstClicked ? "opacity-100 h-full" : "opacity-0 h-screen overflow-hidden"}`}>
    
      <header>
        

      </header>
      <div className='sm:my-[100px] '>

        {/* <nav className='w-full h-full sticky top-0 p-2 mb-1.5 z-10 backdrop-blur-md bg-amber-50/60 border-y-2 border-black'> */}
        <nav className='w-full h-full sticky top-0 p-2 mb-1.5 z-10 bg-blue border-b-2 border-black'>
          <div
            className='sm:max-w-5xl sm:mx-auto gap-2 flex place-items-center'
          >

            <NavBar />    

          </div>

        </nav>    

    
        <main className='relative sm:grid grid-cols-3 grid-rows-auto grid-flow-row place-items-stretch place-content-stretch sm:max-w-5xl sm:mx-auto h-full gap-3.5 snap-proximity snap-y'>
          <Hello />
          <MyImage />
          <div/>
        
          <About />
          <Background />
          <MyTech />
          <div className='grid grid-flow-col grid-cols-subgrid col-span-2 place-items-stretch'>

          <Interests/>

          </div>
          <Projects />

          

            
          <ContactBlurb />
          <ContactForm />
          <MyArt />


        </main>

      </div>
  
      <footer>
      </footer>


   </div>
       

    </>
  )
}

export default App
