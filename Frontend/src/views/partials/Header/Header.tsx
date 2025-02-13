import Search from "./components/Search";
import Button from "./components/Button";
import DropDownItem from "./components/DropDownItem";

import {
  Buttons,
  DropDownItemPages,
  DropDownItemsDashboard,
} from "../../../constant";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar-dark bg-dark navbar-sticky header-static">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            LOGO
          </Link>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="h6 d-none d-sm-inline-block text-white">Menu</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="nav mt-3 mt-lg-0 px-4 flex-nowrap align-items-center">
              <div className="nav-item w-100">
                <Search />
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-scroll ms-auto">
              <li className="nav-item dropdown">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link active" to="/category/">
                  Category
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="pagesMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                  {DropDownItemPages.map((item) => (
                    <DropDownItem key={item.link} {...item} />
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="pagesMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dashboard
                </a>
                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                  {DropDownItemsDashboard.map((item) => (
                    <DropDownItem key={item.link} {...item} />
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                {Buttons.map((item) => (
                  <Button key={item.link} {...item} />
                ))}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
