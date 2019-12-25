import { combineReducers } from 'redux';
import AccountReducer from './Account.reducer';
import TagReducer from './Tag.reducer';
import UserReducer from './User.reducer';
import ContractReducer from './Contract.reducer';
import TopListReducer from './TopList.reducer';
import TopTagListReducer from './TopTagList.reducer';

const myReducer = combineReducers({
    AccountReducer,
    TagReducer,
    UserReducer,
    ContractReducer,
    TopListReducer,
    TopTagListReducer

});
  
export default myReducer;