import { useSpring, animated, config } from "@react-spring/web"
import { useState } from "react"

interface SunProps {
    onClick: () => void,
    clicked: boolean
}

const Sun = ({clicked, onClick} : SunProps) => {
    const [hovering, setHovering ] = useState(true)
    const { top } = useSpring({
        from: { top: -300 },
        top: clicked ? 110 : -300,
        delay: 750,
        config: config.wobbly
        })
    
    return (
        <>
        <animated.div 
            onClick={onClick} 
            onPointerEnter={() => setHovering(true)} 
            onPointerLeave={() => setHovering(false)}
            style={{top: top}} 
            className={`absolute w-[300px] h-[300px] right-[130px] flex justify-center justify-items-center content-center items-center`}>
            <div className={`absolute bg-white blur-lg rounded-full  w-full h-full`} />
            <div className={`absolute bg-white rounded-3xl ${hovering && "animate-spin-slow animate-pulse"} w-[80%] h-[50%] blur-lg`}/>
            <div className={`absolute bg-white rounded-3xl ${hovering && "animate-spin-slower"} w-[60%] h-[80%] blur-lg`}/>
            <div className={`absolute bg-white rounded-3xl ${hovering && "animate-spin-slower animate-pulse"} w-[70%] h-[75%] blur-lg`}/>
       
            <div className="absolute bg-amber-100 rounded-full w-[90%] h-[90%] blur-sm"/>
            <div className="absolute bg-amber-50 rounded-full w-[90%] h-[90%] blur-sm"/>
            <div className="absolute bg-white blur-lg rounded-full w-2/3 h-2/3"/>
        </animated.div>
        <div className={`${clicked ? "flex" : "hidden"} justify-center flex-col items-center mx-auto`}>
            <p>Looks like you brightened my day. Thanks!</p>
            <p>I hope I can return the favour.</p>
        </div>

        </>
    )
}

export default Sun;