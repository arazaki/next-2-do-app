import { useCallback, useContext, useEffect, useState } from "react";
import FirebaseAuthService from "./firebase/FirebaseAuthService";
import GlobalContext from "store/context";
import { useFirebase } from "hooks";
import Loading from "components/Loading";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import AppRouter from "routers";

function App() {
  const { user } = useContext(GlobalContext);
  const { setCriteria, setTodos, setUser } = useFirebase();
  const [isLoading, setIsLoading] = useState(true);

  const init = useCallback((user) => {
    setUser(user);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("App loaded");
    FirebaseAuthService.subscribeToAuthChanges(init);
    if (user) {
      setTodos();
      setCriteria();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isLoading ? <Loading /> : <AppRouter />}
      </ThemeProvider>
    </div>
  );
}

export default App;
