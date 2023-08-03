import React, { useState, useCallback } from "react";
import styled from "styled-components";
//import data from "./data.json";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ModalBasic from "./ModalBasic";

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
const Back = styled.div`
  position: relative;
  margin-left: 15px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  background-image: url("${process.env.PUBLIC_URL}/images/back.svg");
  background-size: cover;
`;
const InputBorder = styled.div`
  position: relative;
  margin: auto;
  margin-top: 15px;
  width: 345px;
  height: 447px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #149624;
  background: #f0ffdc;
`;
const InputBox = styled.textarea`
  position: relative;
  margin: auto;
  width: 337px;
  height: 390px;
  border: none;
  background: none;
  outline: none;
  resize: none;
`;
const ProfilePic = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  left: 3px;
  margin-top: 10px;
  background-image: url("${process.env.PUBLIC_URL}/images/profilecircle2.svg");
  background-size: cover;
  display: inline-block;
`;
const UserName = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
  top: -9px;
  color: #149624;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 10px;
`;
const MenuBtn = styled.button`
  position: absolute;
  border: none;
  background: none;
  top: 14%;
  left: 90%;
`;

const Read2 = () => {
  const [compls, setCompls] = useState([]);
  const [date, setDate] = useState(""); // 날짜 바꾸기
  const [text, setText] = useState(""); // 내용 바꾸기
  const navigate = useNavigate();
  const location = useLocation();
  const keyId = location.state.keyId; // useLocation으로 값 받아옴
  const savedcompls = localStorage.getItem("compls"); // 로컬 스토리지에서 가져오기

  const gotoMain = () => {
    navigate("/Main2");
  };

  useEffect(() => {
    if (savedcompls) {
      setCompls(JSON.parse(savedcompls)); // 투두리스트 배열 생성 compls로 설정
    }
  }, [savedcompls]);

  useEffect(() => {
    const complToUpdate = compls.find((compl) => compl.id === parseInt(keyId));
    if (complToUpdate) {
      // id 가 일치하면.. 이 값을 인 풋에 띄워줘야 함
      setDate(complToUpdate.date);
      setText(complToUpdate.text);
    }
  }, [compls, keyId]);

  // 글 삭제 버튼 누를 시
  const handleDeleteButton = () => {
    const updatedcompls = compls.filter(
      (compl) => compl.id !== parseInt(keyId)
    );
    setCompls(updatedcompls);
    localStorage.setItem("compls", JSON.stringify(updatedcompls));
    navigate("/Main2");
  };

  // 글 수정 버튼 누를 시
  const handleUpdateButton = () => {
    const updatedcompls = compls.map((compl) =>
      compl.id === parseInt(keyId) ? { ...compl, text: text } : compl
    );
    setCompls(updatedcompls);
    localStorage.setItem("compls", JSON.stringify(updatedcompls));
    navigate("/Main2");
  };

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true, keyId);
  };

  return (
    <Container>
      <ContentBox>
        <Back onClick={gotoMain}></Back>
        <form>
          <InputBorder>
            <ProfilePic></ProfilePic>
            <UserName>{date}</UserName>
            <InputBox
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></InputBox>
          </InputBorder>
        </form>
      </ContentBox>
      <div>
        <MenuBtn onClick={showModal}>
          {" "}
          <img src={`${process.env.PUBLIC_URL}/images/menudot.svg`} />
        </MenuBtn>
        {modalOpen && (
          <ModalBasic
            setModalOpen={setModalOpen}
            handleDeleteButton={handleDeleteButton}
            handleUpdateButton={handleUpdateButton}
          />
        )}
      </div>
    </Container>
  );
};

export default Read2;
