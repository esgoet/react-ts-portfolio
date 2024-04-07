import ModuleBlock from "./ModuleBlock"
import { interests, hobbies } from "../assets"

const Interests = () => {
    const myInterests = (
        <div className="flex flex-col gap-3 text-sm place-items-center place-content-center">
            <h4 className="w-full text-right font-bold">what is important to me</h4>
            <div className="flex w-full flex-row items-center place-content-center justify-start">
                <img
                src={interests}
                alt="interests"
                className="w-[60px] h-full rounded-lg bg-peach p-3"
              />
              <ul className="flex flex-col px-3 rounded-2xl">
                <li>Accessibility</li>
                <li>Digital Education</li>
                <li>Mental Health Awareness</li>
              </ul>
            </div>
      
            <h4 className="text-right font-bold w-full">what i like to do</h4>
            <div className="flex w-full flex-row items-center place-content-center justify-start">
            <img
                src={hobbies}
                alt="hobbies"
                className="w-[60px] h-full rounded-lg bg-peach p-3"
              />
              <ul className="flex flex-col justify-between px-3 rounded-2xl">
                <li>Coding</li>
                <li>3D Modelling</li>
                <li>Painting</li>
                {/* <li>Reading</li> */}
                <li>Volleyball</li>
              </ul>
            </div>
          </div>

    )

    return (
        <>
            <ModuleBlock heading="My Interests" content={myInterests}/>
        </>
    )
}

export default Interests