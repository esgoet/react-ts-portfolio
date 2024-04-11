import { Canvas } from "@react-three/fiber";
import ModuleBlock from "./ModuleBlock"
import { OrbitControls, useGLTF } from "@react-three/drei";

const MyArt = () => {
    const satellite = useGLTF('/react-ts-portfolio/satellite/satellite.glb');


    const myArt = (
        <>
        <div className="absolute w-[140%] h-[140%] z-20 -top-20 -left-20">
        <Canvas
            gl={{ preserveDrawingBuffer: true }}
            frameloop="demand"
            >


                <primitive object={satellite.scene} position={[0,0,0]} rotation={[1.2,0.4, 1.1]} scale={0.5}/>

              <OrbitControls autoRotate enableZoom={false} enablePan={false}/>

                <ambientLight intensity={4} color={0xffffff}/>

            </Canvas>

        </div>

            {/* <p className="absolute bottom-4 left-4 text-lg italic text-lilac">Coming soon...</p> */}
        </>

    )

    return (
        <ModuleBlock content={myArt}/>
    )
}

export default MyArt;