import FirebaseAuthService from "../../../firebase/FirebaseAuthService";
import { useState, useContext } from "react";
import { Content, ButtonGroup, FormGroup } from "./styles";
import MainButton from "components/MainButton";
import GlobalContext from "store/context";

const SignIn = () => {
  const { user } = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await FirebaseAuthService.loginUser(username, password);
      setUsername("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await FirebaseAuthService.loginWithGoogle();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSendResetPasswordEmail = async () => {
    if (!username) {
      alert("Missing username");
      return;
    }

    try {
      await FirebaseAuthService.resetPassword(username);
      alert("Sent the password reset email");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    FirebaseAuthService.logoutUser();
  };

  return (
    <Content>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <MainButton onClick={handleLogout}>Logout</MainButton>
        </div>
      ) : (
        <>
          <h1>Create an account</h1>
          <FormGroup onSubmit={handleSubmit}>
            <label>
              Email
              <input
                placeholder="Email"
                type="email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password
              <input
                placeholder="Password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <ButtonGroup>
              <button type="button" onClick={handleSendResetPasswordEmail}>
                Reset Password
              </button>
              <button type="submit">Login</button>
              <button type="button" onClick={handleLoginWithGoogle}>
                Login With Google
              </button>
              <button type="button">Sign Up</button>
            </ButtonGroup>
          </FormGroup>
        </>
      )}
    </Content>
  );
};

export default SignIn;
