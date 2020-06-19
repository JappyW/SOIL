import React, { Component } from "react";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import Button from "../reusableComponents/Button";
import { DEFAULT_PROFILE_WIDTH, DEFAULT_PROFILE_URL } from "../../constants";
import { EDITPROFILE } from "../../constants/authActionTypes";
import "./UserProfile.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.resendVerificationEmail = this.resendVerificationEmail.bind(this);
  }
  async componentDidMount() {
    await this.props.clearReduxField();
  }

  async signOut() {
    await this.props.requestSignOut();
  }

  async resendVerificationEmail() {
    let element = document.getElementById("verificationDiv");
    element.innerHTML = "<p>SENT</p>";
    await this.props.requestVerificationEmail(this.props.user.email);
  }

  render() {
    return (
      <div className="container m-0">
        <div className="row justify-content-center">
          {this.props.user
            ? [
                <div className="col-md-8 text-center" key="user-cabinet">
                  <img
                    src={
                      this.props.image.length > 0
                        ? this.props.image
                        : DEFAULT_PROFILE_URL
                    }
                    alt="Profile Image"
                    className="img-fluid"
                    width={DEFAULT_PROFILE_WIDTH}
                  />

                  {this.props.user.fullname ? (
                    <div>
                      <h2 className="profile-name">
                        {this.props.user.fullname}
                      </h2>
                      <h5 className="profile-email mt-2">
                        {this.props.user.email}
                      </h5>
                    </div>
                  ) : (
                    <div>
                      <h2 className="profile-email mt-2">
                        {this.props.user.email}
                      </h2>
                      <h4 className="profile-name">
                        {this.props.user.fullname}
                      </h4>
                    </div>
                  )}
                </div>,
                <div className="col-md-4 text-center" key="alerts">
                  {!this.props.user.fullname && this.props.user.activated ? (
                    <div className="alert-card-info container mb-1 mt-1">
                      {i18n.t("You didnt state your full name")}
                      <br />
                      <Button
                        type="button"
                        label={i18n.t("EDIT PROFILE")}
                        className="btn btn-link"
                        handleClick={() =>
                          this.props.showMyComponent(EDITPROFILE)
                        }
                      />
                    </div>
                  ) : null}
                  {!this.props.user.activated ? (
                    <div
                      className="alert-card-warning container"
                      id="verificationDiv"
                    >
                      <span>{i18n.t("YOU DIDN`T ACTIVATE YOUR ACCOUNT")}</span>
                      <br />
                      <Button
                        type="button"
                        label={i18n.t("RESEND VERIFICATION EMAIL")}
                        className="btn btn-link"
                        handleClick={this.resendVerificationEmail}
                      ></Button>
                    </div>
                  ) : null}
                </div>,
              ]
            : null}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getDashboard: PropTypes.func,
  user: PropTypes.object,
  signOut: PropTypes.func,
  requestSignOut: PropTypes.func,
  requestVerificationEmail: PropTypes.func,
  image: PropTypes.string,
  showMyComponent: PropTypes.func,
  clearReduxField: PropTypes.func,
};

export default withTranslation()(Dashboard);
