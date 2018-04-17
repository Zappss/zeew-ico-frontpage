import React, {Component} from 'react';
import {Route} from "react-router-dom";
/*Pages*/
import {AboutPage} from "./components/pages/about/about.page";
import {TeamPage} from "./components/pages/team/team.page";
/*Home partials*/
import {Main} from "./partials/main/main.partial";
import {Blog} from "./partials/blog/blog.partial";
import {Referrals} from "./partials/referrals/referral.partial";

export class AppRoute extends Component{
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/team" component={TeamPage}/>
                <Route path="/timeline" component={Timeline}/>
            </div>
        )
    }
}

const Home = () => (
    <div>
        <Main/>
        <Blog/>
        <Referrals/>
    </div>
);

const Timeline = () => (
    <div>
        <h5>1 ZEW token price</h5>

        <p>Round 0 (PRESALE): 1.000.000 ZEW &nbsp; = &nbsp;$ 0.50 (50% Discount)</p>

        <p><strong>Start of our ICO will be announced after the PRE-ICO</strong></p>

        <p>Round 1: 500,000&nbsp; &nbsp;=&nbsp; $ 1.00<br/>
            Round 2: 500,000&nbsp; &nbsp;=&nbsp; $ 1.00<br/>
            Round 3: 500,000&nbsp; &nbsp;=&nbsp; $ 1.00<br/>
            Round 4: 500,000&nbsp; &nbsp;=&nbsp; $ 1.00<br/>
            Round 5: 500,000&nbsp; &nbsp;=&nbsp; $ 1.00</p>

        <p>Round 6: 500,000&nbsp; &nbsp;=&nbsp; $ 1.20<br/>
            Round 7: 500,000&nbsp; &nbsp;=&nbsp; $ 1.20<br/>
            Round 8: 500,000&nbsp; &nbsp;=&nbsp; $ 1.20<br/>
            Round 9: 500,000&nbsp; &nbsp;=&nbsp; $ 1.20<br/>
            Round 10: 500,000&nbsp; &nbsp;=&nbsp; $ 1.20</p>

        <p>Round 11: 500,000&nbsp; &nbsp;=&nbsp; $ 1.40<br/>
            Round 12: 500,000&nbsp; &nbsp;=&nbsp; $ 1.40<br/>
            Round 13: 500,000&nbsp; &nbsp;=&nbsp; $ 1.40<br/>
            Round 14: 500,000&nbsp; &nbsp;=&nbsp; $ 1.40<br/>
            Round 15: 500,000&nbsp; &nbsp;=&nbsp; $ 1.40</p>

        <p>Round 16: 500,000&nbsp; &nbsp;=&nbsp; $ 1.60<br/>
            Round 17: 500,000&nbsp; &nbsp;=&nbsp; $ 1.60<br/>
            Round 18: 500,000&nbsp; &nbsp;=&nbsp; $ 1.60<br/>
            Round 19: 500,000&nbsp; &nbsp;=&nbsp; $ 1.60<br/>
            Round 20: 500,000&nbsp; &nbsp;=&nbsp; $ 1.60</p>
    </div>
);
