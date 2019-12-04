import { connect } from 'react-redux';
import * as actions from '../actions/index';

import InsertAdmin from '../components/InsertAdmin';

const mapstToProps = state => {
  return {
    username: state.AccountReducer.username,
    image: state.AccountReducer.image,
    isLogin: state.AccountReducer.isLogin,
    token: state.AccountReducer.token,
    errorInfo: state.AccountReducer.errorInfo,
    
    
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertAdmin : (body,token) =>{
        dispatch(actions.insertAdminRequest(body,token));
    }
  };
};
const InsertAdminContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(InsertAdmin);

export default InsertAdminContainer;





