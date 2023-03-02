import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ title, icon }) => {
  NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
  };

  NavBar.defaultProps = {
    title: "Contact Keeper",
    icon: "fas fa-id-card-alt",
  };

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
