/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';

import NavbarContainer from '../../containers/Navbar.container';
import SidebarContainer from '../../containers/Sidebar.container';
import Footer from '../Footer';

class InsertTag extends PureComponent {
  constructor() {
    super();
    this.name = '';
    this.err = '';

  }

  render() {
    const st = this.props;
    this.err = st.err;
    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }
    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarContainer />
          <div className="d-flex flex-column mb-md-1 w-100">
            <div id="content">
              <NavbarContainer />
            </div>
            <div className="mt-md-1">
            <div className="container">
              <div className="row justify-content-center m-md-1">
                <div className="col-xl-6 col-lg-6">
                  <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-lg">
                          <div className="p-5">
                            <div className="text-center">
                              <h1 className="h4 text-gray-900 mb-4">
                                THÊM TAG KỸ NĂNG
                              </h1>
                            </div>
                            <form className="user">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control form-control-user"
                                  id="exampleInputName"
                                  placeholder="Nhập Tag Kỹ Năng Mới"
                                  defaultValue = {this.name}
                                  onChange={e => {
                                    this.name = e.target.value;
                                    this.err = '';
                                  }}
                                  required
                                />
                              </div>

                              <div>
                                <label className=" col-form-label-sm text-danger">
                                  {this.err}
                                </label>
                              </div>
                              <button
                                type="button"
                                className="btn btn-info  btn-block"
                                onClick={e => {
                                  e.preventDefault();
                                  st.insertTag(st.token,this.name);
                                  this.name = "";
                                  console.log(this.name);
                                }}
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
          </div>
        </div>
      </div>
      <div >
          <Footer />
        </div>
      </div>

    );
  }
}

export default InsertTag;
