import { navLinks } from "../constants"

const NavBar = () => {

    return (
        <>
        <nav>
            {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`}>{link.title}</a>
            ))}
        </nav>
        </>
    )
}

export default NavBar