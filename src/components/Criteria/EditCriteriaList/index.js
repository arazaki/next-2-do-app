import { useContext, useRef } from "react";
import GlobalContext from "store/context";
import { Content, ListItem } from "./styles";
import { InputText } from "styles/globalStyles";
import MainButton from "components/MainButton";
import { Remove } from "assets/svg";

const EditCriteriaList = () => {
  const inputRef = useRef("");
  const { criteriaList, removeCriteria, addCriteria } =
    useContext(GlobalContext);

  const onClickAddCriteria = () => {
    if (inputRef.current !== "") {
      const newCriteria = {
        id: criteriaList.length + 1,
        title: inputRef.current.value,
        order: criteriaList.length + 1,
      };
      addCriteria(newCriteria);
    }
    inputRef.current.value = "";
  };

  const onClickRemoveCriteria = (criteriaId) => {
    removeCriteria(criteriaId);
  };

  return (
    <Content>
      <h1>Edit Criterias</h1>
      <InputText
        ref={inputRef}
        type="text"
        placeholder="Write down your criteria"
      />
      <MainButton onClick={onClickAddCriteria}>Add Criteria</MainButton>
      <ul>
        {criteriaList.map((item) => {
          return (
            <ListItem key={item.id}>
              <label>{item.title}</label>
              <button onClick={() => onClickRemoveCriteria(item.id)}>
                <Remove
                  width="25px"
                  height="25px"
                  color="#fff"
                  outline="#fff"
                />
              </button>
            </ListItem>
          );
        })}
      </ul>
    </Content>
  );
};

export default EditCriteriaList;
