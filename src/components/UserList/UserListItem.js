import React from 'react';

import '../App.css';

function UserListItem(prps) {
  
  return (
    <tr>
      <td style={{maxWidth:"10px"}}>{prps.index}</td>
      <td>{prps.name}</td>
      {prps.role === 'tutor' &&
      <td style={{minWidth:"80px"}}>Người dạy</td>
      }
      {prps.role === 'learner' &&
      <td>Người học</td>
      }

      <td>{prps.email}</td>
      <td style={{maxWidth:"400px"}}>{prps.address}</td>

      <td style={{minWidth:"110px"}}>
          <button type="button" className="btn btn-info" onClick={() =>{ prps.onClick(prps.id); }}>Xem chi tiết</button>
      </td>
      
    </tr>
  );
}

export default UserListItem;
