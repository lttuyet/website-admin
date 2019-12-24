import { combineReducers } from 'redux';
import AccountReducer from './Account.reducer';
import TagReducer from './Tag.reducer';
import UserReducer from './User.reducer';
import ContractReducer from './Contract.reducer';
import TopListReducer from './TopList.reducer';

const myReducer = combineReducers({
    AccountReducer,
    TagReducer,
    UserReducer,
    ContractReducer,
    TopListReducer,
});
  
export default myReducer;