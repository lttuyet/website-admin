import React from 'react';

import '../App.css';

function ContractListItem(prps) {
  // const tags1 = [1,2,3,4,5];
    let style = "";
  if(prps.status === "Đã thanh toán"){
    style = "text-primary";
  }else if(prps.status === "Chờ xác nhận"){
    style = "text-warning";
  }else if(prps.status === "Bị từ chối"){
    style = "text-danger";
  }else if(prps.status === "Bị khiếu nại"){
    style = "text-danger";
  }
  else if(prps.status === "Còn thời hạn"){
    style = "text-success";
  }
  return (
    <tr>
      <td>{prps.index}</td>
      <td>{prps.namett}</td>
      <td>{prps.emailtt}</td>
      <td>{prps.namel}</td>
      <td>{prps.emaill}</td>
      
      <td className={style} > <i className="fa fa-circle mr-md-1" aria-hidden="true"/>{prps.status}</td>
      
      <td>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => prps.onClick()}
        >
          Chi tiết
        </button>
      </td>
    </tr>
  );
}

export default ContractListItem;
