import Test from "./Test"; // Test 컴포넌트 가져오기
import { useState } from "react"; // useState : state 바뀌면 인지한다

function App() {
  // number의 상태 바뀌면 인지, setNumber 통해서 상태 변경 가능, 초기값 설정(여기선 0)
  // 상태가 바뀌면 return 안에 요소만큼 다시 return(렌더링)
  const [number, setNumber] = useState(0); 

  const increment = () => {
    setNumber(number+1);
    console.log(number);
  }

  const decrement = () => {
    setNumber(number-1);
    console.log(number);
  }

  return ( // 이 안에 JSX 문법 적용
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>Increment</button> {/* increment()하면 무한반복 */}
      <button onClick={decrement}>Decrement</button>
			{/* Test 컴포넌트 사용, text라는 속성으로 전달 */}
      <Test text = {number}/>
    </div>
  );
}

export default App;