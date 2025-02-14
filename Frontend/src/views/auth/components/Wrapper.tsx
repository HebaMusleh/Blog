import React from "react";
import { Footer, Header } from "../../partials";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <section
        className="container d-flex flex-column vh-100"
        style={{ marginTop: "150px" }}
      >
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
          <div className="col-lg-5 col-md-8 py-8 py-xl-0">
            <div className="card shadow">
              <div className="card-body p-6">{children}</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Wrapper;
