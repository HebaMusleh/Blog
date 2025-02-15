import React from "react";

interface Props {
  image: string;
  title: string;
  description: string;
}

const Service: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <img
        className="rounded"
        style={{
          width: "100%",
          height: "170px",
          objectFit: "cover",
        }}
        src={image}
        alt="Card image"
      />
      <h4 className="mt-3">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Service;
