

const Notification = () => {
  return (
    <li className="list-group-item p-4 shadow rounded-3 mt-4">
      <div className="d-flex">
        <div className="ms-3 mt-2">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h4 className="mb-0 fw-bold">
                <i className="bi bi-chat-left-quote-fill text-success "></i> New
                Comment
              </h4>
              <p className="mt-3">
                Monica FineGeh commented on your post{" "}
                <b>How to become a better django and react.js developer</b>
              </p>
            </div>
          </div>
          <div className="mt-2">
            <p className="mt-1">
              <span className="me-2 fw-bold">
                Date: <span className="fw-light">30/11/24</span>
              </span>
            </p>
            <p>
              <button className="btn btn-outline-secondary" type="button">
                Mark as Seen <i className="fas fa-check"></i>
              </button>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Notification;
