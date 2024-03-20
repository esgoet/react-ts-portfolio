import { useSpring, animated } from "@react-spring/web"

interface SunProps {
    onClick: () => void,
    clicked: boolean
}

const CssSun = ({clicked, onClick} : SunProps) => {
    const { top } = useSpring({
        from: { top: -300 },
        top: clicked ? 185 : -300,
        delay: 750
        })
    
    return (
        <>
        <animated.div  style={{top: top}} className={`absolute right-[205px] flex justify-center justify-items-center content-center items-center`}>
            <div className="absolute bg-white blur-lg rounded-full w-[300px] h-[300px]" onClick={onClick} />
            <div className="absolute bg-amber-100 rounded-full w-[270px] h-[270px] blur-sm"/>
            <div className="absolute bg-amber-50 rounded-full w-[270px] h-[270px] blur-sm"/>
            <div className="absolute bg-white blur-lg rounded-full w-[200px] h-[200px]"/>
        </animated.div>

        </>
    )
}

export default CssSun;