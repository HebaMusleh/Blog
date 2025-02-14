import { Button, FormInput, Title, Wrapper } from "./components";
import { InputCreatePassword } from "../../constant";

function CreatePassword() {
  return (
    <Wrapper>
      <Title
        title="Create New Password"
        textMsg="Choose a new password for your account"
      />
      <form className="needs-validation">
        {InputCreatePassword.map((input) => (
          <FormInput key={input.id} {...input} />
        ))}
        <Button title="Save New Password" classIcon="fa-check-circle" />
      </form>
    </Wrapper>
  );
}

export default CreatePassword;
