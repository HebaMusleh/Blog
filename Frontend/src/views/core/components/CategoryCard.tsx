const CategoryCard = () => {
  return (
    <div className="mt-2">
      <div className="card bg-transparent">
        <img
          className="card-img"
          src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/father-son-1.jpg"
          style={{
            width: "150px",
            height: "80px",
            objectFit: "cover",
          }}
          alt="card image"
        />
        <div className="d-flex flex-column align-items-center mt-3 pb-2">
          <h5 className="mb-0">Life Style</h5>
          <small>3 Articles</small>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
