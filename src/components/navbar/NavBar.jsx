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
      <li className="navbar-item">
        <Link to="/myposts" className="navbar-link">
          My Posts
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/mycomments" className="navbar-link">
          My Comments
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/profile" className="navbar-link">
          Profile
        </Link>
      </li>
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
