import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './styles/App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Jams</h1>
          <nav>
            <Link className="Library" to='/library'>Library</Link>
            <i class="icon ion-md-play"></i>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={ Landing } />
          <Route path="/library" component={ Library } />
          <Route path="/album/:slug" component={ Album } />
        </main>
      </div>
    );
  }
}

export default App;
