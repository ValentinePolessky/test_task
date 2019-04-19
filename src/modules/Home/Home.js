import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="vertical-center-container">
      <h1>
          The Contract Automation Platform
      </h1>
      <div className="links-holder">
          <Link to="/contracts">Contracts</Link>
          <Link to="/customers">Customers</Link>
      </div>
  </div>
);

export default Home;
