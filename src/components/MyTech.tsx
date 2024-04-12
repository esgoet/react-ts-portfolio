import { technologies } from "../constants"
import ModuleBlock from "./ModuleBlock"

const MyTech = () => {
    const myTech = (
        <>
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full gap-2">
            {technologies.map((tech) => (
                <figure key={tech.name} className="hoverContainer border bg-blue border-black rounded-lg relative" >                 
                    
                    <img src={tech.icon} className={`p-2`}/>
                    <figcaption className={`text-[11px] text-center font-bold text-black z-10 absolute inset-0 flex h-full w-full rounded-lg place-content-center place-items-center align-middle backdrop-blur-[2px] bg-white/50`}>{tech.name}</figcaption>
                    
                    
                </figure>
                
                
            ))}

        </div>

        </>
    )

    return (
        <ModuleBlock content={myTech} heading="What I Use"/>
    )
}

export default MyTech