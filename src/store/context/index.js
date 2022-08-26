import { createContext, useReducer } from "react";
import { reducer } from "../reducer";
import { mock } from "../mock";
import FirebaseFirestoreService from "../../firebase/FirebaseFirestoreService";

const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, mock);

  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  const setTodos = async () => {
    try {
      const response = await FirebaseFirestoreService.readDocuments({
        collection: "todos",
        queries: [
          {
            field: "status",
            condition: "==",
            value: "active",
          },
        ],
      });
      const todos = response.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        return {
          ...data,
          id,
        };
      });
      dispatch({ type: "SET_TODOS", payload: todos });
    } catch (error) {
      const errorMsg = `context.set_todos [${JSON.stringify(error)}]`;
      console.log(errorMsg);
    }
  };

  const addTodo = async (todo) => {
    try {
      const response = await FirebaseFirestoreService.createDocument(
        "todos",
        todo
      );
      // @TODO remove this
      console.log(`successfully created a todo with an ID = ${response.id}`);
      dispatch({ type: "ADD_TODO", payload: { ...todo, id: response.id } });
    } catch (error) {
      const errorMsg = `context.add_todo [${JSON.stringify(error)}]`;
      console.log(errorMsg);
    }
  };

  const removeTodo = async (todoId) => {
    try {
      await FirebaseFirestoreService.deleteDocument("todos", todoId);
      // @TODO remove this
      console.log(`successfully removed a todo with an ID = ${todoId}`);
      dispatch({ type: "REMOVE_TODO", payload: { id: todoId } });
    } catch (error) {
      const errorMsg = `context.removed_todo [${JSON.stringify(error)}]`;
      console.log(errorMsg);
    }
  };

  const editTodo = async (updatedTodo) => {
    try {
      await FirebaseFirestoreService.updateDocument(
        "todos",
        updatedTodo.id,
        updatedTodo
      );
      // @TODO remove this
      console.log(`successfully updated a todo with an ID = ${updatedTodo.id}`);
      dispatch({
        type: "EDIT_TODO",
        payload: updatedTodo,
      });
    } catch (error) {
      const errorMsg = `context.update_todo [${JSON.stringify(error)}]`;
      console.log(errorMsg);
    }
  };

  const setCriteria = async () => {
    try {
      const response = await FirebaseFirestoreService.readDocuments({
        collection: "criteria",
      });
      const criteria = response.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        return {
          ...data,
          id,
        };
      });
      dispatch({ type: "SET_CRITERIA", payload: criteria });
    } catch (error) {
      const errorMsg = `context.set_criteria [${JSON.stringify(error)}]`;
      console.log(errorMsg);
    }
  };

  const reorderCriteriaList = async (newList) => {
    try {
      await FirebaseFirestoreService.updateDocuments("criteria", newList);
      console.log(`successfully reordered criterias`);
      dispatch({
        type: "REORDER_CRITERIA_LIST",
        payload: newList,
      });
    } catch (error) {
      const errorMsg = `context.reorder_criteria_list [${JSON.stringify(
        error
      )}]`;
      console.log(errorMsg);
    }
  };

  const addCriteria = async (criteria) => {
    try {
      const response = await FirebaseFirestoreService.createDocument(
        "criteria",
        criteria
      );
      // @TODO remove this
      console.log(
        `successfully created a criteria with an ID = ${response.id}`
      );
      dispatch({
        type: "ADD_CRITERIA",
        payload: { ...criteria, id: response.id },
      });
    } catch (error) {
      const errorMsg = `context.add_criteria [${JSON.stringify(error)}]`;
      console.log(errorMsg);
    }
  };

  const removeCriteria = async (criteriaId) => {
    try {
      await FirebaseFirestoreService.deleteDocument("criteria", criteriaId);
      console.log(`successfully removed a criteria with an ID = ${criteriaId}`);
      dispatch({
        type: "REMOVE_CRITERIA",
        payload: { id: criteriaId },
      });
    } catch (error) {
      const errorMsg = `context.remove_criteria [${JSON.stringify(error)}]`;
      console.log(errorMsg);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        setUser,
        setTodos,
        addTodo,
        removeTodo,
        editTodo,
        setCriteria,
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
