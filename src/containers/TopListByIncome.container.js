import { connect } from 'react-redux';
import * as actions from '../actions/index';
import TopListByIncome from '../components/TopList/TopListByIncome';

const mapstToProps = state => {
  return {
    
    isLogin: state.AccountReducer.isLogin,
    token: state.AccountReducer.token,
    toplist: state.TopListReducer.toplist

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopUsers : (token) => dispatch( actions.getTopUsersRequest(token)),
    getTopUsersDay : (token) => dispatch( actions.getTopUsersDayRequest(token)),
    getTopUsersMonth : (token) => dispatch( actions.getTopUsersMonthRequest(token)),
    getTopUsersYear : (token) => dispatch( actions.getTopUsersYearRequest(token)),
    getTopUsersWeek : (token) => dispatch( actions.getTopUsersWeekRequest(token)),
    

  };
};
const TopListByIncomeContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(TopListByIncome);

export default TopListByIncomeContainer;





