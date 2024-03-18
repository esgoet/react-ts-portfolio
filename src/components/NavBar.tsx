import { Link } from "react-router-dom"
import { navLinks } from "../constants"

const NavBar = () => {

    return (
        <>
        <nav>
            {navLinks.map((link) => (
                <Link key={link.id} to={`/${link.id}`}>{link.title}</Link>
            ))}
        </nav>
        </>
    )
}

export default NavBar