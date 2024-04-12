import { navLinks } from "../constants"
import { useState } from "react"

const NavBar = () => {
    const [active, setActive] = useState('')

    return (
        <>
        
            {navLinks.map((link) => (
                <a 
                    key={link.id} 
                    href={`#${link.id}`}
                    className={`backdrop-blur-lg sm:w-44 rounded-lg font-bold hover:bg-amber-50  border-black border-2 active:text-amber-300 active:border-amber-300 border-solid p-4 ${active === link.id ? "bg-amber-100/80" : "bg-white/60"}`}
                    onClick={()=>setActive(link.id)}
                    
                >{link.title}</a>
            ))}
        </>
    )
}

export default NavBar