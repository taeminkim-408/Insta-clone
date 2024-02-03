import { BrowserRouter, Route, Switch } from "react-router-dom";
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
