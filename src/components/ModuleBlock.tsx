import {  ReactNode } from "react"

interface ModuleBlockProps {
    sectionId: string,
    heading: string,
    content: ReactNode

}

const ModuleBlock = ({sectionId, heading, content} : ModuleBlockProps) => {
    return (
        <>
        <section id={sectionId} className="bg-white/40 aspect-square max-w-1/2 m-10 min-w-[200px] p-5 rounded-lg border-black border-2 border-solid">
            <h2>{heading}</h2>
            {content}
        </section>
        </>
    )
}

export default ModuleBlock