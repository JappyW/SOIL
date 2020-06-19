import React from "react";
import ListOfQueries from "../../containers/ListOfQueries";
import { CROPS_CHECK, CHECK_CROP } from "../../constants/actionTypes";
import i18n from "i18next";
import { withTranslation } from "react-i18next";

class ListOfUserQueries extends React.Component {
  constructor(props) {
    super(props);
    this.showMyTab = this.showMyTab.bind(this);
    this.state = {
      component: CROPS_CHECK,
    };
  }

  showMyTab(component) {
    this.setState({
      component: component,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link items-nav-link p-2 active"
              id="created-orders"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              onClick={() => this.showMyTab(CROPS_CHECK)}
            >
              {i18n.t("USER_ORDERS.CROPS_CHECK")}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link items-nav-link p-2"
              id="paid-orders"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={() => this.showMyTab(CHECK_CROP)}
            >
              {i18n.t("USER_ORDERS.CHECK_CROP")}
            </a>
          </li>
        </ul>
        <div className="tab-content mt-3" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="created-orders"
          >
            {this.state.component == CROPS_CHECK ? (
              <ListOfQueries type={CROPS_CHECK}/>
            ) : null}
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="paid-orders"
          >
            {this.state.component == CHECK_CROP ? (
              <ListOfQueries type={CHECK_CROP}/>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation()(ListOfUserQueries);
