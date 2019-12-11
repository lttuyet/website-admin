import { combineReducers } from 'redux';
import AccountReducer from './Account.reducer';
import TagReducer from './Tag.reducer';
import UserReducer from './User.reducer';

const myReducer = combineReducers({
    AccountReducer,
    TagReducer,
    UserReducer
});
  
export default myReducer;