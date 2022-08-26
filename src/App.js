import { useContext, useEffect } from "react";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import { Container, Layout } from "./styles/globalStyles";
import FirebaseAuthService from "./firebase/FirebaseAuthService";
import GlobalContext from "store/context";
import { useFirebase } from "hooks";
import Loading from "components/Loading";

function App() {
  const { setUser } = useContext(GlobalContext);
  const { setCriteria, setTodos, isLoading } = useFirebase();
  FirebaseAuthService.subscribeToAuthChanges(setUser);
  useEffect(() => {
    console.log("App loaded");
    //init
    setTodos();
    setCriteria();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Layout>
        <Header />
        <Container>{isLoading ? <Loading /> : <Outlet />}</Container>
      </Layout>
    </div>
  );
}

export default App;
