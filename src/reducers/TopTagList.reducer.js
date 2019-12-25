import * as constants from '../constants/Actions';

export const initialState = {
  toptaglist: [],
  
  err: ''
};

function TopTagListReducer(state = initialState, action) {
  // let status = '';
  switch (action.type) {
    case constants.GET_TOP_BY_TAG: {
      const st = { ...state };
      st.toptaglist = [];
      try{
      st.toptaglist = action.data.res;
      }catch(e){
          console.log(e);
      }
      console.log('Vô rồi ', st);
      // window.location.href = '/tag-list';
      return st;
    }
    case constants.GET_TOP_BY_TAG_DAY: {
        const st = { ...state };
        st.toptaglist = [];
        try{
            st.toptaglist = action.data.res;
            }catch(e){
                console.log(e);
            }
        
        // window.location.href = '/tag-list';
        return st;
      }
      case constants.GET_TOP_BY_TAG_WEEK: {
        const st = { ...state };
        st.toptaglist = [];
        try{
            st.toptaglist = action.data.res;
            }catch(e){
                console.log(e);
            }
       
        // window.location.href = '/tag-list';
        return st;
      }
      case constants.GET_TOP_BY_TAG_MONTH: {
        const st = { ...state };
        st.toptaglist = [];
        try{
            st.toptaglist = action.data.res;
            }catch(e){
                console.log(e);
            }
       
        // window.location.href = '/tag-list';
        return st;
      }
      case constants.GET_TOP_BY_TAG_YEAR: {
        const st = { ...state };
        st.toptaglist = [];
        try{
            st.toptaglist = action.data.res;
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

export default TopTagListReducer;
