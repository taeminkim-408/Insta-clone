import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { IsLoginState } from "./store/atom";
import { useRecoilValue } from "recoil";
import LoginPage from "./pages/Login";

export default function Router() {
  const isLogin = useRecoilValue(IsLoginState);
  return (
    <BrowserRouter>
      <Switch>
        {isLogin ? (
          <Route exact path="/login">
            <HomePage />
          </Route>
        ) : (
          <Route exact path="/">
            <LoginPage />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
}
