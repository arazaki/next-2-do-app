import { useNavigate } from "react-router-dom";
import { ListItem } from "./styles";

const TodoListItem = ({ item }) => {
  const navigate = useNavigate();
  const viewTodo = () => {
    navigate(`/todos/${item.id}`);
  };
  const onClickEdit = () => {
    navigate(`/todos/edit/${item.id}`);
  };
  return (
    <ListItem>
      <label onClick={viewTodo}>{item.title}</label>
      <span>
        {item.points ? (
          item.points
        ) : (
          <button type="button" onClick={onClickEdit}>
            Set
          </button>
        )}
      </span>
    </ListItem>
  );
};

export default TodoListItem;
