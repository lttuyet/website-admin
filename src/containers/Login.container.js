import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Login from '../components/Login';

const mapstToProps = state => {
  return {
    username: state.AccountReducer.username,
    password: state.AccountReducer.password,
    token: state.AccountReducer.token,
    image: state.AccountReducer.image,
    errorInfo: state.AccountReducer.errorInfo,
    isLogin: state.AccountReducer.isLogin,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch(actions.loginRequest(username, password));
    }
  };
};
const LoginContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;





