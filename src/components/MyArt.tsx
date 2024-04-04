import ModuleBlock from "./ModuleBlock"

const MyArt = () => {
    const myArt = (
        <p className="absolute bottom-4 left-4 text-lg italic text-lilac">Coming soon...</p>
    )

    return (
        <ModuleBlock smallContent={myArt} heading="3D Art" isCollapsible={false}/>
    )
}

export default MyArt;