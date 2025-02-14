import { Button, FormInput, Title, Wrapper } from "./components";

function ForgotPassword() {
  return (
    <Wrapper>
      <Title
        title="Forgot Password"
        textMsg="Let's help you get back into your account"
      />
      <form className="needs-validation">
        <FormInput
          id="email"
          htmlFor="email"
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          title="Email"
        />
        <Button title="Reset Password" classIcon="fa-arrow-right" />
      </form>
    </Wrapper>
  );
}

export default ForgotPassword;
