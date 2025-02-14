import { Link } from "react-router-dom";

interface Props {
  link?: string;
  title: string;
  textMsg: string;
  altMsg?: string;
}

const Title: React.FC<Props> = ({ link, title, textMsg, altMsg }) => {
  return (
    <div className="mb-4">
      <h1 className="mb-1 fw-bold">{title}</h1>
      <span>
        {textMsg}
        <Link to={`/${link}/`} className="ms-1">
          {altMsg}
        </Link>
      </span>
    </div>
  );
};

export default Title;
