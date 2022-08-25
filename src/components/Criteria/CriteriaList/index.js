import { useContext } from "react";
import GlobalContext from "store/context";
import CriteriaListItem from "../CriteriaListItem";
import { useNavigate } from "react-router-dom";
import { Content } from "./styles";
import MainButton from "components/MainButton";
import FooterButtons from "components/FooterButtons";
import { Gear } from "assets/svg";

const CriteriaList = () => {
  const navigate = useNavigate();
  const { criteriaList } = useContext(GlobalContext);

  const onClickReorder = () => {
    navigate("/criterias/reorder");
  };

  const onClickEditCriterias = () => {
    navigate("/criterias/edit");
  };

  return (
    <Content>
      <h1>How are you feeling today?</h1>
      <ul>
        {criteriaList.map((item) => {
          return <CriteriaListItem key={item.id} item={item} />;
        })}
      </ul>
      <MainButton onClick={onClickReorder}>Reorder!</MainButton>
      <FooterButtons>
        <button type="button" onClick={onClickEditCriterias}>
          <Gear width="25px" height="25px" outline="#fff" color="transparent" />
        </button>
      </FooterButtons>
    </Content>
  );
};

export default CriteriaList;
