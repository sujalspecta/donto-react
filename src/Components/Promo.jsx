import React, { Component } from 'react';

// 1. Static Image Imports for Shapes
import shapePlusr from '../assets/img/shape/plusr.png';
import shapeBluef from '../assets/img/shape/bluef.png';

// 2. Static Image Import for Banner Artwork
import doctorNars from '../assets/img/doctor-nars.png';

class Promo extends Component {
    render() {
        return (
            <section className="appointment-promo-wrapper section-bg text-white">
                <div className="appointment-promo-shape">
                    {/* Replaced legacy inline require() blocks with static assets */}
                    <img src={shapePlusr} alt="" className="shape app1" />
                    <img src={shapePlusr} alt="" className="shape app2" />
                    <img src={shapeBluef} alt="" className="shape app3" />
                    <img src={shapeBluef} alt="" className="shape app4" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-6 col-12">
                            <div className="appointment-promo-content">
                                <h1>Request your appointment and start your smile makeover!</h1>
                                <a href=".#" className="theme-btn">Request Appointment</a>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-12">
                            <div className="promo-right-banner text-center">
                                {/* Replaced legacy require() with static variable */}
                                <img src={doctorNars} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Promo;
