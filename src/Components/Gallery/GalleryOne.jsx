import React, { Component } from 'react';
import SectionTitleOne from '../SectionTitleOne';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

// 1. Static Image Imports for Gallery Images
import img1 from '../../assets/img/gallery/g1.jpg';
import img2 from '../../assets/img/gallery/g2.jpg';
import img3 from '../../assets/img/gallery/g3.jpg';
import img4 from '../../assets/img/gallery/g4.jpg';
import img5 from '../../assets/img/gallery/g5.jpg';

// 2. Static Image Imports for Background Shapes
import shapeRmc from '../../assets/img/shape/rmc.png';
import shapePlusgs from '../../assets/img/shape/plusgs.png';
import shapePlusg from '../../assets/img/shape/plusg.png';
import shapePlusr from '../../assets/img/shape/plusr.png';
import shapeSgdot from '../../assets/img/shape/sgdot.png';
import shapeXsrdot from '../../assets/img/shape/xsrdot.png';

class GalleryOne extends Component {
    render() {
        return (
            <section className="gallery-one-wrapper section-bg text-white section-padding">
                <div className="hero-shape service-shape">
                    {/* Replaced inline require() calls with static import variables */}
                    <img src={shapeRmc} alt="donto" className="shape shape2" />
                    <img src={shapePlusgs} alt="donto" className="shape shape4" />
                    <img src={shapePlusg} alt="donto" className="shape shape6" />
                    <img src={shapePlusr} alt="donto" className="shape shape8" />
                    <img src={shapeSgdot} alt="donto" className="shape shape9" />
                    <img src={shapeXsrdot} alt="donto" className="shape shape10" />
                    <img src={shapeRmc} alt="donto" className="shape s1" />
                    <img src={shapePlusgs} alt="donto" className="shape s2" />
                    <img src={shapeSgdot} alt="donto" className="shape s3" />
                </div>
                <div className="container">

                    <SectionTitleOne BigTitle="Our Gallery" />

                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item" >
                                <ReactFancyBox
                                    thumbnail={img1}
                                    image={img1} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item" >
                                <ReactFancyBox
                                    thumbnail={img2}
                                    image={img2} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item" >
                                <ReactFancyBox
                                    thumbnail={img3}
                                    image={img3} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-12">
                            <div className="single-gallery-item">
                                <ReactFancyBox
                                    thumbnail={img4}
                                    image={img4} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item">
                                <ReactFancyBox
                                    thumbnail={img5}
                                    image={img5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GalleryOne;
