import { InputRegister } from "../../constant";
import FormInput from "./components/FormInput";
import Button from "./components/Button";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

function Register() {
  return (
    <Wrapper>
      <Title
        textMsg="Already have an account?"
        link="login"
        title="Sign up"
        altMsg="Sign In"
      />
      <form className="needs-validation">
        {InputRegister.map((input) => (
          <FormInput key={input.id} {...input} />
        ))}
        <Button title="Sign up" classIcon="fa-user-plus" />
      </form>
    </Wrapper>
  );
}

export default Register;
