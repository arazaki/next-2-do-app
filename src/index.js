import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import { GlobalContextProvider } from "./store/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/Todo/TodoList";
import CriteriaList from "components/Criteria/CriteriaList";
import AddTodo from "components/Todo/AddTodo";
import EditTodo from "components/Todo/EditTodo";
import ViewTodo from "components/Todo/ViewTodo";
import Reorder from "components/Criteria/Reorder";
import EditCriteriaList from "components/Criteria/EditCriteriaList";
import SignUp from "components/Login/SignUp";
import SignIn from "components/Login/SignIn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="todos" element={<TodoList />}></Route>
              <Route path="criteria" element={<CriteriaList />} />
              <Route path="criteria/reorder" element={<Reorder />} />
              <Route path="criteria/edit" element={<EditCriteriaList />} />
              <Route path="todos/add" element={<AddTodo />} />
              <Route path="todos/edit/:todoId" element={<EditTodo />} />
              <Route path="todos/:todoId" element={<ViewTodo />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
