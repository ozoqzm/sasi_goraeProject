// Add.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  border: 2px solid #3b6ae3;
  background: #eff6ff;
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
  background-image: url("${process.env.PUBLIC_URL}/images/camera.svg");
  background-size: cover;
  display: inline-block;
`;
const AnonyText = styled.div`
  position: relative;
  display: inline-block;
  color: #3b6ae3;
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
  background: #1647c3;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
`;

// 체크박스 컴포넌트
// function Checkbox({ children, disabled, checked, onChange }) {
//   return (
//     <label>
//       <input
//         type="checkbox"
//         disabled={disabled}
//         checked={checked}
//         onChange={({ target: { checked } }) => onChange(checked)}
//       />
//       {children}
//     </label>
//   );
// }
const Write = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/Main");
  };
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { title, content } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { user_id } = useParams();
  const onSubmit = () => {
    try {
      // HTTP POST 요청으로 새로운 게시물 생성
      axios
        .post(`http://127.0.0.1:8000/received/${user_id}`, {
          content: inputs.content,
        })
        .then(() => {
          gotoMain(); // 메인 페이지로 이동
        });

      // 입력값 초기화
      setInputs({
        title: "",
        content: "",
      });
    } catch (error) {
      // 에러 발생 시 에러 처리
      console.error("Error creating new post:", error);
    }
  };

  //이미지 업로드
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
              name="content"
              value={content}
              onChange={onChange}
              type="text"
              placeholder="칭찬을 입력해주세요!"
              required
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
            {/* <CheckSet>
              <Checkbox checked={anonymous} onChange={setAnonymous}>
                <AnonyText>익명</AnonyText>
              </Checkbox>
            </CheckSet> */}
          </InputBorder>
        </form>
        <GoButton onClick={onSubmit}>메세지 작성하기</GoButton>
      </ContentBox>
    </Container>
  );
};

export default Write;
