import { portrait } from "../assets";
import ModuleBlock from "./ModuleBlock"
import { linkedin, github, email } from "../assets";

const MyImage = () => {
    interface ImgLinkProps {
        targetURL: string,
        imgURL: string,
        imgAlt: string, 
        newTab?: boolean
      }

    const ImgLink = ({targetURL, imgURL, imgAlt, newTab = true}: ImgLinkProps) => (
    <a 
        href={targetURL}
        target={newTab ? "_blank" : "_self"}
        className="flex place-items-center peachBtn bg-peach p-3 w-14 aspect-square self-center"
    >
        <img src={imgURL} alt={imgAlt} className="w-full aspect-square object-contain" />
    </a>
    )
    

    const myImage = (
        <>
            <img 
                src={portrait} 
                alt="Eva's Portrait" 
                className="robject-contain">

            </img>
            
            <div
                className="absolute top-28 flex gap-3 place-content-center place-items-center w-full h-full"
            >
                <ImgLink targetURL="https://linkedin.com/in/eva-goetzke" imgURL={linkedin} imgAlt='linkedin'/>
                <ImgLink targetURL="https://github.com/esgoet" imgURL={github} imgAlt='github' />
                <ImgLink targetURL="#contact" imgURL={email} imgAlt="email" newTab={false}/>
            </div>
        </>

    
    )

    return (
        <ModuleBlock content={myImage} hasContent={false}/>
    )
}

export default MyImage;