import { connect } from 'react-redux';
// import * as actions from '../actions/index';
import Detail from '../components/UserList/Detail';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    u_userinfo: state.UserReducer.u_userinfo,
    u_taglist: state.UserReducer.u_taglist,
    
  };
};

const mapDispatchToProps = () => {
  return {
    
    

  };
};
const DetailContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Detail);

export default DetailContainer;





