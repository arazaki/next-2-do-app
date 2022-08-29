import { useContext, useCallback } from "react";
import GlobalContext from "store/context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoList from "components/Todo/TodoList";
import CriteriaList from "components/Criteria/CriteriaList";
import AddTodo from "components/Todo/AddTodo";
import EditTodo from "components/Todo/EditTodo";
import ViewTodo from "components/Todo/ViewTodo";
import Reorder from "components/Criteria/Reorder";
import EditCriteriaList from "components/Criteria/EditCriteriaList";
import SignUp from "components/Login/SignUp";
import SignIn from "components/Login/SignIn";
import Layout from "components/Layout";

const AppRouter = () => {
  const { user } = useContext(GlobalContext);
  const Private = useCallback(
    ({ children }) => <>{user ? children : <Navigate to="/signin" />}</>,
    [user]
  );

  const Public = useCallback(
    ({ children }) => {
      return <>{user ? <Navigate to="/criteria" /> : children}</>;
    },
    [user]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="todos"
            element={
              <Private>
                <TodoList />
              </Private>
            }
          />
          <Route
            path="criteria"
            element={
              <Private>
                <CriteriaList />
              </Private>
            }
          />
          <Route
            path="criteria/reorder"
            element={
              <Private>
                <Reorder />
              </Private>
            }
          />
          <Route
            path="criteria/edit"
            element={
              <Private>
                <EditCriteriaList />
              </Private>
            }
          />
          <Route
            path="todos/add"
            element={
              <Private>
                <AddTodo />
              </Private>
            }
          />
          <Route
            path="todos/edit/:todoId"
            element={
              <Private>
                <EditTodo />
              </Private>
            }
          />
          <Route
            path="todos/:todoId"
            element={
              <Private>
                <ViewTodo />
              </Private>
            }
          />
        </Route>
        <Route
          path="/signin"
          element={
            <Public>
              <SignIn />
            </Public>
          }
        />
        <Route
          path="/signup"
          element={
            <Public>
              <SignUp />
            </Public>
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404. There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
