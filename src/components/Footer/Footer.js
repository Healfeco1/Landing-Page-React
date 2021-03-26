import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer text-center text-white pt-5">
            <div className="container pb-3">
                <div className="row">
                    <div className="col-md-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase">Around the Web</h4>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light text-center" role="button" href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light text-center" role="button" href="#">
                                    <i class="fab fa-google-plus-g"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">

                                <a class="btn btn-outline-light text-center" role="button" href="#">
                                    <i class="fab fa-twitter fa-fw"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">

                                <a class="btn btn-outline-light text-center" role="button" href="#">
                                    <i class="fab fa-dribbble fa-fw"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 class="text-uppercase mb-4">About Freelancer</h4>
                        <p class="lead mb-0"><span>Freelance is a free to use, open source Bootstrap theme. </span></p>
                    </div>
                </div>
            </div>
            <div class="text-center text-white copyright py-2">
                <div class="container"><small>Copyright © Brand 2021</small></div>
            </div>
        </div>
    )
}
