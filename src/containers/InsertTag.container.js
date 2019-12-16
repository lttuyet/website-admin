import { connect } from 'react-redux';
import * as actions from '../actions/index';

import InsertTag from '../components/TagList/InsertTag';

const mapstToProps = state => {
  return {

    isLogin: state.AccountReducer.isLogin,
    token: state.AccountReducer.token,
    err: state.TagReducer.err,



  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertTag : (token,name) =>{
      dispatch(actions.insertTagRequest(token,name));
    }
  };
};
const InsertTagContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(InsertTag);

export default InsertTagContainer;





