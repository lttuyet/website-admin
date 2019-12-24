/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
// import axios from 'axios';
import NavbarContainer from '../../containers/Navbar.container';
import SidebarContainer from '../../containers/Sidebar.container';

import '../App.css';
import TagListItem from './TagListItem';
import Footer from '../Footer';

class TagList extends PureComponent {
  constructor() {
    super();

    this.err = '';
    this.list = [];
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const st = this.props;
    st.getAllTags(st.token);
  }

  handleClick(id) {
    // console.log("Vào đây r");
    const st = this.props;
    st.deleteTag(st.token, id);
    st.getAllTags(st.token);
  }

  renderItem(item, i) {
    return (
      <TagListItem
        index={i}
        id={item._id}
        name={item.name}
        onClick={() => this.handleClick(item._id)}
      />
    );
  }

  render() {
    const st = this.props;
    // this.listTag = st.getAllTags();

    // st.getAllTags(st.token);

    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }
    // console .log(st);

    if (st.taglist) {
      const l = st.taglist;

      // console.log(l);

      this.list = l.map((item, i) => this.renderItem(item, i + 1));
    }
    // console.log("List: ",l);
    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarContainer />
          <div className="d-flex flex-column  w-100">
            <div id="content">
              <NavbarContainer />
            </div>
            <div className="mt-md-1 h-100">
              <div className=" container">
                <div className="card shadow mb-4 mt-md-2">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-info">
                      DANH SÁCH TAG KỸ NĂNG
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                      >
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Tên kỹ năng</th>
                            <th>Thao tác</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>STT</th>
                            <th>Tên kỹ năng</th>
                            <th>Thao tác</th>
                          </tr>
                        </tfoot>
                        <tbody>{this.list}</tbody>
                      </table>
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

export default TagList;
