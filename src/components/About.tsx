import ModuleBlock from "./ModuleBlock";

const About = () => {
    const about = (
        <p> Test</p>
    )
    return (
        <>
        <ModuleBlock heading="About Me" sectionId='about' content={about}/>
        </>
    )
}

export default About;