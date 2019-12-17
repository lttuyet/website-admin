/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import NavbarContainer from '../../containers/Navbar.container';
import SidebarContainer from '../../containers/Sidebar.container';
import Footer from '../Footer';
import img from '../../logo192.png';

import '../App.css';

class Detail extends PureComponent {
  render() {
    const st = this.props;

    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }

    console.log(st);

    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarContainer />
          <div  className="d-flex flex-column mb-md-5 w-100">
            <div id="content">
              <NavbarContainer />
            </div>
            <div className="mt-md-1">
              <div className="container" >
                <div className="card shadow mb-5 mt-md-2 mx-auto " style={{maxWidth : "50rem"}}>
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-info">
                      THÔNG TIN TÀI KHOẢN
                    </h6>
                  </div>
                  <div className="card-body">
                    <img
                      src={st.u_userinfo.image || img}
                      style={{ minWidth: '150px', maxWidth: '150px' }}
                      className="rounded mx-auto d-block"
                      alt="..."
                    />
                    <hr />
                    <p>
                      <strong>Tên:</strong> {st.u_userinfo.name}
                    </p>
                    <p>
                      <strong>Địa chỉ:</strong>{' '}
                      {st.u_userinfo.address || <i>(Rỗng)</i>}
                    </p>
                    <p>
                      <strong>Email:</strong> {st.u_userinfo.email}
                    </p>
                    <p>
                      <strong>Loại tài khoản:</strong>{' '}
                      {st.u_userinfo.role === 'tutor'
                        ? 'Người dạy'
                        : 'Người học'}
                    </p>
                    <hr />
                    {st.u_userinfo.role === 'tutor' && (
                      <div>
                        <p>
                          <strong>Bài giới thiệu:</strong>{' '}
                          {st.u_userinfo.intro || <i>(Rỗng)</i>}
                        </p>
                        <hr />

                        <p>
                          <strong>Tag kỹ năng:</strong>{' '}
                          {st.u_taglist.length !== 0 ? (
                            st.u_taglist.map(item => (
                              <span className="badge badge-info ml-md-1">
                                {item}
                              </span>
                            ))
                          ) : (
                            <i>(Rỗng)</i>
                          )}
                        </p>
                        <hr />

                        <p>
                          <strong>Giá theo giờ:</strong>{' '}
                          {st.u_userinfo.price || <i>(Rỗng)</i>}
                        </p>
                        <hr />
                      </div>
                    )}
                    <div className="float-right" >
                      <button
                        className="btn btn-info"
                        type="button"
                        onClick={() => {
                          window.location.href = '/user-list';
                        }}
                      >
                        Quay về trang danh sách
                      </button>
                      {st.u_userinfo.isDeleted === true ? (
                        <button
                          className="btn btn-success ml-md-2"
                          type="button"
                        >
                          Bỏ chặn
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger ml-md-2"
                          type="button"
                        >
                          Chặn
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Detail;
