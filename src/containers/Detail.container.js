import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Detail from '../components/UserList/Detail';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    u_userinfo: state.UserReducer.u_userinfo,
    u_taglist: state.UserReducer.u_taglist,
    token: state.AccountReducer.token,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailUser: (token,id) => dispatch(actions.getDetailUserRequest(token,id)),
    blockUser: (token,id) => dispatch(actions.blockUserRequest(token,id)),
    unblockUser: (token,id) => dispatch(actions.unblockUserRequest(token,id)),

  };
};
const DetailContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Detail);

export default DetailContainer;





