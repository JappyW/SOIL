import { connect } from 'react-redux';
import CheckCropsComp from '../components/CheckCrops/CheckCrops.jsx';
import {
  requestCropsFromDataBase,
  requestCropsPH,
  requestWeather,
  requestCropsForPlanting,
  requestAddUserCropsCheckQuery
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
    requestCropsForPlanting: params => dispatch(requestCropsForPlanting(params)),
    requestAddUserCropsCheckQuery: params => dispatch(requestAddUserCropsCheckQuery(params))
  };
}

const CheckCrops = connect(mapStateToProps, mapDispatchToProps)(CheckCropsComp);
export default CheckCrops;
