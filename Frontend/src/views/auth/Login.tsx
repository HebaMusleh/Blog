import { Link } from "react-router-dom";
import { InputLogin } from "../../constant";
import FormInput from "./components/FormInput";
import Button from "./components/Button";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

function Login() {
  return (
    <Wrapper>
      <Title
        link="register"
        title="Sign in"
        textMsg="Don’t have an account?"
        altMsg="Sign up"
      />
      {/* Form */}
      <form className="needs-validation">
        {InputLogin.map((input) => (
          <FormInput key={input.id} {...input} />
        ))}
        {/* Checkbox */}
        <div className="d-lg-flex justify-content-between align-items-center mb-4">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberme"
            />
            <label className="form-check-label" htmlFor="rememberme">
              Remember me
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
          <div>
            <Link to="/forgot-password/">Forgot your password?</Link>
          </div>
        </div>
        
            <Button title="Sign in" classIcon="fa-sign-in-alt" />
      </form>
    </Wrapper>
  );
}

export default Login;
