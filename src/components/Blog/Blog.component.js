import React, { Component } from 'react';
import './Blog.component.css';

export class Blog extends Component {
    render() {
        return (
            <div className="blog-home5 spacer hash-linked" id="News">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="title">Zeew News</h2>
                        </div>
                    </div>
                    <div className="row m-t-40">
                        <div className="col-md-4">
                            <div className="card b-h-box font-14" data-aos="flip-left">
                                <img className="card-img"
                                     src="images/news/MITA__Zeew.jpg"
                                     alt="Zeew wins €22,000 Malta Grant for innovation "/>
                                    <div className="card-img-overlay">
                                        <span className="bg-zeew-gradiant label">Grant, MITA</span>
                                         <span className="m-l-10">Feb 26, 2018</span>
                                        <h5 className="card-title">Zeew wins €22,000 Malta Grant for innovation</h5>
                                        <p className="card-text">Zeew is proudly selected for Malta Information
                                            Technology Agency program for the duration of 4 month...</p>
                                        <a className="linking font-medium" href="page.html?id=news-1">Readmore <i
                                            className="ti-arrow-right text-zeew"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
