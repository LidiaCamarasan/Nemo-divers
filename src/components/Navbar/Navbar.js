import logo from "../../images/fish nemo img.webp";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img className="nemo-image" src={logo} alt="logo" />
      </Link>
      <Link to="/book-now">BOOK NOW</Link>
      <Link to="/padi-courses">PADI COURSES</Link>
      <Link to="/course-schedule">COURSE SCHEDULE</Link>
      <Link to="/travel">TRAVEL</Link>
      <Link to="/price-list">PRICE LIST</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
};
export default Navbar;
