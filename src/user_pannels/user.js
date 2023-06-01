import React, { Component } from 'react';
import Login from './login'
import Register from './register'


class User extends Component {

    constructor(props) {
        super(props);
        

        if (this.state === undefined && this.getData() === null) {
            this.state = { value: <Register signin={this.LoginView} />  }
        } else if (this.getData() !== null) {
            if (this.getData() === "register") {
                this.state = { value: <Register signin={this.LoginView} />  }
                this.setData("register");
            } else if (this.getData() === "login") {
                this.state = { value: <Login signup={this.RegisterView} />  }
                this.setData("login");
            }
        } else {
            this.state = { value: <Register signin={this.LoginView} />  }
        }


    }
    RegisterView = () => {
        this.setState({ value: <Register signin={this.LoginView} /> });
        this.setData("register");
    }
    LoginView = () => {
        this.setState({ value: <Login signup={this.RegisterView} /> });
        this.setData("login");
    }
    
    setData(para) {
        let obj = { heading: para };
        sessionStorage.setItem('mydata', JSON.stringify(obj));
    }
    getData() {
        let data = sessionStorage.getItem('mydata');
        data = JSON.parse(data);
        let val = null
        if (data !== null) {
            val = data.heading;
        }
        return val;
    }

    render() {

        return (
            <div>
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
                    <div className="container user-container">
                        {/*    <!-- login and register pannels changes here --> */}
                        {this.state.value}
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-8 mt-4 socials d-flex">
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

                                    <div className="col-md-4 mt-4 terms d-flex">
                                        <div className="terms-buttons">
                                            <a href="#">Terms of service</a>
                                            <a className="mx-3" href="#">Contact</a>
                                            <a href="#">Support</a>
                                        </div>
                                    </div>
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