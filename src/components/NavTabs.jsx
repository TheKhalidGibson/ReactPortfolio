import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light px-2">
        <div class="container-fluid">
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/About"
                  // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                >
                  Portfolio
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/Blog"
                  // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
                >
                  Contact Me
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/Contact"
                  // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Resume
                </Link>

              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Full Stack Developer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav></>
  );
}

export default NavTabs;
