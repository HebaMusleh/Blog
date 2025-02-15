import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const Container: React.FC<Props> = ({ children, title, description }) => {
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row mt-0 mt-md-4">
          <div className="col-lg-12 col-md-8 col-12">
            <div className="card mb-4">
              <div className="card-header d-lg-flex align-items-center justify-content-between">
                <div className="mb-3 mb-lg-0">
                  <h3 className="mb-0">{title}</h3>
                  <span>{description}</span>
                </div>
              </div>
              <div className="card-body">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
