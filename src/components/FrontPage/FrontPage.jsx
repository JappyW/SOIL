import React, { Component } from "react";
import { Link } from "react-router-dom";

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="starting-page pt-5">
        <div className="container-flex mask flex-center rgba-black-strong mt-5">
          <div className="row mt-5">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
              <div className="starting-page-content w-100 text-center">
                <h1 className="starting-page-content-header">
                  Improve the land{" "}
                  <p className="text-green">with S.O.I.L.</p>
                </h1>
                <button className="btn btn-primary" type="button">
                  <Link to="/checkcrops" className="nav-link text-white">
                    Get Started
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
