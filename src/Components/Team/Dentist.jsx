import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Dentist extends Component {
    render() {

        let TeamData = this.props.TeamData;

        return (
            <React.Fragment>
                {
                    TeamData.doctors.map(member => {

                        return (
                            <div className="col-md-6 col-lg-4 col-12" key={member.id}>
                                <div className="single-doctor">
                                    <div className="doctor-profile">
                                       
                                        <img 
                                            src={new URL(`../../assets/img/${member.imgUrl}`, import.meta.url).href} 
                                            alt={member.name} 
                                        />
                                    </div>
                                    <div className="doctor-info">
                                        <h3><Link to={member.link}>{member.name}</Link></h3>
                                        <span>{member.position}</span>
                                    </div>
                                    <div className="doctor-social-icons">
                                        {
                                            member.socialIcon.map(social => {
                                                return (
                                                    <a href={social.url} key={social.id}><i className={social.icon} /></a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }

            </React.Fragment>
        )
    }
}

export default Dentist;
