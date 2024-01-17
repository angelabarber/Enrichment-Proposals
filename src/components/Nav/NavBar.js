// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar className="navbar" color="success" dark>
        <NavbarBrand href="/">Monkey Business</NavbarBrand>
        <Nav pills>
          <NavItem>
            <NavLink className="navbar-item" href="/primates/">
              Primates
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar-item" href="/proposals/">
              Proposals
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar-item" href="/proposals/newproposal">
              New Proposal
            </NavLink>
          </NavItem>
          {localStorage.getItem("primate_user") ? (
            <NavItem>
              <NavLink
                href=""
                onClick={() => {
                  localStorage.removeItem("primate_user");
                  navigate("/", { replace: true });
                }}
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            ""
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

// export default Example;
//     <ul className="navbar">
//       <li className="navbar-item">
//         <Link to="/primates"> Primates</Link>
//       </li>
//       <li className="navbar-item">
//         <Link to="/proposals"> Proposals</Link>
//       </li>
//       <li className="navbar-item">
//         <Link to="/proposals/newproposal">New Proposal</Link>
//       </li>
//       {localStorage.getItem("primate_user") ? (
//         <li className="navbar-item navbar-logout">
//           <Link
//             className="navbar-link"
//             to=""
//             onClick={() => {
//               localStorage.removeItem("primate_user");
//               navigate("/", { replace: true });
//             }}
//           >
//             Logout
//           </Link>
//         </li>
//       ) : (
//         ""
//       )}
//     </ul>
// };
