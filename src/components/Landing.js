import React from 'react';
import { Route, Link } from 'react-router-dom';
import landing from "../styles/landing.css";

const Landing = () => (
  <body className="background-image">
    <header>
      <h1>Algo Rhythm</h1>
      <nav>
        <Link className="Library" to='/library'>Library</Link>
        <i className="icon ion-md-play" id="nav-arrow"></i>
      </nav>
    </header>
    <section className="selling-points">
      <div className="selling-points">
       <p>Robot-powered jam selection <br />
       and discovery.</p>

       <p>Rock your jams wherever you be, <br />however you do.</p>

       <p>You are a butterfly.</p>
      </div>
    </section>
  </body>
)

export default Landing;
