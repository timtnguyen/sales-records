import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils.js";
import HomePage from "./pages/home-page/home-page.component";
import NavBar from "./components/navbar/navbar.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

//{
//    apiKey: "AIzaSyA1OzGe-EZ7WB3nkvPmnz0teDB7kLpa7L0",
//   authDomain: "sales-data-cdbe8.firebaseapp.com",
//   databaseURL: "https://sales-data-cdbe8.firebaseio.com",
//  projectId: "sales-data-cdbe8",
//  storageBucket: "sales-data-cdbe8.appspot.com",
//  messagingSenderId: "303873876509",
//  appId: "1:303873876509:web:45ebaf67dec732f9039cf4",
// measurementId: "G-N7LKCBNHSF"
//};
