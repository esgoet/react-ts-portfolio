import { useEffect, useRef, useState } from "react";
import ModuleBlock from "./ModuleBlock";
import { projects } from "../constants";
import { filtersymbol } from "../assets";

interface TagProps {
    name: string, 
    type: string,
    size: number,
    onClick: (e : React.MouseEvent<HTMLInputElement>) => void,
    filterType: string,
    weight: number

}

const ProjectTag = ({name, type, size, onClick, filterType, weight} : TagProps ) => {
    const fontSize = `text-[${size}px]`;
    const smallerFont = `text-[${size-2}px]`;
  
    const Weight = () => (
      <span
        className={`ml-1 -mr-1 py-0.5 px-1.5 rounded-full bg-peach ${smallerFont}`}
      >
        {weight}
      </span>
    );
    if (type === filterType) {
       return (
         <>
           <label
             htmlFor={name}
             className={`${fontSize} border-black border px-2 text-black rounded-full hover:border-peach`}
           >
             <input
               type={"checkbox"}
               className="hidden"
               id={name}
               onClick={onClick}
             />
             <span>#</span>
             <span >{name}</span>
             {weight > 1 ? <Weight/> : null}
           </label>
         </>
       );
  
    }
    return
   
  }
  
  interface CardProps {
    name: string,
    description: string,
    tags: {
        name: string,
        type: string
    }[];
    image: string,
    source_code_link: string
  }
  
  const ProjectCard = (
      {name, description, tags, image, source_code_link} : CardProps
  ) => {
    return (
      <>
        <div
          className="sm:flex-none sm:w-[320px] flex flex-col justify-between snap-start"
        >
          <div className="p-5 bg-white border border-black rounded-t-lg h-full">
            <div className="relative w-full h-[150px] ">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-lg border border-black"
              />
              <div className="absolute inset-0 flex m-2 justify-end align-start">
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="external"
                  className="h-10 w-10 rounded-full border border-black flex place-items-center place-content-center cursor-pointer bg-peach hover:bg-peach/80 font-bold text-md text-white"
                >{`{ }`}</a>
                {/* <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer drop-shadow-md bg-black-300/50 hover:bg-black-300"
                >
                  
                  <p className="font-bold text-[18px]">{`</>`}</p>
                </div> */}
              </div>
            </div>
  
            <div className="mt-3">
              <h3 className="text-black font-bold text-[20px]">{name}</h3>
              <p className="text-black leading-[20px] text-[14px] text-justify">
                {description}
              </p>
            </div>
          </div>
  
          <div
            className={`flex flex-wrap justify-end gap-1 w-full border-black border border-t-0 bg-lilac p-3 rounded-b-lg`}
          >
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[12px] px-2 text-white-100 rounded-full`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </>
    );
  }



const Projects = () => {
    const [currentProjects, setCurrentProjects] = useState(projects);
    const galleryRef = useRef<HTMLDivElement>(null);
   
    interface Tag {
        name: string,
        type: string,
        weight: number
    }

    const [allTags, setAllTags] = useState<Tag[]>()

    const [tagTypes, setTagTypes] = useState(['']);

    useEffect(()=> {
        const tags : Tag[] = []
        // get all tags from all projects and sort them alphabetically
        projects.map((project) =>
        project.tags.map((tag) => {
            const tagName = tags?.find((el) => el.name === tag.name)
            if (!tagName) {
                tags.push({...tag, weight: 1})
            } else {
            tagName.weight +=1;
            }
        })
        );

        tags.sort((a,b)=>(b.name.localeCompare(a.name)));
        tags.sort((a, b) => a.weight - b.weight);
        tags.reverse();
        setAllTags(tags);

        setTagTypes(["device", "platform", "language", "library", "software"]) 

    }, [])

  const checkTag = (e : React.MouseEvent<HTMLInputElement>) => {
    const parentNode = (e.target as HTMLInputElement).parentNode as HTMLLabelElement;
    const nextSibling = (e.target as HTMLInputElement).nextSibling as HTMLSpanElement;

    if (parentNode && nextSibling) {
        if ((e.target as HTMLInputElement).checked) {
            parentNode.style.backgroundColor = "#f6aab5";
            nextSibling.innerHTML = `&#x00D7; #`;
          } else {
            parentNode.style.backgroundColor = '';
            nextSibling.innerHTML = "#";
          }
    }

    filterProjects();
  };

  const resetFilter = () => {
    setCurrentProjects(projects);

    document.querySelectorAll("input[type='checkbox']:checked")
      .forEach((tag) => {
        (tag as HTMLInputElement).checked = false
        if (tag.parentNode && tag.nextSibling) {
            (tag.parentNode as HTMLLabelElement).style.backgroundColor = '';
            (tag.nextSibling as HTMLSpanElement).innerHTML = "#";
        }
       
      }
        );
  }

  interface ProjectProps {
        name: string,
        description: string,
        tags: {
            name: string,
            type: string,
        }[],
        image: string,
        source_code_link: string,
        filtered: boolean,
  }

  const filterProjects = () => {
    const filteredProjects : ProjectProps[] = [];

    // get a list of all checked tags
    const checkedTags : string[] = [];
    document
      .querySelectorAll("input[type='checkbox']:checked")
      .forEach((tag) => checkedTags.push(tag.id));

    // if none of input type checkbox are checked, reset filter
    if (checkedTags.length === 0) {
      setCurrentProjects(projects);
    } else {
      // copy a project from projects into new list
      // clear filtered project list
      filteredProjects.length = 0;
      // if one of the tags checked is present for the project
      projects.forEach((project) => {
        project.tags.forEach((projectTag) => {
          if (checkedTags.includes(projectTag.name)) {
            if (
              !filteredProjects.find(
                (filteredProject) => filteredProject.name === project.name
              )
            ) {
              filteredProjects.push({...project});
            }
          }
        });
        
      });
    
    setCurrentProjects(filteredProjects);
    }
  };

    const portfolio = (
        <>
        <div>
        <form
          id="filterTagsForm"
          className="my-4 p-4 rounded-lg flex flex-col gap-2  border-black border"
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center px-2">
              <img
                src={filtersymbol}
                alt=""
                className="w-[26px] h-[26px] object-contain cursor-pointer z-20"
              ></img>
              <h3 className="px-2 text-[18px] text-black">Filter Projects</h3>
            </div>

            <button
              className="peachBtn text-sm py-1 px-3 font-normal"
              type="button"
              onClick={resetFilter}
            >
              RESET
            </button>
          </div>

          <div className="flex sm:flex-row flex-col gap-2 max-w-full overflow-x-auto">
            {tagTypes.map((type) => (
              <fieldset
                className="flex flex-wrap items-start justify-start text-black content-start gap-1 rounded-lg bg-peach/20 p-2"
                id={type}
                key={type}
              >
                <legend className="text-center text-black text-[14px]">
                  {type.toUpperCase()}
                </legend>
                {allTags?.map((tag) => (
                  <ProjectTag
                    key={tag.name}
                    {...tag}
                    size={14}
                    onClick={checkTag}
                    filterType={type}
                    weight={tag.weight}
                  />
                ))}
              </fieldset>
            ))}
          </div>
        </form>
        <div
        className="flex flex-wrap sm:flex-nowrap sm:overflow-x-scroll gap-5 justify-start w-full px-4 snap-x snap-mandatory"
        id="projectGallery" ref={galleryRef}
        >
        {currentProjects.map((project) => (
            <ProjectCard key={project.name} {...project}/>
        ))}
        </div>
      </div>
        </>

    )
    return (
        <>
        <ModuleBlock heading="My Projects" sectionId='projects' content={portfolio} gridPos={'col-span-3'} />

        </>
    )
}

export default Projects;