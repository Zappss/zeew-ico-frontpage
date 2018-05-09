import React, { Component } from 'react';
import './Referrals.component.css';

export class Referrals extends Component {
    render() {
        return (
            <div className="hash-linked" id="Referral">
                <div className="container justify-content-center referral-section">
                    <div className="row justify-content-center referral-icons text-center">
                        <div className="col-md-6">
                            <div className="text-zeew-gradiant referral-percentages"
                                 data-aos="fade-right">8<span>%</span>
                            </div>
                        </div>
                        <div className="col-md-6 text-left">
                            <h1 className="title text-info-gradiant referral-best-title p-t-100">Best ICO Referral</h1>
                            <h4 className="subtitle">Earn straight <span className="big">8%</span> commission on your
                                referrals
                                investments.</h4>
                            <h4 className="subtitle">Use your unique referral link, create content and<br/> share with
                                the
                                community, family
                                and friends.</h4>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-mg-6">
                            <div className="ml-auto m-t-30 m-b-30">
                                <a className="btn btn-outline-info btn-md" href="https://wallet.zeew.eu"
                                   data-aos="flip-down">Join Referral program</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
