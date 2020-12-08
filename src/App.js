import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import LoginRegisterPage from "./pages/login-register/login-register.component";

import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/shop" component={ShopPage} />
        <Route exact={true} path="/login" component={LoginRegisterPage} />
      </Switch>
    </div>
  );
}

export default App; 