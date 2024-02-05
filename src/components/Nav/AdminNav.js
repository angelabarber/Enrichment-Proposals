import { Link } from "react-router-dom";

export const AdminNav = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/primates"> Primates</Link>
      </li>
      <li className="navbar-item">
        <Link to="/proposals"> Proposals</Link>
      </li>
      <li className="navbar-item navbar-logout">
        <Link
          className="navbar-link"
          to="/logIn"
          onClick={() => {
            localStorage.removeItem("primate_user");
          }}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
};
