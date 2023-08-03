import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  position: relative;
  max-width: 375px;
  height: 740px;
  margin: 0px auto;
  background: linear-gradient(180deg, #fff 0%, #d1ff4d 100%);
  border: 1px solid gray;
`;
const ContentBox = styled.div`
  position: relative;
  top: 4%;
  margin: auto;
`;
const TitleBox = styled.div`
  position: relative;
  width: 70px;
  height: 17px;
  left: 7px;
  background-image: url("${process.env.PUBLIC_URL}/images/gorae_title2.svg");
  background-size: cover;
  display: inline-block;
`;
const UserCircle = styled.div`
  position: relative;
  left: 260px;
  width: 24px;
  height: 24px;
  background-image: url("${process.env.PUBLIC_URL}/images/usercircle2.svg");
  background-size: cover;
  display: inline-block;
`;
const UserImg = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background-image: url("${process.env.PUBLIC_URL}/images/userbtn.svg");
  background-size: cover;
`;
const TextBox = styled.div`
  position: relative;
  color: #149624;
  margin-top: 20px;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBox2 = styled.div`
  position: rleative;
  color: #149624;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AppleList = styled.div`
  position: relative;
  max-width: 150px;
  height: 200px;
  margin: auto;
  top: 40px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /* WebKit 브라우저의 스크롤바를 숨김 */
    width: 0;
    background: transparent;
  }
`;
const Tree = styled.div`
  position: rleative;
  margin: auto;
  margin-top: 30px;
  width: 300px;
  height: 450px;
  background: url("${process.env.PUBLIC_URL}/images/tree.svg");
  background-size: cover;
`;
const GoButton = styled.button`
  position: rleative;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 345px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #1fb832;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
`;
const MakeButton = styled.button`
  position: rleative;
  margin: auto;
  width: 345px;
  height: 51px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #149624;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background: none;
`;
// 물방울 이미지 수정 필요 (누끼)
const Apple = styled.div`
  display: inline-block;
`;

const Main2 = () => {
  const [compls, setCompls] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { nickname } = location.state || { nickname: "" };

  // 페이지 이동
  const gotoMypage = () => {
    navigate("/Mypage");
  };

  const gotoSplash = () => {
    navigate("/");
  };

  useEffect(() => {
    const savedcompls = localStorage.getItem("compls");
    if (savedcompls) {
      setCompls(JSON.parse(savedcompls));
    }
  }, []);

  const handleAddButton = () => {
    navigate("/Write2"); // 쓰기 페이지로 이동
  };

  const handlecomplClick = (id) => {
    navigate("/Read2", { state: { keyId: `${id}` } }); // 데이터와 함께 read 페이지 이동
  };

  const makeRandomWidth = () => {
    let num = Math.floor(Math.random() * (70 - 45 + 1)) + 45;
    return num;
  };

  return (
    <Container>
      <ContentBox>
        <TitleBox></TitleBox>
        <UserCircle onClick={gotoMypage}>
          <UserImg></UserImg>
        </UserCircle>
        {/* 이름 받아오기 */}
        <TextBox>
          {nickname ? `${nickname}님의 나무에요.` : "나무에요."}
        </TextBox>
        <TextBox2>칭찬으로 나무에 열매를 맺어주세요!</TextBox2>
        <Tree>
          <AppleList>
            {compls.map((compl) => (
              <Apple key={compl.id} onClick={() => handlecomplClick(compl.id)}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/apple.svg`}
                  style={{
                    width: makeRandomWidth(),
                  }}
                />
              </Apple>
            ))}
          </AppleList>
        </Tree>
        <GoButton onClick={handleAddButton}>칭찬하기</GoButton>
        <MakeButton onClick={gotoSplash}>나도 만들기</MakeButton>
      </ContentBox>
    </Container>
  );
};

export default Main2;
