import React from "react";
import "./register.css";
import { Select } from "antd";

const Register = () => {
  return (
    <div className="register">
      <div className="register_main">
        <h1 className="create_account">CREATE ACCOUNT</h1>
        <div className="regiter_form">
          <p>
            Register now and start enjoying the benefits of a customer account
            right away.
          </p>
          <p>Please complete all fields marked with an *.</p>

          <p>
            <div className="input_box ">
              <div className="form_group salutation_box">
                <label for="salutation" class="form__label">
                  Salutation
                </label>
                <Select
                  id="salutation"
                  className="form_input"
                  // style={{ width: 300 }}
                  placeholder="Salutation"
                  options={[
                    {
                      value: "Prefer not to use salutation",
                      label: "Prefer not to use salutation",
                    },
                    { value: "Mr.", label: "Mr." },
                    { value: "Ms.", label: "Ms." },
                  ]}
                />
              </div>
            </div>
          </p>
          <div className="flName">
            <div className="input_box ">
              <div className="form_group form_group-fn">
                <label for="fName" class="form__label">
                  * First name
                </label>
                <input
                  type="text"
                  class="form_input"
                  placeholder="* First name"
                  id="fName"
                  required
                />
              </div>
            </div>
            <div className="input_box">
              <div className="form_group form_group-fn">
                <label for="lName" class="form__label">
                  * Last Name
                </label>
                <input
                  type="text"
                  class="form_input"
                  placeholder="* Last Name"
                  id="lName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="dob">
            <p className="dob-decl">DATE OF BIRTH(OPTIONAL)</p>
            <div className="dob_select">
              <Select
                className="form_group form__input-dob"
                style={{ width: 200 }}
                placeholder="Day"
              />
              <Select
                className="form_group form__input-dob"
                style={{ width: 200 }}
                placeholder="Month"
              />
              <Select
                className="form_group form__input-dob"
                style={{ width: 200 }}
                placeholder="Year"
              />
            </div>
          </div>
          <div className="input_box">
            <div className="form_group">
              <label for="number" class="form__label">
                Phone number
              </label>
              <input
                type="text"
                class="form_input"
                placeholder="Phone number"
                id="number"
                required
              />
            </div>
          </div>
          <div className="input_box">
            <div className="form_group">
              <label for="email" class="form__label">
                * Email
              </label>
              <input
                type="email"
                class="form_input"
                placeholder="* Email"
                id="email"
                required
              />
            </div>
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
          </div>

          <p className="cb_d">
            <input type="checkbox" class="form__input--checkbox" />
            <small className="small">
              Get updates about special offers, new product releases and
              exclusive member benefits from HUGO BOSS via e-mail.
            </small>
          </p>
          <p className="cb_d">
            <input type="checkbox" class="form__input--checkbox" />
            <small className="small">
              <p>PERSONALIZED OFFERS</p>
              <p>
                Get unique content and recommendations based on your
                personalized interests and shopping habits.
              </p>
            </small>
          </p>

          <div className="tAndC">
            <p>
              The{" "}
              <a href="#" className="tc_links">
                Terms and Conditions
              </a>{" "}
              as well as the associated{" "}
              <a href="#" className="tc_links">
                Privacy Policy
              </a>{" "}
              are applicable for participation in HUGO BOSS EXPERIENCE
            </p>
            <p>
              By clicking “create account”, I confirm that I have read and agree
              to the{" "}
              <a href="#" className="tc_links">
                Terms and Conditions
              </a>{" "}
              of HUGO BOSS AG for participation in HUGO BOSS EXPERIENCE.
            </p>
          </div>
          <button className="btn_login ca_btn">CREATE ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
