const Pagination = () => {
  return (
    <nav className="d-flex mt-2">
      <ul className="pagination">
        <li className="">
          <button className="page-link text-dark fw-bold me-1 rounded">
            <i className="fas fa-arrow-left me-2" />
            Previous
          </button>
        </li>
      </ul>
      <ul className="pagination">
        <li key={1} className="active">
          <button className="page-link text-dark fw-bold rounded">1</button>
        </li>
        <li key={2} className="ms-1">
          <button className="page-link text-dark fw-bold rounded">2</button>
        </li>
      </ul>
      <ul className="pagination">
        <li className={`totalPages`}>
          <button className="page-link text-dark fw-bold ms-1 rounded">
            Next
            <i className="fas fa-arrow-right ms-3 " />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
