/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NavBar() {
  return (
    <div className="nav-holder">
      <div className="nav-top">
        Need your gifts by 12/24? Place an order before 1pm EST on 12/16, or
        12/14 for any orders!
      </div>
      <div className="nav-middle">
        <div className="nav-icons">
          <div className="nav-icon hamburger"></div>
          <div className="nav-icon search"></div>
        </div>
        <h1 className="nav-title">CompanyName.</h1>
        <div className="nav-icons">
          <div className="nav-icon user"></div>
          <div className="nav-icon cart"></div>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="nav-links">
          <a href="#">Shop All</a>
          <a href="#">Skincare</a>
          <a href="#">Makeup</a>
          <a href="#">Body</a>
          <a href="#">Fragrance</a>
          <a href="#">Balms</a>
          <a href="#">Shop our Sets</a>
          <a href="#">GlossiWEAR</a>
          <a href="#">The Gift Shop</a>
          <a href="#">Take our Skincare Quiz</a>
          <a href="#">Digital Gift Cards</a>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
