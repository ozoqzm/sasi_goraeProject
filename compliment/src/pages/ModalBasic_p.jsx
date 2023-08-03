import React from "react";
import PropTypes from "prop-types";
import styles from "./ModalBasic.module.css";
import { useNavigate } from "react-router-dom";

function ModalBasic({ setModalOpen, id, title, content, writer }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  // 페이지 넘어가게 해 주는 코드
  const navigate = useNavigate();

  // Splash로 이동
  const onClickImg = () => {
    navigate("/Splash"); // '/Profile'로 수정
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.whale}
        src={`${process.env.PUBLIC_URL}/images/sad_whale.png`}
      />
      <img
        className={styles.text1}
        src={`${process.env.PUBLIC_URL}/images/logout_text1.svg`}
      />
      <img
        className={styles.text2}
        src={`${process.env.PUBLIC_URL}/images/logout_text2.svg`}
      />
      <img
        className={styles.cancel}
        src={`${process.env.PUBLIC_URL}/images/logout_cancel.svg`}
        onClick={closeModal}
      />
      <img
        className={styles.logout}
        src={`${process.env.PUBLIC_URL}/images/logout_btn.svg`}
        onClick={onClickImg}
      />
    </div>
  );
}

// PropTypes 정의
ModalBasic.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  writer: PropTypes.string,
};

export default ModalBasic;
