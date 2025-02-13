import React from "react";

interface Props {}

const DropDown = (props: Props) => {
  return (
    <a
      className="nav-link dropdown-toggle active"
      href="#"
      id="pagesMenu"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {/* here's make a recursion function heba  */}
      {/* <ul className="dropdown-menu" aria-labelledby="pagesMenu">
        {DropDownItemPages.map((item) => (
          <DropDownItem key={item.link} {...item} />
        ))}
      </ul> */}
    </a>
  );
};

export default DropDown;
