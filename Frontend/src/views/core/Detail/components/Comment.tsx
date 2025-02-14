const Comment = () => {
  return (
    <div className="my-4 d-flex bg-light p-3 mb-3 rounded">
      <img
        className="avatar avatar-md rounded-circle float-start me-3"
        src="https://img.freepik.com/free-photo/front-portrait-woman-with-beauty-face_186202-6146.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais"
        style={{
          width: "70px",
          height: "70px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        alt="avatar"
      />
      <div>
        <div className="mb-2">
          <h5 className="m-0">Benny William</h5>
          <span className="me-3 small">June 11, 2023.</span>
        </div>
        <p className="fw-bold">
          Thanks you very much for the post, it really helped.{" "}
        </p>
      </div>
    </div>
  );
};

export default Comment;
