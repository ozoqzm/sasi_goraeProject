import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import ModalBasic_p from "./ModalBasic_p";
import { copyToClipboard } from "./copyToClipboard";
import axios from "axios";
import { useParams } from "react-router-dom";

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

const ProfileImg = styled.div`
  position: relative;
  margin-left: 100px;
`;

const Username = styled.div`
  position: relative;
  width: 80px;
  height: 27px;
  left: 150px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: #3b6ae3;
`;

const Useremail = styled.div`
  position: relative;
  position: absolute;
  width: 162px;
  height: 17px;
  left: calc(50% - 162px / 2);
  margin-top: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #787878;
`;

const CoinBox = styled.div`
  position: relative;
  margin-top: 55px;
  margin-left: 15px;
`;

const CoinText = styled.div`
  position: relative;
  width: 54px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #3b6ae3;
  top: -81px;
  left: 80px;
`;

const CoinUse = styled.div`
  position: relative;
  top: -67px;
  left: 40px;
`;

const Rewritebox = styled.div`
  position: relative;
  margin-top: -30px;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const Urlbox = styled.div`
  position: relative;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const Logoutbox = styled.div`
  position: relative;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const ToastMessage = styled.div`
  position: absolute;
  width: 270px;
  height: 18px;
  top: 630px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid #afafaf;
  background: #fff;
  z-index: 999;
  display: ${(props) => (props.show ? "block" : "none")};
  color: #a3a3a3;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: -0.5px;
`;

const Mypage = () => {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate("/Profile");
  };

  const onClickImg2 = () => {
    navigate("/Pointshop");
  };

  const onClickImg3 = () => {
    navigate("/");
  };

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const [showToast, setShowToast] = useState(false);

  const onClickUrlBox = () => {
    const url =
      "https://www.figma.com/file/kyFRDzPJCXeYxq6pbFB0WG/%EC%A3%BC%EC%97%B0%EC%A7%84?node-id=167%3A160&mode=dev";
    copyToClipboard(url);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000);
  };

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/mypage/`).then((response) => {
      setUserData(response.data);
      setLoading(false); // 데이터 가져오기가 완료되면 로딩 상태를 false로 변경
    });
  }, []);

  // 데이터를 성공적으로 가져온 경우에만 정보를 보여줌
  if (loading) {
    return <div>Loading...</div>; // 데이터를 가져오는 중에는 로딩 메시지를 표시
  }

  // userData 안에 username이 존재하는지 확인하여 데이터가 있는지 여부를 판단
  const isUserDataAvailable = userData;
  if (userData) {
    const user = userData[0]; // userData 배열의 첫 번째 요소를 가져옴
    return (
      <div>
        <div>데이터 있어요</div>
        <div>Username: {user}</div>
      </div>
    );
    //     <div>Email: {user.email}</div>
    //     <div>Points: {user.points}</div>
    //   </div>
    // );
    <return>
      <div>{userData.length}</div>
    </return>;
  }
  if (!isUserDataAvailable) {
    return <div>No data available</div>;
  }
  return (
    <Container>
      <ContentBox>
        <Back>
          <img
            src={`${process.env.PUBLIC_URL}/images/back.svg`}
            alt="Back"
            onClick={onClickImg3}
          />
        </Back>
        <ProfileImg>
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.svg`}
            alt="Profile"
          />
        </ProfileImg>

        <Username>{userData.username}</Username>
        <Useremail>{userData.email}</Useremail>
        <CoinBox>
          <img src={`${process.env.PUBLIC_URL}/images/coinbox.svg`} alt="" />
        </CoinBox>
        <CoinText>{userData.points}P</CoinText>
        <CoinUse>
          <img
            src={`${process.env.PUBLIC_URL}/images/point_use.svg`}
            onClick={onClickImg2}
            alt=""
          />
        </CoinUse>
        <Rewritebox>
          <img
            src={`${process.env.PUBLIC_URL}/images/bluebox_rewrite.svg`}
            alt="Rewrite Box"
            onClick={onClickImg}
          />
        </Rewritebox>
        <Urlbox onClick={onClickUrlBox}>
          <img
            src={`${process.env.PUBLIC_URL}/images/bluebox_url.svg`}
            alt="URL Box"
          />
        </Urlbox>
        <Logoutbox>
          <img
            src={`${process.env.PUBLIC_URL}/images/whitebox.svg`}
            alt="Logout Box"
            onClick={showModal}
          />
          {modalOpen && <ModalBasic_p setModalOpen={setModalOpen} />}
        </Logoutbox>
        <ToastMessage show={showToast}>URL 주소가 복사되었습니다</ToastMessage>
      </ContentBox>
    </Container>
  );
};

export default Mypage;
