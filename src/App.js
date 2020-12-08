import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import LoginRegisterPage from "./pages/login-register/login-register.component";
import { auth } from "./firebase/firebase.utils";

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.logout = auth.onAuthStateChanged(user => {
      this.setState({ loggedUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header loggedUser={this.state.loggedUser} />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route exact={true} path="/login" component={LoginRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App; 