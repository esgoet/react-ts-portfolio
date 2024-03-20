import { Canvas } from "@react-three/fiber"
import { useGLTF, PresentationControls, useTexture, OrbitControls } from "@react-three/drei"
import { NearestFilter } from "three"
import { useRef, useState } from "react"
import { useSpring, animated, config } from "@react-spring/three"
import { EffectComposer, Bloom, LensFlare } from "@react-three/postprocessing"
// import { useSpring } from "@react-spring/three"
import CssSun from "../Sun"

interface CloudsProps {
    onClick: () => void,
    onPointerEnter: () => void,
    onPointerLeave: () => void,
    clicked: boolean,
    hovered: boolean

}

const Clouds = ({onClick, onPointerEnter, onPointerLeave, clicked, hovered} : CloudsProps) => {

    const leftClouds = useRef();
    const rightClouds = useRef();
    const springConfig = {
        tension: 280,
        friction: 200
    }
    const { leftCloudsPos } = useSpring({ leftCloudsPos : clicked ? [-30,0,0] : hovered ? [-1,0,0] : [0,0,0], config: springConfig})
    const { rightCloudsPos } = useSpring({ rightCloudsPos: clicked ? [30,0,0] : hovered ? [1,0,0]: [0,0,0], config: springConfig})


    const clouds = useGLTF('/clouds/clouds_mat.glb')
    console.log(clouds)

    const threeTone = useTexture('clouds/threeTone.jpg')
    threeTone.minFilter = NearestFilter;
    threeTone.magFilter = NearestFilter;

    const pinkMap = useTexture('clouds/pinkColorMap.jpg')

    const colors = [0xFFFFEC, 0xfff9e6, 0xFFEbF1]
    let colorIndex = colors.length-1;
    

    return (
        <>
        <group
        onClick={onClick}   
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        // scale={0.3}
        position={[0,0,-10]}
       >
            <animated.group
                ref={leftClouds}
                position={leftCloudsPos}            
            >
                {clouds.scene.children.map((cloud) => {
                    colorIndex = colorIndex === colors.length - 1 ? 0 : colorIndex + 1
                // colorIndex = Math.floor(Math.random() * 3)
                const cloudIndex = parseInt(cloud.name.slice(-3))
                if (cloudIndex <= 10) {
                    return (
                        <mesh
                        key={cloud.name}
                        name={cloud.name}
                        geometry={cloud.geometry}
                        position={cloud.position}
                        // material={clouds.materials.CloudMaterial}
                        >
                            <meshDepthMaterial 
                            map={pinkMap}
                            // color={colors[colorIndex]} 
                            // gradientMap={threeTone}
                            />
                        </mesh>
                        )

                }
                return
                  
                })}
            </animated.group> 
            <animated.group
                ref={rightClouds}
                position={rightCloudsPos}
            >
                    {clouds.scene.children.map((cloud) => {
                    colorIndex = colorIndex === colors.length - 1 ? 0 : colorIndex + 1
                // colorIndex = Math.floor(Math.random() * 3)
                const cloudIndex = parseInt(cloud.name.slice(-3))
                if (cloudIndex > 10) {
                    return (
                        <mesh
                        key={cloud.name}
                        name={cloud.name}
                        geometry={cloud.geometry}
                        position={cloud.position}
                        >
                            <meshDepthMaterial 
                            transparent
                            map={pinkMap}
                            // color={colors[colorIndex]} 
                            // gradientMap={threeTone}
                            />
                        </mesh>
                        )

                }
                return
                  
                })}

            </animated.group>

        </group>
            

        </>
    )
}

// interface SunProps {
//     onClick: () => void,
//     clicked: boolean
// }

// const Sun = ({ onClick, clicked } : SunProps) => {
//     const sunRef = useRef()
//     const { sunPos } = useSpring({sunPos: clicked ? [5,3,-3] : [5,9,-3], config: config.wobbly, delay: 750})

//     return (
//         <animated.mesh
//             ref={sunRef}
//             position={sunPos}
//             onClick={onClick}
//             >
//             <sphereGeometry
//                 args={[2, 16, 16]}
//              />
//             <meshBasicMaterial 
//             color={[2, 2, 0.8]}
//             toneMapped={false}/>
//         </animated.mesh>
//     )
// }


const CloudCanvas = () => {
    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)


    return (
        <>
         <div className="h-screen w-screen absolute top-0 left-0">
         <Canvas
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            // fov: 50,
            near: 0.1,
            far: 20,
            position: [0,0,0],
            left: 0,
            right: 0.5,
            zoom: 70
          }}
          orthographic
         >
            <Clouds 
            onClick={()=>setClicked(!clicked)}  
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)} 
            clicked={clicked}
            hovered={hovered}
            />
            {/* <Sun 
            clicked={clicked}   
            onClick={()=>setClicked(!clicked)}
            /> */}
            <OrbitControls/>
   

                    <ambientLight intensity={1} color={0xffffff} />
        {/* <hemisphereLight intensity={0.1} skyColor={0xc4eaff} /> */}
       
       {/* <directionalLight intensity={9} color={0xffffff} position={[3,6,2]} /> */}
      
            
        </Canvas>
        <CssSun 
            clicked={clicked}   
            onClick={()=>setClicked(!clicked)}
            />
         </div>

        </>
    )

}

export default CloudCanvas