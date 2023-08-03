import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

// const Container = styled.div`
//   position: relative;
//   width: 300px;
//   height: 200px;
//   /* 최상단 위치 */
//   z-index: 999;
//   /* translate는 본인의 크기 기준으로 작동한다. */
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: gray;
//   border: 1px solid black;
//   border-radius: 8px;
// `;
// const CloseBtn = styled.button`
//   position: relative;
//   position: absolute;
//   right: 10px;
//   top: 10px;
// `;

const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  margin: auto;
  display: flex;
  width: 370px;
  height: 300px;
  padding: 21px 0px 227px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CloseBtn = styled.button`
  position: relative;
  display: flex;
  width: 370px;
  margin-bottom: 1px;
  padding: 16px 0px 15px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: #fff;
  color: #0085ff;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 33px */
  letter-spacing: 0.44px;
  border: 0.5px solid #aaa;
`;
const UpdateBtn = styled.button`
  position: relative;
  display: flex;
  width: 370px;
  height: 65px;
  margin-bottom: 1px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0.5px solid #aaa;
  background: #aaa;
  color: #0085ff;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 33px */
  letter-spacing: 0.44px;
`;
const DeleteBtn = styled.button`
  position: relative;
  display: flex;
  width: 370px;
  height: 65px;
  margin-bottom: 1px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0.5px solid #aaa;
  background: #aaa;
  color: #0085ff;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 33px */
  letter-spacing: 0.44px;
`;

function ModalBasic({ setModalOpen, handleDeleteButton, handleUpdateButton }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <UpdateBtn onClick={() => handleUpdateButton(1)}>수정</UpdateBtn>
      <DeleteBtn onClick={() => handleDeleteButton(-1)}>삭제</DeleteBtn>
      <CloseBtn onClick={closeModal}>취소</CloseBtn>
    </Container>
  );
}
export default ModalBasic;
