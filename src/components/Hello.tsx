import ModuleBlock from "./ModuleBlock";

const Hello = () => {
    const hello = (
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
        <ModuleBlock heading="Welcome" sectionId='home' content={hello}/>
        </>
    )
}

export default Hello;