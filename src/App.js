import Header from "components/Header";
import { Outlet } from "react-router-dom";
import { Container, Layout } from "./styles/globalStyles";

function App() {
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
