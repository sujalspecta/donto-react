import React, { Component } from 'react';
import SectionTitleOne from '../SectionTitleOne';

// 1. Lightbox Imports
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// 2. Static Image Imports for Gallery Images
import img1 from '../../assets/img/gallery/g1.jpg';
import img2 from '../../assets/img/gallery/g2.jpg';
import img3 from '../../assets/img/gallery/g3.jpg';
import img4 from '../../assets/img/gallery/g4.jpg';
import img5 from '../../assets/img/gallery/g5.jpg';

// 3. Static Image Imports for Background Shapes
import shapeRmc from '../../assets/img/shape/rmc.png';
import shapePlusgs from '../../assets/img/shape/plusgs.png';
import shapePlusg from '../../assets/img/shape/plusg.png';
import shapePlusr from '../../assets/img/shape/plusr.png';
import shapeSgdot from '../../assets/img/shape/sgdot.png';
import shapeXsrdot from '../../assets/img/shape/xsrdot.png';

class GalleryOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            photoIndex: 0
        };
        
        // Define slide array for the lightbox setup
        this.slides = [
            { src: img1 },
            { src: img2 },
            { src: img3 },
            { src: img4 },
            { src: img5 }
        ];
    }

    openLightbox = (index) => {
        this.setState({
            isOpen: true,
            photoIndex: index
        });
    };

    closeLightbox = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { isOpen, photoIndex } = this.state;

        return (
            <section className="gallery-one-wrapper section-bg text-white section-padding">
                <div className="hero-shape service-shape">
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
                        {/* Image 1 */}
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item" onClick={() => this.openLightbox(0)} style={{ cursor: 'pointer' }}>
                                <img src={img1} alt="Gallery item 1" className="img-fluid" />
                            </div>
                        </div>
                        
                        {/* Image 2 */}
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item" onClick={() => this.openLightbox(1)} style={{ cursor: 'pointer' }}>
                                <img src={img2} alt="Gallery item 2" className="img-fluid" />
                            </div>
                        </div>
                        
                        {/* Image 3 */}
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item" onClick={() => this.openLightbox(2)} style={{ cursor: 'pointer' }}>
                                <img src={img3} alt="Gallery item 3" className="img-fluid" />
                            </div>
                        </div>
                        
                        {/* Image 4 */}
                        <div className="col-md-6 col-lg-8 col-12">
                            <div className="single-gallery-item" onClick={() => this.openLightbox(3)} style={{ cursor: 'pointer' }}>
                                <img src={img4} alt="Gallery item 4" className="img-fluid" />
                            </div>
                        </div>
                        
                        {/* Image 5 */}
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item" onClick={() => this.openLightbox(4)} style={{ cursor: 'pointer' }}>
                                <img src={img5} alt="Gallery item 5" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modern, safe Lightbox Component */}
                <Lightbox
                    open={isOpen}
                    close={this.closeLightbox}
                    index={photoIndex}
                    slides={this.slides}
                />
            </section>
        );
    }
}

export default GalleryOne;
