import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Card = (props: Props) => {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="card mb-4">
        <div className="card-fold position-relative">
          <img
            className="card-img"
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
            }}
            src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/kitchen-and-dining-room-P5JHHM6.jpg"
            alt="Card image"
          />
        </div>
        <div className="card-body px-3 pt-3">
          <h4 className="card-title">
            <Link
              to={`/7-common-mistakes-everyone-makes-while-travelling/`}
              className="btn-link text-reset stretched-link fw-bold text-decoration-none"
            >
              7 common mistakes everyone makes while traveling
            </Link>
          </h4>
          <button style={{ border: "none", background: "none" }}>
            <i className="fas fa-bookmark text-danger"></i>
          </button>
          <button style={{ border: "none", background: "none" }}>
            <i className="fas fa-thumbs-up text-primary"></i>
          </button>

          <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                <i className="fas fa-user"></i> Louis Ferguson
              </a>
            </li>
            <li className="mt-2">
              <i className="fas fa-calendar"></i> Mar 07, 2022
            </li>
            <li className="mt-2">
              <i className="fas fa-eye"></i> 10 Views
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
