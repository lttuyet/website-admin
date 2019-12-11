/* eslint-disable jsx-a11y/control-has-associated-label */
import React,{PureComponent} from 'react';
import './App.css';

class Sidebar extends PureComponent {
  render() {
    const st = this.props;
    return (
      <ul
        className="navbar-nav bg-info sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon ">
            <i className="fas fa-user-shield" />
          </div>
          <div className="sidebar-brand-text mx-3"> UBER FOR TUTOR</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>

        {st.username === 'manager' && (
          <div>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading text-white">Quản lý</div>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="/"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-cog" />
                <span>Quản lý quản trị viên</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-info py-2 collapse-inner ">
                  <a className="collapse-item text-white bg-info" href="/">
                    Xem danh sách
                  </a>
                  <a className="collapse-item text-white bg-info" href="/insert-admin">
                    Thêm quản trị viên
                  </a>
                </div>
              </div>
            </li>
          </div>
        )}

        <hr className="sidebar-divider" />

        <div className="sidebar-heading text-white">Quản trị viên</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Quản lý hợp đồng</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-info py-2 collapse-inner">
              <a className="collapse-item text-white bg-info" href="/">
                Xem danh sách
              </a>
              <a className="collapse-item text-white bg-info" href="/">
                Thống kê
              </a>
              <a className="collapse-item text-white bg-info" href="/">
                Other
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapsePages1"
            aria-expanded="true"
            aria-controls="collapsePages1"
          >
            <i className="fas fa-fw fa-user" />
            <span>Quản lý người dùng</span>
          </a>
          <div
            id="collapsePages1"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-info py-2 collapse-inner">
              <a className="collapse-item text-white bg-info" href="/user-list" onClick={()=>{
                st.getAllUsers(st.token);
              }}>
                Xem danh sách người dùng
              </a>
              <a className="collapse-item text-white bg-info" href="/">
                Other
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseTags"
            aria-expanded="true"
            aria-controls="collapseTags"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Quản lý Tag kĩ năng</span>
          </a>
          <div
            id="collapseTags"
            className="collapse"
            aria-labelledby="headingTags"
            data-parent="#accordionSidebar"
          >
            <div className="bg-info py-2 collapse-inner">
              <a className="collapse-item text-white bg-info" href="/tag-list"
                 onClick={() =>{

                   st.getAllTags(st.token);


              }}>
                Xem danh sách
              </a>
              <a className="collapse-item text-white bg-info" href="/insert-tag">
                Thêm mới
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Quản lý khiếu nại</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-user" />
            <span>Thống kê</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
