/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import NavbarContainer from '../../containers/Navbar.container';
import SidebarContainer from '../../containers/Sidebar.container';


import '../App.css';
import UserListItem from './UserListItem';
// import TagListItem from './TagList/TagListItem';

class UserList extends PureComponent {

  // eslint-disable-next-line react/no-deprecated
  componentDidMount() {
    const st = this.props;
    st.getAllUsers(st.token);
  }

  handleClick (id) {
    
    const st = this.props;
    
    st.getDetailUser(st.token,id);
    

  }
  


  renderItem(item,i){
    return (<UserListItem  index={i} id={item._id} name={item.name} address = {item.address} role ={item.role} email ={item.email} onClick={() =>
      { 
      // e.preventDefault();
      
      this.handleClick(item._id);
      // window.location.href = "/detail";
      }}/>);
  }

  render() {
    const st = this.props;

    console.log(st.isLogin);
    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }

    // console .log(st);

    if(st.userlist) {
      const l = st.userlist.users;

      // console.log("lờ nè",l);

      this.list = l.map((item, i) => this.renderItem(item, i + 1));
    }
    // const listT = ["Tiếng Anh","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React"];

    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarContainer />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavbarContainer />
            </div>
            <div className=" container">

          <div className="card shadow mt-md-2">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-info">DANH SÁCH TÀI KHOẢN</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Tên</th>
                      <th>Loại</th>
                      <th>Email</th>
                      <th>Địa chỉ</th>
                      <th>Thao tác</th>
                      
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>No.</th>
                      <th>Tên</th>
                      <th>Loại</th>
                      <th>Email</th>
                      <th>Địa chỉ</th>
                      <th>Thao tác</th>
                    </tr>
                  </tfoot>
                  <tbody>
                  {this.list}
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

export default UserList;
