import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      <header>
        <div id="icon">
          <img src="./images/favicon.ico" alt="Website icon" width="120" height="100" />
          {/* h1 changes from "My Portfolio" to "Ho Ting Edmund Tsoi" */}
          <h1 id="website-name">Ho Ting Edmund Tsoi</h1>
        </div>
      </header>
      <nav>
        {/* switch the order of Education and Project and change Education to Services. */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |  <Link to="/project">Project</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>   
      </nav>
      {/* delete br and hr */ }
    </>
    
  );
}

