interface RainProps {
    clicked: boolean,
}

const Rain = ({clicked}: RainProps) => {
    const durations = [3, 2, 2.7, 3.1, 2.3, 3.0, 2.9, 3.1, 3.3, 2.2, 2.4, 3.3, 2.6, 2.4, 2, 2.8, 2.5, 3.1, 2.2]
    const delays = [1.2, 0, 1.7, 2, 0.5, 1.3, 4, 2.7, 0.7, 1, 0.1, 1.5, 0.4, 0.7, 1, 0.1, 1.5, 0.4,]
    
    return (
        <>
        <div className="absolute w-screen h-screen rain">
        {durations.map((el,i)=>{
            const randScale = Math.random() * (0.9 - 0.2) + 0.2
            const randX = Math.floor(Math.random() * (100))
       
            return (
                <div key={`drop-${i}`} style={{'transform':  `translateX(${randX}vw) scale(${randScale})`, animationDuration: `${el}s`, animationDelay: `${delays[i]+5}s` }} className={`drop ${clicked && 'animate-drip'}`} />
            )
        })}
        {/* <div className={`drop animate-drip`}/>
        <div className={`drop animate-drip`}/>
        <div className={`drop animate-drip`}/>
        <div className={`drop animate-drip`}/>
        <div className={`drop animate-drip`}/> */}
        {/* <div 
            className={`my-[175px] mx-auto
            relative opacity-0 top-0 w-[2px] h-[1px] border-white border-solid border-[7px] rounded-t-[300px_150px] rounded-b-[300px_150px] 
            animate-ripple
            after:content-[""] after:absolute after:opacity-0 after:-top-[5px] after:-left-[5px] after:w-[2px] after:h-[1px] after:border-white after:border-[5px] after:border-solid after:rounded-t-[300px_150px] after:rounded-b-[300px_150px] after:animate-ripple-2
             `}
        /> */}

        </div>


        </>
    )

}

export default Rain