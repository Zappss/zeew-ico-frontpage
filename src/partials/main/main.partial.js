import React, { Component } from 'react';
import {TweenLite, Circ} from "gsap";
import './main.partial.css';
/*import 'EasePack.min.js';
import 'TweenLite.min.js';*/

export class Main extends Component {
    render() {
        return (
            /*(function () {

                var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

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
                    for (var x = 0; x < width; x = x + width / 20) {
                        for (var y = 0; y < height; y = y + height / 20) {
                            var px = x + Math.random() * width / 20;
                            var py = y + Math.random() * height / 20;
                            var p = {x: px, originX: px, y: py, originY: py};
                            points.push(p);
                        }
                    }

                    // for each point find the 5 closest points
                    for (var i = 0; i < points.length; i++) {
                        var closest = [];
                        var p1 = points[i];
                        for (var j = 0; j < points.length; j++) {
                            var p2 = points[j]
                            if (!(p1 === p2)) {
                                var placed = false;
                                for (var k = 0; k < 5; k++) {
                                    if (!placed) {
                                        if (closest[k] === undefined) {
                                            closest[k] = p2;
                                            placed = true;
                                        }
                                    }
                                }

                                for (var k = 0; k < 5; k++) {
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
                    for (var i in points) {
                        var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
                        points[i].circle = c;
                    }
                }

                // Event handling
                function addListeners() {
                    /!*if (!('ontouchstart' in window)) {
                        window.addEventListener('mousemove', mouseMove);
                    }*!/
                    window.addEventListener('mousemove', mouseMove);
                    /!*Instad - FixMe ?!*!/

                    window.addEventListener('scroll', scrollCheck);
                    window.addEventListener('resize', resize);
                }

                function mouseMove(e) {
                    console.log(e);
                    /!*var posx = posy = 0;
                    if (e.pageX || e.pageY) {
                        posx = e.pageX;
                        posy = e.pageY;
                    }
                    else if (e.clientX || e.clientY) {
                        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                    }
                    target.x = posx;
                    target.y = posy;*!/
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
                    for (var i in points) {
                        shiftPoint(points[i]);
                    }
                }

                function animate() {
                    if (animateHeader) {
                        ctx.clearRect(0, 0, width, height);
                        for (var i in points) {
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
                    for (var i in p.closest) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p.closest[i].x, p.closest[i].y);
                        ctx.strokeStyle = 'rgba(64, 178, 3,' + p.active + ')';
                        ctx.stroke();
                    }
                }

                function Circle(pos, rad, color) {
                    var _this = this;

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

            })();*/

        <div className="faded-bg">
                <div id="large-header">
                    <canvas id="demo-canvas"></canvas>
                </div>
                <div className="static-slider10">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 text-center" data-aos="fade-down"
                                 data-aos-duration="1200">
                                <h1 className="title newTitle"><span className="no-wrap">“Right Now”</span> Delivery Disruption</h1>
                                <h6>(Drones, Robots and Artificial intelligence)</h6>

                                <div className="video-wrapper">
                                    <iframe id="promoVideo" title="Promo Video by Zeew" src="https://www.youtube.com/embed/Td7cb7pQr0c?controls=0" frameBorder="0"
                                            allow="autoplay; encrypted-media" allowFullScreen="" width="100%"
                                            height="100%"></iframe>
                                </div>
                            </div>

                            <div className="col-md-5 text-center">
                                <h1>ICO Round 1</h1>
                                <h4>Ends in</h4>
                                <h5>(9th May)</h5>
                                <div id="countdown-clock-header-main-2" className="clock-container">
                                    <div className="clock-col"><p className="clock-day clock-timer">11</p><p
                                        className="clock-label">Days</p></div>
                                    <div className="clock-col"><p className="clock-hours clock-timer">20</p><p
                                        className="clock-label">Hours</p></div>
                                    <div className="clock-col"><p className="clock-minutes clock-timer">33</p><p
                                        className="clock-label">Minutes</p></div>
                                    <div className="clock-col"><p className="clock-seconds clock-timer">00</p><p
                                        className="clock-label">Seconds</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="row p-20">
                            <div className="col-md-12 text-center">
                                <a className="btn btn-zeew-gradiant btn-submit-wide btn-md btn-arrow m-t-20"
                                   href="https://wallet.zeew.eu" style={{width: 220+'px'}}><span>Buy tokens <i
                                    className="ti-arrow-right"></i></span></a>

                                <a className="btn btn-outline-zeew btn-md btn-arrow m-t-20"
                                   href="https://ico.zeew.eu/ZeewWhitepaper-V2-D4.pdf" style={{width: 220+'px'}}><span>White paper <i
                                    className="ti-arrow-right"></i></span></a>
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

                                        <tr>
                                            <td>Round 1 (14 days) <br/> 2,500,000 ZEEW</td>
                                            <td width="450" className="table-round-counter">
                                                <div className="progress progress-xs margin-vertical-10"
                                                     data-aos="fade-up">
                                                    <span id="countdown-clock-header-2"
                                                          className="countdown-clock header-timer aos-init aos-animate"
                                                          data-aos="zoom-in"><span className="data-countdown data-days"
                                                                                   data-label="Days">11</span>:<span
                                                        className="data-countdown data-hr"
                                                        data-label="Hr">20</span>:<span
                                                        className="data-countdown data-min"
                                                        data-label="Min">31</span>:<span
                                                        className="data-countdown data-sec"
                                                        data-label="Sec">58</span></span>
                                                    <div
                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-zeew"
                                                        style={{width: 100+'%'}}>

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
