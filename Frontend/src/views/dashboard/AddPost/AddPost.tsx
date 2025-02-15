import { Link } from "react-router-dom";
import { Container } from "../components";

const AddPost = () => {
  return (
    <>
      <section className="py-4 py-lg-6 bg-primary rounded-3">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-md-12 col-12">
              <div className="d-lg-flex align-items-center justify-content-between">
                <div className="mb-4 mb-lg-0">
                  <h1 className="text-white mb-1">Create Blog Post</h1>
                  <p className="mb-0 text-white lead">
                    Use the article builder below to write your article.
                  </p>
                </div>
                <div>
                  <Link
                    to="/instructor/posts/"
                    className="btn"
                    style={{ backgroundColor: "white" }}
                  >
                    {" "}
                    <i className="fas fa-arrow-left"></i> Back to Posts
                  </Link>
                  <a href="instructor-posts.html" className="btn btn-dark ms-2">
                    Save Changes <i className="fas fa-check-circle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container title="Basic Information">
        <label htmlFor="postTHumbnail" className="form-label">
          Preview
        </label>
        <img
          style={{
            width: "100%",
            height: "330px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          className="mb-4"
          src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
          alt=""
        />
        <div className="mb-3">
          <label htmlFor="postTHumbnail" className="form-label">
            Thumbnail
          </label>
          <input id="postTHumbnail" className="form-control" type="file" />
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input className="form-control" type="text" placeholder="" />
          <small>Write a 60 character post title.</small>
        </div>
        <div className="mb-3">
          <label className="form-label">Posts category</label>
          <select className="form-select">
            <option value="">-------------</option>
            <option value="React">Lifstyle</option>
            <option value="Javascript">Fashion</option>
            <option value="HTML">Tech</option>
            <option value="Vue">Health</option>
            <option value="Gulp">Entertainment</option>
          </select>
          <small>
            Help people find your posts by choosing categories that represent
            your post.
          </small>
        </div>

        <div className="mb-3">
          <label className="form-label">Post Description</label>
          <textarea name="" className="form-control" id=""></textarea>
          <small>A brief summary of your posts.</small>
        </div>
        <label className="form-label">Tag</label>
        <input
          className="form-control"
          type="number"
          placeholder="health, medicine, fitness"
        />
        <button className="btn btn-lg btn-success w-100 mt-2" type="button">
        Create Post <i className="fas fa-check-circle"></i>
      </button>
      </Container>
    </>
  );
};

export default AddPost;
