import { Link, useLocation } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  // FontAwesomeIcon,
} from "mdb-react-ui-kit";
import "../assets/style.css";



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <nav className="navbar navbar-expand-sm justify-content-center navbar-dark bg-dark text-light px-2">
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "/About"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Projects"
                  // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "/Projects"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Skills"
                  // Check to see if the currentPage is `Skills`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "/Skills" ? "nav-link active" : "nav-link"
                  }
                >
                  Skills
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

      <nav className="navbar footer fixed-bottom navbar-expand-sm justify-content-end text-center navbar-dark bg-dark text-light">
        <div className="pl-5">

          <a
            href="https://www.linkedin.com/in/khalid-gibson-85799b257/"
            className="card-link mx-5 text-white-50 textLink"
          >
            in
          </a>
          <a
            href="https://github.com/TheKhalidGibson"
            className="card-link mx-5 text-white-50 textLink"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/KhalidGibson"
            className="card-link mx-5 text-white-50 textLink"
          >
            X
          </a>
            {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
        </div>
      </nav>

    </>
  );
}

export default NavTabs;
