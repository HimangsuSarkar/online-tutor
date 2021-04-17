
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
import AddReview from "./components/Home/Review/AddReview";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Enroll from "./components/Enroll/Enroll";
import EnrollList from "./components/Enroll/EnrollList";
import AddAdmin from "./components/AddAdmin/AddAdmin";
import StudentList from "./components/AddAdmin/StudentList";

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
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/enroll/:key">
            <Enroll></Enroll>
          </PrivateRoute>
          <PrivateRoute path="/enroll_list">
            <EnrollList></EnrollList>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/students">
            <StudentList></StudentList>
          </PrivateRoute>
          <PrivateRoute path="/addTutor">
            <AddTutor></AddTutor>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
        </Switch>
      </Router >
    </UserContext.Provider >
  );
}

export default App;
