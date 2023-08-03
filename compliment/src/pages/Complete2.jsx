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
  margin: auto;
`;
const TextBox = styled.div`
  position: relative;
  margin-top: 60px;
  color: #149624;
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
  color: #149624;
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
// const Whale = styled.div`
//   position: rleative;
//   margin: auto;
//   width: 282px;
//   height: 282px;
//   flex-shrink: 0;
//   background: url("${process.env.PUBLIC_URL}/images/movingwhale.svg");
//   background-size: cover;
// `;
const CloseBtn = styled.button`
  position: rleative;
  margin: auto;
  margin-top: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 345px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #149624;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
`;

//func
const Complete2 = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/Main2");
  };

  return (
    <Container>
      <ContentBox>
        <TextBox>칭찬하기 완료!</TextBox>
        <TextBox2>
          따뜻한 메세지를 전달했어요.<br></br>
          나무에 예쁜 열매가 맺힐 거에요.
        </TextBox2>
        <CloseBtn onClick={gotoMain}>닫기</CloseBtn>
      </ContentBox>
    </Container>
  );
};

export default Complete2;
