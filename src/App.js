
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import AddTutor from './components/AddTutor/AddTutor'
import Login from "./components/LogIn/Login";
import AddService from "./components/AddTutor/AddService";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/addTutor">
            <AddTutor></AddTutor>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
        </Switch>
      </Router >
    </UserContext.Provider>
  );
}

export default App;
