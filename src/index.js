import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./screens/Home";
import { UsersList } from "./screens/UsersList";
import { UserDetail } from "./screens/UserDetail";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route exact path="/users/" component={UsersList} />
        <Route path="/users/:name" component={UserDetail} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
