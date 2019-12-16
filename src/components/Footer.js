/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { PureComponent } from 'react';
// import { Redirect } from 'react-router-dom';

import './App.css';

class Footer extends PureComponent {
  render() {
    return (
        <footer id="sticky-footer" className="py-2 text-white-50" style={{backgroundColor:"#61AEC2"}}>
        <div className="container text-center text-white">
          <small>Copyright &copy; Phát triển Ứng Dụng Web Nâng Cao 2019 - 1612839 - 1612794</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
