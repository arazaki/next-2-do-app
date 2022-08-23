import TodoListItem from "../TodoListItem";
import { useNavigate } from "react-router-dom";
import { useCalculatePoints } from "hooks";
import { Content } from "./styles";
import FooterButtons from "components/FooterButtons";
import { Plus } from "assets/svg";

const TodoList = () => {
  const navigate = useNavigate();
  const todos = useCalculatePoints();

  const openAddTodo = () => {
    navigate("/todos/add");
  };

  return (
    <Content>
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map((item) => {
            return <TodoListItem key={item.id} item={item} />;
          })}
        </ul>
      </div>
      <FooterButtons>
        <button onClick={openAddTodo}>
          <Plus width="25px" height="25px" color="#fff" outline="#fff" />
        </button>
      </FooterButtons>
    </Content>
  );
};

export default TodoList;
