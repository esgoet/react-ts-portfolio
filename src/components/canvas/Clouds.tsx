import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
// import { LoopOnce, NearestFilter } from "three"
import { useState} from "react"
import { useSpring, animated, config} from "@react-spring/three"
import { Mesh } from "three"

interface CloudsProps {
    onClick: () => void,
    onPointerEnter: () => void,
    onPointerLeave: () => void,
    clicked: boolean,
    hovered: boolean

}

const Clouds = ({onClick, onPointerEnter, onPointerLeave, clicked, hovered} : CloudsProps) => {

    const springConfig = {
        tension: 280,
        friction: 220
    }

    // clicked ? [-30,0,20] :
    const { leftCloudsPos } = useSpring({ leftCloudsPos : clicked ? [-30,0,20] : hovered ? [-1,0,0] : [0,0,0], config: springConfig})
    const { rightCloudsPos } = useSpring({ rightCloudsPos:  clicked ? [30,0,20] :hovered ? [1,0,0]: [0,0,0], config: springConfig})
    const { leftRotation } = useSpring({ leftRotation: clicked ? [0,0.7,0] : [0,0,0], config: config.slow})
    const { rightRotation } = useSpring({ rightRotation: clicked ? [0,-0.7,0] : [0,0,0], config: config.slow})

    // add animations here if using them later on
    const { scene, materials }= useGLTF('/react-ts-portfolio/clouds/clouds_anim.gltf')

//      // Extract animation actions
//   const { ref, actions } = useAnimations(animations);
//   console.log(actions)
  
  

//       // Change animation when the index changes
//   useEffect(() => {
//     if (clicked) {
        
//         actions['Animation']?.setLoop(LoopOnce,0)
//         actions['Animation']?.play()
//         actions['Animation']?.halt(2.43)
//     }
//   }, [clicked]);


    return (
        <>
        <group
        // ref={ref}
        onClick={onClick}   
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        scale={0.5}
        position={[0,0,-10]}
       >
            <animated.group
                position={leftCloudsPos  as any}   
                rotation={leftRotation  as any}         
            >
                {scene.children.map((cloud) => {
                    const cloudIndex = parseInt(cloud.name.slice(-3))
                    if (cloudIndex <= 10) {
                        if (cloud instanceof Mesh){
                            return (
                                <mesh
                                key={cloud.name}
                                name={cloud.name}
                                geometry={cloud.geometry}
                                position={cloud.position}
                                material={materials.CloudMaterial}
                                />
                                )
                        }

                    }
                    return 
                })}
            </animated.group> 
            <animated.group
                position={rightCloudsPos  as any}
                rotation={rightRotation  as any}
            >
                {scene.children.map((cloud) => {     
                    const cloudIndex = parseInt(cloud.name.slice(-3))
                    if (cloudIndex > 10) {
                        if (cloud instanceof Mesh){
                            return (
                                <mesh
                                key={cloud.name}
                                name={cloud.name}
                                geometry={cloud.geometry}
                                position={cloud.position}
                                material={materials.CloudMaterial}
                                />
                                )
                        }
                
                    }
                    return
                })}

            </animated.group>

        </group>            

        </>
    )
}

interface CloudCanvasProps {
    clicked: boolean,
    handleClick: () => void
}
const CloudCanvas = ({clicked, handleClick} : CloudCanvasProps) => {
    const [hovered, setHovered] = useState(false)

    return (
        <>
         <div className={`h-screen w-screen absolute top-0 left-0 ${clicked ? '-z-10' : 'z-20'} ${hovered && 'cursor-pointer'}`}>
         <Canvas
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            near: 0.01,
            far: 20,
            position: [0,0,0],
            // left: 0,
            // right: 0.5,
            // zoom: 40
          }}
        //   orthographic
         >
            <Clouds 
            onClick={handleClick}  
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)} 
            clicked={clicked}
            hovered={hovered}
            />
   

                    {/* <ambientLight intensity={3} color={0xffffff} /> */}
        <hemisphereLight intensity={3} color={0xc4eaff} groundColor={0xffe6cc}/>
       
       {/* <directionalLight intensity={9} color={0xffffff} position={[3,6,2]} /> */}

      
            
        </Canvas>

         </div>

        </>
    )

}

export default CloudCanvas