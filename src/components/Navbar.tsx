import { Link } from "react-router-dom";
import "./styles/nav.scss";
import { MdSearch } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
const Navbar = () => {
  return (
    <nav>
      <div className="links-container">
        <Link to="/">home</Link>
        <Link to="/">articles</Link>
        <Link to="/">news</Link>
        <Link to="/">about me</Link>
      </div>
      <div className="buttons-container">
        <div className="btn-container">
          <MdSearch />
          <Link to="/">search</Link>
        </div>
        <div className="btn-container">
          <MdOutlineLogout />
          <Link to="/">search</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
