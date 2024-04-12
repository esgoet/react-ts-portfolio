import {  ReactNode } from "react"

interface ModuleBlockProps {
    sectionId?: string,
    heading?: string,
    content?: ReactNode,
    // hasContent?: boolean,
    gridPos?: string, 
}

const ModuleBlock = ({sectionId = '', heading = '', content, gridPos = ''} : ModuleBlockProps) => {
    // const [isSelected, setIsSelected] = useState(false)

    // ${!isSelected && !collapseOverridden ? "relative aspect-square" : isSelected && "absolute z-10  max-w-[962px] backdrop-blur-lg m-auto"} 

    return (
        <>
        {/* {isSelected && <div className={`relative bg-peach/70 rounded-lg border-black border-2 border-solid min-h-[230px] aspect-square w-[230px]`}/>} */}
        <section id={sectionId} className={`relative bg-white/60 backdrop-blur-lg m-4 sm:m-0 ${heading.length > 0 ? "p-5" : "p-0"} rounded-lg border-black border-2 border-solid  ${gridPos.length === 0 && "sm:aspect-square sm:min-h-[230px] h-fit"} ${gridPos} scroll-mt-20 snap-start`} >

            {heading.length > 0 && <h2 className="font-bold text-xl mb-3 -mt-1 text-right">{heading}</h2>}
            {/* {isSelected || collapseOverridden ? content : smallContent} */}
            {content}
            {/* {hasContent && isCollapsible && <button 
                onClick={() => setIsSelected(!isSelected)}
                className={`rounded-full leading-none w-10 aspect-square absolute ${isSelected ? "top-4" : "bottom-4"} left-4 text-xl font-bold border border-black bg-lavender hover:bg-white active:text-lavender active:border-lavender`}
            >
                {isSelected  ? "-" : "+"}
            </button>} */}
        </section>
        </>
    )
}

export default ModuleBlock