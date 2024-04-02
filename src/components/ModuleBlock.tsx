import {  ReactNode } from "react"

interface ModuleBlockProps {
    sectionId?: string,
    heading?: string,
    content: ReactNode,
    isPadded?: boolean

}

const ModuleBlock = ({sectionId = '', heading = '', content, isPadded = true} : ModuleBlockProps) => {
    return (
        <>
        <section id={sectionId} className={`bg-white/70 max-w-1/2 m-2 min-w-[200px] ${isPadded ? "p-5" : "p-0"} rounded-lg border-black border-2 border-solid`}>
            {isPadded && <h2 className="font-bold text-xl mb-3 -mt-1 text-right">{heading}</h2>}
            {content}
        </section>
        </>
    )
}

export default ModuleBlock