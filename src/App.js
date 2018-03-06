import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './img/zeew-logo-green.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ZEEW investors Fromtpage</h1>
        </header>
        <p className="App-intro">
            <h5>1 ZEW token price</h5>

            <p>Round 0 (PRESALE): 1.000.000 ZEW &nbsp; = &nbsp;$ 0.50 (50% Discount)</p>

            <p><strong>Start of our ICO will be announced after the PRE-ICO</strong></p>

            <p>Round 1: 500,000&nbsp; &nbsp;=&nbsp; $ 1.00<br />
                Round 2: 500,000&nbsp; &nbsp;=&nbsp; $ 1.00<br />
                Round 3: 500,000&nbsp; &nbsp;=&nbsp; $ 1.00<br />
                Round 4: 500,000&nbsp; &nbsp;=&nbsp; $ 1.00<br />
                Round 5: 500,000&nbsp; &nbsp;=&nbsp; $ 1.00</p>

            <p>Round 6: 500,000&nbsp; &nbsp;=&nbsp; $ 1.20<br />
                Round 7: 500,000&nbsp; &nbsp;=&nbsp; $ 1.20<br />
                Round 8: 500,000&nbsp; &nbsp;=&nbsp; $ 1.20<br />
                Round 9: 500,000&nbsp; &nbsp;=&nbsp; $ 1.20<br />
                Round 10: 500,000&nbsp; &nbsp;=&nbsp; $ 1.20</p>

            <p>Round 11: 500,000&nbsp; &nbsp;=&nbsp; $ 1.40<br />
                Round 12: 500,000&nbsp; &nbsp;=&nbsp; $ 1.40<br />
                Round 13: 500,000&nbsp; &nbsp;=&nbsp; $ 1.40<br />
                Round 14: 500,000&nbsp; &nbsp;=&nbsp; $ 1.40<br />
                Round 15: 500,000&nbsp; &nbsp;=&nbsp; $ 1.40</p>

            <p>Round 16: 500,000&nbsp; &nbsp;=&nbsp; $ 1.60<br />
                Round 17: 500,000&nbsp; &nbsp;=&nbsp; $ 1.60<br />
                Round 18: 500,000&nbsp; &nbsp;=&nbsp; $ 1.60<br />
                Round 19: 500,000&nbsp; &nbsp;=&nbsp; $ 1.60<br />
                Round 20: 500,000&nbsp; &nbsp;=&nbsp; $ 1.60</p>

        </p>
      </div>
    );
  }
}

export default App;
