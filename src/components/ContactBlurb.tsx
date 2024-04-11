import ModuleBlock from "./ModuleBlock"

const ContactBlurb = () => {
    const contactBlurb = (
        <>
        <div className="text-xl flex items-start  gap-5 h-[70%] flex-col">
             <p>Did my work catch your attention?</p>
            <p className="italic">Pop me a message and I'll get back to you!</p>
       

        </div>
      
        </>

    )
    return (
        <ModuleBlock content={contactBlurb} heading="Interested?" />
    )
}

export default ContactBlurb