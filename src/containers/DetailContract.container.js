import { connect } from 'react-redux';
import * as actions from '../actions/index';
import DetailContract from '../components/Contract/DetailContract';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    contract: state.ContractReducer.contract,
    token: state.AccountReducer.token,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailContract: (token,id) => dispatch(actions.getDetailContractRequest(token,id)),
    

  };
};
const DetailContractContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(DetailContract);

export default DetailContractContainer;





