import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import ModalBasic_p from "./ModalBasic_p";
import { copyToClipboard } from "./copyToClipboard";

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
  /* identical to box height */

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
  /* identical to box height */

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

// 토스트 추가 부분
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
  line-height: 17px; /* 121.429% */
  letter-spacing: -0.5px;
`;

const Mypage = () => {
  // 페이지 넘어가게 해 주는 코드
  const navigate = useNavigate();

  // Profile로 이동
  const onClickImg = () => {
    navigate("/Profile"); // '/Profile'로 수정
  };

  //Pointshop으로 이동
  const onClickImg2 = () => {
    navigate("/Pointshop"); // '/Profile'로 수정
  };

  // Main 이동
  const onClickImg3 = () => {
    navigate("/"); // '/Profile'로 수정
  };

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  // 토스트 메시지를 보여줄지 여부를 제어하는 상태 변수
  const [showToast, setShowToast] = useState(false);

  const onClickUrlBox = () => {
    const url =
      "https://www.figma.com/file/kyFRDzPJCXeYxq6pbFB0WG/%EC%A3%BC%EC%97%B0%EC%A7%84?node-id=167%3A160&mode=dev"; // 실제 복사하고자 하는 URL 주소를 입력
    copyToClipboard(url); // 유틸리티 함수를 사용하여 URL을 클립보드에 복사
    setShowToast(true); // 이미지를 클릭하면 토스트 메시지를 보여주도록 설정
    setTimeout(() => setShowToast(false), 1000); // 1초 후에 토스트 메시지를 숨김
  };

  // 닉네임 입력받은 값 출력되도록 해 주기
  const location = useLocation();
  const nickname = location?.state?.nickname; // 넘겨받은 닉네임 값

  const profileImage = location?.state?.profileImage; // 전달된 이미지 URL 가져오기
  const defaultProfileImageUrl = `${process.env.PUBLIC_URL}/images/profile.svg`; // default로 저장되는 이미지 설정

  // 이미지 URL 상태 변수
  const [profileImageUrl, setProfileImageUrl] = useState(
    defaultProfileImageUrl
  );

  // 이미지 URL 업데이트
  useEffect(() => {
    if (profileImage) {
      setProfileImageUrl(URL.createObjectURL(profileImage));
    } else {
      setProfileImageUrl(defaultProfileImageUrl);
    }
  }, [profileImage]);

  // 포인트 점수 반영 부분
  const [compls, setCompls] = useState([]);
  const [point, setPoint] = useState([0]);

  useEffect(() => {
    const savedcompls = localStorage.getItem("compls");
    if (savedcompls) {
      setCompls(JSON.parse(savedcompls));
    }
  }, []);

  // 포인트 콘솔에 출력 (배열 크기)
  useEffect(() => {
    const arrayLength = compls.length;
    //console.log(arrayLength);
    setPoint(arrayLength * 20); // 일단 글 개수당 20점씩 곱함
  }, [compls]);

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
          <img src={profileImageUrl} alt="Profile" />
        </ProfileImg>
        <Username>{nickname || "주연진"}</Username>
        <Useremail>yeonjin0822@gmail.com</Useremail>
        <CoinBox>
          <img src={`${process.env.PUBLIC_URL}/images/coinbox.svg`} />
        </CoinBox>
        <CoinText>{point}P</CoinText>
        <CoinUse>
          <img
            src={`${process.env.PUBLIC_URL}/images/point_use.svg`}
            onClick={onClickImg2}
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
