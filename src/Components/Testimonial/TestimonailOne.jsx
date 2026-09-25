import React, { Component } from 'react';
import SectionTitleOne from '../SectionTitleOne';

// 1. Static Image Imports for Background Shapes
import shapeRmc from '../../assets/img/shape/rmc.png';
import shapePlusgs from '../../assets/img/shape/plusgs.png';
import shapePlusg from '../../assets/img/shape/plusg.png';
import shapePlusr from '../../assets/img/shape/plusr.png';
import shapeSgdot from '../../assets/img/shape/sgdot.png';

// 2. Static Image Import for Testimonial Profile
import testi1 from '../../assets/img/testi1.png';

class TestimonailOne extends Component {
    render() {
        return (
            <section className="testimonial-one-wrapper section-padding">
                <div className="hero-shape service-shape">
                    {/* Replaced inline require() calls with static import variables */}
                    <img src={shapeRmc} alt="modinatheme" className="shape shape2" />
                    <img src={shapePlusgs} alt="modinatheme" className="shape shape4" />
                    <img src={shapePlusg} alt="modinatheme" className="shape shape6" />
                    <img src={shapePlusr} alt="modinatheme" className="shape shape8" />
                    <img src={shapeSgdot} alt="modinatheme" className="shape shape9" />
                </div>
                <div className="container">

                    <SectionTitleOne BigTitle="Testimonials"/>

                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-client-box">
                                <div className="client-image">
                                    {/* Replaced require() with static import variable */}
                                    <img src={testi1} alt="modinatheme" />
                                </div>
                                <h3>Aliceano Colby</h3>
                                <span>CEO of Prime IT</span>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 col-lg-8 ">
                            <div className="single-review-item">
                                <h5>Awesome Work</h5>
                                <p>“They really took my individual case to heart. Their team is very helpful. They all work together in an impressive way to make sure that my needs were met and I walked out pain free.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestimonailOne;
