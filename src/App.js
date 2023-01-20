import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import FruitsPage from "./FruitsPage";
import { fruits } from "./datas/sampleDatas";
import Main from "./pages/Main";

function App() {
  return (
    <div id="wrap"> {/* 여러 요소를 사용할 때 하나로 묶어주어야 */}
      <Header/>
      <Main/>
      <Footer/>
    </div>

    // <>
    //   {
    //     // map을 활용하여 fruits 안의 요소만큼 반복
    //     fruits.map( fruit => (
    //       <FruitsPage key={fruit.id} item={fruit} isView={fruit.isView}/>
    //     ))
    //   }
    // </>
  );
}

export default App;
