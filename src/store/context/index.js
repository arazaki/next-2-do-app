import { createContext, useReducer } from "react";
import { reducer } from "../reducer";
import { mock } from "../mock";

const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, mock);

  return (
    <GlobalContext.Provider
      value={{
        dispatch,
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
