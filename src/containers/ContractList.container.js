import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ContractList from '../components/Contract/ContractList';

const mapstToProps = state => {
  return {
    contractlist: state.ContractReducer.contractlist,
    token: state.AccountReducer.token,
    isLogin: state.AccountReducer.isLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllContracts: (token) => dispatch(actions.getAllContractsRequest(token))
    
    

  };
};
const ContractListContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(ContractList);

export default ContractListContainer;





