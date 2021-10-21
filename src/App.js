import { Route, Router, Switch } from "react-router";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact component={Home} />
        <HomeTemplate path="/contact" exact component={Contact} />
        <HomeTemplate path="/news" exact component={News} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
