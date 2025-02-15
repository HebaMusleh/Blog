import { Container } from "../components";

function Profile() {
  return (
    <Container
      title="Profile Details"
      description="You have full control to manage your own account setting."
    >
      <form>
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center mb-4 mb-lg-0">
            <img
              src="https://eduport.webestica.com/assets/images/avatar/09.jpg"
              id="img-uploaded"
              className="avatar-xl rounded-circle"
              alt="avatar"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div className="ms-3">
              <h4 className="mb-0">Your avatar</h4>
              <p className="mb-0">
                PNG or JPG no bigger than 800px wide and tall.
              </p>
              <input type="file" className="form-control mt-3" name="" id="" />
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <h4 className="mb-0 fw-bold">
            <i className="fas fa-user-gear me-2"></i>Personal Details
          </h4>
          <p className="mb-4 mt-2">
            Edit your personal information and address.
          </p>
          <div className="row gx-3">
            <div className="mb-3 col-12 col-md-12">
              <label className="form-label" htmlFor="fname">
                Full Name
              </label>
              <input
                type="text"
                id="fname"
                className="form-control"
                placeholder="What's your full name?"
              />
              <div className="invalid-feedback">Please enter first name.</div>
            </div>
            <div className="mb-3 col-12 col-md-12">
              <label className="form-label" htmlFor="fname">
                Bio
              </label>
              <input
                type="text"
                id="fname"
                className="form-control"
                placeholder="Write a catchy bio!"
              />
              <div className="invalid-feedback">Please enter first name.</div>
            </div>
            <div className="mb-3 col-12 col-md-12">
              <label className="form-label" htmlFor="lname">
                About Me
              </label>
              <textarea
                placeholder="Tell us about yourself..."
                name=""
                id=""
                className="form-control"
              ></textarea>
              <div className="invalid-feedback">Please enter last name.</div>
            </div>

            <div className="mb-3 col-12 col-md-12">
              <label className="form-label" htmlFor="editCountry">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="form-control"
                placeholder="What country are you from?"
              />
              <div className="invalid-feedback">Please choose country.</div>
            </div>
            <div className="col-12 mt-4">
              <button className="btn btn-primary" type="submit">
                Update Profile <i className="fas fa-check-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Profile;
