import ModuleBlock from "./ModuleBlock"

const MyArt = () => {
    const myArt = (
        <p className="absolute bottom-4 left-4 text-lg italic text-lilac">Coming soon...</p>
    )

    return (
        <ModuleBlock content={myArt} heading="3D Art" />
    )
}

export default MyArt;