import React, { Component } from 'react';
import logo from '../../images/zeew-green-websites-logo.svg';

export class Footer extends Component {
    render() {
        return (
            <div className="footer5 spacer">
                <div className="instant-payment" hidden={true}>
                    <div className="style">
                        <p>Someone from <strong>Malta</strong> <br/> just buy <span
                            className="bg-zeew-gradiant label">7 ETH</span> worth of ZEEW</p>
                        <p className="time-ago">an hour ago</p>
                    </div>
                </div>

                <div className="telegram-fixed" hidden={true}>
                    <a href="https://t.me/Zeewgroup" className="text-zeew" target="_blank" rel="noopener noreferrer"><i
                        className="fab fa-telegram"></i></a>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6">
                            <ul className="general-listing">
                                <li><a href="#Referral">Referral</a></li>
                                <li><a href="#News">News</a></li>
                                <li><a href="#Solution">Solution</a></li>
                                <li><a href="#Tokens">Tokens</a></li>
                                <li><a href="#Roadmap">Roadmap</a></li>
                                <li><a href="#Timeline">Timeline</a></li>
                                <li><a href="#Team">Team</a></li>
                                <li><a href="#Investors">Investors</a></li>
                                <li><a href="page.html?id=faq">FAQ</a></li>
                                <li><a href="page.html?id=terms">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex no-block">
                                <div className="display-7 m-r-20 align-self-top"><i className="icon-Location-2"></i>
                                </div>
                                <div className="info">
                                    <span className="font-medium text-dark db m-t-5">Riga Office</span><br/>
                                    <p>Ziemeļu iela 3 - 30,<br/>
                                        Ziemeļu rajons<br/>
                                        Rīga, LV-1005<br/>
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex no-block">
                                <div className="display-7 m-r-20 align-self-top"><i className="icon-Mail"></i></div>
                                <div className="info">
                                    <a href="mailto:info@zeew.eu"
                                       className="font-medium text-dark db  m-t-5">info@zeew.eu</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex no-block">
                                <div className="display-7 m-r-20 align-self-top"><i className="icon-Location-2"></i>
                                </div>
                                <div className="info">
                                    <span className="font-medium text-dark db m-t-5">Malta Office</span><br/>
                                    <p>SmartCity Malta,<br/>
                                        SCM01 Unit 506,<br/>
                                        Ricasoli SCM1001,<br/>
                                        Malta</p>
                                </div>
                            </div>
                            <div className="d-flex no-block">
                                <div className="display-7 m-r-20 align-self-top"><i className="icon-Mail"></i></div>
                                <div className="info">
                                    <a href="mailto:ico@zeew.eu"
                                       className="font-medium text-dark db  m-t-5">ico@zeew.eu</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6">
                            <div>
                                <a href="#Home"><img src={logo} width="200px" alt="Zeew Logo" /></a>
                            </div>

                            <div className="social-links">
                                <a href="https://www.fb.com/ZeewApp/" target="_blank" rel="noopener noreferrer"><i
                                    className="fab fa-facebook"></i></a>
                                <a href="https://t.me/Zeewgroup" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a>
                                <a href="https://twitter.com/ZeewApp" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.youtube.com/channel/UCj6CB9BGnTja8Iw4QuuiCGQ" target="_blank" rel="noopener noreferrer"><i
                                    className="fab fa-youtube"></i></a>
                                <a href="https://www.instagram.com/zeewapp/" target="_blank" rel="noopener noreferrer"><i
                                    className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/zeew/" target="_blank" rel="noopener noreferrer"><i
                                    className="fab fa-linkedin"></i></a>
                            </div>
                            <img src="images/payments.png" alt="Accepted Payment systems" />
                            <div className="m-t-40">Zeew © 2017 All rights reserved.</div>
                            <div id="clock"></div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
