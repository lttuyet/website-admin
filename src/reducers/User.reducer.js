import * as constants from '../constants/Actions';

export const initialState = {
  userlist: [],

};

function UserReducer(state = initialState, action) {
  // let status = '';
  switch (action.type) {
    case constants.GET_ALL_USER: {
      const st =  {...state};
      st.userlist = [];
      st.userlist =  action.data.res;
      console.log("Vô rồi ",st);
      return st;
    }

    default:

      return state;
  }
}

export default UserReducer;
