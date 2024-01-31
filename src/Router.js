import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import HomePage from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* <Profile /> */}
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
