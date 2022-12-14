import TodoForm from "../TodoForm";
import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "store/context";
import { useFirebase } from "hooks";

const EditTodo = () => {
  const { todoList } = useContext(GlobalContext);
  const { editTodo } = useFirebase();
  const params = useParams();

  const todo = useMemo(() => {
    const foundTodo = todoList.find((item) => {
      return item.id.toString() === params.todoId.toString();
    });
    return foundTodo;
  }, [params.todoId, todoList]);

  return (
    <>
      <h1>Edit Todo</h1>
      <TodoForm onSave={editTodo} todo={todo} />
    </>
  );
};

export default EditTodo;
