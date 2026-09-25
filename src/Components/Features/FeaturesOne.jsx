import React, { Component } from 'react'

export class FeaturesOne extends Component {
    render() {
        let FeaturesData = this.props.FeaturesData;

        return (
            <section className="features-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        {
                            FeaturesData.items.map(item => {
                                // Resolves dynamic asset paths cleanly in Vite using native URL APIs
                                const resolvedImgUrl = new URL(`../../assets/img/icons/${item.imgUrl}`, import.meta.url).href;

                                return (
                                    <div className="col-md-6 col-12 col-lg-6 col-xl-4" key={item.id}>
                                        <div className="single-feature-box">
                                            <div className="icon-box">
                                                <img src={resolvedImgUrl} alt="" />
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
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

export default FeaturesOne
