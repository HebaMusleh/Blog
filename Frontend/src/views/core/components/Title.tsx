const Title = ({
  title,
  input,
  classIcon,
}: {
  title: string;
  input?: boolean;
  classIcon?: string;
}) => {
  return (
    <section className="p-0">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="#" className="d-block card-img-flash">
              <img src="assets/images/adv-3.png" alt="" />
            </a>
            <h2 className="text-start d-block mt-1">
              {classIcon && <i className={`fas ${classIcon}`}></i>}
              {title}
            </h2>
            {input && (
              <input
                type="text"
                className="form-control"
                placeholder="Search All Articles"
                name=""
                id=""
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
