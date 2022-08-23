import { useContext } from "react";
import GlobalContext from "store/context";
import { Header, NavBar, TopHeader } from "./styles";
import { NavLink } from "react-router-dom";

const HeaderApp = () => {
  const { user } = useContext(GlobalContext);
  return (
    <Header>
      <TopHeader>
        <h1>Next2Do</h1>
        <label>{user.email}</label>
      </TopHeader>
      <NavBar>
        <NavLink
          to="/criterias"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Criterias
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
