import FirebaseAuthService from "../../../firebase/FirebaseAuthService";
import { useState, useContext, useEffect } from "react";
import {
  Content,
  ButtonGroup,
  FormGroup,
  ButtonLink,
  ButtonGroupItem,
} from "./styles";
import MainButton from "components/MainButton";
import GlobalContext from "store/context";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const { user } = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await FirebaseAuthService.loginUser(username, password);
      setUsername("");
      setPassword("");
      navigate("/criteria");
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

  const handleSignUp = () => {
    navigate("/signup");
  };

  useEffect(() => {
    if (user) {
      navigate("/criteria");
    }
  }, [user, navigate]);

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
            <ButtonLink type="button" onClick={handleSendResetPasswordEmail}>
              Reset Password
            </ButtonLink>
            <ButtonGroup>
              <ButtonGroupItem type="submit">Login</ButtonGroupItem>
              <ButtonGroupItem type="button" onClick={handleLoginWithGoogle}>
                Login With Google
              </ButtonGroupItem>
              <ButtonGroupItem
                onClick={handleSignUp}
                color="blue"
                type="button"
              >
                Sign Up
              </ButtonGroupItem>
            </ButtonGroup>
          </FormGroup>
        </>
      )}
    </Content>
  );
};

export default SignIn;
