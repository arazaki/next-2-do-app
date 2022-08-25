import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer";
import { mock } from "../mock";

const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, mock);

  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const removeTodo = (todoId) => {
    dispatch({ type: "REMOVE_TODO", payload: { id: todoId } });
  };

  const editTodo = (updatedTodo) => {
    dispatch({
      type: "EDIT_TODO",
      payload: updatedTodo,
    });
  };

  const reorderCriteriaList = (newList) => {
    dispatch({
      type: "REORDER_CRITERIA_LIST",
      payload: newList,
    });
  };

  const addCriteria = (criteria) => {
    dispatch({
      type: "ADD_CRITERIA",
      payload: criteria,
    });
  };

  const removeCriteria = (criteriaId) => {
    dispatch({
      type: "REMOVE_CRITERIA",
      payload: { id: criteriaId },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        setUser,
        addTodo,
        removeTodo,
        editTodo,
        addCriteria,
        removeCriteria,
        reorderCriteriaList,
        todoList: state.todoList,
        criteriaList: state.criteriaList.sort((a, b) => a.order - b.order),
        user: state.user,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
