import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { AppHeader } from "./components/header/header.compoentn";
import { AppFooter } from "./components/footer/footer.component";
import { Button } from 'reactstrap';

let show = true;

export class App extends Component {
  render(
      ShowHide = () => (
          show = !show
      )
  ) {
    return (
      <div className="App">
          <AppHeader/>
            <div className="App-intro">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/timeline" component={Timeline} />
            </div>
          <button onClick={this.showContent}>Click Me</button>
          <Button color="danger">Danger!</Button>

          <AppFooter/>
      </div>
    );
  }
}
const Home = () => (
    <div>
        <h1>Hello World!</h1>
    </div>
);

const About = () => (
    <div>
        <h1>About</h1>
        <p>A lot of text</p>
    </div>
);

const Timeline = () => (
    <div>
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
    </div>
);
