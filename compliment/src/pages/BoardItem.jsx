import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 물방울 이미지 수정 필요 (누끼)
const Drop = styled.div`
  position: rleative;
  display: inline-block;
`;

const BoardItemBlock = styled.div`
  display: flex;

  .contents {
    margin: 0 auto;

    h2 {
      margin: 0;
      cursor: pointer;
      border-bottom: 1px solid grey;
      padding-bottom: 1px;
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  // 컴포넌트가 바로 옆에 붙어 있는 경우에 사용
  & + & {
    margin-top: 3rem;
  }
`;

const BoardItem = ({ user_id, post_id }) => {
  const navigate = useNavigate();

  const goPost = () => {
    navigate(`/Read/${user_id}/${post_id}`); // user_id, post_id read에 전달
  };

  // 물방울 이미지 난수 설정
  const [num, setNum] = useState();
  useEffect(() => {
    setNum(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
  }, []);

  return (
    <Drop
      key={compl.id}
      onClick={() => {
        goPost;
      }}
    >
      {" "}
      <img
        src={`${process.env.PUBLIC_URL}/images/drop${
          Math.floor(Math.random() * (3 - 1 + 1)) + 1
        }.svg`}
        alt="Back"
        width="70px"
      />
    </Drop>
  );
};

export default BoardItem;
