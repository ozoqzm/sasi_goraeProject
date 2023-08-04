import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

const Name = styled.div`
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

const Name_box = styled.input`
  position: relative;
  width: 356px;
  height: 48px;
  left: 6px;
  top: 100px;

  border: 1.5px solid #4176ff;
  border-radius: 7px;
`;

const Email = styled.div`
  position: relative;
  width: 50px;
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

const Email_box = styled.input`
  position: relative;
  width: 356px;
  height: 48px;
  left: 6px;
  top: 140px;

  border: 1.5px solid #4176ff;
  border-radius: 7px;
`;

const Password = styled.div`
  position: relative;
  width: 60px;
  height: 17px;
  left: 10px;

  top: 170px;

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
  top: 180px;

  border: 1.5px solid #4176ff;
  border-radius: 7px;
`;

const Start_box = styled.button`
  position: relative;
  width: 345px;
  height: 51px;
  left: 15px;
  top: 400px;
  border: none;

  background: #3b6ae3;
  border-radius: 10px;
`;

const Start_text = styled.div`
  position: relative;
  width: 60px;
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

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { username, password, email } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = () => {
    try {
      // HTTP POST 요청으로 새로운 회원가입 정보 전송
      axios.post("http://127.0.0.1:8000/users/", {
        username: inputs.username,
        password: inputs.password,
        email: inputs.email,
      });

      // 입력값 초기화
      setInputs({
        username: "",
        password: "",
        email: "",
      });

      // 로그인 페이지로 이동
      navigate("/Login");
    } catch (error) {
      // 에러 발생 시 에러 처리
      console.error("Error creating new post:", error);
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <div>
        <Name>닉네임</Name>
        <Name_box name="username" value={username} onChange={onChange} />
      </div>
      <div>
        <Email>이메일</Email>
        <Email_box name="email" value={email} onChange={onChange} />
      </div>
      <div>
        <Password>비밀번호</Password>
        <Password_box
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <Start_box onClick={onSubmit}>
        <Start_text>시작하기</Start_text>
      </Start_box>
    </Container>
  );
};

export default Signup;
