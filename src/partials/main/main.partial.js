import React, { Component } from 'react';
import './main.partial.css';

export class Main extends Component {
    render() {
        return (
            <div className="faded-bg">
                <div id="large-header">
                    <canvas id="demo-canvas"></canvas>
                </div>
                <div className="static-slider10">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 text-center" data-aos="fade-down"
                                 data-aos-duration="1200">
                                <h1 className="title op-8"><span className="no-wrap">“Right Now”</span> Delivery Disruption</h1>
                                <h3>(Drones, Robots and Artificial intelligence)</h3>
                                <a className="btn btn-zeew-gradiant btn-md btn-arrow m-t-20"
                                   href="under-construcion.html" style={{width: 220 + 'px'}}><span>Buy tokens <i
                                    className="ti-arrow-right"></i></span></a>

                                <a className="btn btn-outline-zeew btn-md btn-arrow m-t-20"
                                   href="https://ico.zeew.eu/ZeewWhitepaper-V2-D4.pdf" style={{width: 220 + 'px'}}><span>White paper <i
                                    className="ti-arrow-right"></i></span></a>

                                <div className="banner1">
                                    <form
                                        action="https://zeew.us16.list-manage.com/subscribe/post?u=f21d646ce9a91b003a52a000d&amp;id=a3c5427064"
                                        method="post"
                                        id="mc-embedded-subscribe-form"
                                        name="mc-embedded-subscribe-form"
                                        className="validate ng-pristine ng-valid m-t-40"
                                        target="_blank">
                                        <h3 className="">Join our whitelist!</h3>
                                        <input type="email" name="EMAIL" className="email" id="mce-EMAIL"
                                               placeholder="Enter Email Address"
                                               className="font-16"/>
                                        <div style={{position: 'absolute', left: -5000 + 'px'}} aria-hidden="true">
                                            <input type="text"
                                                   name="b_f21d646ce9a91b003a52a000d_a3c5427064"
                                                   tabIndex="-1"
                                                   value=""/>
                                        </div>
                                        <input type="submit" value="Subscribe" name="subscribe"
                                               id="mc-embedded-subscribe"
                                               className="btn-secondary font-semibold font-16 btn-rounded text-uppercase text-center"/>
                                    </form>
                                </div>
                            </div>

                            <div className="col-md-5 text-center">
                                <h1>ICO Round 1</h1>
                                <h4>Starts in</h4>
                                <h5>(25th April)</h5>
                                <div id="countdown-clock-header-main" className="clock-container"></div>
                            </div>
                        </div>
                        <div className="row justify-content-center token-rounds">
                            <div className="col-12 text-center">
                                <h2 className="card-title">ZEEW Token Rounds</h2>
                                <h3 className="card-subtitle">11,000,000 ZEEW</h3>
                                <div className="table-responsive">
                                    <table className="table table-responsive">
                                        <tbody>
                                        <tr>
                                            <td>PRE-ICO<br/> 1,000,000 ZEEW</td>
                                            <td width="450" className="table-round-counter">
                                                <div className="progress progress-xs margin-vertical-10"
                                                     data-aos="fade-up">
                                                    <div
                                                        className="progress-bar bg-danger progress-bar-striped progress-animated"
                                                        style={{width: 100 + '%'}}>
                                                        Sold out!
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Discount <br/>50%</td>
                                            <td className="text-nowrap">
                                                Token price<br/>
                                                $0.50
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Round 1 (14 days) <br/> 2,500,000 ZEEW</td>
                                            <td width="450" className="table-round-counter">
                                                <div className="progress progress-xs margin-vertical-10"
                                                     data-aos="fade-up">
                                                    <span id="countdown-clock-header"
                                                          className="countdown-clock header-timer"
                                                          data-aos="zoom-in"></span>
                                                    <div
                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-zeew"
                                                        style={{width: 100 + '%'}}>

                                                    </div>
                                                </div>
                                            </td>
                                            <td>Discount <br/>37,5%</td>
                                            <td className="text-nowrap">
                                                Token price<br/>
                                                $1.00
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center">
                                <a className="btn btn-zeew-gradiant btn-md btn-arrow m-r-40"
                                   href="under-construcion.html"
                                   data-aos="fade-left"><span>Buy tokens <i className="ti-arrow-right"></i></span></a>
                                <a className="linking font-medium" href="#Timeline" style={{display: 'inline-block'}}
                                   data-aos="fade-right">View all Rounds <i
                                    className="ti-arrow-right text-zeew"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
