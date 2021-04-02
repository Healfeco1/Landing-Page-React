import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div id="footer" className="footer text-center text-white pt-5">
            <div className="container pb-3">
                <div className="row">
                    <div className="col-md-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p>Xalisco,Nayarit<br/>México 🇲🇽 63783</p>
                    </div>
                    <div className="col-md-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase">Around the Web</h4>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a className="btn social-media text-center" role="button" href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn social-media text-center" role="button" href="#">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">

                                <a className="btn social-media text-center" role="button" href="#">
                                    <i className="fab fa-twitter fa-fw"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">

                                <a className="btn social-media text-center" role="button" href="#">
                                    <i className="fab fa-dribbble fa-fw"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0"><span>Freelance is a free to use, open source Bootstrap theme. </span></p>
                    </div>
                </div>
            </div>
            <div className="text-center text-white copyright py-2">
                <div className="container"><small>Héctor Félix Copyright © Brand 2021</small></div>
            </div>
        </div>
    )
}
