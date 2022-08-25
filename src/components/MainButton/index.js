import { Button } from "./styles.js";

const MainButton = ({ children, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

export default MainButton;
