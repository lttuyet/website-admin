import { connect } from 'react-redux';
import * as actions from '../actions/index';
import TopTagList from '../components/TopList/TopTagList';

const mapstToProps = state => {
  return {
    
    isLogin: state.AccountReducer.isLogin,
    token: state.AccountReducer.token,
    toptaglist: state.TopTagListReducer.toptaglist,
    toplist: state.TopListReducer.toplist

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopTags : (token) => dispatch( actions.getTopTagsRequest(token)),
    getTopTagsDay : (token) => dispatch( actions.getTopTagsDayRequest(token)),
    getTopTagsMonth : (token) => dispatch( actions.getTopTagsMonthRequest(token)),
    getTopTagsYear : (token) => dispatch( actions.getTopTagsYearRequest(token)),
    getTopTagsWeek : (token) => dispatch( actions.getTopTagsWeekRequest(token)),
    getTopUsers : (token) => dispatch( actions.getTopUsersRequest(token)),
    

  };
};
const TopTagListContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(TopTagList);

export default TopTagListContainer;





