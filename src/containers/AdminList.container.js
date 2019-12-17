import { connect } from 'react-redux';
import * as actions from '../actions/index';
import UserList from '../components/UserList/UserList';

const mapstToProps = state => {
  return {
    userlist: state.UserReducer.userlist,
    listAdmin: state.AccountReducer.listAdmin,
    token: state.AccountReducer.token,
    isLogin: state.AccountReducer.isLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    getAllAdmins : (token) =>  dispatch(actions.getAllUsersRequest(token)),
   

  };
};
const UserListContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(UserList);

export default UserListContainer;





