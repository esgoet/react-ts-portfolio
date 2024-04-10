import ModuleBlock from "./ModuleBlock";

const Hello = () => {
    const hello = (
        <div className="relative flex flex-col gap-3 items-start">
        <h3 className={`text-black text-3xl font-light`}>
          Hi, I'm Eva
        </h3>
        <p className="text-sm text-lilac -mt-2">
          MSc Interactive Media | MSc Clin. Psychology
        </p>
        <p className={`text-black max-w-sm py-1`}>
          I love creating interactive digital tools
          that are beautiful, accessible and
          improve our daily life.
        </p>
        <a
          href="#contact"
          className="peachBtn absolute -bottom-24 hover:text-black"    
           >
          Get in touch
        </a>
      </div>
    )
    return (
        <>
        <ModuleBlock heading="🌦" sectionId='home' content={hello}/>
        </>
    )
}

export default Hello;