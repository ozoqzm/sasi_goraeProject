import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* Group 2204 */

  position: relative;
  width: 350px;
  height: 195px;
  top: 128px;
  border-radius: 10px;
  background: white;
  border: 1px solid gray;
  margin: 0 auto;
`;

const Icon = styled.div`
  /* Ellipse 58 */

  position: relative;
  width: 67px;
  height: 67px;
  left: 20px;
  top: 33px;

  /* Ellipse 59 */

  position: relative;
  width: 53.95px;
  height: 53.95px;
  left: 20px;
  top: 39.96px;

  /* P */

  position: relative;
  width: 23px;
  height: 42px;
  left: 40px;
  top: 46.05px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 34.8052px;
  line-height: 42px;

  color: #ffb905;
`;

const Text_number = styled.div`
  position: relative;
  width: 64px;
  height: 28px;
  left: 125px;
  top: 3px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 23.1264px;
  line-height: 28px;
  /* identical to box height */

  color: #149624;
`;

const Text = styled.div`
  position: relative;
  width: 130px;
  height: 21px;
  left: 190.24px;
  bottom: 22px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17.0545px;
  line-height: 21px;
  /* identical to box height */

  color: #4a4a4a;
`;

const Point_box = styled.div`
  position: relative;
  width: 113px;
  height: 26px;
  left: 170px;
  bottom: 2px;

  background: #ebebeb;
  border-radius: 5px;
`;

const Point_text = styled.div`
  position: relative;
  width: 50px;
  height: 12px;
  left: 20px;
  top: 7px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #000000;
`;

const Point_number = styled.div`
  position: relative;
  width: 28px;
  height: 17px;
  left: 70px;
  bottom: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #149624;
`;

const Okay_box = styled.button`
  position: relative;
  width: 158.3px;
  height: 42.6px;
  left: 100px;
  top: 20px;
  border: none;

  background: #149624;
  border-radius: 6px;
`;

const Okay_text = styled.div`
  position: relative;
  width: 40px;
  height: 21px;
  top: 1px;
  left: 50px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;

const Point2 = () => {
  return (
    <Container>
      <Icon>
        <img src={`${process.env.PUBLIC_URL}/images/big_point.svg`} />
      </Icon>
      <Text_number>+10P</Text_number>
      <Text>적립되었습니다.</Text>
      <Point_box>
        <Point_text>내 포인트</Point_text>
        <Point_number>50P</Point_number>
      </Point_box>
      <Okay_box>
        <Okay_text>확인</Okay_text>
      </Okay_box>
    </Container>
  );
};

export default Point2;
