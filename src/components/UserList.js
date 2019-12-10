/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import NavbarContainer from '../containers/Navbar.container';
import SidebarContainer from '../containers/Sidebar.container';


import './App.css';
import UserListItem from './UserListItem';

class Login extends PureComponent {
  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.err = '';
  }

  render() {
    const st = this.props;

    if (st.isLogin) {
      return <Redirect to="/" />;
    }

    const listT = ["Tiếng Anh","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React"];

    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarContainer />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavbarContainer />
            </div>
            <div className=" container">

          <div className="card shadow mb-4 mt-md-2">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-info">DANH SÁCH TÀI KHOẢN</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Tên</th>
                      <th>Loại tài khoản</th>
                      <th>Địa chỉ</th>
                      <th>Tag kỹ năng</th>
                      <th>Thao tác</th>
                      
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                    <th>Tên</th>
                      <th>Loại tài khoản</th>
                      <th>Địa chỉ</th>
                      <th>Tag kỹ năng</th>
                      <th>Thao tác</th>
                    </tr>
                  </tfoot>
                  <tbody>
                   <UserListItem name = "Tên ai đó" listtag = {listT}/>
                   <UserListItem name = "Tên ai đó 1"/>
                   <UserListItem name = "Tên ai đó 2"/>
                   <UserListItem name = "Tên ai đó 3"/>
                   <UserListItem name = "Tên ai đó 4"/>

                   
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
