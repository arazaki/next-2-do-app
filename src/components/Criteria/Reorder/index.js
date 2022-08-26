import { useContext, useState } from "react";
import GlobalContext from "store/context";
import { useNavigate } from "react-router-dom";
import { Content, TagGroup } from "./styles";
import MainButton from "components/MainButton";
import { Remove } from "assets/svg";
import { useFirebase } from "hooks";

const Reorder = () => {
  const navigate = useNavigate();
  const { criteriaList } = useContext(GlobalContext);
  const { reorderCriteriaList } = useFirebase();
  const [baseList, setBaseList] = useState(criteriaList);
  const [newList, setNewList] = useState([]);

  const addItemToList = (item) => {
    const newItem = {
      ...item,
      order: newList.length + 1,
    };
    setNewList((prev) => [...prev, newItem]);
    setBaseList((prev) => prev.filter((criteria) => criteria.id !== item.id));
  };

  const removeItemFromList = (item) => {
    setBaseList((prev) => [...prev, item]);
    setNewList((prev) => prev.filter((criteria) => criteria.id !== item.id));
  };

  const confirmList = () => {
    if (baseList.length === 0) {
      reorderCriteriaList(newList);
      navigate("../todos");
    }
  };

  return (
    <Content>
      <h1>Reorder</h1>
      <TagGroup>
        {baseList.map((item) => {
          return (
            <button
              type="button"
              key={item.id}
              onClick={() => addItemToList(item)}
            >
              {item.title}
            </button>
          );
        })}
      </TagGroup>
      <ul>
        {Array(criteriaList.length)
          .fill()
          .map((item, idx) => {
            return (
              <li key={idx}>
                <label>{idx + 1} - </label>
                <div>
                  <span>{newList[idx]?.title}</span>
                  {newList[idx] && (
                    <button
                      type="button"
                      onClick={() => removeItemFromList(newList[idx])}
                    >
                      <Remove
                        width="25px"
                        height="25px"
                        color="#fff"
                        outline="#fff"
                      />
                    </button>
                  )}
                </div>
              </li>
            );
          })}
      </ul>
      <MainButton onClick={confirmList}>Sounds Great!</MainButton>
    </Content>
  );
};

export default Reorder;
