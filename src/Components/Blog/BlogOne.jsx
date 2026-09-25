import React, { Component } from 'react';
import SectionTitleOne from '../SectionTitleOne';

class BlogOne extends Component {
    render() {
        let BlogData = this.props.BlogData;

        return (
            <section className="blog-wrapper blog-one section-padding pt-0">
                <div className="container">
                    
                    <SectionTitleOne BigTitle="Latest Blog" />

                    <div className="row">
                        {
                            BlogData.postItem.map((item, index) => {
                                return (
                                    index < 3 ?
                                    /* 🛠️ Key moved here to the outermost element */
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-sm-12" key={item.id}>
                                        <div className="single-blog-card">
                                            <div className="featured-thumb">
                                                {/* 🛠️ Modern dynamic URL fix replacing require() */}
                                                <img 
                                                    src={new URL(`../../assets/img/blog/${item.imgUrl}`, import.meta.url).href} 
                                                    alt={item.title} 
                                                />
                                            </div>
                                            <div className="card-content">
                                                <h3><a href={item.link}>{item.title}</a></h3>
                                                <div className="card-meta">
                                                    <div className="col-6">
                                                        <span>Post by: {item.author}</span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span>{item.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : 
                                    ''
                                )
                            })
                        } 
                    </div>
                </div>
            </section>
        )
    }
}

export default BlogOne;
