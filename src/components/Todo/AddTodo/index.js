import { useContext } from "react";
import GlobalContext from "store/context";
import TodoForm from "../TodoForm";

const AddTodo = () => {
  const { addTodo } = useContext(GlobalContext);

  return (
    <>
      <h1>Add Todo</h1>
      <TodoForm onSave={addTodo} />
    </>
  );
};

export default AddTodo;
