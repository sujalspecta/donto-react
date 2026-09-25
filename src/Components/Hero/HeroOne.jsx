import React, { Component } from 'react';

// 1. Static Image Imports for Shapes
import shapeAab from '../../assets/img/shape/aab.png';
import shapeRmc from '../../assets/img/shape/rmc.png';
import shapeDotmr from '../../assets/img/shape/dotmr.png';
import shapePlusgs from '../../assets/img/shape/plusgs.png';
import shapePlusb from '../../assets/img/shape/plusb.png';
import shapePlusg from '../../assets/img/shape/plusg.png';
import shapePlusr from '../../assets/img/shape/plusr.png';
import shapeSgdot from '../../assets/img/shape/sgdot.png';
import shapeXsrdot from '../../assets/img/shape/xsrdot.png';

// 2. Static Image Imports for Main Banner/Hero Images
import womanBrush from '../../assets/img/woman-brush.png';
import doctorFinding from '../../assets/img/doctorfinding.png';
import heroTeeth from '../../assets/img/hero-theeth.png';

class HeroOne extends Component {
    render() {
        return (
            <section className="hero-slider-wrapper home-one-slider">
                <div className="single-hero-slide text-white hero-slide1">
                    <div className="hero-shape">
                        {/* Replaced require() with static import variables */}
                        <img src={shapeAab} alt="" className="shape shape1 cloud1" />
                        <img src={shapeRmc} alt="" className="shape shape2" />
                        <img src={shapeDotmr} alt="" className="shape shape3" />
                        <img src={shapePlusgs} alt="" className="shape shape4" />
                        <img src={shapePlusb} alt="" className="shape shape5" />
                        <img src={shapePlusg} alt="" className="shape shape6" />
                        <img src={shapePlusgs} alt="" className="shape shape7" />
                        <img src={shapePlusr} alt="" className="shape shape8" />
                        <img src={shapeSgdot} alt="" className="shape shape9" />
                        <img src={shapeXsrdot} alt="" className="shape shape10" />
                        <img src={shapeAab} alt="" className="shape shape11 cloud2" />
                        <img src={shapeAab} alt="" className="shape shape12 cloud3" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 col-md-10">
                                <div className="hero-slide-left">
                                    <h2>Better Life Through</h2>
                                    <h1>Better Dentistry</h1>
                                    <p>Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
                                    <a href=".#" className="theme-btn fill-btn">Appointment</a>
                                    <a href=".#" className="theme-btn btn_black">Learn More</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 col-md-10 offset-md-2 offset-lg-0">
                                <div className="hero-slide-right">
                                    <div className="animate-img">
                                        {/* Replaced require() with static import variables */}
                                        <img className="aimg1" src={womanBrush} alt="" />
                                        <img className="aimg2" src={doctorFinding} alt="" />
                                    </div>
                                    <img src={heroTeeth} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroOne;
