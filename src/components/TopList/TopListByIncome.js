/* eslint-disable array-callback-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

import NavbarContainer from '../../containers/Navbar.container';
import SidebarContainer from '../../containers/Sidebar.container';

import '../App.css';
// import UserListItem from './UserListItem';
import Footer from '../Footer';
// import TagListItem from './TagList/TagListItem';
import TopListByIncomeItem from './TopListByIncomeItem';

class TopListByIncome extends PureComponent {
  // eslint-disable-next-line react/no-deprecated

  constructor(){
    super();
    this.titleTB = "TOP THU NHẬP CỦA GIA SƯ";
    this.titleCH = "BIỂU ĐỒ THU NHẬP TOP GIA SƯ";
  }

  componentDidMount() {
    const st = this.props;
    st.getTopUsers(st.token);
    st.getTopTags(st.token);
  }

  renderItem(item, i) {
    return (
      <TopListByIncomeItem
        index={i}
        name={item.name[0]}
        image={item.image[0]}
        total={item.total}
      />
    );
  }

  render() {
    const st = this.props;

    console.log(st.isLogin);
    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }

    // console .log(st);

    let l = [];
    const _label = [];
    const _money = [];
    if (st.toplist) {
      l = st.toplist;

      console.log('lờ nè', l);

      this.list = l.toplist.map((item, i) => this.renderItem(item, i + 1));
      l.toplist.map((item) => {_label.push(item.name[0]);});
      l.toplist.map((item) => {_money.push(item.total);});
    }
    // const listT = ["Tiếng Anh","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React","Toán","MongoDB","React"];


    
   
    
    const data = {
      labels: _label,
      datasets:[ {
        label: "Tổng thu nhập (Ngàn đồng)",
        data: _money,
      
      backgroundColor:[
        'rgba(255,99,132,0.5)',
        'rgba(54,162,235,0.5)',
        'rgba(255,206,86,0.5)',
        'rgba(75,192,192,0.5)',
        'rgba(153,102,255,0.5)',
      ]
    },
    ]
    };
    console.log(data);

    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarContainer />
          <div className="d-flex flex-column w-100">
            <div id="content">
              <NavbarContainer />
            </div>
            <div className="mt-md-1 h-100 mb-md-5">
              <div className=" container-fluid">
              <div>
                    <button type="button" className="btn btn-danger m-md-2" onClick={()=>{st.getTopUsers(st.token);window.location.href="/top-list-by-income";}}>TOP GIA SƯ</button>
                    <button type="button" className="btn btn-danger m-md-2" onClick={()=>{ st.getTopTags(st.token);window.location.href="/top-list-by-tag";}}>TOP KỸ NĂNG</button>
                </div>
                <div className="row">
                  <div className="col-5">
                    <div className="card shadow mt-md-2">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-info">
                        {this.titleTB}
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table" width="100%" cellSpacing="0">
                            <tbody>{this.list}</tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="card shadow mt-md-2">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-info">
                          {this.titleCH}
                        </h6>
                      </div>
                      <div className="card-body" style={{height:"500px"}}>
                        <Bar
                          data={data}
                          height={200}
                          options={{ }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block-inline mx-auto m-md-2">
                <button type="button" className="btn btn-success m-md-2" onClick={()=>{st.getTopUsers(st.token); this.titleTB = "TOP THU NHẬP CỦA GIA SƯ";
    this.titleCH = "BIỂU ĐỒ THU NHẬP TOP GIA SƯ";}}>Tất Cả</button>
                <button type="button" className="btn btn-info m-md-2" onClick={()=>{st.getTopUsersDay(st.token); this.titleTB = "TOP THU NHẬP CỦA GIA SƯ THEO NGÀY";
    this.titleCH = "BIỂU ĐỒ THU NHẬP TOP GIA SƯ THEO NGÀY"; ;}}>Theo Ngày</button>
    <button type="button" className="btn btn-info m-md-2" onClick={()=>{st.getTopUsersWeek(st.token); this.titleTB = "TOP THU NHẬP CỦA GIA SƯ THEO TUẦN";
    this.titleCH = "BIỂU ĐỒ THU NHẬP TOP GIA SƯ THEO TUẦN"; ;}}>Theo Tuần</button>
                <button type="button" className="btn btn-info m-md-2" onClick={()=>{st.getTopUsersMonth(st.token); this.titleTB = "TOP THU NHẬP CỦA GIA SƯ THEO THÁNG";
    this.titleCH = "BIỂU ĐỒ THU NHẬP TOP GIA SƯ THEO THÁNG"; ;}}>Theo Tháng</button>
                <button type="button" className="btn btn-info m-md-2" onClick={()=>{st.getTopUsersYear(st.token); this.titleTB = "TOP THU NHẬP CỦA GIA SƯ THEO NĂM";
    this.titleCH = "BIỂU ĐỒ THU NHẬP TOP GIA SƯ THEO NĂM"; ;}}>Theo Năm</button>
                
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

export default TopListByIncome;
