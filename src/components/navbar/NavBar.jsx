import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/allposts" className="navbar-link">
          All Posts
        </Link>
      </li>
      <li className="navbar-item">Logout</li>
    </ul>
  );
};
