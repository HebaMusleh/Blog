import React from "react";

interface Props {
  classIcon: string;
  TotalNum: string;
  title: string;
  color: string;
}

const Calc: React.FC<Props> = ({ classIcon, TotalNum, title, color }) => {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="card card-body border p-3">
        <div className="d-flex align-items-center">
          <div
            className={`icon-xl fs-1 p-3 bg-${color} bg-opacity-10 rounded-3 text-${color}`}
          >
            <i className={`bi ${classIcon}`} />
          </div>
          <div className="ms-3">
            <h3>{TotalNum}</h3>
            <h6 className="mb-0">{title}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
