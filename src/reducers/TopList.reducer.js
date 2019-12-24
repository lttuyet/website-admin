import * as constants from '../constants/Actions';

export const initialState = {
  toplist: [],
  err: ''
};

function TopListReducer(state = initialState, action) {
  // let status = '';
  switch (action.type) {
    case constants.GET_TOP_BY_INCOME: {
      const st = { ...state };
      st.toplist = [];
      st.toplist = action.data.res;
      console.log('Vô rồi ', st);
      // window.location.href = '/tag-list';
      return st;
    }
    case constants.GET_TOP_BY_INCOME_DAY: {
        const st = { ...state };
        st.toplist = [];
        st.toplist = action.data.res;
        console.log('Vô rồi ', st);
        // window.location.href = '/tag-list';
        return st;
      }
    
    default: {
      return state;
    }
  }
}

export default TopListReducer;
