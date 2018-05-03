import React, {Component} from 'react';
import './App.css';
import './styles/custom.css';
import './styles/style.css';
import {AppHeader} from "./layout/header/header.compoentn";
import {AppFooter} from "./layout/footer/footer.component";
/*import {AppRoute} from "./route";*/

import {Main} from "./partials/main/main.partial";
import {Blog} from "./partials/blog/blog.partial";
import {Referrals} from "./partials/referrals/referral.partial";

let show = true;

export class App extends Component {
    render(ShowHide = () => (
        show = !show
    )) {
        return (
            <div className="App">
                <AppHeader/>
                <div id="main-wrapper">
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <Main/>
                            <Blog/>
                            <Referrals/>
                        </div>
                    </div>
                </div>

                <button onClick={this.showContent}>Click Me</button>

                <AppFooter/>
            </div>
        );
    }
}
