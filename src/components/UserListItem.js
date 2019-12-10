import React from 'react';

import './App.css';

function UserListItem(prps) {
  // const tags1 = [1,2,3,4,5];
  let list = [];
  if(prps.listtag){
  console.log(prps.listtag);
  const tags = prps.listtag;
  list = tags.map(number => (
    <span className="badge badge-info ml-md-1">
      {number}
    </span>
  ));
  }

  return (
    <tr>
      <td>{prps.name}</td>
      <td>Loại tài khoản</td>
      <td>Địa chỉ</td>
      <td style = {{maxWidth :"500px",maxHeight:"5px"}}>{list}</td>
      <td>
          <button type = "button" className="btn btn-info">Xem chi tiết</button>
          
      </td>
      
    </tr>
  );
}

export default UserListItem;
