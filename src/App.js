import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import Cart from "./pages/Cart";
import Form from "./pages/FormPage";
import Confirmation from "./pages/Confirmation";
/**
 * provides routing to different pages
 */

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/listings">
          <ListingsPage />
        </Route>
        <Route exact path="/listingsPage">
          <Form />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/confirmed">
          <Confirmation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;