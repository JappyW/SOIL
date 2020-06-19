import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Home from "../components/Home/Home.jsx";

function mapDispatchToProps(dispatch) {
  return {
  };
}

const HomeConnected = connect(
  null,
  mapDispatchToProps
)(Home);

export default HomeConnected;
