import React, { } from 'react'
import './About.css'

export default function About() {
    return (
        <div className="about text-white mb-0 pt-5 pb-5">
            <h2 className="text-uppercase text-center text-white">About</h2>
            <hr className="star-light"/>
            <div className="row">
                <div className="col-lg-4 ml-auto">
                    <p class="lead">Freelancer is a free bootstrap theme. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                </div>
                <div className="col-lg-4 mr-auto">
                    <p class="lead">Whether you&#39;re a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                </div>
            </div>
            <div className="text-center mt-4">
                <a class="btn btn-outline-light btn-xl" role="button" href="#"><i class="fa fa-download mr-2"></i><span>Download Now!</span></a>
            </div>
        </div>
    )
}
