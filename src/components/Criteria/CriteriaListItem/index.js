import { ListItem } from "./styles";

const CriteriaListItem = ({ item }) => {
  return (
    <ListItem>
      <label>
        {item.order} - {item.title}
      </label>
    </ListItem>
  );
};

export default CriteriaListItem;
