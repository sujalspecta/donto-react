import React, { Component } from 'react';
import SectionTitleOne from '../SectionTitleOne';

// 1. Import static background shapes at the top
import rmc from '../../assets/img/shape/rmc.png';
import plusgs from '../../assets/img/shape/plusgs.png';
import plusg from '../../assets/img/shape/plusg.png';
import plusr from '../../assets/img/shape/plusr.png';
import sgdot from '../../assets/img/shape/sgdot.png';
import xsrdot from '../../assets/img/shape/xsrdot.png';

class ServiceOne extends Component {

    render() {
        let ServiceData = this.props.ServiceData; 

        return (
            <section className="services-wrapper section-bg section-padding text-white">
                <div className="hero-shape service-shape">
                    {/* 2. Use the imported variables for the shapes */}
                    <img src={rmc} alt="" className="shape shape2" />
                    <img src={plusgs} alt="" className="shape shape4" />
                    <img src={plusg} alt="" className="shape shape6" />
                    <img src={plusr} alt="" className="shape shape8" />
                    <img src={sgdot} alt="" className="shape shape9" />
                    <img src={xsrdot} alt="" className="shape shape10" />
                    <img src={rmc} alt="" className="shape s1" />
                    <img src={plusgs} alt="" className="shape s2" />
                    <img src={sgdot} alt="" className="shape s3" />
                </div>
                <div className="container">
                    <SectionTitleOne BigTitle="Treatments" />

                    <div className="row">
                        {
                            ServiceData.serviceItem.map(item => {
                                return (
                                    <div className="col-md-6 col-12 col-lg-6 col-xl-4" key={item.id}>
                                        <div className="single-service-box">
                                            <div className="service-icon">
                                                {/* 3. Dynamic loading fix for modern bundlers */}
                                                <img 
                                                    src={new URL(`../../assets/img/icons/${item.imgUrl}`, import.meta.url).href} 
                                                    alt={item.title} 
                                                />
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                            <a href={item.link} className="btn-link">read more</a>
                                        </div>
                                    </div>
                                )
                            })
                        } 
                    </div>
                </div>
            </section>
        )
    }
}

export default ServiceOne;
