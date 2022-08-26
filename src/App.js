import { useContext, useEffect } from "react";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import { Container, Layout } from "./styles/globalStyles";
import FirebaseAuthService from "./firebase/FirebaseAuthService";
import GlobalContext from "store/context";

function App() {
  const { setUser, setTodos, setCriteria } = useContext(GlobalContext);

  FirebaseAuthService.subscribeToAuthChanges(setUser);
  useEffect(() => {
    console.log("App loaded");
    //init
    setTodos();
    setCriteria();
  }, []);

  return (
    <div className="App">
      <Layout>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </Layout>
    </div>
  );
}

export default App;
