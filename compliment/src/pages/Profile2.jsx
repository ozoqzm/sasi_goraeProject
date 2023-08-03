import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  max-width: 375px;
  height: 740px;
  margin: 0px auto;
  background: white;
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
`;

const ProfileText = styled.div`
  position: relative;
  left: 140px;
  top: -27px;
`;

const ImageUpload = styled.div`
  position: relative;
  margin-top: 43px;
  left: 105px;
`;

const InputBox = styled.div`
  position: relative;
  width: 221px;
  border: none;
  outline: none;
  border-bottom: 2px solid #70b579;
  left: 80px;
  top: 40px;
  /* 추가한 스타일 */
  input {
    border: none;
    outline: none;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.5px;
    width: 100%; /* input 요소가 부모 요소의 크기를 채우도록 */
    color: black; /* input 텍스트 색상을 검정색으로 */
    &::placeholder {
      /* placeholder 텍스트 색상을 파란색(#698ff0)으로 */
      color: #70b579;
    }
  }
`;

const CancelBox = styled.div`
  position: relative;
  top: 300px;
  left: 20px;
`;

const ChangeBox = styled.div`
  position: relative;
  top: 253px;
  left: 195px;
`;

const Profile = () => {
  const navigate = useNavigate();
  // 닉네임 값을 저장할 상태 변수
  const [nickname, setNickname] = useState("");
  // 선택된 이미지를 상태로 저장
  const [selectedImage, setSelectedImage] = useState(null);

  // 입력한 닉네임을 Mypage 페이지로 전달
  const onClickChangeBox = () => {
    navigate("/Mypage2", { state: { nickname, profileImage: selectedImage } });
  };

  const onClickImg = () => {
    navigate("/Mypage2");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // 선택한 이미지 파일 가져오기
    setSelectedImage(file); // 선택한 이미지 상태 업데이트
  };

  return (
    <Container>
      <ContentBox>
        <Back>
          <img
            src={`${process.env.PUBLIC_URL}/images/back.svg`}
            onClick={onClickImg}
          />
        </Back>
        <ProfileText>
          <img src={`${process.env.PUBLIC_URL}/images/profile_text2.svg`} />
        </ProfileText>
        <ImageUpload>
          <label htmlFor="imageUploadInput">
            <img src={`${process.env.PUBLIC_URL}/images/imgupload2.svg`} />
          </label>
          <input
            type="file"
            id="imageUploadInput"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }} // 실제로 보이지 않게 처리
          />
        </ImageUpload>
        <InputBox>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </InputBox>
        <CancelBox>
          <img
            src={`${process.env.PUBLIC_URL}/images/cancel_btn2.svg`}
            onClick={onClickImg}
          />
        </CancelBox>
        <ChangeBox onClick={onClickChangeBox}>
          <img src={`${process.env.PUBLIC_URL}/images/change_btn2.svg`} />
        </ChangeBox>
      </ContentBox>
    </Container>
  );
};

export default Profile;
