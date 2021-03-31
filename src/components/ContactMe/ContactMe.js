import React from 'react'
import Hr from '../Hr/Hr'
import './ContactMe.css'


export default function ContactMe() {
    return (
        <div className="container" id="contact">
            <h2 className="contact text-uppercase text-center mt-3">Contact Me</h2>
            <Hr className="white"/>
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <form id="contactForm" name="sentMessage" noValidate="novalidate">
                        <div className="control-group">
                            <div className="floating-label-form-group mb-0">
                                <label>Name</label>
                                <input className="form-control" type="text" id="name" placeholder="Name"/>
                                <small className="form-text text-danger help-block"></small>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="floating-label-form-group mb-0">
                                <label>Email Address</label>
                                <input id="email" className="form-control" type="email" placeholder="Email Address" />
                                <small className="form-text text-danger help-block"></small>
                            </div>
                        </div>
                        <div>
                            <div className="floating-label-form-group mb-0">
                                <label>Phone</label>
                                <input id="phone" className="form-control" type="number" placeholder="Phone Number" />
                                <small className="form-text text-danger help-block"></small>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="floating-label-form-group mb-0 pb-2">
                                <label>Message</label>
                                <textarea id="message" className="form-control" placeholder="Message" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <button id="sendMessageButton" className="sendButton btn btn-lg">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
