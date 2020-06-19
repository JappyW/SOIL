import "./navbar.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaCheck,
  FaList,
} from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import i18next from "i18next";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import React, { Component } from "react";
import { JWT_TOKEN } from "../../constants/authActionTypes";
import {
  requestSignOut,
  requestGetDashboard,
  requestDispatchAuthSignedIn,
} from "../../actions/authAction";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.state = {
      lng: i18next.language,
    };
  }

  async signOut() {
    await this.props.requestSignOut();
  }

  async componentDidMount() {
    if (localStorage.getItem(JWT_TOKEN)) {
      this.props.requestDispatchAuthSignedIn();
      this.props.requestGetDashboard();
    }
  }

  changeLanguage = (e) => {
    const lng = e.target.value;
    this.setState({ lng: lng }, () => {
      i18next.changeLanguage(lng);
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg black-text navbar-fixed-top bg-main-dark">
        <Link className="navbar-brand ml-5" to="/">
          <img
            src="src\img\logo.ico"
            height="40"
            className="navbar-logo logo"
          />
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" navbar-items collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <Link to="/checkcrops" className="nav-link">
                <span>
                  <FaList className="mr-2" size="24px" />
                  Soil Map
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cropcheck" className="nav-link">
                <span>
                  <FaCheck className="mr-2" size="24px" />
                  Check Crop
                </span>
              </Link>
            </li>
            {!this.props.isAuth
              ? [
                  <li className="nav-item" key="signup">
                    <Link to="/signup" className="nav-link">
                      <span>
                        <GoSignIn className="mr-2" size="24px" />
                        {i18n.t("SIGN UP")}
                      </span>
                    </Link>
                  </li>,
                  <li className="nav-item" key="signin">
                    <Link to="/signin" className="nav-link">
                      <span>
                        <FaSignInAlt className="mr-2" size="24px" />
                        {i18n.t("SIGN IN")}
                      </span>
                    </Link>
                  </li>,
                ]
              : null}
            {this.props.isAuth
              ? [
                  <li className="nav-item" key="dashboard">
                    <Link to="/dashboard/Profile" className="nav-link">
                      <span>
                        <FaUser className="mr-2" size="24px" />
                        {i18n.t("CABINET")}
                      </span>
                    </Link>
                  </li>,
                  <li className="nav-item" key="signout">
                    <Link to="/" className="nav-link" onClick={this.signOut}>
                      <span>
                        <FaSignOutAlt className="mr-2" size="24px" />
                        {i18n.t("SIGN OUT")}
                      </span>
                    </Link>
                  </li>,
                ]
              : null}
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.object,
  isAuth: PropTypes.bool,
  authType: PropTypes.string,
  requestDispatchAuthSignedIn: PropTypes.func,
  requestSignOut: PropTypes.func,
  requestGetDashboard: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    user: state.dash.user,
    isAuth: state.auth.isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestGetDashboard: () => dispatch(requestGetDashboard()),
    requestSignOut: () => dispatch(requestSignOut()),
    requestDispatchAuthSignedIn: () => dispatch(requestDispatchAuthSignedIn()),
  };
}

const NavbarWithTranslation = new withTranslation()(Navbar);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarWithTranslation);
