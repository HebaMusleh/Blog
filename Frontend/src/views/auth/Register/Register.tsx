import {FormInput,Button,Title,Wrapper} from "./../components";
import { InputRegister } from "../../../constant";

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
