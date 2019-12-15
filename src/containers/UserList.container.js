import { connect } from 'react-redux';
import * as actions from '../actions/index';
import UserList from '../components/UserList/UserList';

const mapstToProps = state => {
  return {
    userlist: state.UserReducer.userlist,
    token: state.AccountReducer.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTags : dispatch(actions.getAllTagsRequest()),
    getAllUsers : (token) =>  dispatch(actions.getAllUsersRequest(token))
  };
};
const UserListContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(UserList);

export default UserListContainer;





