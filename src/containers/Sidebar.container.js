import { connect } from 'react-redux';
// import * as actions from '../actions/index';
import Sidebar from '../components/Sidebar';

const mapstToProps = state => {
  return {
    username: state.AccountReducer.username,
    
  };
};

const mapDispatchToProps = () => {
  return {
  };
};
const SidebarContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;





