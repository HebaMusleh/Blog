import { Title, Wrapper, HyperLink } from "../components";

const Logout = () => {
  return (
    <Wrapper>
      <Title
        title="Logout"
        textMsg="You are logged out. Please"
        altMsg="login"
      />
      <form className="needs-validation mt-5">
        <div className="d-grid d-flex">
          <HyperLink title="Login" url="login" classIcon="fa-sign-in-alt" />
          <HyperLink title="Register" url="register" classIcon="fa-user-plus" />
        </div>
      </form>
    </Wrapper>
  );
};

export default Logout;
