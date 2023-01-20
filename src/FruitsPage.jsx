import React from 'react';

function FruitsPage({item, isView}) {
  return (
    <div>
      {
        isView ?
        <>
          <h2>과일이름: {item.name}</h2>
          <h2>개수: {item.qty}</h2>
        </>
        : "" // ""는 없다는 뜻
      }
      
    </div>
  );
}

export default FruitsPage;