import ModuleBlock from "./ModuleBlock";

const About = () => {
    const about = (
       <>
       <div className="max-w-prose flex flex-col h-full sm:gap-5 gap-3">
       <p>
            Enhancing accessibility to otherwise
            restricted experiences through digital technology is a key passion
            of mine. With a background in psychology and a love for art
            and design, I'm driven to create beautiful and user-centric digital
            solutions that enhance everyday life.
          </p>
          <p >
            I bring a versatile skill set to the table, ranging from web
            development to game design and VR applications, and am always excited to expand it. Explore my portfolio{" "}
            <a href="#work" className="underline pointer-cursor">
              below
            </a>{" "}
            to see my work in action.
          </p>
          <div className="flex flex-row gap-3 justify-start">

        <button className="peachBtn">my portfolio</button>

        </div>
         

       </div>


       

       </>
    )
    return (
        <>
        <ModuleBlock heading="About Me" sectionId='about' content={about} gridPos="row-span-2"/>
        </>
    )
}

export default About;