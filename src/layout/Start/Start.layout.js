import React, { Component } from 'react';

import {Header} from "../../components/Header/Header.compoentn";
import {Footer} from "../../components/Footer/Footer.component";

import {MainBillboard} from "../../components/MainBillboard/MainBillboard.component";
import {Blog} from "../../components/Blog/Blog.component";
import {Referrals} from "../../components/Referrals/Referral.component";

export class Start extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div id="main-wrapper">
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <MainBillboard/>
                            <Blog/>
                            <Referrals/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
