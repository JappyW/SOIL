import { connect } from "react-redux";
import {
  requestUserCheckCropQueries,
  requestUserCropsCheckQueries
  } from "../actions/listOfUserQueriesAction"
  import ListOfQueriesComponent from "../components/ListOfUserQueries/ListOfQueries.jsx"

function mapStateToProps(state) {
  return {
    queries: state.userQueries.queries,
    errorMessage: state.userQueries.errorMessage,
    user: state.dash.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestUserCheckCropQueries: params => dispatch(requestUserCheckCropQueries(params)),
    requestUserCropsCheckQueries: params => dispatch(requestUserCropsCheckQueries(params)),
  };
}

const ListOfQueries = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfQueriesComponent);
export default ListOfQueries;
