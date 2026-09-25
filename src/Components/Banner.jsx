import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// 1. Static Image Imports for Shapes
import shapeAab from '../assets/img/shape/aab.png';
import shapePlusgs from '../assets/img/shape/plusgs.png';
import shapePlusr from '../assets/img/shape/plusr.png';
import shapeDotmr from '../assets/img/shape/dotmr.png';
import shapeRmc from '../assets/img/shape/rmc.png';
import shapeSgdot from '../assets/img/shape/sgdot.png';

// 2. Static Image Imports for Banner Images
import bannerImg1 from '../assets/img/page-banner/1.png';
import bannerImg2 from '../assets/img/page-banner/2.png';
import bannerImg3 from '../assets/img/page-banner/3.png';
import bannerImg4 from '../assets/img/page-banner/4.png';
import bannerImg5 from '../assets/img/page-banner/5.png';

class Banner extends Component {
    render() {
        let { pageTitle } = this.props;
        return (
            <section className="breadcrumb-wrap page-banner text-white section-bg">
                <div className="breadcrumb-shape">
                    {/* Replaced require() with static import variables */}
                    <img src={shapeAab} alt="" className="shape breadcrumb1" />
                    <img src={shapeAab} alt="" className="shape breadcrumb2" />
                    <img src={shapePlusgs} alt="" className="shape breadcrumb3" />
                    <img src={shapePlusr} alt="" className="shape breadcrumb4" />
                    <img src={shapeDotmr} alt="" className="shape breadcrumb5" />
                    <img src={shapeRmc} alt="" className="shape breadcrumb7" />
                    <img src={shapeSgdot} alt="" className="shape breadcrumb8" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="page-banner-breadcrumb">
                                <h1>{pageTitle}</h1>
                            </div>
                            <div className="breadcrumb-nav">
                                <Link to="/">home page</Link>
                                <Link to="/"> {pageTitle}</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="page-banner-img">
                                <div className="banner-animate">
                                    {/* Replaced require() with static import variables */}
                                    <img src={bannerImg1} alt="" className="a1" />
                                    <img src={bannerImg2} className="bannerimg a2" alt="" />
                                    <img src={bannerImg3} className="bannerimg a3" alt="" />
                                    <img src={bannerImg4} className="bannerimg a4" alt="" />
                                    <img src={bannerImg5} className="bannerimg a5" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
