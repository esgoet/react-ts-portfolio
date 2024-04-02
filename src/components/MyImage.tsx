import { portrait } from "../assets";
import ModuleBlock from "./ModuleBlock"

const MyImage = () => {
    const myImage = (
        <img 
            src={portrait} 
            alt="Eva's Portrait" 
            className="w-[200px] object-cover"
        />
    )

    return (
        <ModuleBlock content={myImage} isPadded={false}/>
    )
}

export default MyImage;