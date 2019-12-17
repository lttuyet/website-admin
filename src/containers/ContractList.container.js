import { connect } from 'react-redux';
// import * as actions from '../actions/index';
import ContractList from '../components/Contract/ContractList';

const mapstToProps = state => {
  return {
    
    token: state.AccountReducer.token,
    isLogin: state.AccountReducer.isLogin
  };
};

const mapDispatchToProps = () => {
  return {
    
    

  };
};
const ContractListContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(ContractList);

export default ContractListContainer;





