// Update.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ModalBasic from "./ModalBasic";
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
  height: 150px;
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
  background-image: url("${process.env.PUBLIC_URL}/images/profilecircle.svg");
  background-size: cover;
  display: inline-block;
`;
const UserName = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
  top: -9px;
  color: #3b6ae3;
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

const Read = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/Main");
  };

  // 글 삭제 버튼 누를 시
  const handleDeleteButton = () => {
    navigate("/Main");
  };

  // 글 수정 버튼 누를 시
  const handleUpdateButton = () => {
    navigate("/Main");
  };

  // // 모달창 노출 여부 state
  // const [modalOpen, setModalOpen] = useState(false);

  // // 모달창 노출
  // const showModal = () => {
  //   setModalOpen(true, keyId);
  // };

  const { postID } = useParams();
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);

  // postID변경 시에만
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/messages/${postID}`).then((response) => {
      setPost(response.data);
      setPostLoading(false);
    });
  }, [postID]);

  // writer에 익명인지 post.writer인지 판별해서 저장
  // post가 변경될 때마다 업데이트 해줘야 함!!
  const [viewWriter, setViewWriter] = useState();
  useEffect(() => {
    if (post && post.annonymous == 1) setViewWriter("익명");
    else setViewWriter(post && post.writer);
  }, [post]);

  return (
    <Container>
      <ContentBox>
        <Back onClick={gotoMain}></Back>
        <InputBorder>
          <ProfilePic></ProfilePic>
          <UserName>{viewWriter}</UserName>
          {postLoading ? (
            <h2>loading...</h2>
          ) : (
            <InputBox>{post && post.content}</InputBox>
          )}
          <img
            src={post && post.image}
            style={{ display: "block", margin: "auto", width: "300px" }}
          />
        </InputBorder>
      </ContentBox>
      <div>
        <MenuBtn>
          {" "}
          <img src={`${process.env.PUBLIC_URL}/images/menudot.svg`} />
        </MenuBtn>
        {/* {modalOpen && (
          <ModalBasic
            setModalOpen={setModalOpen}
            handleDeleteButton={handleDeleteButton}
            handleUpdateButton={handleUpdateButton}
          />
        )} */}
      </div>
    </Container>
  );
};

export default Read;
