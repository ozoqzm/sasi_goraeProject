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

//체크박스 컴포넌트
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
const Write = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/Main");
  };
  const [inputs, setInputs] = useState({
    receiver: "",
    content: "",
    image: null,
  });

  const { receiver, content, image } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 이미지
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInputs((prevState) => ({
        ...prevState,
        image: file, // 이미지 파일을 상태에 저장
      }));
    }
  };

  const onSubmit = () => {
    try {
      // FormData 생성
      const formData = new FormData();
      formData.append("content", content);
      formData.append("receiver", receiver);
      if (image) {
        formData.append("image", image);
      }
      if (anonymous) formData.append("annonymous", 1);

      // HTTP POST 요청으로 새로운 게시물 생성
      axios
        .post("http://127.0.0.1:8000/messages/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(gotoMain)
        .catch((error) => {
          console.error("Error creating new post:", error);
        });

      // 입력값 초기화
      setInputs({
        receiver: "",
        content: "",
        image: null,
        annonymous: 0,
      });
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  //이미지 업로드
  // const selectFile = useRef("");
  // const [imageFile, setImageFile] = useState(null);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImageFile(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const [anonymous, setAnonymous] = useState(false);

  // useEffect(() => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     annonymous: anonymous == true ? 1 : 0,
  //   }));
  // }, [anonymous]);

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
            {/* <input
              name="receiver"
              value={receiver}
              type="number"
              onChange={onChange}
              placeholder="receiver입력"
              required
            ></input> */}
            <div style={{ height: "190px", margin: "auto" }}></div>
            <CameraBtn>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </CameraBtn>
            <CheckSet>
              <Checkbox checked={anonymous} onChange={setAnonymous}>
                <AnonyText>익명</AnonyText>
              </Checkbox>
            </CheckSet>
          </InputBorder>
        </form>
        <GoButton onClick={onSubmit}>메세지 작성하기</GoButton>
      </ContentBox>
    </Container>
  );
};

export default Write;
