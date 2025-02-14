const Button = ({ title, classIcon }: { title: string; classIcon: string }) => {
  return (
    <div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          {title} <i className={`fas ${classIcon}`}></i>
        </button>
      </div>
    </div>
  );
};

export default Button;
