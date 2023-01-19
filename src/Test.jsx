// imr >> tab
import React from 'react';
import InnerTest from './InnerTest'; // InnerTest 컴포넌트 가져오기

// ffc >> tab >> Test 입력
function Test({text}) { // {text}는 부모(App.js)로 부터 받은 값
  return ( 
    <div>
      <h1>{text} 여기는 Test</h1>
			{/* InnerTest 컴포넌트 사용, innerText라는 속성으로 전달 */}
      <InnerTest innerText = {text}/> {/* 부모한테 받은 값을 자식에게 전달 */}
      <InnerTest innerText = "ABCD"/>
    </div>
  );
}

export default Test;