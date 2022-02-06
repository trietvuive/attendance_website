import React from "react";
import Header from "./layout/header/Header";
import Student from "./component/student/Student";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import Login from "./component/login/Login";
import { sessionService } from 'redux-react-session';
function App() {
  return (
    <div>
      <Router>
        <Header />
		<Switch>
		  <Route exact path="/" render={props => <Login/>} />
		  <Route
			path="/attendance"
			render={() => (
				<RequireAuth redirectTo="/">
					<Student type="checkbox"/>
				</RequireAuth>
			)}
			/>
		  <Route
			path="/effort"
			render={() => (
				<RequireAuth redirectTo="/">
					<Student type="number"/>
				</RequireAuth>
			)}
			/>
		  <Route
			path="/progress"
			render={() => (
				<RequireAuth redirectTo="/">
					<Student type="number"/>
				</RequireAuth>
			)}
			/>
		  <Route
			path="/add"
			render={() => (
				<RequireAuth redirectTo="/">
					<AddStudent/>
				</RequireAuth>
			)}
			/>
			
        </Switch>
      </Router>
    </div>
  );
}

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = localStorage.getItem("password");
  return isAuthenticated ? children : <Redirect to={redirectTo} />;
}

export default App;
