import React, { useState, useCallback } from "react";
import styled from "styled-components";
//import data from "./data.json";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  max-width: 375px;
  height: 740px;
  margin: 0px auto;
  background: #fff;
  border: 1px solid gray;
`;
const ContentBox = styled.div`
  position: relative;
  top: 6%;
  height: 600px;
  margin: auto;
`;
const TextBox = styled.div`
  position: relative;
  margin-top: 60px;
  color: #0b3da6;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150.523%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBox2 = styled.div`
  position: rleative;
  color: #0b3da6;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 149.023%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Whale = styled.div`
  position: rleative;
  margin: auto;
  width: 282px;
  height: 282px;
  flex-shrink: 0;
  background: url("${process.env.PUBLIC_URL}/images/movingwhale.svg");
  background-size: cover;
  animation: motion 0.3s linear 0s infinite alternate;

  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 12px;
    }
  }
`;
const CloseBtn = styled.button`
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 345px;
  height: 51px;
  border-radius: 10px;
  background: #1647c3;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
`;

//func
const Complete = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/Main");
  };

  return (
    <Container>
      <ContentBox>
        <TextBox>칭찬하기 완료!</TextBox>
        <TextBox2>
          따뜻한 메세지를 전달했어요.<br></br>
          칭찬은 고래도 춤추게 한답니다 :)
        </TextBox2>
        {/* 이미지 흔들리도록 */}
        <Whale></Whale>
      </ContentBox>
      <CloseBtn onClick={gotoMain}>닫기</CloseBtn>
    </Container>
  );
};

export default Complete;
