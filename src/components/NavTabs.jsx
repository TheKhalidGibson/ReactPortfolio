import { Link, useLocation } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../assets/style.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <nav className="navbar navbar-expand-lg justify-content-center navbar-dark bg-dark text-light px-2">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  // This is a conditional (ternary) operator that checks to see if the current page is "About"
                  // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                  className={
                    currentPage === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Portfolio"
                  // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "/Portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Resume"
                  // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "/Resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Contact"
                  // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "/Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact Me
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Full Stack Developer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavTabs;
