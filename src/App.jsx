import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import axios from 'axios';
import Navbar from './components/Navbar';
import rootReducers from './reducers';
import FrontPage from './containers/FrontPage';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import Dashboard from './containers/Dashboard';
import authGuard from './components/HOCs/authGuard';
import reversedAuthGuard from './components/HOCs/reversedAuthGuard';
import rootSaga from './sagas';
import Verify from './containers/Verify';
import ForgotPassword from './containers/ForgotPassword';
import RecoverPassword from './containers/RecoverPassword';
import CropCheck from './containers/CropCheck';
import CheckCrops from './containers/CheckCrops';
import Modal from 'react-modal';
import Footer from './components/Footer';
import { ROUTES } from './constants/appRoutes';
axios.defaults.withCredentials = true;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

Modal.setAppElement('#root');

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={ROUTES.ROOT_PATH} render={() => (<Redirect to="/" />)} component={FrontPage}/>
          <Route path={ROUTES.CHECK_CROPS} component={CheckCrops}/>
          <Route path={ROUTES.CROP_CHECK} component={CropCheck}/>
          <Route exact path={ROUTES.SIGN_UP_PATH} component={reversedAuthGuard(SignUp)} />
          <Route exact path={ROUTES.SIGN_IN_PATH} component={reversedAuthGuard(SignIn)} />
          <Route path={ROUTES.DASHBOARD} component={authGuard(Dashboard)} />
          <Route exact path={ROUTES.FORGOT_PASSWORD} component={reversedAuthGuard(ForgotPassword)} />
          <Route path={`${ROUTES.USERS_PATH}${ROUTES.VERIFY_PATH}${ROUTES.AUTHTOKEN_PARAM}`} component={Verify} />
          <Route path={`${ROUTES.USERS_PATH}${ROUTES.RECOVER_PATH}${ROUTES.EMAIL_PARAM}${ROUTES.RECOVERY_LINK_PARAM}`} component={RecoverPassword} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
