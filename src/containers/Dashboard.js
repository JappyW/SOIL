import { connect } from "react-redux";
import {
  requestSignOut,
  requestVerificationEmail
} from "../actions/authAction";
import DashboardHome from "../components/Dashboard/Dashboard.jsx";

function mapStateToProps(state) {
  return {
    user: state.dash.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestSignOut: () => dispatch(requestSignOut()),
    requestVerificationEmail: params =>
      dispatch(requestVerificationEmail(params))
  };
}

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHome);
export default Dashboard;