interface Props {
  image: any;
  post_count: number;
  title: string;
}

const CategoryCard: React.FC<Props> = ({ image, post_count, title }) => {
  return (
    <div className="mt-2">
      <div className="card bg-transparent">
        <img
          className="card-img"
          src={image}
          style={{
            width: "150px",
            height: "80px",
            objectFit: "cover",
          }}
          alt="card image"
        />
        <div className="d-flex flex-column align-items-center mt-3 pb-2">
          <h5 className="mb-0">{title}</h5>
          <small>{post_count || 0} Articles</small>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
