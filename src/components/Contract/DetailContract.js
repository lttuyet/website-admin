/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import NavbarContainer from '../../containers/Navbar.container';
import SidebarContainer from '../../containers/Sidebar.container';
import Footer from '../Footer';
// import img from '../../logo192.png';

import '../App.css';

class DetailContract extends PureComponent {
  render() {
    const st = this.props;

    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }

    let style = "";
    if(st.contract.status === "Đã thanh toán"){
      style = "text-primary";
    }else if(st.contract.status === "Chờ xác nhận"){
      style = "text-warning";
    }else if(st.contract.status === "Bị từ chối"){
      style = "text-danger";
    }else if(st.contract.status === "Bị khiếu nại"){
      style = "text-danger";
    }
    else if(st.contract.status === "Còn thời hạn"){
      style = "text-success";
    }

    // console.log(st);

    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarContainer />
          <div  className="d-flex flex-column  w-100">
            <div id="content">
              <NavbarContainer />
            </div>
            <div className="mt-md-1 h-100">
              <div className="container" >
                <div className="card shadow mb-5 mt-md-2 mx-auto " style={{maxWidth : "50rem"}}>
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-info">
                      THÔNG TIN HỢP ĐỒNG
                    </h6>
                  </div>
                  <div className="card-body">
                    <p>
                      <h7 className="text-info ">THÔNG TIN NGƯỜI DẠY</h7>
                    </p>
                    <hr/>
                    <p>
                      <strong>Tên Người dạy:</strong> {st.contract.tutor[0].name}
                    </p>
                    <p>
                      <strong>Email Người dạy:</strong>{' '}
                      {st.contract.tutor[0].email || <i>(Rỗng)</i>}
                    </p>
                    <p>
                      <strong>Địa chỉ Người dạy:</strong>{' '}
                      {st.contract.tutor[0].address || <i>(Rỗng)</i>}
                    </p>
                    <p>
                      <strong>Giá theo giờ:</strong>{' '}
                      {st.contract.tutor[0].price || "Chưa cập nhật"} k VNĐ
                    </p>
                    <hr/>
                    <p>
                      <h7 className="text-info">THÔNG TIN NGƯỜI HỌC</h7>
                    </p>
                    <hr/>
                    <p>
                      <strong>Tên Người học:</strong> {st.contract.learner[0].name}
                    </p>
                    <p>
                      <strong>Email Người học:</strong>{' '}
                      {st.contract.learner[0].email}
                    </p>
                    <p>
                      <strong>Địa chỉ Người học:</strong>{' '}
                      {st.contract.learner[0].address || <i>(Rỗng)</i>}
                    </p>
                    <hr />
                    <p>
                      <h7 className="text-info">THÔNG TIN THUÊ</h7>
                    </p>
                    <hr/>
                    <p>
                      <strong>Số giờ thuê:</strong>{' '}
                      {st.contract.hours}
                    </p>
                   
                    <p>
                      <strong>Thời hạn hợp đồng:</strong>{' '}
                      {st.contract.time}
                    </p>
                    <p>
                      <strong>Ngày bắt đầu:</strong>{' '}
                      {st.contract.startDate || "Chưa cập nhật"}
                    </p>
                    <p>
                      <strong>Ngày kết thúc:</strong>{' '}
                      {st.contract.endDate || "Chưa cập nhật"}
                    </p>
                    <p>
                      <strong>Ngày thanh toán:</strong>{' '}
                      {st.contract.paidDate || "Chưa cập nhật"}
                    </p>
                    <hr/>
                    <p>
                      <strong>Số tiền thuê:</strong>{' '}
                      {st.contract.hours * st.contract.tutor[0].price || "Chưa cập nhật"} k VNĐ
                    </p>
                    <p >
                      <strong>Trạng thái hợp đồng:</strong>{' '}
                      <span className={style}>{st.contract.status}</span>
                    </p>
                    <hr/>
                    
                    

                    
                    <div className="float-right" >
                      <button
                        className="btn btn-info"
                        type="button"
                        onClick={() => {
                          window.location.href = '/contract-list';
                        }}
                      >
                        Quay về trang danh sách
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
          <Footer />
        </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default DetailContract;
