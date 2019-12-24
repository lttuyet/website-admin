import * as constants from '../constants/Actions';

export const initialState = {
  userlist: [],
  u_taglist: [],
  u_userinfo: null,

};

function UserReducer(state = initialState, action) {
  // let status = '';
  switch (action.type) {
    case constants.GET_ALL_USER: {
      const st =  {...state};
      st.userlist = [];
      try{
      st.userlist =  action.data.res;
      }catch(e){
        console.log(e);
      }
      // window.location.href="/user-list";
     // console.log("Vô rồi ",st);
      return st;
    }
    case constants.GET_DETAIL: {
      const st = {...state};
      // console.log("VÔ nề");
      st.u_taglist = [];
      st.u_userinfo = null;
      try {
      //  console.log("VÔ nè 2");
      st.u_taglist = action.data.res.data.tags || [];
      st.u_userinfo = action.data.res.data.user;
     //  console.log("VÔ nè 3");
      }catch(e){
        console.log(e);
      }
      // console.log("Vô nè 4",st);
      window.location.href="/detail";

      return st;
    }

    case constants.BLOCK_USER:{
      const st = {...state};

      st.u_userinfo.isblocked = true;
      
      return st;
    }

    case constants.UNBLOCK_USER:{
      const st = {...state};
      
      st.u_userinfo.isblocked = false;

      return st;
    }

    default:{
      return state;
    }
  }
}

export default UserReducer;
