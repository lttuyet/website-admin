/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import NavbarContainer from '../../containers/Navbar.container';
import SidebarContainer from '../../containers/Sidebar.container';


import '../App.css';
import AdminListItem from './AdminListItem';
import Footer from '../Footer';
// import TagListItem from './TagList/TagListItem';

class AdminList extends PureComponent {

  // eslint-disable-next-line react/no-deprecated
  componentDidMount() {
    const st = this.props;
    st.getAllAdmins(st.token);
  }

  handleClick (id) {
    
    const st = this.props;
    
    st.deleteAdmin(st.token,id);
    st.getAllAdmins(st.token);
  
    
  }
  


  renderItem(item,i){
    return (<AdminListItem  index={i} id={item._id} name={item.name} address = {item.address} phone ={item.phone} username ={item.username} onClick={() =>
      { 
      // e.preventDefault();
      
      this.handleClick(item._id);
      // window.location.href = "/detail";
      }}/>);
  }

  render() {
    const st = this.props;
    // console.log( st.isLogin );

    if (!st.isLogin ) {
      return <Redirect to="/login" />;
    }
    if(st.username !== "manager"){
      return <Redirect to="/" />;
    }
    // console .log("Hú hú",st.adminlist);

    if(st.adminlist) {
      const l = st.adminlist;

      // console.log("lờ nè",l);

      this.list = l.map((item, i) => this.renderItem(item, i + 1));
    }
    // const listT = ["Tiếng Anh","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React"];

    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarContainer />
          <div  className="d-flex flex-column  w-100">
            <div id="content">
              <NavbarContainer />
            </div>
            <div className="mt-md-1 h-100">
            <div className=" container">

          <div className="card shadow mt-md-2">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-info">DANH SÁCH ADMIN</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Tên</th>
                      <th>Username</th>
                      <th>Phone</th>
                      <th>Địa chỉ</th>
                      <th>Thao tác</th>
                      
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>No.</th>
                      <th>Tên</th>
                      <th>Username</th>
                      <th>Phone</th>
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
            <div>
              <Footer/>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    );
  }
}

export default AdminList;
