import React from "react";

interface Props {
  title: string;
  text: string;
  children: React.ReactNode;
  classIcon: string;
}

const WrapperCard: React.FC<Props> = ({ title, text, children, classIcon }) => {
  return (
    <div className="col-md-6 col-xxl-4">
      <div className="card border h-100">
        <div className="card-header border-bottom d-flex justify-content-between align-items-center  p-3">
          <h5 className="card-header-title mb-0">{title}</h5>
          <div className="dropdown text-end">
            <a
              href="#"
              className="btn border-0 p-0 mb-0"
              role="button"
              id="dropdownShare3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className={`${classIcon}`} />
            </a>
          </div>
        </div>
        <div className="card-body p-3">
          <div className="row">{children}</div>
        </div>
        <div className="card-footer border-top text-center p-3">
          <a href="#" className="fw-bold text-decoration-none text-dark">
            View all {text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WrapperCard;
