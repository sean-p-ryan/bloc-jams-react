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
      <div className="dexter">
       <p className="selling-point-text">Robot-powered jam selection and discovery.</p>
       <div className="dexter-image">
       </div>
      </div>
      <div className="beethoven">
       <p className="selling-point-text">Rock your jams wherever you be, however you do.</p>
       <div className="beethoven-image">
       </div>
      </div>
      <div className="willie">
       <p className="selling-point-text">You are a butterfly.</p>
       <div className="willie-image">
       </div>
      </div>
    </section>
  </body>
)

export default Landing;
