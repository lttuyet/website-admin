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
      try{
      st.toplist = action.data.res;
      }catch(e){
          console.log(e);
      }
      console.log('Vô rồi ', st);
      // window.location.href = '/tag-list';
      return st;
    }
    case constants.GET_TOP_BY_INCOME_DAY: {
        const st = { ...state };
        st.toplist = [];
        try{
            st.toplist = action.data.res;
            }catch(e){
                console.log(e);
            }
        
        // window.location.href = '/tag-list';
        return st;
      }
      case constants.GET_TOP_BY_INCOME_WEEK: {
        const st = { ...state };
        st.toplist = [];
        try{
            st.toplist = action.data.res;
            }catch(e){
                console.log(e);
            }
       
        // window.location.href = '/tag-list';
        return st;
      }
      case constants.GET_TOP_BY_INCOME_MONTH: {
        const st = { ...state };
        st.toplist = [];
        try{
            st.toplist = action.data.res;
            }catch(e){
                console.log(e);
            }
       
        // window.location.href = '/tag-list';
        return st;
      }
      case constants.GET_TOP_BY_INCOME_YEAR: {
        const st = { ...state };
        st.toplist = [];
        try{
            st.toplist = action.data.res;
            }catch(e){
                console.log(e);
            }
        
        // window.location.href = '/tag-list';
        return st;
      }
    
    default: {
      return state;
    }
  }
}

export default TopListReducer;
