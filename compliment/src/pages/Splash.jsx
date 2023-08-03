import React from "react";
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
  width: 97px;
  height: 41px;
  left: 147px;
  top: 141px;

  font-family: "KCC-Ganpan";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 41px;

  color: #375ac2;
`;

const Gorae = styled.div`
  position: relative;
  width: 287px;
  height: 287px;
  left: 50px;
  top: 140px;

  background: url(image.png);
`;

const Kakao_box = styled.button`
  position: relative;
  width: 318px;
  height: 57px;
  left: 30px;
  top: 150px;
  border: none;

  background: #f9e000;
  border-radius: 9px;
`;

const Kakao_icon = styled.div`
  position: relative;
  width: 31px;
  height: 31px;
  left: 45px;
  top: 8px;

  background: url(image.png);
`;

const Kakao_text = styled.div`
  position: relative;
  width: 180px;
  height: 17px;
  left: 75px;
  bottom: 16px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #3b1c1c;
`;

const Email_box = styled.button`
  position: relative;
  width: 318px;
  height: 57px;
  left: 30px;
  top: 160px;
  border: none;

  background: #3765de;
  border-radius: 9px;
`;

const Email_text = styled.div`
  position: relative;
  width: 150px;
  height: 17px;
  top: 1px;
  left: 80px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;

const Login_box = styled.button`
  box-sizing: border-box;

  position: relative;
  width: 318px;
  height: 57px;
  left: 30px;
  top: 170px;

  border: 1.5px solid #4176ff;
  border-radius: 9px;
`;

const Login_text = styled.div`
  position: relative;
  width: 50px;
  height: 17px;
  left: calc(50% - 39px / 2 - 2.5px);
  top: 1px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #2e61e3;
`;

const Splash = () => {
  const navigate = useNavigate(); // useNavigate 훅을 초기화합니다

  const handleEmailBoxClick = () => {
    navigate("/signup"); // Email_box 버튼이 클릭되면 Signup 페이지로 이동합니다
  };

  const handleLoginBoxClick = () => {
    navigate("/login"); // Login_box 버튼이 클릭되면 Login 페이지로 이동합니다
  };

  return (
    <Container>
      <Title>GORAE</Title>
      <Gorae>
        <img src={`${process.env.PUBLIC_URL}/images/gorae_main.svg`} />
      </Gorae>
      <Kakao_box>
        <Kakao_icon>
          <img src={`${process.env.PUBLIC_URL}/images/kakao.svg`} />
        </Kakao_icon>
        <Kakao_text>카카오 계정으로 로그인</Kakao_text>
      </Kakao_box>
      <Email_box onClick={handleEmailBoxClick}>
        <Email_text>이메일로 회원가입</Email_text>
      </Email_box>
      <Login_box onClick={handleLoginBoxClick}>
        <Login_text>로그인</Login_text>
      </Login_box>
    </Container>
  );
};

export default Splash;
