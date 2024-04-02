import ModuleBlock from "./ModuleBlock";

const About = () => {
    const about = (
        <div className="flex flex-col gap-3 items-start">
        <h3 className={`text-black text-3xl font-light`}>
          Hi, I'm Eva
        </h3>
        <p className="sm:text-base text-sm text-lilac ">
          MSc Interactive Media | MSc Clinical Psychology
        </p>
        <p className={`text-black max-w-sm`}>
          I love creating interactive digital tools
          that are beautiful, accessible and
          improve our daily life.
        </p>
        <a
          href="#contact"
          className="peachBtn hover:text-black"    
           >
          Get in touch
        </a>
      </div>
    )
    return (
        <>
        <ModuleBlock heading="About Me" sectionId='about' content={about}/>
        </>
    )
}

export default About;