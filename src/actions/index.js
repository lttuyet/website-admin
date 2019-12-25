/* eslint-disable no-undef */
import axios from 'axios';
import * as constants from '../constants/Actions';

// ======================================== LOGIN =====================================
function OnClickLogin(username,password){
    const res = axios.post('https://apimanage.herokuapp.com/admin/login',{
        username,
        password
    }).catch(err => {
        return err;
    });
    return res;
};

export const login = (username,password,res)=>({
    type: constants.LOGIN,
    data:{
        username,
        password,
        res
    }
});

export const loginRequest = (username,password)=>{
    return (dispatch  => {
        OnClickLogin(username,password).then(res=>{
            return dispatch(login(username,password,res));
        });
    });
};
/* ======================================= ADMIN ========================================== */
// insert admin

function OnClickInsertAdmin(body,token){
    return axios({
    method:'POST',
    url:'http://localhost:3001/insertadmin',
    headers:{Authorization: `Bearer ${token}`},
    data: body
    }).catch(err => {
        return err;
    });
};

export const insertAdmin = (body,token,res)=>({
    type: constants.INSERT_ADMIN,
    data:{
        body,
        token,
        res
    }
});

export const insertAdminRequest = (body,token)=>{
    return (dispatch  => {
        OnClickInsertAdmin(body,token).then(res=>{
            return dispatch(insertAdmin(body,token,res));
        });
    });
};

// Get all admin
function SendGetAllAdmins(token){
    const res = axios({
        method:'GET',
        url:'https://apimanage.herokuapp.com/alladmins',
        headers:{Authorization: `Bearer ${token}`},
    }).catch(err => {
        return err;
    });

    return res;

};

export const getAllAdmins = (token,res)=>({
    type: constants.GET_ALL_ADMIN,
    data: {
        token,
        res
    }
});

export const getAllAdminsRequest = (token) =>{
    return (dispatch =>{
        SendGetAllAdmins(token).then(res=>{
            // console.log("request",res.data);
            return dispatch(getAllAdmins(token,res.data));
        });
    });
};

// delete Admin

function SendDeleteAdmin(token,id){
    const res = axios({
        method:'POST',
        url:'https://apimanage.herokuapp.com/deleteadmin',
        headers:{Authorization: `Bearer ${token}`},
        data: {id}
    }).catch(err => {
        return err;
    });

    return res;

};

export const deleteAdmin = (token,id,res)=>({
    type: constants.DELETE_ADMIN,
    data: {
        token,
        id,
        res
    }
});

export const deleteAdminRequest = (token,id) =>{
    return (dispatch =>{
        SendDeleteAdmin(token,id).then(res=>{

            return dispatch(deleteAdmin(token,id,res));
        });
    });
};
/* ========================================= TAG ==================================================== */

// Get all tags
function SendGetAllTags(token){
    const res = axios({
        method:'GET',
        url:'https://apimanage.herokuapp.com/alltags',
        headers:{Authorization: `Bearer ${token}`},
    }).catch(err => {
        return err;
    });

    return res;

};

export const getAllTags = (token,res)=>({
    type: constants.GET_ALL_TAG,
    data: {
        token,
        res
    }
});

export const getAllTagsRequest = (token) =>{
    return (dispatch =>{
        SendGetAllTags(token).then(res=>{
            // console.log("request",res.data);
            return dispatch(getAllTags(token,res.data));
        });
    });
};

// delete Tag

function SendDeleteTag(token,id){
    const res = axios({
        method:'POST',
        url:'https://apimanage.herokuapp.com/deletetag',
        headers:{Authorization: `Bearer ${token}`},
        data: {id}
    }).catch(err => {
        return err;
    });

    return res;

};

export const deleteTag = (token,id,res)=>({
    type: constants.DELETE_TAG,
    data: {
        token,
        id,
        res
    }
});

export const deleteTagRequest = (token,id) =>{
    return (dispatch =>{
        SendDeleteTag(token,id).then(res=>{

            return dispatch(deleteTag(token,id,res));
        });
    });
};
// insert Tag
function OnClickInsertTag(token,name){
    return axios({
        method:'POST',
        url:'https://apimanage.herokuapp.com/inserttag',
        headers:{Authorization: `Bearer ${token}`},
        data: {name}
    }).catch(err => {
        return err;
    });
};

export const insertTag = (token,name,res)=>({
    type: constants.INSERT_TAG,
    data:{
        name,
        token,
        res
    }
});

export const insertTagRequest = (token,name)=>{
    return (dispatch  => {
        OnClickInsertTag(token,name).then(res=>{
            return dispatch(insertTag(token,name,res));
        });
    });
};
// ============================================== USER =======================================================
// Get all user
function SendGetAllUsers(token){
    const res = axios({
        method:'GET',
        url:'https://apimanage.herokuapp.com/allusers',
        headers:{Authorization: `Bearer ${token}`},
    }).catch(err => {
        return err;
    });

    return res;

};

export const getAllUsers = (token,res)=>({
    type: constants.GET_ALL_USER,
    data: {
        token,
        res
    }
});

export const getAllUsersRequest = (token) =>{
    return (dispatch =>{
        SendGetAllUsers(token).then(res=>{
            // console.log("request",res.data);
            return dispatch(getAllUsers(token,res.data));
        });
    });
};

// get detail user

function SendGetDetailUser(token,id){
    const res = axios({
        method:'POST',
        url:'https://apimanage.herokuapp.com/detailsuser',
        headers:{Authorization: `Bearer ${token}`},
        data: {
            id
        }
    }).catch(err => {
        return err;
    });

    return res;

};

export const getDetailUser = (token,id,res)=>({
    type: constants.GET_DETAIL,
    data: {
        token,
        id,
        res
    }
});

export const getDetailUserRequest = (token,id) =>{
    return (dispatch =>{
        SendGetDetailUser(token,id).then(res=>{
            // console.log("request",res);
            return dispatch(getDetailUser(token,id,res));
        });
    });
};

// block user

function SendBlockUser(token,id){
    const res = axios({
        method:'POST',
        url:'http://localhost:3001/blockuser',
        headers:{Authorization: `Bearer ${token}`},
        data: {
            id
        }
    }).catch(err => {
        return err;
    });

    return res;

};

export const blockUser = (token,id,res)=>({
    type: constants.BLOCK_USER,
    data: {
        token,
        id,
        res
    }
});

export const blockUserRequest = (token,id) =>{
    return (dispatch =>{
        SendBlockUser(token,id).then(res=>{
            // console.log("request",res);
            return dispatch(blockUser(token,id,res));
        });
    });
};

// unblock user

function SendUnblockUser(token,id){
    const res = axios({
        method:'POST',
        url:'http://localhost:3001/unblockuser',
        headers:{Authorization: `Bearer ${token}`},
        data: {
            id
        }
    }).catch(err => {
        return err;
    });

    return res;

};

export const unblockUser = (token,id,res)=>({
    type: constants.UNBLOCK_USER,
    data: {
        token,
        id,
        res
    }
});

export const unblockUserRequest = (token,id) =>{
    return (dispatch =>{
        SendUnblockUser(token,id).then(res=>{
            // console.log("request",res);
            return dispatch(unblockUser(token,id,res));
        });
    });
};

// Get top 10 user
function SendGetTopUsers(token){
    const res = axios({
        method:'GET',
        url:'http://localhost:3001/top10byincome',
        headers:{Authorization: `Bearer ${token}`},
    }).catch(err => {
        return err;
    });

    return res;

};

export const getTopUsers = (token,res)=>({
    type: constants.GET_TOP_BY_INCOME,
    data: {
        token,
        res
    }
});

export const getTopUsersRequest = (token) =>{
    return (dispatch =>{
        SendGetTopUsers(token).then(res=>{
            // console.log("request",res.data);
            return dispatch(getTopUsers(token,res.data));
        });
    });
};

// Get top 10 user by day
function SendGetTopUsersDay(token){
    const res = axios({
        method:'GET',
        url:'http://localhost:3001/top10byincomeday',
        headers:{Authorization: `Bearer ${token}`},
    }).catch(err => {
        return err;
    });

    return res;

};

export const getTopUsersDay = (token,res)=>({
    type: constants.GET_TOP_BY_INCOME_DAY,
    data: {
        token,
        res
    }
});

export const getTopUsersDayRequest = (token) =>{
    return (dispatch =>{
        SendGetTopUsersDay(token).then(res=>{
            // console.log("request",res.data);
            return dispatch(getTopUsersDay(token,res.data));
        });
    });
};

// Get top 5 user by month
function SendGetTopUsersMonth(token){
    const res = axios({
        method:'GET',
        url:'http://localhost:3001/top10byincomemonth',
        headers:{Authorization: `Bearer ${token}`},
    }).catch(err => {
        return err;
    });

    return res;

};

export const getTopUsersMonth = (token,res)=>({
    type: constants.GET_TOP_BY_INCOME_MONTH,
    data: {
        token,
        res
    }
});

export const getTopUsersMonthRequest = (token) =>{
    return (dispatch =>{
        SendGetTopUsersMonth(token).then(res=>{
            // console.log("request",res.data);
            return dispatch(getTopUsersMonth(token,res.data));
        });
    });
};

// Get top 5 user by year
function SendGetTopUsersYear(token){
    const res = axios({
        method:'GET',
        url:'http://localhost:3001/top10byincomeyear',
        headers:{Authorization: `Bearer ${token}`},
    }).catch(err => {
        return err;
    });

    return res;

};

export const getTopUsersYear = (token,res)=>({
    type: constants.GET_TOP_BY_INCOME_YEAR,
    data: {
        token,
        res
    }
});

export const getTopUsersYearRequest = (token) =>{
    return (dispatch =>{
        SendGetTopUsersYear(token).then(res=>{
            // console.log("request",res.data);
            return dispatch(getTopUsersYear(token,res.data));
        });
    });
};


// Get top 5 user by year
function SendGetTopUsersWeek(token){
    const res = axios({
        method:'GET',
        url:'http://localhost:3001/top10byincomeweek',
        headers:{Authorization: `Bearer ${token}`},
    }).catch(err => {
        return err;
    });

    return res;

};

export const getTopUsersWeek = (token,res)=>({
    type: constants.GET_TOP_BY_INCOME_WEEK,
    data: {
        token,
        res
    }
});

export const getTopUsersWeekRequest = (token) =>{
    return (dispatch =>{
        SendGetTopUsersWeek(token).then(res=>{
            // console.log("request",res.data);
            return dispatch(getTopUsersWeek(token,res.data));
        });
    });
};

// ===================================== CONTRACT ==========================================
// get all contract

function SendGetAllContracts(token){
    const res = axios({
        method:'GET',
        url:'https://apimanage.herokuapp.com/allContracts',
        headers:{Authorization: `Bearer ${token}`},
    }).catch(err => {
        return err;
    });

    return res;

};

export const getAllContracts = (token,res)=>({
    type: constants.GET_ALL_CONTRACT,
    data: {
        token,
        res
    }
});

export const getAllContractsRequest = (token) =>{
    return (dispatch =>{
        SendGetAllContracts(token).then(res=>{
            // console.log("request",res.data);
            return dispatch(getAllContracts(token,res.data));
        });
    });
};

// get detail contract

function SendGetDetailContract(token,id){
    const res = axios({
        method:'POST',
        url:'https://apimanage.herokuapp.com/detailscontract',
        headers:{Authorization: `Bearer ${token}`},
        data: {
            id
        }
    }).catch(err => {
        return err;
    });

    return res;

};

export const getDetailContract = (token,id,res)=>({
    type: constants.GET_DETAIL_CONTRACT,
    data: {
        token,
        id,
        res
    }
});

export const getDetailContractRequest = (token,id) =>{
    return (dispatch =>{
        SendGetDetailContract(token,id).then(res=>{
            // console.log("request",res);
            return dispatch(getDetailContract(token,id,res));
        });
    });
};


// ===================================== LOG OUT ===========================================
// log out

export const logOut = ()=>({
    type: constants.LOGOUT
});