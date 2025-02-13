import { Link } from "react-router-dom";

const Search = () => {
  return (
    <form className="rounded position-relative">
      <input
        className="form-control pe-5 bg-light"
        type="search"
        placeholder="Search Articles"
        aria-label="Search"
      />
      <Link
        to={"/search/"}
        className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
        type="submit"
      >
        <i className="bi bi-search fs-5"> </i>
      </Link>
    </form>
  );
};

export default Search;
