import { connect } from 'react-redux';
// import * as actions from '../actions/index';
import UserList from '../components/UserList';

const mapstToProps = state => {
  return {
    username: state.AccountReducer.username,
    
  };
};

const mapDispatchToProps = () => {
  return {
  };
};
const UserListContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(UserList);

export default UserListContainer;





