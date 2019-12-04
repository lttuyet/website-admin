/* eslint-disable no-undef */
import axios from 'axios';
import * as constants from '../constants/Actions';


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

// insert admin

function OnClickInsertAdmin(body,token){
    return axios({
    method:'POST',
    url:'https://apimanage.herokuapp.com/insertadmin',
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

// log out

export const logOut = ()=>({
    type: constants.LOGOUT
});