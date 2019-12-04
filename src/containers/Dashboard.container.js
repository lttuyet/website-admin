import { connect } from 'react-redux';
// import * as actions from '../actions/index';
import Dashboard from '../components/Dashboard';

const mapstToProps = state => {
  return {
    username: state.AccountReducer.username,
    image: state.AccountReducer.image,
    isLogin: state.AccountReducer.isLogin,
    
    
  };
};

const mapDispatchToProps = () => {
  return {
    
  };
};
const DashboardContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;





