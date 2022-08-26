import { useRef, useContext, useState } from "react";
import GlobalContext from "store/context";
import { useNavigate } from "react-router-dom";
import { Content, ListItem } from "./styles";
import { InputText } from "styles/globalStyles";
import MainButton from "components/MainButton";

const TodoForm = ({ onSave, todo }) => {
  const inputRef = useRef();
  const { criteriaList } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [rates, setRates] = useState(() => {
    let ratesObj = {};
    criteriaList.forEach((item) => {
      ratesObj[item.id] = "default";
    });

    if (todo) {
      ratesObj = {
        ...ratesObj,
        ...todo.scores,
      };
    }
    return ratesObj;
  });

  const onSaveHandler = () => {
    let newTodo = {};
    if (todo) {
      //update
      newTodo = {
        ...todo,
        title: inputRef.current.value,
        scores: rates,
      };
    } else {
      //create
      newTodo = {
        title: inputRef.current.value,
        scores: rates,
        status: "active",
      };
    }

    onSave(newTodo);
    navigate("/todos");
  };

  const onChangeRates = (e, criteriaId) => {
    const value = e.target.value;
    setRates((prev) => {
      return {
        ...prev,
        [criteriaId]: value,
      };
    });
  };

  return (
    <Content>
      <InputText
        type="text"
        ref={inputRef}
        defaultValue={todo ? todo.title : ""}
        placeholder="Add todo's name"
      />
      <h2>Rate your todo</h2>
      <ul>
        {criteriaList.map((item) => {
          return (
            <ListItem key={item.id}>
              <label>{item.title}</label>
              <select
                value={rates[item.id]}
                onChange={(e) => onChangeRates(e, item.id)}
              >
                <option value={"default"} disabled>
                  Select
                </option>
                {Array(10)
                  .fill()
                  .map((_, idx) => (
                    <option key={item.title + idx} value={idx + 1}>
                      {idx + 1}
                    </option>
                  ))}
              </select>
            </ListItem>
          );
        })}
      </ul>

      <MainButton onClick={onSaveHandler}>Save</MainButton>
    </Content>
  );
};

export default TodoForm;
