import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {

    const navigate = useNavigate()


    return  <ul className="navbar">
        <li className="navbar-item">
            <Link to='/primates'> Primates</Link>
        </li>
        <li className="navbar-item">
            <Link to='/proposals'> Proposals</Link>
        </li>
        <li className="navbar-item">
            <Link to='/newproposal'>New Proposal</Link>
        </li>
        {localStorage.getItem("primate_user") ? (
  <li className="navbar-item navbar-logout">
    <Link
      className="navbar-link"
      to=""
      onClick={() => {
        localStorage.removeItem("primate_user")
        navigate("/", { replace: true })
      }}
    >
      Logout
    </Link>
  </li>
) : (
  ""
)}

    </ul>
}