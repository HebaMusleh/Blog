import React from "react";

interface Props {
  avatar: string;
  name: string;
  job: string;
}

const Team: React.FC<Props> = ({ avatar, name, job }) => {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="text-center">
        <div className="avatar avatar-xxl mb-2">
          <img
            className="avatar-img rounded-circle"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
            src={avatar}
            alt="avatar"
          />
        </div>
        <h5>{name}</h5>
        <p className="m-0">{job}</p>
      </div>
    </div>
  );
};

export default Team;
