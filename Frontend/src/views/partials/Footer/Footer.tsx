import Social from "./components/Social";
import { socialLink } from "../../../constant";

function Footer() {
  return (
    <footer>
      <div className="row bg-dark py-5 mx-0 card card-header  flex-row align-items-center text-center text-md-start">
        <div className="col-md-5 mb-3 mb-md-0">
          <div className="text-primary-hover text-white">
            2025 - 2024 &copy;
            <a
              href="https://www.linkedin.com/in/heba-musleh/"
              className="text-reset btn-link ms-2 me-2 "
              target="_blank"
            >
              Heba Ayman
            </a>
            | All rights reserved
          </div>
        </div>
        <div className="col-md-3 mb-3 mb-md-0">
          <h2>LOGO</h2>
        </div>
        <div className="col-md-4">
          <ul className="nav text-primary-hover justify-content-center justify-content-md-end">
            {socialLink.map((item, index) => (
              <Social key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
