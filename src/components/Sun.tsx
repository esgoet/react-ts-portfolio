import { useSpring, animated, config } from "@react-spring/web"

interface SunProps {
    onClick: () => void,
    clicked: boolean
}

const Sun = ({clicked, onClick} : SunProps) => {
    const { top } = useSpring({
        from: { top: -370 },
        top: clicked ? 20 : -370,
        delay: 750,
        config: config.wobbly
        })
    
    return (
        <>
        <animated.div 
            onClick={onClick} 
            style={{top: top}} 
            className={`z-20 absolute w-[300px] h-[300px] -right-10 flex place-items-center place-content-center`}>
            <div className={`absolute bg-white blur-lg rounded-full  w-full h-full`} />
            <div className={`absolute bg-white rounded-3xl animate-spin-slow w-[80%] h-[50%] blur-lg`}/>
            <div className={`absolute bg-white rounded-3xl animate-spin-slower w-[60%] h-[80%] blur-lg`}/>
            <div className={`absolute bg-white rounded-3xl animate-pulse w-[70%] h-[75%] blur-lg`}/>
       
            <div className="absolute bg-amber-100 rounded-full w-[90%] h-[90%] blur-sm"/>
            <div className="absolute bg-amber-50 rounded-full w-[90%] h-[90%] blur-sm"/>
            <div className="absolute bg-white blur-lg rounded-full w-2/3 h-2/3"/>
        </animated.div>
        {/* <div className={`${clicked ? "flex" : "hidden"} justify-center flex-col items-center mx-auto`}>
            <p>Looks like you brightened my day. Thanks!</p>
            <p>I hope I can return the favour.</p>
        </div> */}

        </>
    )
}

export default Sun;