import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "store/context";
import { getTodo } from "selectors";
import { useCalculatePoints, useFirebase } from "hooks";
import { Content, ListItem } from "./styles";
import FooterButtons from "components/FooterButtons";
import MainButton from "components/MainButton";

const ViewTodo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { criteriaList } = useContext(GlobalContext);
  const { removeTodo, editTodo } = useFirebase();
  const todos = useCalculatePoints();

  const todo = getTodo(todos, params.todoId);

  const onClickDelete = () => {
    removeTodo(params.todoId);
    navigate("/todos");
  };

  const onClickEdit = () => {
    navigate(`/todos/edit/${todo.id}`);
  };

  const onClickDone = () => {
    editTodo({
      ...todo,
      status: "done",
    });
    navigate("/todos");
  };

  return (
    <Content>
      <div>
        <h1>{todo?.title}</h1>
        <ul>
          {criteriaList.map((criteria) => (
            <ListItem key={criteria.id}>
              <label>{criteria.title}</label>
              <span>{todo?.scores[criteria.id]}</span>
            </ListItem>
          ))}
        </ul>
        <p>
          Points
          {todo?.points ? (
            <span>{todo.points}</span>
          ) : (
            <span onClick={onClickEdit}>Set</span>
          )}
        </p>
      </div>

      <MainButton onClick={onClickDone}>Done!</MainButton>
      <FooterButtons>
        <button type="button" onClick={onClickEdit}>
          Edit
        </button>
        <button type="button" onClick={onClickDelete}>
          Delete
        </button>
      </FooterButtons>
    </Content>
  );
};

export default ViewTodo;
