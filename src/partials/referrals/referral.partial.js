import React, { Component } from 'react';
import './referrals.partial.css';

export class Referrals extends Component {
    render() {
        return (
            <div className="mini-spacer bg-light hash-linked" id="Referral">
                <div className="container justify-content-center referral-section">
                    <div className="row justify-content-center referral-icons text-center">
                        <div className="col-md-2"><i className="icon-Handshake text-zeew-gradiant display-5"
                                                     data-aos="zoom-in"></i></div>
                        <div className="col-md-3 hidden-sm-down"><span className="dashed-line" data-aos="fade-left"
                                                                       data-aos-delay="500"></span></div>
                        <div className="col-md-2 "><i className="icon-Affiliate text-zeew-gradiant display-5"
                                                      data-aos="zoom-in"></i></div>
                        <div className="col-md-3 hidden-sm-down"><span className="dashed-line" data-aos="fade-right"
                                                                       data-aos-delay="500"></span></div>
                        <div className="col-md-2"><i className="icon-Coins text-zeew-gradiant display-5"
                                                     data-aos="zoom-in"></i>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center">
                        <div className="display-7 align-self-center">Earn straight <span
                            className="big">8%</span> commission on your referrals investments.
                            <br/>Use your unique referral link, create content and<br/> share with the community, family
                                and friends.
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-mg-6">
                            <div className="ml-auto m-t-30 m-b-30">
                                <a className="btn btn-outline-zeew btn-md" href="under-construcion.html"
                                   data-aos="flip-down">Join Referral program</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
