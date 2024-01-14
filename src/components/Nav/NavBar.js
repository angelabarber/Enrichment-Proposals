import { Link } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
    return  <ul className="navbar">
        <li className="navbar-item">
            <Link to='/proposals'> Proposals</Link>
        </li>
        <li className="navbar-item">
            <Link to='/newproposal'>New Proposal</Link>
        
        </li>

    </ul>
}