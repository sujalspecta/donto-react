import React, { Component } from 'react'

 class RecentPost extends Component {
    render() {

        let BlogData = this.props.BlogData;

        return (
            <React.Fragment>
            {
                
                BlogData.postItem.map((item, index) => {
                    return (
                        index < 2 ?
                          
                            <div className="col-md-6 col-lg-6 col-sm-12" key={item.id}>
                                <div className="single-blog-card">
                                    <div className="featured-thumb">
                                      
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
            </React.Fragment>            
        )
    }
}

export default RecentPost;
