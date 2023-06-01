import React, { Component } from 'react';
class Login extends Component {
    state = {}
    render() {
        return (

            <div data-aos="fade-up" className="row h-100 align-items-center">

                <div className="col-md-5" action="#" method="POST">
                    {/*  <!-- login form --> */}
                    <h1 className="mb-4">Log In</h1>
                    <form action="#" method="POST">
                        <input data-aos="fade-right" data-aos-delay="50" className="email-password" type="text" name="email" id="email" placeholder="Email" />
                        <input data-aos="fade-right" data-aos-delay="100" className="email-password" type="password" name="password" id="password" placeholder="Password" />
                        <div className="row">
                            <div className="col-xl-6">
                                <button className="login-btn" type="submit">Log in</button>
                            </div>
                        </div>
                    </form>
                    <div className="forgot-password">
                        <div><a href="#">Forgot password?</a></div>
                        <div><span>Already have an account?</span> <a onClick={() => this.props.signup()} href="#">Sign Up</a></div>
                    </div>
                </div>
            </div>

        );
    }

    componentDidMount(){
        var root = document.getElementById('root');
        root.className = "login-bg";
    }
}

export default Login;