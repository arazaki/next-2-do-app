import { useContext } from "react";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import { Container, Layout } from "./styles/globalStyles";
import FirebaseAuthService from "./firebase/FirebaseAuthService";
import GlobalContext from "store/context";

function App() {
  const { setUser } = useContext(GlobalContext);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

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
