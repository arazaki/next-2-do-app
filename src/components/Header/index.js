import { useContext } from "react";
import GlobalContext from "store/context";
import { Header, NavBar, TopHeader } from "./styles";
import { NavLink, Link } from "react-router-dom";
import FirebaseAuthService from "../../firebase/FirebaseAuthService";

const HeaderApp = () => {
  const { user } = useContext(GlobalContext);
  const handleLogout = () => {
    FirebaseAuthService.logoutUser();
  };
  return (
    <Header>
      <TopHeader>
        <h1>Next2Do</h1>
        <div>
          {user ? (
            <>
              <label>{user?.email}</label>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/signin">Login</Link>
          )}
        </div>
      </TopHeader>
      <NavBar>
        <NavLink
          to="/criteria"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Criteria
        </NavLink>
        {" | "}
        <NavLink
          to="/todos"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Todos
        </NavLink>
      </NavBar>
    </Header>
  );
};

export default HeaderApp;
