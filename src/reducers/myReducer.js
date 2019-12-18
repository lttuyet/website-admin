import { combineReducers } from 'redux';
import AccountReducer from './Account.reducer';
import TagReducer from './Tag.reducer';
import UserReducer from './User.reducer';
import ContractReducer from './Contract.reducer';

const myReducer = combineReducers({
    AccountReducer,
    TagReducer,
    UserReducer,
    ContractReducer,
});
  
export default myReducer;