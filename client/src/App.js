import React from "react";
import "./App.css";
import Login from "./Containers/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Containers/SignUp";
import setAuthToken from "./store/utils/setAuthtoken";

import { PersistGate } from "redux-persist/integration/react";
import ErrorPage from "./Components/ErrorPage";

//REDUX
import { Provider } from "react-redux";
import store from "./store/store";
import { persistor } from "../src/store/store";
import ProfileScreen from "./Containers/ProfileScreen";
import PrivateRoutes from "./store/utils/PrivateRoutes";
import jwt_decode from "jwt-decode";
import { set_current_user } from "./store/actions/auth";

if (localStorage.getItem("jwtToken")) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(set_current_user(decoded));
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Switch>
              {localStorage.getItem("jwtToken") ? (
                <PrivateRoutes
                  exact
                  path="/"
                  component={ProfileScreen}
                ></PrivateRoutes>
              ) : (
                <Route exact path="/" component={Login}></Route>
              )}

              <Route exact path="/signup" component={SignUp}></Route>
              <PrivateRoutes
                exact
                path="/profile"
                component={ProfileScreen}
              ></PrivateRoutes>
              <Route exact path="/error" component={ErrorPage}></Route>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
