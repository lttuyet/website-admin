import React from 'react';

import '../App.css';

function AdminListItem(prps) {
  
  return (
    <tr>
      <td style={{maxWidth:"10px"}}>{prps.index}</td>
      <td>{prps.name}</td>
      <td>{prps.username}</td>
      <td>{prps.phone}</td>
      <td style={{maxWidth:"400px"}}>{prps.address}</td>

      <td style={{minWidth:"110px"}}>
          <button type="button" className="btn btn-info" onClick={() =>{ prps.onClick(prps.id); }}>Xóa</button>
      </td>
      
    </tr>
  );
}

export default AdminListItem;
