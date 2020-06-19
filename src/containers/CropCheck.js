import { connect } from 'react-redux';
import CropCheckComp from '../components/CropCheck/CropCheck.jsx';
import {
  requestCropsFromDataBase,
  requestCropsPH,
  requestWeather,
  requestCropPlantability,
  requestAddUserCheckCropQuery
} from '../actions/cropsAction';
function mapStateToProps(state) {
  return {
    soil: state.soil,
    isAuth: state.auth.isAuthenticated,
    user: state.dash.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestCropsFromDataBase: () => dispatch(requestCropsFromDataBase()),
    requestCropsPH: params => dispatch(requestCropsPH(params)),
    requestWeather: params => dispatch(requestWeather(params)),
    requestCropPlantability: params => dispatch(requestCropPlantability(params)),
    requestAddUserCheckCropQuery: params => dispatch(requestAddUserCheckCropQuery(params)),
  };
}

const CropCheck = connect(mapStateToProps, mapDispatchToProps)(CropCheckComp);
export default CropCheck;
