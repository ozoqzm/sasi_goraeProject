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

const Email = styled.div`
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

const Email_box = styled.input`
  position: relative;
  width: 356px;
  height: 48px;
  left: 6px;
  top: 100px;

  border: 1.5px solid #4176ff;
  border-radius: 7px;
`;

const Password = styled.div`
  position: relative;
  width: 60px;
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

const Password_box = styled.input`
  position: relative;
  width: 356px;
  height: 48px;
  left: 6px;
  top: 140px;

  border: 1.5px solid #4176ff;
  border-radius: 7px;
`;

const Start_box = styled.button`
  position: relative;
  width: 345px;
  height: 51px;
  left: 15px;
  top: 470px;
  border: none;

  background: #3b6ae3;
  border-radius: 10px;
`;

const Start_text = styled.div`
  position: relative;
  width: 70px;
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

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    password: "",
    username: "",
  });

  const { password, username } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      // HTTP POST 요청으로 새로운 회원가입 정보 전송
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        password: inputs.password,
        username: inputs.username,
      });

      // 로그인 성공한 경우
      if (response.status >= 200 && response.status <= 299) {
        console.log("Logged in successfully:", response.data);
        // Main 페이지로 이동하는 로직 추가
        console.log(username);
        navigate("/Main", { state: username });
      } else {
        // 틀린 경우 초기화
        setInputs({
          password: "",
          username: "",
        });
        // 다른 상태 코드인 경우 (예: 401 에러 처리는 이미 인터셉터에서 처리됨)
        console.error("Unexpected status code:", response.status);
        navigate("/Login");
        // 에러 처리 또는 사용자에게 다른 처리 안내 등을 추가할 수 있습니다.
      }
    } catch (error) {
      // 에러 발생 시 에러 처리
      console.error("Error creating new post:", error);
    }
  };

  return (
    <Container>
      <Title>로그인</Title>

      <Email>이름</Email>
      <Email_box name="username" value={username} onChange={onChange} />

      <Password>비밀번호</Password>
      <Password_box
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />

      <Start_box onClick={onSubmit}>
        <Start_text>로그인하기</Start_text>
      </Start_box>
    </Container>
  );
};

export default Login;
