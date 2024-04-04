import { linkedin, github, email } from "../assets";
import ModuleBlock from "./ModuleBlock";

const SocialLinks = () => {

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
      className="flex place-items-center peachBtn w-20 aspect-square self-center"
    >
      <img src={imgURL} alt={imgAlt} className="w-full aspect-square object-contain" />
    </a>
  )

  const socialLinks = (
    <>
    <div
      className="grid grid-cols-3 place-content-center place-items-center w-full h-full"
    >
      <ImgLink targetURL="https://linkedin.com/in/eva-goetzke" imgURL={linkedin} imgAlt='linkedin'/>
      <ImgLink targetURL="https://github.com/esgoet" imgURL={github} imgAlt='github' />
      <ImgLink targetURL="#contact" imgURL={email} imgAlt="email" newTab={false}/>
    </div>
  
    </>
  )

  // const socialLinks =   (
  //   <div className="flex flex-row gap-5 items-center justify-center">
  //     <div
  //       onClick={() =>
  //         window.open("https://linkedin.com/in/eva-goetzke", "_blank")
  //       }
  //       className="w-6 h-6 flex justify-center items-center cursor-pointer drop-shadow-md"
  //     >
  //       <img
  //         src={linkedin}
  //         alt="linkedin"
  //         className="w-full h-full object-contain"
  //       />
  //     </div>
  //     <div
  //       onClick={() => window.open("https://github.com/esgoet", "_blank")}
  //       className="w-7 h-7 flex justify-center items-center cursor-pointer drop-shadow-md"
  //     >
  //       <img src={github} alt="github" className="w-full h-full object-contain" />
  //     </div>

  //     <a
  //       href="#contact"
  //       className="w-7 h-7 flex justify-center items-center cursor-pointer drop-shadow-md"
  //     >
  //       <img src={email} alt="Email" className="w-full h-full object-contain" />
  //     </a>
  //   </div>
  // )

  return (
    <>
    <ModuleBlock sectionId='socials' heading="" content={socialLinks} />
    </>
    
  )

;}


export default SocialLinks;