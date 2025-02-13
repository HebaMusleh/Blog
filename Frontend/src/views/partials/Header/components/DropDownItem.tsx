import { Link } from "react-router-dom";
type Props = {
  link: string;
  title: string;
  classIcon: string;
};
const DropDownItem = ({ link, title, classIcon }: Props) => {
  return (
    <li>
      <Link className="dropdown-item" to={`/${link}/`}>
        <i className={`fas ${classIcon}`}></i> {title}
      </Link>
    </li>
  );
};

export default DropDownItem;
