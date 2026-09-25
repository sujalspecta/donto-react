import React, { Component } from 'react';
import CountUp from 'react-countup';

// 1. Static Image Imports for Shapes
import shapeCircle1 from '../../assets/img/shape/circle1.png';
import shapeBluef from '../../assets/img/shape/bluef.png';
import shapeDotmr from '../../assets/img/shape/dotmr.png';

// 2. Static Image Imports for Banner Images
import aboutBanner1 from '../../assets/img/about-banner1.png';
import aboutBanner2 from '../../assets/img/about-banner2.png';

class AboutOne extends Component {
    render() {
        return (
            <section className="about-wrapper about-us-one section-padding pt-0">
                <div className="about-shape">
                    {/* Replaced require() with static import variables */}
                    <img src={shapeCircle1} alt="donto" className="shape ab1" />
                    <img src={shapeBluef} alt="donto" className="shape ab2" />
                    <img src={shapeDotmr} alt="donto" className="shape ab3" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="about-us-one-left">
                                {/* Replaced require() with static import variables */}
                                <img src={aboutBanner1} alt="donto" />
                                <img src={aboutBanner2} alt="donto" className="about-animate" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="about-us-one-right mt-5 mt-lg-0">
                                <div className="about-heading">
                                    <h1>Welcome to a Family</h1>
                                </div>
                                <p>Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing.</p>
                                <a href="/Page/About" className="btn-link">About Us</a>
                                <div className="fun-fact-section">
                                    <div className="single-funfact-one">
                                        <span>
                                            <CountUp end={500} duration={3.75} />
                                        </span>
                                        <p>Happy Patients</p>
                                    </div>
                                    <div className="single-funfact-one sp-fun">
                                        <span>
                                            <CountUp end={88} duration={2.75} />
                                        </span>
                                        <p>Qualified Doctors</p>
                                    </div>
                                    <div className="single-funfact-one">
                                        <span>
                                            <CountUp end={25} duration={3.75} />
                                        </span>
                                        <p>Years Experience</p>
                                    </div>
                                    <div className="single-funfact-one sp-fun">
                                        <span>
                                            <CountUp end={55} duration={3.75} />
                                        </span>
                                        <p>Dental Awards</p>
                                    </div>
                                    <span className="line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutOne;
