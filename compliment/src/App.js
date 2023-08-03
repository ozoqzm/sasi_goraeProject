import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import Mypage from "./pages/Mypage";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import Write from "./pages/Write";
import Read from "./pages/Read";
import Complete from "./pages/Complete";
import Start from "./pages/Start";
//테마2 페이지들 import
import Complete2 from "./pages/Complete2";
import Main2 from "./pages/Main2";
import Read2 from "./pages/Read2";
import Write2 from "./pages/Write2";
import Splash from "./pages/Splash";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Point from "./pages/Point";
import Point2 from "./pages/Point2";
import Pointshop from "./pages/Pointshop";
import Pointshop2 from "./pages/Pointshop2";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div>
        <Routes>
          <Route path="/" element={<Splash />} /> {/* Splash에서 시작 */}
          <Route path="/Main" element={<Main />} />{" "}
          <Route path="/Write" element={<Write />} />{" "}
          <Route path="/Complete" element={<Complete />} />{" "}
          <Route path="/Read" element={<Read />} />{" "}
          <Route path="/Main" element={<Main />} />{" "}
          <Route path="/Signup" element={<Signup />} />{" "}
          <Route path="/Start" element={<Start />} />
          <Route path="/Point" element={<Point />} />{" "}
          <Route path="/Pointshop" element={<Pointshop />} />{" "}
          <Route path="/Login" element={<Login />} />{" "}
          <Route path="/Mypage" element={<Mypage />} />{" "}
          {/* /Mypage 경로에 Mypage 컴포넌트를 매핑 */}
          <Route path="/Profile" element={<Profile />} />{" "}
          {/* /Profile 경로에 Profile 컴포넌트를 매핑 */}
          <Route path="/Complete2" element={<Complete2 />} />{" "}
          <Route path="/Main2" element={<Main2 />} />{" "}
          <Route path="/Write2" element={<Write2 />} />{" "}
          <Route path="/Read2" element={<Read2 />} />{" "}
          <Route path="/Pointshop2" element={<Pointshop2 />} />{" "}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
