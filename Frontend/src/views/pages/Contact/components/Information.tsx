import React from "react";

interface Props {
  WrapStyle?: string;
  title: string;
  details: string;
  address?: string;
}

const Information: React.FC<Props> = ({
  WrapStyle,
  title,
  details,
  address,
}) => {
  return (
    <div className={`col-sm-6 ${WrapStyle}`}>
      <h3>{title} </h3>
      <p>{details}</p>
      <address>{address}</address>
      <p>
        Call:{" "}
        <a href="#" className="text-reset">
          <u>0097560000000 (Toll-free)</u>
        </a>
      </p>
      <p>
        Email:{" "}
        <a href="#" className="text-reset">
          <u>heba.a.musleh@gmail.com</u>
        </a>
      </p>
      <p>
        Support time: Monday to Saturday
        <br />
        9:00 am to 5:30 pm
      </p>
    </div>
  );
};

export default Information;
