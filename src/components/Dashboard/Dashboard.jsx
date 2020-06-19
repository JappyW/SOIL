import i18n from "i18next";
import { withTranslation } from "react-i18next";
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./dashboard.scss";
import Button from "../reusableComponents/Button";
import EditProfile from "../../containers/EditProfile";
import ChangePassword from "../../containers/ChangePassword";
import ListOfUserQueries from "../ListOfUserQueries/ListOfUserQueries.jsx";
import Profile from "../../containers/Profile";
import {
  USERPROFILE,
  EDITPROFILE,
  CHANGEPASSWORD,
  USEROQUERIES,
} from "../../constants/authActionTypes";
import { FaUserCircle, FaUserLock, FaThList, FaUserEdit } from "react-icons/fa";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.resendVerificationEmail = this.resendVerificationEmail.bind(this);
    this.showMyComponent = this.showMyComponent.bind(this);
    this.setComponentButtonActive = this.setComponentButtonActive.bind(this);
    this.setComponentActive = this.setComponentActive.bind(this);
  }

  setComponentActive() {
    const path = this.props.history.location.pathname.split("/");
    switch (path[2]) {
      case USERPROFILE:
        this.setComponentButtonActive(USERPROFILE);
        break;
      case EDITPROFILE:
        this.setComponentButtonActive(EDITPROFILE);
        break;
      case CHANGEPASSWORD:
        this.setComponentButtonActive(CHANGEPASSWORD);
        break;
      case USEROQUERIES:
        this.setComponentButtonActive(USEROQUERIES);
        break;
      default:
        this.setComponentButtonActive(USERPROFILE);
        break;
    }
  }

  setComponentButtonActive(component) {
    let currentBtn = document.getElementsByClassName("user-cabinet-nav-item");
    for (let i = 0; i < currentBtn.length; i++) {
      currentBtn[i].className = currentBtn[i].className.replace(
        " activated",
        ""
      );
    }
    let componentBtn = document.getElementsByClassName(component);
    componentBtn[0].className += " activated";
  }

  componentDidMount() {
    setTimeout(() => {
      this.setComponentActive();
    }, 1000);
  }

  async resendVerificationEmail() {
    await this.props.requestVerificationEmail(this.props.user.email);
  }

  showMyComponent(component) {
    this.props.history.push("/dashboard/" + component);
    this.setComponentActive();
  }

  render() {
    return (
      <div className="container-fluid user-cabinet-container m-0 ">
        {this.props.user ? (
          <div className="row">
            <nav className="sidenav navbar-expand-md col-md-3 text-left p-0 ">
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="user-cabinet-nav nav flex-column">
                  <Button
                    label={
                      <div>
                        <FaUserCircle className="mr-2" size="24px" />
                        <span className="user-cabinet-nav-span">
                          {i18n.t("PROFILE")}
                        </span>
                      </div>
                    }
                    className="btn btn-link user-cabinet-nav-item Profile activated"
                    handleClick={() => this.showMyComponent(USERPROFILE)}
                  ></Button>
                  <Button
                    label={
                      <div>
                        <FaUserEdit className="mr-2" size="24px" />
                        <span className="user-cabinet-nav-span">
                          {i18n.t("EDIT")}
                        </span>
                      </div>
                    }
                    className="btn btn-link user-cabinet-nav-item EditProfile"
                    handleClick={() => this.showMyComponent(EDITPROFILE)}
                  ></Button>
                  {this.props.user.authType !== "google" ? (
                    <Button
                      label={
                        <div>
                          <FaUserLock className="mr-2" size="24px" />
                          <span className="user-cabinet-nav-span">
                            {i18n.t("CHANGE PASSWORD")}
                          </span>
                        </div>
                      }
                      className="btn btn-link user-cabinet-nav-item ChangePassword"
                      handleClick={() => this.showMyComponent(CHANGEPASSWORD)}
                    ></Button>
                  ) : null}
                  <Button
                    label={
                      <div>
                        <FaThList className="mr-2" size="24px" />
                        <span className="user-cabinet-nav-span">
                          {i18n.t("Queries")}
                        </span>
                      </div>
                    }
                    className="btn btn-link user-cabinet-nav-item Queries"
                    handleClick={() => this.showMyComponent(USEROQUERIES)}
                  ></Button>
                </ul>
              </div>
            </nav>
            <main className="container-fluid col-md-9 p-5">
              <div className="row justify-content-center">
                {this.props.history.location.pathname ==
                "/dashboard/" + EDITPROFILE ? (
                  <EditProfile
                    showMyComponent={this.showMyComponent}
                  ></EditProfile>
                ) : null}
                {this.props.history.location.pathname ==
                "/dashboard/" + USERPROFILE ? (
                  <Profile showMyComponent={this.showMyComponent}></Profile>
                ) : null}
                {this.props.history.location.pathname ==
                "/dashboard/" + CHANGEPASSWORD ? (
                  <ChangePassword
                    showMyComponent={this.showMyComponent}
                  ></ChangePassword>
                ) : null}
                {this.props.history.location.pathname ==
                "/dashboard/" + USEROQUERIES ? (
                  <ListOfUserQueries
                    showMyComponent={this.showMyComponent}
                  ></ListOfUserQueries>
                ) : null}
              </div>
            </main>
          </div>
        ) : null}
      </div>
    );
  }
}

Dashboard.propTypes = {
  getDashboard: PropTypes.func,
  user: PropTypes.object,
  requestVerificationEmail: PropTypes.func,
  requestGetDashboard: PropTypes.func,
  inactiveStatusHotels: PropTypes.func,
  countInactiveHotels: PropTypes.number,
  history: PropTypes.object.isRequired,
};

export default withTranslation()(Dashboard);
