import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 375px;
  height: 740px;
  margin: 0px auto;
  background: white;
  border: 1px solid gray;
`;

const Title = styled.div`
  position: relative;
  width: 100px;
  height: 24px;
  left: 140px;

  top: 53px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #3b6ae3;
`;

const Email = styled.div`
  position: relative;
  width: 50px;
  height: 17px;
  left: 10px;

  top: 90px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #3b6ae3;
`;

const Email_box = styled.input`
  position: relative;
  width: 356px;
  height: 48px;
  left: 6px;
  top: 100px;

  border: 1.5px solid #4176ff;
  border-radius: 7px;
`;

const Password = styled.div`
  position: relative;
  width: 60px;
  height: 17px;
  left: 10px;

  top: 130px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #3b6ae3;
`;

const Password_box = styled.input`
  position: relative;
  width: 356px;
  height: 48px;
  left: 6px;
  top: 140px;

  border: 1.5px solid #4176ff;
  border-radius: 7px;
`;

const Start_box = styled.button`
  position: relative;
  width: 345px;
  height: 51px;
  left: 15px;
  top: 470px;
  border: none;

  background: #3b6ae3;
  border-radius: 10px;
`;

const Start_text = styled.div`
  position: relative;
  width: 70px;
  height: 17px;
  left: 140px;

  top: 1px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #ffffff;
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMainButtonClick = () => {
    navigate("/main", { state: { nickname: getStoredNickname() } });
  };

  // Function to retrieve the nickname from local storage
  const getStoredNickname = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return userInfo?.nickname || ""; // Return empty string if nickname is not available
  };

  return (
    <Container>
      <Title>로그인</Title>
      <p1>
        <Email>이메일</Email>
        <Email_box onChange={(e) => setEmail(e.target.value)} />
      </p1>
      <p2>
        <Password>비밀번호</Password>
        <Password_box onChange={(e) => setPassword(e.target.value)} />
      </p2>

      <Start_box onClick={handleMainButtonClick}>
        <Start_text>로그인하기</Start_text>
      </Start_box>
    </Container>
  );
};

export default Login;
