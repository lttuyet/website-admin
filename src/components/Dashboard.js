import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import './App.css';
import NavbarContainer from '../containers/Navbar.container';
import SidebarContainer from '../containers/Sidebar.container';
import Footer from './Footer';

class Dashboard extends PureComponent {
  render() {
    const st = this.props;
    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }
    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarContainer />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavbarContainer />
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

export default Dashboard;
