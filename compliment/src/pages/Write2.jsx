import React, { useState, useEffect } from "react";
import styled from "styled-components";
//import data from "./data.json";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

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
  height: 200px;
  border: none;
  background: none;
  outline: none;
  resize: none;
`;
const CheckSet = styled.div`
  position: relative;
  left: 250px;
  display: inline-block;
`;
const CameraBtn = styled.div`
  position: relative;
  left: 15px;
  width: 30px;
  height: 30px;
  top: 7px;
  flex-shrink: 0;
  background-image: url("${process.env.PUBLIC_URL}/images/camera2.svg");
  background-size: cover;
  display: inline-block;
`;
const AnonyText = styled.div`
  position: relative;
  display: inline-block;
  color: #149624;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const GoButton = styled.button`
  position: rleative;
  margin: auto;
  margin-top: 20px;
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

// 체크박스 컴포넌트
function Checkbox({ children, disabled, checked, onChange }) {
  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  );
}
const Write2 = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/Main2");
  };

  const [anonymous, setAnonymous] = useState(false);
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const handleSaveButton = () => {
    const newComplObj = {
      date: date,
      text: text,
      id: Date.now(),
    };

    const compls = JSON.parse(localStorage.getItem("compls") || "[]");
    compls.push(newComplObj);
    localStorage.setItem("compls", JSON.stringify(compls));
    navigate("/Complete2");
  };

  useEffect(() => {
    const userInfoStr = localStorage.getItem("userInfo");
    const userInfoObj = JSON.parse(userInfoStr);
    const storedNickname = userInfoObj.nickname;

    if (anonymous === true) {
      setDate("익명");
    } else {
      setDate(storedNickname); // 전달받은 로그인 이름
    }
  }, [anonymous]);

  // 이미지 업로드
  const selectFile = useRef("");
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <ContentBox>
        <Back onClick={gotoMain}></Back>
        <form>
          <InputBorder>
            <InputBox
              type="text"
              placeholder="칭찬을 입력해주세요!"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></InputBox>
            <div style={{ height: "190px", margin: "auto" }}>
              {imageFile && (
                <img
                  src={imageFile}
                  alt="Uploaded Preview"
                  style={{ width: "340px", height: "200px" }}
                />
              )}
            </div>
            <CameraBtn onClick={() => selectFile.current.click()}>
              <input
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
                ref={selectFile}
              />
            </CameraBtn>
            <CheckSet>
              <Checkbox checked={anonymous} onChange={setAnonymous}>
                <AnonyText>익명</AnonyText>
              </Checkbox>
            </CheckSet>
          </InputBorder>
        </form>
        <GoButton onClick={handleSaveButton}>메세지 작성하기</GoButton>
      </ContentBox>
    </Container>
  );
};

export default Write2;
