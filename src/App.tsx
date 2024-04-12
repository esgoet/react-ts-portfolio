import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import CloudCanvas from './components/canvas/Clouds'
import Sun from './components/Sun'

import { useState, useEffect } from 'react'
import MyImage from './components/MyImage'
import MyArt from './components/MyArt'
import Hello from './components/Hello'
import Background from './components/Background'
import Interests from './components/Interests'
import MyTech from './components/MyTech'
import ContactForm from './components/ContactForm'
import ContactBlurb from './components/ContactBlurb'
import Welcome from './components/Welcome'
// import Rain from './components/Rain'

const App = () => {
  const [firstClicked, setFirstClicked] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // set firstClicked to true if mobile
    setFirstClicked(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event : MediaQueryListEvent) => {
 
      setIsMobile(event.matches);
      
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // const [currentSection, setCurrentSection]= useState(null)

  return (
    <>
        {!isMobile && <CloudCanvas clicked={firstClicked} handleClick={()=>setFirstClicked(!firstClicked)}/>}
        {/* <Rain clicked={firstClicked}/> */}

        <Welcome clicked={firstClicked} isMobile={isMobile}/>
        <div className='sm:max-w-5xl sm:mx-auto relative -top-10'>
        <Sun 
          clicked={firstClicked}   
          isMobile={isMobile}
          onClick={()=>setFirstClicked(!firstClicked)}
        />
        </div>

  
   <div className={`w-screen h-full transition duration-[3000ms] delay-200 ${firstClicked ? "opacity-100 h-full" : "opacity-0 h-screen"}`}>
    
      <header>
        

      </header>
      <div className='my-[100px]'>

        {/* <nav className='w-full h-full sticky top-0 p-2 mb-1.5 z-10 backdrop-blur-md bg-amber-50/60 border-y-2 border-black'> */}
        <nav className='max-w-screen sticky top-0 p-2 mb-1.5 z-10 bg-blue border-b-2 border-black'>
          <div
            className='sm:max-w-5xl max-w-screen sm:mx-auto gap-2 flex text-center sm:text-left place-items-center place-content-center'
          >

            <NavBar />    

          </div>

        </nav>    

    
        <main className='relative sm:grid grid-cols-3 grid-rows-auto grid-flow-row place-items-stretch place-content-stretch w-screen overflow-hidden sm:max-w-5xl sm:mx-auto h-fit gap-3.5 snap-proximity snap-y sm:overflow-x-visible'>
          <Hello />
          <MyImage />
          <div/>
        
          <About />
          <Background />
          <MyTech />
          {isMobile ? <Interests /> : <div className='grid grid-flow-col grid-cols-subgrid col-span-2 place-items-stretch'>

          <Interests/>

          </div>}
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
