import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./styles/App.css";
import "./styles/landing.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />

        </main>
<Route exact path="/" component={Landing} />
      </div>
    );
  }
}

export default App;
