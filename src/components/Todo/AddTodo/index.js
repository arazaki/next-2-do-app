import { useFirebase } from "hooks";
import TodoForm from "../TodoForm";

const AddTodo = () => {
  const { addTodo } = useFirebase();

  return (
    <>
      <h1>Add Todo</h1>
      <TodoForm onSave={addTodo} />
    </>
  );
};

export default AddTodo;
