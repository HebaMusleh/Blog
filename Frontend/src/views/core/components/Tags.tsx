const Tags = ({ tag }: { tag: string }) => {
  return (
    <li className="list-inline-item">
      <a className="text-body text-decoration-none fw-bold" href="#">
        #{tag}
      </a>
    </li>
  );
};

export default Tags;
