import { connect } from 'react-redux';
import * as actions from '../actions/index';
import AdminList from '../components/Admin/AdminList';

const mapstToProps = state => {
  return {
    userlist: state.UserReducer.userlist,
    adminlist: state.AccountReducer.adminlist,
    token: state.AccountReducer.token,
    isLogin: state.AccountReducer.isLogin,
    username : state.AccountReducer.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    getAllAdmins : (token) =>  dispatch(actions.getAllAdminsRequest(token)),
    deleteAdmin : (token,id) => dispatch(actions.deleteAdminRequest(token,id))

  };
};
const AdminListContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(AdminList);

export default AdminListContainer;





