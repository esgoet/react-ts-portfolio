import {  ReactNode, useState } from "react"

interface ModuleBlockProps {
    sectionId?: string,
    heading?: string,
    content?: ReactNode,
    smallContent?: ReactNode,
    hasContent?: boolean,
    isCollapsible?: boolean,
    collapseOverridden?: boolean, 
    gridPos?: string, 
}

const ModuleBlock = ({sectionId = '', heading = '', content, smallContent, hasContent = true, isCollapsible = true, collapseOverridden = false, gridPos = ''} : ModuleBlockProps) => {
    const [isSelected, setIsSelected] = useState(false)

    // ${!isSelected && !collapseOverridden ? "relative aspect-square" : isSelected && "absolute z-10  max-w-[962px] backdrop-blur-lg m-auto"} 

    return (
        <>
        {/* {isSelected && <div className={`relative bg-peach/70 rounded-lg border-black border-2 border-solid min-h-[230px] aspect-square w-[230px]`}/>} */}
        <section id={sectionId} className={`relative bg-white/60 backdrop-blur-lg m-4 sm:m-0 ${hasContent ? "p-5" : "p-0"} rounded-lg border-black border-2 border-solid min-h-[230px] ${gridPos.length === 0 && "aspect-square"} ${gridPos} scroll-mt-20 snap-start`} >

            {hasContent && !collapseOverridden && <h2 className="font-bold text-xl mb-3 -mt-1 text-right">{heading}</h2>}
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