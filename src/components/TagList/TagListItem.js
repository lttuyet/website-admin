import React from 'react';

import '../App.css';

function TagListItem(prps) {
  // const tags1 = [1,2,3,4,5];

  

  return (
    <tr>
      <td>{prps.index}</td>
      <td>{prps.name}</td>
      <td>
        <button type = "button" className="btn btn-info"  onClick={() => prps.onClick()}>Xóa</button>
      </td>
    </tr>
  );
}

export default TagListItem;
