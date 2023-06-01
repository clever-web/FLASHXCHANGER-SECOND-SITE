import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class User extends Component {


    render() {

        return (
            <div className="bg-image">
                {/*  <!-- nav -->  */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="#">
                                    <img src="../assets/images/exported/logo.svg" alt="" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item dropdown mx-2">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                EN
                                        </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">ARAB</a>
                                                <a className="dropdown-item" href="#">SPANISH</a>
                                                <a className="dropdown-item" href="#">ANOTHER LANGUAGE</a>
                                            </div>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <a className="nav-link" href="#">SUPPORT</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>


                <section className="login-n-regigster">
                    <div className="container-fluid user-container">
                        <div className="row mt-5">

                            <div className="col-xl-1"></div>
                            <div className="col-xl-11 mt-5 m-hide welcome-heading">
                                <h1>See the ads you need <span className="font-light">and</span> get paid</h1>
                                <h1 className="font-light">doing just that!</h1>
                            </div>

                            <div className="col-xl-8 d-flex ads-container"></div>

                            <div className="col-xl-4 animation-container">
                                <img src="/assets/images/animation.png" className="mx-auto" id="overlay" alt="timer" />
                                <Link to='/user' className="mx-auto f-image" ><img src="../assets/images/F.png" /> </Link>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-xl-8"></div>
                            <div className="col-xl-4 d-flex justify-content-center l-hinde">
                                <button className="start-btn">START</button>
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-xl-1"></div>
                            <div className="col-xl-11 contact-us">
                                <div>You want your ad listed here?</div>
                                <button>Contact Us</button>
                            </div>
                        </div>

                        <div className="row welcome-socials">
                            <div className="col-xl-8 mt-5 mb-5 socials d-flex">
                                <div className="social-buttons">
                                    <a className="mr-3" href="#"><img
                                        src="../assets/images/exported/login_socials/medium-with-circle.svg"
                                        alt="flash wallet medium" /></a>
                                    <a className="mr-3" href="#"><img
                                        src="../assets/images/exported/login_socials/facebook-with-circle.svg"
                                        alt="flash wallet facebook" /></a>
                                    <a className="mr-3" href="#"><img
                                        src="../assets/images/exported/login_socials/twitter-with-circle.svg"
                                        alt="flash wallet twitter" /></a>
                                    <a className="mr-3" href="#"><img
                                        src="../assets/images/exported/login_socials/instagram-with-circle.svg"
                                        alt="flash wallet instagram" /></a>
                                    <a className="mr-3" href="#"><img
                                        src="../assets/images/exported/login_socials/linkedin-with-circle.svg"
                                        alt="flash wallet linkedIn" /></a>
                                    <a href="#"><img src="../assets/images/exported/login_socials/dribbble-with-circle.svg"
                                        alt="flash wallet dribbble" /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>


        );
    }
}
export default User;