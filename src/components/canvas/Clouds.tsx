import { Canvas } from "@react-three/fiber"
import { useGLTF, PresentationControls, useTexture, OrbitControls } from "@react-three/drei"
import { NearestFilter } from "three"
import { useRef, useState } from "react"
import { useSpring, animated, config } from "@react-spring/three"

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


    const clouds = useGLTF('/clouds/clouds.glb')
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

interface CloudCanvasProps {
    firstClicked: boolean,
    handleFirstClick: () => void
}
const CloudCanvas = ({firstClicked, handleFirstClick} : CloudCanvasProps) => {
 
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
            zoom: 50
          }}
          orthographic
         >
            <Clouds 
            onClick={handleFirstClick}  
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)} 
            clicked={firstClicked}
            hovered={hovered}
            />
            <OrbitControls/>
   

                    <ambientLight intensity={1} color={0xffffff} />
        {/* <hemisphereLight intensity={0.1} skyColor={0xc4eaff} /> */}
       
       {/* <directionalLight intensity={9} color={0xffffff} position={[3,6,2]} /> */}

      
            
        </Canvas>

         </div>

        </>
    )

}

export default CloudCanvas