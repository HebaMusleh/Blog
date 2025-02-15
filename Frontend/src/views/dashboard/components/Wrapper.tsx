import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row mt-0 mt-md-4">
          <div className="col-lg-12 col-md-8 col-12">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
