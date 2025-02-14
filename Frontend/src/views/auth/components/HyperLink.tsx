import { Link } from "react-router-dom";

const HyperLink = ({ url, classIcon,title }: { url: string; classIcon: string; title:string; }) => {
  return (
    <Link to={`/${url}/`} className="btn btn-primary me-2 w-100">
      {title} <i className={`fas ${classIcon}`}></i>
    </Link>
  );
};

export default HyperLink;
