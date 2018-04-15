import React, {Component} from 'react';
import './App.css';
import {AppHeader} from "./components/header/header.compoentn";
import {AppFooter} from "./components/footer/footer.component";
import {AppRoute} from "./route";

let show = true;

export class App extends Component {
    render(ShowHide = () => (
        show = !show
    )) {
        return (
            <div className="App">
                <AppHeader/>
                <div className="App-intro">
                    <AppRoute/>
                </div>
                <button onClick={this.showContent}>Click Me</button>

                <AppFooter/>
            </div>
        );
    }
}
