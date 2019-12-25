import React from 'react';

import '../App.css';


function TopTagListItem(prps) {
  
  return (
    
    <tr className="">
        
      <td className="align-middle">{prps.index}</td>
      
      <td className="align-middle">{prps.name} &nbsp; 
      {prps.index === 1 &&
        <i className="fas fa-crown text-warning" />
      }
      {prps.index === 2 &&
        <i className="fas fa-crown text-secondary" />
      }
      {prps.index === 3 &&
        <i className="fas fa-crown text-danger" />
      }
      </td>
      <td className="align-middle">{prps.total}Kvnđ</td>
      
    </tr>
  );
}

export default TopTagListItem;
