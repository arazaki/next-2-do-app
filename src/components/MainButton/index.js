import { Button } from "./styles.js";

const MainButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default MainButton;
