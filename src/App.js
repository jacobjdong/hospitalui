import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Home from "./screens/Home";
import Login from "./screens/Login";
import PatientInfo from "./screens/PatientInfo";
import PatientDatabase from "./screens/PatientDatabase";
import Settings from "./screens/Settings";
import UpdateInfo from "./screens/UpdateInfo";
import DeleteInfo from "./screens/DeleteInfo";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Home/" exact component={Home} />
      <Route path="/Login/" exact component={Login} />
      <Route path="/PatientInfo/" exact component={PatientInfo} />
      <Route path="/PatientDatabase/" exact component={PatientDatabase} />
      <Route path="/Settings/" exact component={Settings} />
      <Route path="/UpdateInfo/" exact component={UpdateInfo} />
      <Route path="/DeleteInfo/" exact component={DeleteInfo} />
    </Router>
  );
}

export default App;
