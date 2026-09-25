import React, { Component } from 'react';
// 1. Static Image Import for Vite compatibility
import appointmentImg from '../assets/img/appointment.png';

class Appointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        };
    }

    myChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    myChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    myChangePhone = (event) => {
        this.setState({
            phone: event.target.value
        });
    }

    myChangeSubject = (event) => {
        this.setState({
            subject: event.target.value
        });
    }

    myChangeMessage = (event) => {
        this.setState({
            message: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    }

    render() {
        return (
            <section className="appointment-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-8">
                            <div className="section-title-one">
                                <h1>Request Appointment</h1>
                            </div>
                            <div className="appointment-form">
                                <form className="row" onSubmit={this.handleSubmit}>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input
                                            type='text'
                                            placeholder='Name'
                                            value={this.state.name}
                                            onChange={this.myChangeName}
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input 
                                            type='email'
                                            placeholder='Email'
                                            value={this.state.email} 
                                            onChange={this.myChangeEmail}
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input 
                                            type='text'
                                            placeholder='Phone'
                                            value={this.state.phone} 
                                            onChange={this.myChangePhone}
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input 
                                            type='text'
                                            placeholder='Subject'
                                            value={this.state.subject}
                                            onChange={this.myChangeSubject} 
                                        />
                                    </div>
                                    <div className="col-lg-12 col-12">
                                        <textarea
                                            placeholder='Message'
                                            value={this.state.message} 
                                            onChange={this.myChangeMessage}
                                        />
                                    </div>
                                    <button className="submit-btn" type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="appointment-right-banner">
                    {/* 2. Replaced require() with static import variable */}
                    <img src={appointmentImg} alt="donto" />
                </div>
            </section>
        );
    }
}

export default Appointment;
