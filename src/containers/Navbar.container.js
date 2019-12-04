import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Navbar from '../components/Navbar';

const mapstToProps = state => {
  return {
    username: state.AccountReducer.username,
    image: state.AccountReducer.image,
    isLogin: state.AccountReducer.isLogin,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: ()=>{
      dispatch(actions.logOut());
    }
  };
};
const NavbarContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Navbar);

export default NavbarContainer;





