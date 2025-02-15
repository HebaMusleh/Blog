const Comment = () => {
  return (
    <li className="list-group-item p-4 shadow rounded-3">
      <div className="d-flex">
        <img
          src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg"
          alt="avatar"
          className="rounded-circle avatar-lg"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div className="ms-3 mt-2">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h4 className="mb-0">Eleanor Pena</h4>
              <span>2 hour ago</span>
            </div>
            <div>
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-placement="top"
                title="Report Abuse"
              >
                <i className="fe fe-flag" />
              </a>
            </div>
          </div>
          <div className="mt-2">
            <p className="mt-2">
              <span className="fw-bold me-2">
                Comment <i className="fas fa-arrow-right"></i>
              </span>
              This post was really amazing, do you recommend that beginners
              learn React.js and Django?
            </p>
            <p className="mt-2">
              <span className="fw-bold me-2">
                Response <i className="fas fa-arrow-right"></i>
              </span>
              Thanks for the commment. Yes, it's an ideal stack for proficient
              development.
            </p>
            <p>
              <button
                className="btn btn-outline-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Send Response
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Write Response
                    </label>
                    <textarea name="" id="" className="form-control"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Response <i className="fas fa-paper-plane"> </i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Comment;
