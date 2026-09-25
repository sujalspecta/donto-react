import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import brand1 from "../assets/img/brand/1.png";
import brand2 from "../assets/img/brand/2.png";
import brand3 from "../assets/img/brand/3.png";
import brand4 from "../assets/img/brand/4.png";
import brand5 from "../assets/img/brand/5.png";
import brand6 from "../assets/img/brand/6.png";

class ClientLogos extends Component {
  render() {
    return (
      <section className="brand-logo-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Swiper
                className="brand-logo-carousel"
                modules={[Autoplay]}
                slidesPerView={3} 
                slidesPerGroup={1} 
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                speed={4000}
              >
                <SwiperSlide className="single-brand-logo">
                  <img src={brand1} alt="donto" />
                </SwiperSlide>
                <SwiperSlide className="single-brand-logo">
                  <img src={brand2} alt="donto" />
                </SwiperSlide>
                <SwiperSlide className="single-brand-logo">
                  <img src={brand3} alt="donto" />
                </SwiperSlide>
                <SwiperSlide className="single-brand-logo">
                  <img src={brand4} alt="donto" />
                </SwiperSlide>
                <SwiperSlide className="single-brand-logo">
                  <img src={brand5} alt="donto" />
                </SwiperSlide>
                <SwiperSlide className="single-brand-logo">
                  <img src={brand6} alt="donto" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ClientLogos;
