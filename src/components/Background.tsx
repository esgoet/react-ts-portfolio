import ModuleBlock from "./ModuleBlock";
import { education } from "../constants";

interface EducationEntryProps {
    degree: string;
    university: string;
    country: string;
    year: string;
    grade: string;
}
const EducationEntry = (props : EducationEntryProps) => {
    return (
      <>
        <p className='text-start'>{props.degree}</p>
        <p className="italic text-sm text-end text-lilac">{props.university}</p>
      </>
    );
  }


const Background = () => {

    const background = (
        <>
        <div className="flex flex-col gap-1 px-2.5 py-1 pb-4 w-full ">
            <div className=" bg-white/50 flex flex-row gap-2 place-content-stretch place-items-stretch rounded-lg border-black border">
              <div className="font-bold bg-peach p-2 pl-3 rounded-l-lg flex items-center">
                <p>2023</p>
              </div>
              <div className="p-2 pr-3 w-full">
                {education.map((entry) =>
                  entry.year === "2023" ? (
                    <EducationEntry key={entry.degree} {...entry} />
                  ) : null
                )}
              </div>
            </div>
            <div className="bg-white/50 flex flex-row gap-2 place-content-stretch place-items-stretch rounded-lg border-black border">
              <div className="font-bold bg-peach p-2 pl-3 rounded-l-lg flex items-center">
                <p className="">2020</p>
              </div>
              <div className="p-2 pr-3 w-full">
                {education.map((entry) =>
                  entry.year === "2020" ? (
                    <EducationEntry key={entry.degree} {...entry} />
                  ) : null
                )}
              </div>
            </div>
          </div>
        </>
    )
    return (
        <>
        <ModuleBlock heading="My Background" sectionId="background" content={background}/>
        </>
    )
}

export default Background