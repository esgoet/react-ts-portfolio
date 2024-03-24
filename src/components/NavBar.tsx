import { navLinks } from "../constants"

const NavBar = () => {

    return (
        <>
        
            {navLinks.map((link) => (
                <a key={link.id} href={`/#${link.id}`}>{link.title}</a>
            ))}
        </>
    )
}

export default NavBar