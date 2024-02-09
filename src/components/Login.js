import React from "react";
import "./login.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main">
      <div className="account_container">
        <h1>MY ACCOUNT</h1>
      </div>
      <hr></hr>
      <div className="main_login">
        <div className="login_component">
          <div className="login_sign">
            <h2 className="login_header">LOGIN</h2>
          </div>
          <form action="#" class="form">
            <p>Please enter your e-mail address and password.</p>
            <div className="input_box">
              <div className="form_group">
                <label for="email" class="form__label">
                  * Email address
                </label>
                <input
                  type="email"
                  class="form_input"
                  placeholder="* E-mail address"
                  id="email"
                  required
                />
              </div>
              <small className="">Please enter your email address</small>
            </div>
            <div className="input_box">
              <div className="form_group">
                <label for="password" class="form__label">
                  * Password
                </label>
                <input
                  type="password"
                  class="form_input"
                  placeholder="* Password"
                  id="password"
                  required
                />
              </div>
              <small className="">Please enter your password</small>
            </div>

            <p class="">
              <input type="checkbox" class="form__input--checkbox" />
              <small>Remember Me</small>
            </p>

            <div className="btn">
              <button class="btn_login">
                LOGIN <span className="arrow">&rarr;</span>
              </button>
            </div>
          </form>
        </div>
        <div className="register_component">
          <div className="register_component-main">
            <div className="register_component-header">
              <h1 className="ca_head">Create an account</h1>
            </div>
            <p className="mb-4">
              Create an account to enjoy all the benefits of our registered
              customers.
            </p>
            <p className="mb-2">
              <i class="fa-regular fa-heart"></i>Save your favourites across
              devices
            </p>
            <p className="mb-2">Save time at checkout for future orders</p>
            <p className="mb-2">
              Manage your purchases and returns in your order history
            </p>
            <p className="mb-2">
              Become a <a href="#">HUGO BOSS EXPERIENCE</a> member to profit
              from special offers
            </p>

            <Link to="/register" className="btn-register">
              REGISTER NOW<span className="register-arrow">&rarr;</span>
            </Link>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
