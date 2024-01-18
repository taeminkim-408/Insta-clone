import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
