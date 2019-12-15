import React from 'react';

import '../App.css';

function UserListItem(prps) {
  // const tags1 = [1,2,3,4,5];
  // let list = [];
  // if(prps.listtag){
  // console.log(prps.listtag);
  // const tags = prps.listtag;
  // list = tags.map(number => (
  //   <span className="badge badge-info ml-md-1">
  //     {number}
  //   </span>
  // ));
  // }
  


  return (
    <tr>
      <td>{prps.index}</td>
      <td>{prps.name}</td>
      {prps.role === 'tutor' &&
      <td>Người dạy</td>
      }
      {prps.role === 'learner' &&
      <td>Người học</td>
      }

      <td>{prps.email}</td>
      <td>{prps.address}</td>

      <td>
          <button type = "button" className="btn btn-info" data-toggle="modal"
                  data-target={`#number${prps.index}`}>Xem chi tiết</button>
        <div
          className="modal fade"
          style={{ padding: '2px !important;' }}
          id={`number${prps.index}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalScrollableTitle">
                  Thông tin chi tiết
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body m-md-1 ml-md-0 ">
                <div className="card mydialog">
                  <img
                    src={prps.image}
                    className="card-img-top w-50 mx-auto"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{prps.name}</h5>
                    <hr />
                    <p className="card-text">
                      <h5 className="card-title">Địa chỉ:</h5>
                      {prps.address}
                    </p>

                    <p className="card-text">
                      <h5 className="card-title">Thông tin mô tả:</h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card content.
                    </p>
                    <div>
                      <h5 className="card-title">Kỹ năng:</h5>
                      <span className="badge badge-info ml-md-1">
                          Tag kĩ năng
                        </span>
                      <span className="badge badge-danger ml-md-1">Lớp</span>
                    </div>
                    <hr/>
                    <div>
                      <h5 className="card-title m-md-2">Giá theo giờ: 30.000 VNĐ</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </td>
      
    </tr>
  );
}

export default UserListItem;
