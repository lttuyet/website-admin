import { connect } from 'react-redux';
// import * as actions from '../actions/index';
import Sidebar from '../components/Sidebar';
import * as actions from '../actions';

const mapstToProps = state => {
  return {
    username: state.AccountReducer.username,
    token: state.AccountReducer.token,
    taglist: state.TagReducer.taglist,
    userlist: state.UserReducer.userlist,
    adminlist: state.AccountReducer.adminlist,
    contractlist: state.ContractReducer.contractlist,
    toplist: state.TopListReducer.toplist,

    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTags : (token) => dispatch( actions.getAllTagsRequest(token)),
    getAllUsers : (token) =>  dispatch(actions.getAllUsersRequest(token)),
    getAllAdmins : (token) => dispatch(actions.getAllAdminsRequest(token)),
    getAllContracts: (token) => dispatch(actions.getAllContractsRequest(token)),
    getTopUsers : (token) => dispatch( actions.getTopUsersRequest(token)),
  };
};
const SidebarContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;





