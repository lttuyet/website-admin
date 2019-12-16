import { connect } from 'react-redux';
import * as actions from '../actions/index';
import UserList from '../components/UserList/UserList';

const mapstToProps = state => {
  return {
    userlist: state.UserReducer.userlist,
    u_userinfo: state.UserReducer.u_userinfo,
    u_taglist: state.UserReducer.u_taglist,
    token: state.AccountReducer.token,
    isLogin: state.AccountReducer.isLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    getAllUsers : (token) =>  dispatch(actions.getAllUsersRequest(token)),
    getDetailUser: (token,id) => dispatch(actions.getDetailUserRequest(token,id)),

  };
};
const UserListContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(UserList);

export default UserListContainer;





