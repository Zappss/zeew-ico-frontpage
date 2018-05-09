import React, {Component} from 'react';
import './App.css';
import './static/styles/custom.css';
import './static/styles/style.css';
/*import {AppRoute} from "./route";*/
import {Start} from "./layout/Start/Start.layout";
let show = true;

export class App extends Component {
    render() {
        return (
            <Start />
        );
    }
}
