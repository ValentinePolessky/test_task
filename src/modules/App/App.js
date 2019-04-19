import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../../styles/App.css';

import Home from "../Home/Home";
import Contracts from "../Contracts/Contracts";
import Customers from "../Customers/Customers";

const App = () => {
    return (
      <div className="App">
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/contracts" component={Contracts} />
            <Route path="/customers" component={Customers} />
        </Router>
      </div>
    );
};

export default App;
