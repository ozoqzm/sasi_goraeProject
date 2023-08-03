// Index.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import BoardItem from "./BoardItem";
import axios from "axios";

const Container = styled.div`
  position: relative;
  max-width: 375px;
  height: 740px;
  margin: 0px auto;
  background: linear-gradient(180deg, #fff 0%, #76adff 100%);
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
  background-image: url("${process.env.PUBLIC_URL}/images/gorae_title.svg");
  background-size: cover;
  display: inline-block;
`;
const UserCircle = styled.div`
  position: relative;
  left: 260px;
  width: 24px;
  height: 24px;
  background-image: url("${process.env.PUBLIC_URL}/images/usercircle.svg");
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
  color: #3b6ae3;
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
  color: #3b6ae3;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DropList = styled.div`
  position: relative;
  max-width: 180px;
  height: 270px;
  margin: auto;
  top: 35px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /* WebKit 브라우저의 스크롤바를 숨김 */
    width: 0;
    background: transparent;
  }
`;
const Whale = styled.div`
  position: rleative;
  margin: auto;
  margin-top: -40px;
  width: 310px;
  height: 310px;
  background: url("${process.env.PUBLIC_URL}/images/gorae.svg");
  background-size: cover;
`;
const GoButton = styled.button`
  position: rleative;
  margin: auto;
  margin-top: -20px;
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
  color: #0c41ca;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background: none;
`;
// 물방울 이미지 수정 필요 (누끼)
const Drop = styled.div`
  position: rleative;
  display: inline-block;
`;

// 페이지 이동
const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nickname } = location.state || { nickname: "" };

  const gotoMypage = () => {
    navigate("/Mypage");
  };

  const gotoSplash = () => {
    navigate("/");
  };

  const handleAddButton = () => {
    navigate("/Write"); // 쓰기 페이지로 이동/ userid 넘겨야함..
  };

  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // API 호출
        const response = await axios.get(
          `http://127.0.0.1:8000/received/${user_id}`
        );
        setPostList(response.data); // API 응답으로 받은 데이터를 state에 저장
        // user_id 로그인하고 전달받기
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false); // 로딩 상태 변경
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, []);

  if (loading) {
    return <BoardListBlock>대기중...</BoardListBlock>;
  }

  return (
    <Container>
      <ContentBox>
        <TitleBox></TitleBox>
        <UserCircle onClick={gotoMypage}>
          <UserImg></UserImg>
        </UserCircle>
        {/* 이름 받아오기 */}
        <TextBox>
          {nickname ? `${nickname}님의 고래예요.` : "고래예요."}
        </TextBox>
        <TextBox2>칭찬으로 고래를 춤추게 만들어보세요!</TextBox2>
        <DropList>
          {postList.map((e) => (
            <BoardItem key={e.id} user_id={e.id} post_id={e.id} />
            // user_id 수정
          ))}
        </DropList>
        <Whale></Whale>
        <GoButton onClick={handleAddButton}>칭찬하기</GoButton>
        <MakeButton onClick={gotoSplash}>나도 만들기</MakeButton>
      </ContentBox>
    </Container>
  );
};

export default Main;
