import React from "react";

interface Props {
  images?: string;
  post?: boolean;
  comment?: boolean;
  notification?: boolean;
  time?: string;
  notiTitle?: string;
  notiBody?: string;
  classIcon?: string;
}

const CardBody: React.FC<Props> = ({
  images,
  post,
  comment,
  notification,
  time,
  notiTitle,
  notiBody,
  classIcon,
}) => {
  return (
    <div>
      <div className="col-12">
        {notification && (
          <div className="d-sm-flex">
            <div className="icon-lg bg-opacity-15 rounded-2 flex-shrink-0">
              <i className="fas fa-thumbs-up text-primary fs-5" />
            </div>
            <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
              <h6 className="mb-0">
                <a
                  href="#"
                  className="stretched-link text-decoration-none text-dark fw-bold"
                >
                  New Like
                </a>
              </h6>
              <p className="mb-0">
                Destiny Franks liked your post <b>7 Commom mistakes...</b>
              </p>
              <span className="small">5 min ago</span>
            </div>
          </div>
        )}
        {post && (
          <div className="d-flex position-relative">
            <img
              className="w-60 rounded"
              src={`${images}`}
              style={{
                width: "100px",
                height: "110px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              alt="product"
            />
            <div className="ms-3">
              <a
                href="#"
                className="h6 stretched-link text-decoration-none text-dark"
              >
                Dirty little secrets about the business industry
              </a>
              <p className="small mb-0 mt-3">
                <i className="fas fa-calendar me-2"></i>Jun 17, 2022
              </p>
              <p className="small mb-0">
                <i className="fas fa-eye me-2"></i>10 Views
              </p>
            </div>
          </div>
        )}
        {comment && (
          <div className="ms-3">
            <p className="mb-1">
              {" "}
              <a
                className="h6 stretched-link text-decoration-none text-dark"
                href="#"
              >
                {" "}
                Thanks for the post, please post regulary.{" "}
              </a>
            </p>
            <div className="d-flex justify-content-between">
              <p className="small mb-0">
                <i>by</i> Monica Sweet
              </p>
            </div>
          </div>
        )}
      </div>
      <hr className="my-3" />
    </div>
  );
};

export default CardBody;
