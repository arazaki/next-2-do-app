import { useContext, useEffect } from "react";
import Header from "components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Layout } from "./styles/globalStyles";
import FirebaseAuthService from "./firebase/FirebaseAuthService";
import GlobalContext from "store/context";
import { useFirebase } from "hooks";
import Loading from "components/Loading";

function App() {
  const navigate = useNavigate();
  const { user } = useContext(GlobalContext);
  const { setCriteria, setTodos, setUser, isLoading } = useFirebase();
  FirebaseAuthService.subscribeToAuthChanges(setUser);
  useEffect(() => {
    console.log("App loaded");
    if (user) {
      //init
      setTodos();
      setCriteria();
    } else {
      navigate("signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
