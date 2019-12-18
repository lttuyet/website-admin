/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';

import NavbarContainer from '../../containers/Navbar.container';
import SidebarContainer from '../../containers/Sidebar.container';
import Footer from '../Footer';

class InsertAdmin extends PureComponent {
  constructor() {
    super();
    this.username = '';
    this.name = '';
    this.phone = '';
    this.address = '';
    this.email = '';
    this.password = '';
  }

  render() {
    const st = this.props;
    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }
    if (st.username !== 'manager') {
      return <Redirect to="/" />;
    }
    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarContainer />
          <div id="content-wrapper" className="d-flex flex-column w-100">
            <div id="content">
              <NavbarContainer />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-lg">
                          <div className="p-5">
                            <div className="text-center">
                              <h1 className="h4 text-gray-900 mb-4">
                                THÊM QUẢN TRỊ VIÊN
                              </h1>
                            </div>
                            <form
                              className="user"
                              onSubmit={e => {
                                e.preventDefault();
                                const body = {
                                  username: this.username,
                                  name: this.name,
                                  phone: this.phone,
                                  address: this.address,
                                  email: this.email,
                                  password: this.password
                                };
                                st.insertAdmin(body, st.token);
                                // console.log(body,st.token);
                              }}
                            >
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control form-control-user"
                                  id="exampleInputUsername"
                                  placeholder="Enter Username..."
                                  onChange={e => {
                                    this.username = e.target.value;
                                  }}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control form-control-user"
                                  id="exampleInputName"
                                  placeholder="Enter Name..."
                                  onChange={e => {
                                    this.name = e.target.value;
                                  }}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control form-control-user"
                                  id="exampleInputAddress"
                                  placeholder="Enter Address..."
                                  onChange={e => {
                                    this.address = e.target.value;
                                  }}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control form-control-user"
                                  id="exampleInputPhone"
                                  placeholder="Enter Phone..."
                                  onChange={e => {
                                    this.phone = e.target.value;
                                  }}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control form-control-user"
                                  id="exampleInputEmail"
                                  placeholder="Enter Email..."
                                  onChange={e => {
                                    this.email = e.target.value;
                                  }}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="password"
                                  className="form-control form-control-user"
                                  id="exampleInputPassword"
                                  placeholder="Password"
                                  onChange={e => {
                                    this.password = e.target.value;
                                  }}
                                  required
                                />
                              </div>

                              <div>
                                <label className=" col-form-label-sm ml-md-1 text-danger">
                                  {st.errorInfo}
                                </label>
                              </div>
                              <button
                                type="submit"
                                className="btn btn-info  btn-block"
                              >
                                Thêm
                              </button>
                            </form>
                          </div>
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
        </div>
      </div>
    );
  }
}

export default InsertAdmin;
