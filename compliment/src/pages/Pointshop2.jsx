import React from "react";
import styled from "styled-components";

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
  width: 200px;
  height: 24px;
  left: 150px;

  top: 30px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #3b6ae3;
`;

const Point_box = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 345px;
  height: 90px;
  left: 15px;
  top: 60px;

  background: #ffffff;
  border: 1px solid #3b6ae3;
  border-radius: 13px;
`;

const Point_text = styled.div`
  position: relative;
  width: 70px;
  height: 15px;
  left: 26px;
  top: 20px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #3b6ae3;
`;

const Point_icon = styled.div`
  position: relative;
  width: 31px;
  height: 31px;
  left: 23px;
  top: 43px;

  position: relative;
  width: 31px;
  height: 31px;
  left: 23px;
  top: 43px;

  position: relative;
  width: 24.96px;
  height: 24.96px;
  left: 25.82px;
  top: 46.22px;

  position: relative;
  width: 11px;
  height: 19px;
  left: 25px;
  top: 30px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16.1039px;
  line-height: 19px;

  color: #ffb905;
`;

const Point_number = styled.div`
  position: relative;
  width: 54px;
  height: 24px;
  left: 65px;
  top: 12px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #3b6ae3;
`;

const Detail = styled.div`
  position: relative;
  width: 200px;
  height: 12px;
  left: 29px;
  top: 100px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #3b6ae3;
`;

const Frame_gorae = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 185px;
  height: 227px;
  left: 22px;
  top: 120px;

  background: linear-gradient(180deg, #ffffff 0%, #69abff 100%);
  border: 1px solid #3b6ae3;
  border-radius: 14px;
`;

const Image_gorae = styled.div`
  position: relative;
  width: 140px;
  height: 197.98px;
  left: 1px;
  top: 35px;
`;

const Text_gorae = styled.div`
  position: relative;
  width: 40px;
  height: 22px;
  left: 226px;
  bottom: 60px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #3b6ae3;
`;

const Box_sub = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 44px;
  height: 20px;
  left: 270px;
  top: 170px;

  border: 0.7px solid #149624;
  border-radius: 16px;
`;

const Text_sub = styled.div`
  position: relative;
  width: 40px;
  height: 10px;
  left: 4px;
  top: 3px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  /* identical to box height */

  color: #149624;
`;

const Gorae_examplebox = styled.button`
  position: relative;
  width: 125px;
  height: 30px;
  left: 226px;
  bottom: 60px;

  background: #eeeeee;
  border: none;
`;

const Gorae_exampletext = styled.div`
  position: relative;
  width: 50px;
  height: 12px;
  left: 35px;
  top: 1px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;

  color: #6c6c6c;
`;

const Gorae_stylebox = styled.button`
  position: relative;
  width: 125px;
  height: 30px;
  left: 100px;
  bottom: 20px;

  background: #3b6ae3;
  border: none;
`;

const Gorae_styletext = styled.div`
  position: relative;
  width: 50px;
  height: 12px;
  left: 35px;
  top: 1px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #fcfcfc;
`;

const Frame_tree = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 185px;
  height: 227px;
  left: 22px;
  top: 60px;

  background: linear-gradient(180deg, #ffffff 0%, #d1ff4d 100%);
  border: 1px solid #d5d5d5;
  border-radius: 14px;
`;

const Image_tree = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 185px;
  height: 227px;
  right: 1px;
  bottom: 2px;

  border: 1px solid #d5d5d5;
  border-radius: 14px;
`;

const Text_tree = styled.div`
  position: relative;
  width: 50px;
  height: 22px;
  left: 226px;
  bottom: 110px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #39b74d;
`;

const Tree_examplebox = styled.button`
  position: relative;
  width: 125px;
  height: 30px;
  left: 226px;
  bottom: 90px;

  background: #eeeeee;
  border: none;
`;

const Tree_exampletext = styled.div`
  position: relative;
  width: 50px;
  height: 12px;
  left: 35px;
  top: 1px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;

  color: #6c6c6c;
`;

const Tree_stylebox = styled.button`
  position: relative;
  width: 125px;
  height: 30px;
  left: 100px;
  bottom: 50px;

  background: #39b74d;
  border: none;
`;

const Tree_styletext = styled.div`
  position: relative;
  width: 50px;
  height: 12px;
  left: 35px;
  top: 1px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #fcfcfc;
`;

const Pointshop2 = () => {
  return (
    <Container>
      <Title>포인트샵</Title>
      <Point_box>
        <Point_text>보유 포인트</Point_text>
        <Point_icon>
          <img src={`${process.env.PUBLIC_URL}/images/Group 2217 (2).svg`} />
        </Point_icon>
        <Point_number>200P</Point_number>
      </Point_box>
      <Detail>열심히 모은 포인트로 테마를 구매해보세요!</Detail>
      <Frame_gorae>
        <img src={`${process.env.PUBLIC_URL}/images/image_gorae.svg`} />
        <Image_gorae>
          <img src={`${process.env.PUBLIC_URL}/images/gorae_frame.svg`} />
        </Image_gorae>
      </Frame_gorae>
      <Text_gorae>고래</Text_gorae>
      <Box_sub>
        <Text_sub>적용 중</Text_sub>
      </Box_sub>
      <Gorae_examplebox>
        <Gorae_exampletext>미리보기</Gorae_exampletext>
      </Gorae_examplebox>
      <Gorae_stylebox>
        <Gorae_styletext>적용하기</Gorae_styletext>
      </Gorae_stylebox>
      <Frame_tree>
        <Image_tree>
          <img src={`${process.env.PUBLIC_URL}/images/image_tree.svg`} />
        </Image_tree>
      </Frame_tree>
      <Text_tree>나무</Text_tree>
      <Tree_examplebox>
        <Tree_exampletext>미리보기</Tree_exampletext>
      </Tree_examplebox>
      <Tree_stylebox>
        <Tree_styletext>적용하기</Tree_styletext>
      </Tree_stylebox>
    </Container>
  );
};

export default Pointshop2;
