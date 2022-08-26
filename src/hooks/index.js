import FirebaseFirestoreService from "../firebase/FirebaseFirestoreService";
import { useContext, useState } from "react";
import GlobalContext from "store/context";

export const useCalculatePoints = () => {
  const { todoList, criteriaList } = useContext(GlobalContext);

  // filter only "active" todos
  const activeTodos = todoList.filter((todo) => {
    return todo.status !== "done";
  });

  // calculate the points of each criteria
  const calculatedTodoList = activeTodos.map((todo) => {
    let total = 0;
    criteriaList.forEach((criteria) => {
      const score = todo.scores[criteria.id];
      const order = criteria.order;
      if (score) {
        total = score / order + total;
      } else {
        return (total = null);
      }
    });
    return {
      ...todo,
      points: total ? total.toFixed(2) : total,
    };
  });

  // order the list
  const orderedTodoList = calculatedTodoList.sort(
    (a, b) => b.points - a.points
  );

  return orderedTodoList;
};

export const useFirebase = () => {
  const { dispatch } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);

  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  const setTodos = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
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

  const removeTodo = async (todoId) => {
    try {
      setIsLoading(true);
      await FirebaseFirestoreService.deleteDocument("todos", todoId);
      // @TODO remove this
      console.log(`successfully removed a todo with an ID = ${todoId}`);
      dispatch({ type: "REMOVE_TODO", payload: { id: todoId } });
      setIsLoading(false);
    } catch (error) {
      const errorMsg = `context.removed_todo [${JSON.stringify(error)}]`;
      console.log(errorMsg);
    }
  };

  const setCriteria = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
    } catch (error) {
      const errorMsg = `context.set_criteria [${JSON.stringify(error)}]`;
      console.log(errorMsg);
    }
  };

  const reorderCriteriaList = async (newList) => {
    setIsLoading(true);
    try {
      await FirebaseFirestoreService.updateDocuments("criteria", newList);
      console.log(`successfully reordered criterias`);
      dispatch({
        type: "REORDER_CRITERIA_LIST",
        payload: newList,
      });
      setIsLoading(false);
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
  return {
    setUser,
    setCriteria,
    setTodos,
    addCriteria,
    addTodo,
    editTodo,
    removeCriteria,
    removeTodo,
    reorderCriteriaList,
    isLoading,
  };
};
