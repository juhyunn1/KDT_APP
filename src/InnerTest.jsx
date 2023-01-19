import React from 'react';

function InnerTest({innerText}) {
  return ( 
    <div>
      <p>여기는 InnerTest</p>
      <p>{innerText}</p>
    </div>
   );
}

export default InnerTest;