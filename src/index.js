import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// Fonts
import "./fonts/Minecraft.ttf";
import "./fonts/Minecrafter.Reg.ttf";
import "./fonts/Minecrafter.Alt.ttf";

// Router
// import { Router, Route, Link } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

//Components
import App from "./App";
import Biomes from "./Components/Biomes";
import Combat from "./Components/Combat";
import Redstone from "./Components/Redstone";
import Mobs from "./Components/Mobs";
import Updates from "./Components/Updates";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={App}>
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={App} />
        <Route exact path="/mobs" component={Mobs} />
        <Route exact path="/biomes" component={Biomes} />
        <Route exact path="/updates" component={Updates} />
        <Route exact path="/redstone" component={Redstone} />
        <Route exact path="/combat" component={Combat} />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
