import { Link } from "react-router-dom";

const Button = ({ link, title }: { link: string; title: string }) => {
  return (
    <Link to={`/${link}/`} className="btn btn-success ms-2">
      {title} <i className="fas fa-user-plus"></i>
    </Link>
  );
};

export default Button;
