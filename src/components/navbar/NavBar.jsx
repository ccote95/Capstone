import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/allposts" className="navbar-link">
          All Posts
        </Link>
      </li>
      <li className="navbar-item">My Posts</li>
      <li className="navbar-item">
        <Link
          className="navbar-link"
          to=""
          onClick={() => {
            localStorage.removeItem("mtg_user");
            navigate("/login", { replace: true });
          }}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
};
