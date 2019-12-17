/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import './App.css';

class Navbar extends PureComponent {
  render() {
    const st = this.props;
    if(!st.isLogin){
      return <Redirect to="/login" />;
    }
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark topbar static-top shadow">
        <button
          id="sidebarToggleTop"
          type="button"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars" />
        </button>

        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm" />
              </button>
            </div>
          </div>
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw" />
            </a>
          </li>

          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-white-600 ">
                Xin chào, {st.username}
              </span>
              <img className="img-profile rounded-circle" src={st.image} alt="" />
            </a>

            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="/">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </a>
              <a className="dropdown-item" href="/">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                Settings
              </a>
              <a className="dropdown-item" href="/">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                Activity Log
              </a>
              <div className="dropdown-divider" />
              <button
                type = "button"
                className="dropdown-item"
                onClick = {()=>{st.logout();
                console.log(st.isLogin);}}
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
