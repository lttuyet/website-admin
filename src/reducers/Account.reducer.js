import * as constants from '../constants/Actions';

export const initialState = {
  username: '',
  password: '',
  token: '',
  image: '',
  errorInfo: '',
  isLogin : false,
};

function AccountReducer(state = initialState, action) {
  let status = '';
  switch (action.type) {
    case constants.LOGIN:
      {
        const st = { ...state };
        st.username = action.data.username;
        st.password = action.data.password;
        try {
          status = action.data.res.data.status;
          if (status === 501) {
            st.errorInfo = 'Tài khoản không tồn tại!';
            st.isLogin = false;
          } else {
            st.token = action.data.res.data.token;
            st.image = action.data.res.data.data.image;
            st.isLogin = true;
            st.errorInfo = '';
            console.log(st.token);
          }
        } catch (err) {
          st.errorInfo = '';
          st.isLogin = false;
        }
        return st;
      }
    case constants.INSERT_ADMIN:{
      const st = {...state};
      try{
        status = action.data.res.data.status;
        if(status === 500){
          st.errorInfo = "Tài khoản đã tồn tại";
        }else{
          st.errorInfo = "Tạo tài khoản thành công";
        }
      }catch(err){
        st.errorInfo = "Đã có lỗi xảy ra";
      }
      return st;
    }
    case constants.LOGOUT:{
      return initialState;
    }
    default:
      return state;
  }
}

export default AccountReducer;
