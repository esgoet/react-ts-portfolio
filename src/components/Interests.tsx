import ModuleBlock from "./ModuleBlock"
import { interests, hobbies } from "../assets"

const Interests = () => {
    const myInterests = (
        <>

            <div className="flex w-full h-full font-medium flex-row items-stretch place-content-center justify-start gap-4">
                <img
                src={interests}
                alt="interests"
                className="w-[60px] rounded-l-md bg-peach p-3"
              />
              <ul className="flex flex-col place-content-center">
                <li>Accessibility</li>
                <li>Digital Education</li>
                <li>Mental Health Awareness</li>
              </ul>
            </div>
        </>

            )

    const myHobbies =(
        <>


            <div className="flex w-full font-medium h-full flex-row items-stretch place-content-center justify-start gap-4">
            <img
                src={hobbies}
                alt="hobbies"
                className="w-[60px] rounded-l-md bg-peach p-3"
              />
              <ul className="flex flex-col justify-between py-2 place-content-center">
                <li>Coding</li>
                <li>3D Modelling</li>
                <li>Painting</li>
                {/* <li>Reading</li> */}
                <li>Volleyball</li>
              </ul>
            </div>

        </>

    )

    return (
        <>
            <ModuleBlock content={myInterests} gridPos="col-span-1"/>
            <ModuleBlock content={myHobbies} gridPos="col-span-1"/>
        </>
    )
}

export default Interests