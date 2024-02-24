import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

//1.전체상품페이지, 로그인, 상품상세페이지
//1-1.네이게이션바 만들기
//2.전체상품페이지에서는 전체 상품을 볼 수 있다.
//3.로그인버튼을 누르면 로그인페이지가 나온다.
//4.상품디테일을 눌렀으나, 로그인이 안되었을경우 로그인페이지가 먼저나온다.
//5.로그인이 되었을경우 상품디테일페이지를 볼 수 있다.
//6.로그아웃 버튼을 클릭하면 로그아웃이 된다.
//7.로그아웃이되면 상품디테일 페이지를 볼수없다.  다시 로그인페이지가 보인다.
//8.로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//9.상품을 검색할 수 있다.

//Routes는 페이지 전환
function App() {
  const [authenticate, setAuthenticate] = useState(false); //이걸 로그인에서 사용해야하기에 props로 보내기

  useEffect(() => {
    //페이지 전환하자마자 어찌되는지 찍어보기위해 useEffect 사용. false로 찍히고 로그인 누르면 true로 바뀜
    console.log("Aaaa", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
