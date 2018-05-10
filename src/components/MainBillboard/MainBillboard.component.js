import React, { Component } from 'react';
import {TweenLite, Circ} from "gsap";
import './MainBillboard.component.css';

export class MainBillboard extends Component {
    render() {
        (function () {
            let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

            // Main
            if (document.getElementById('large-header')) {
                console.log('test');
                initHeader();
                initAnimation();
                addListeners();
            }

            function initHeader() {
                width = window.innerWidth;
                height = window.innerHeight;
                target = {x: width / 2, y: height / 2};

                largeHeader = document.getElementById('large-header');
                largeHeader.style.height = height + 'px';

                canvas = document.getElementById('demo-canvas');
                canvas.width = width;
                canvas.height = height;
                ctx = canvas.getContext('2d');

                // create points
                points = [];
                for (let x = 0; x < width; x = x + width / 20) {
                    for (let y = 0; y < height; y = y + height / 20) {
                        let px = x + Math.random() * width / 20;
                        let py = y + Math.random() * height / 20;
                        let p = {x: px, originX: px, y: py, originY: py};
                        points.push(p);
                    }
                }

                // for each point find the 5 closest points
                for (let i = 0; i < points.length; i++) {
                    let closest = [];
                    let p1 = points[i];
                    for (let j = 0; j < points.length; j++) {
                        let p2 = points[j]
                        if (!(p1 === p2)) {
                            let placed = false;
                            for (let k = 0; k < 5; k++) {
                                if (!placed) {
                                    if (closest[k] === undefined) {
                                        closest[k] = p2;
                                        placed = true;
                                    }
                                }
                            }

                            for (let k = 0; k < 5; k++) {
                                if (!placed) {
                                    if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                        closest[k] = p2;
                                        placed = true;
                                    }
                                }
                            }
                        }
                    }
                    p1.closest = closest;
                }

                // assign a circle to each point
                for (let i in points) {
                    let c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
                    points[i].circle = c;
                }
            }

            // Event handling
            function addListeners() {
                /*if (!('ontouchstart' in window)) {
                    window.addEventListener('mousemove', mouseMove);
                }*/
                window.addEventListener('mousemove', mouseMove);
                /*Instad - FixMe ?!*/

                window.addEventListener('scroll', scrollCheck);
                window.addEventListener('resize', resize);
            }

            function mouseMove(e) {
                console.log(e);
                /*let posx = posy = 0;
                if (e.pageX || e.pageY) {
                    posx = e.pageX;
                    posy = e.pageY;
                }
                else if (e.clientX || e.clientY) {
                    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                }
                target.x = posx;
                target.y = posy;*/
            }

            function scrollCheck() {
                if (document.body.scrollTop > height) animateHeader = false;
                else animateHeader = true;
            }

            function resize() {
                width = window.innerWidth;
                height = window.innerHeight;
                largeHeader.style.height = height + 'px';
                canvas.width = width;
                canvas.height = height;
            }

            // animation
            function initAnimation() {
                animate();
                for (let i in points) {
                    shiftPoint(points[i]);
                }
            }

            function animate() {
                if (animateHeader) {
                    ctx.clearRect(0, 0, width, height);
                    for (let i in points) {
                        // detect points in range
                        if (Math.abs(getDistance(target, points[i])) < 4000) {
                            points[i].active = 0.3;
                            points[i].circle.active = 0.6;
                        } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                            points[i].active = 0.1;
                            points[i].circle.active = 0.3;
                        } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                            points[i].active = 0.02;
                            points[i].circle.active = 0.1;
                        } else {
                            points[i].active = 0;
                            points[i].circle.active = 0;
                        }

                        drawLines(points[i]);
                        points[i].circle.draw();
                    }
                }
                requestAnimationFrame(animate);
            }

            function shiftPoint(p) {
                TweenLite.to(p, 1 + 1 * Math.random(), {
                    x: p.originX - 50 + Math.random() * 100,
                    y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
                    onComplete: function () {
                        shiftPoint(p);
                    }
                });
            }

            // Canvas manipulation
            function drawLines(p) {
                if (!p.active) return;
                for (let i in p.closest) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.closest[i].x, p.closest[i].y);
                    ctx.strokeStyle = 'rgba(64, 178, 3,' + p.active + ')';
                    ctx.stroke();
                }
            }

            function Circle(pos, rad, color) {
                let _this = this;

                // constructor
                (function () {
                    _this.pos = pos || null;
                    _this.radius = rad || null;
                    _this.color = color || null;
                })();

                this.draw = function () {
                    if (!_this.active) return;
                    ctx.beginPath();
                    ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                    ctx.fillStyle = 'rgba(64, 178, 3,' + _this.active + ')';
                    ctx.fill();
                };
            }

            // Util
            function getDistance(p1, p2) {
                return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
            }

        })()

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
                                <h1 className="title newTitle"><span className="text-nowrap">“Right Now”</span> Delivery Disruption</h1>
                                <h6>(Drones, Robots and Artificial intelligence)</h6>

                                <div className="video-wrapper">
                                    <iframe src="https://www.youtube.com/embed/Td7cb7pQr0c?controls=0" frameBorder="0"
                                            allow="autoplay; encrypted-media" allowFullScreen="" width="100%"
                                            height="100%"
                                            title="Promo Video"></iframe>
                                </div>
                                <div className="quick-launch" data-aos="flip-down" data-aos-delay="800">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="https://ico.zeew.eu/ZeewWhitepaper-V2-D4.pdf"><i
                                                className="far fa-sticky-note"></i> White paper</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://wallet.zeew.eu"><i className="fas fa-lock"></i> Wallet</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="http://t.me/zeewgroup"><i className="fab fa-telegram"></i> Telegram</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://bitcointalk.org/index.php?topic=2941275.0"><i
                                                className="fab fa-bitcoin"></i> Bitcoin</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.reddit.com/user/ZeewRep/"><i
                                                className="fab fa-reddit"></i>
                                                Rreddit</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-5 text-center" data-aos="fade-up"
                                 data-aos-duration="1200">
                                <h1>ICO Round 1</h1>
                                <h4>Starts in</h4>
                                <h5>(14th May)</h5>
                                <div className="clock-container-wrapper">
                                    <div id="countdown-clock-header-main-2" className="clock-container">
                                        <div className="clock-col"><p className="clock-day clock-timer">6</p><p
                                            className="clock-label">Days</p></div>
                                        <div className="clock-col"><p className="clock-hours clock-timer">17</p><p
                                            className="clock-label">Hours</p></div>
                                        <div className="clock-col"><p className="clock-minutes clock-timer">27</p><p
                                            className="clock-label">Minutes</p></div>
                                        <div className="clock-col"><p className="clock-seconds clock-timer">58</p><p
                                            className="clock-label">Seconds</p></div>
                                    </div>

                                    <div className="subscribe banner1" style={{position: 'relative', display: 'flex'}}>
                                        <form
                                            action="https://zeew.us16.list-manage.com/subscribe/post?u=f21d646ce9a91b003a52a000d&amp;id=a3c5427064"
                                            method="post" id="mc-embedded-subscribe-form"
                                            name="mc-embedded-subscribe-form"
                                            className="subscribe-form validate ng-pristine ng-valid m-t-10"
                                            target="_blank">

                                            <input type="email" name="EMAIL" className="email" id="mce-EMAIL"
                                                   placeholder="Enter Email Address" required=""/>
                                                <div style={{position: 'absolute', left: -5000+ 'px'}} aria-hidden="true">
                                                    <input type="text" name="b_f21d646ce9a91b003a52a000d_a3c5427064"
                                                           tabIndex="-1" value=""/>
                                                </div>
                                                <input type="submit" value="Subscribe" name="subscribe"
                                                       id="mc-embedded-subscribe"
                                                       className="btn-secondary font-semibold font-16 btn-rounded text-uppercase text-center"/>
                                        </form>
                                    </div>
                                </div>
                                <div className="quick-launch" data-aos="flip-down" data-aos-delay="800">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">Pay in:</li>
                                        <li className="list-inline-item">
                                            <i className="zc-icon-ETH"></i> ETH
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="zc-icon-BTC"></i> BTC
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="zc-icon-LTC"></i> LTC
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="zc-icon-USD"></i> USD
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="zc-icon-EUR"></i> EUR
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row p-20">
                            <div className="col-md-12 text-center">
                                <a className="btn bg-zeew btn-submit-wide btn-md btn-arrow m-t-20 main-buy-tokens"
                                   href="https://wallet.zeew.eu"><span>
  Buy tokens. Get 45% Bonus <i
                                    className="ti-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="row justify-content-center token-rounds">
                            <div className="col-12 text-center">
                                <h3 className="p-t-20">Timeline</h3>
                                <h3 className="subtitle font-bold">1 ETH = 675 ZEEW</h3>
                                <h6 className="subtitle">11,000,000 ZEEW</h6>
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
                                                        style={{width: 100+'%'}}>
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

                                        <tr className="active-sales">
                                            <td>Round 1 (14 days)</td>
                                            <td width="450" className="table-round-counter">
                                                <div className="progress progress-xs margin-vertical-10"
                                                     data-aos="fade-up">
                                                    <span id="countdown-clock-header-2"
                                                          className="countdown-clock header-timer aos-init aos-animate"
                                                          data-aos="zoom-in"><span className="data-countdown data-days"
                                                                                   data-label="Days">5</span>:<span
                                                        className="data-countdown data-hr"
                                                        data-label="Hr">20</span>:<span
                                                        className="data-countdown data-min"
                                                        data-label="Min">29</span>:<span
                                                        className="data-countdown data-sec"
                                                        data-label="Sec">08</span>
                                                    </span>
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-zeew"
                                                         style={{width: 100+'%'}}>

                                                    </div>
                                                </div>
                                            </td>
                                            <td>Bonus <br/>45%</td>
                                            <td className="text-nowrap">1,600,000<br/>ZEEW</td>
                                        </tr>

                                        <tr className="upcoming">
                                            <td>Round 2 (14 days)</td>
                                            <td width="450" className="table-round-counter">
                                                <div className="progress progress-xs margin-vertical-10"
                                                     data-aos="fade-up">
                                                    <div className="progress-bar progress-bar-striped bg-info"
                                                         style={{width: 100+'%'}}>
                                                        Upcoming...
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Bonus <br/>36%</td>
                                            <td className="text-nowrap">1,600,000<br/>ZEEW</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center">
                                <a className="btn btn-zeew-gradiant btn-md btn-arrow m-r-40"
                                   href="https://wallet.zeew.eu"
                                   data-aos="fade-left"><span>Buy tokens <i
                                    className="ti-arrow-right"></i></span></a>
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
