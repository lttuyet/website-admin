import * as constants from '../constants/Actions';

export const initialState = {
  taglist: [],
  err: ''
};

function TagReducer(state = initialState, action) {
  let status = '';
  switch (action.type) {
    case constants.GET_ALL_TAG: {
      const st = { ...state };
      st.taglist = [];
      st.taglist = action.data.res;
      console.log('Vô rồi ', st);
      // window.location.href = '/tag-list';
      return st;
    }
    case constants.DELETE_TAG: {
      const st = { ...state };

      return st;
    }
    case constants.INSERT_TAG: {
      const st = { ...state };
      if (action.data.name) {
        try {
          status = action.data.res.data.status;
          console.log(action.data.res.data.status);
          if (status === 505) {
            st.err = 'Tag được thêm đã tồn tại';
            console.log(st);
          } else {
            st.err = 'Thêm Tag thành công';
            console.log(st);
          }
        } catch (err) {
          st.err = 'Đã có lỗi xảy ra';
        }
      } else {
        st.err = 'Vui lòng nhập Tag kỹ năng mới';
      }
      return st;
    }
    default: {
      return { ...state, err: '' };
    }
  }
}

export default TagReducer;
