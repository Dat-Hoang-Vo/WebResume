import Home from "./page/Home";
import Auth from "./page/Auth";
import AuthLoggedIn from "./page/AuthLoggedIn";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/auth">
          <Auth />
        </Route>

        <Route exact path="/authLoggedIn">
          <AuthLoggedIn />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
