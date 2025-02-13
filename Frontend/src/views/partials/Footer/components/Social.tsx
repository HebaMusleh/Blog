const Social = ({ classIcon, href }: { classIcon: string; href: string }) => {
  return (
    <li className="nav-item">
      <a className="nav-link text-white px-2 fs-5" href={href}>
        <i className={`fab ${classIcon}`} />
      </a>
    </li>
  );
};

export default Social;
