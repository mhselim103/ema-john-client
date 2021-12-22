import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Inventory from "./Components/Inventory/Inventory";
import OrderReview from "./Components/OrderReview/OrderReview";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/Register/Register";
import AuthProvider from "../src/Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Notfound from "./Components/NotFound/Notfound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <PrivateRoute path="/review">
            <OrderReview></OrderReview>
          </PrivateRoute>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/register">
            <Register> </Register>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
