import * as constants from '../constants/Actions';

export const initialState = {
  taglist: [],
  err: ""
};

function TagReducer(state = initialState, action) {
  let status = '';
  switch (action.type) {
    case constants.GET_ALL_TAG: {
      const st =  {...state};
        st.taglist = [];
        st.taglist =  action.data.res;
        console.log("Vô rồi ",st);
      return st;
    }
    case constants.DELETE_TAG:{
      const st = {...state};

      return st;
    }
    case constants.INSERT_TAG:{
      const st = {...state};
      try{
        status = action.data.res.data.status;
        console.log(action.data.res.data.status);
        if(status === 505){
          st.err = "Thất bại";
          console.log(st);
        }else {
          st.err = "Thêm Tag thành công";
          console.log(st);
        }
      }catch(err){
        st.err = "Đã có lỗi xảy ra";
      }
      return st;
    }
    default:

      return state;
  }
}

export default TagReducer;
