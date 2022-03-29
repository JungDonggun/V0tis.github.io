import React from 'react';
import styled from "@emotion/styled";
import { Typography } from 'antd';
import { COLORS } from "../../common/colors";

const { Title, Text } = Typography;

const Container = styled.div(() => ({
  width: 900,
}));

const titleStyles = {
  margin: 8
};

const About: React.FunctionComponent = () => {
  return (
      <Container>
        <Title>반가워요 🙌 <Text style={{ color: COLORS.callToAction }}>정동건</Text>이라고 해요!</Title>
        <Title level={4} style={titleStyles}>
          현재는 <Text strong>프론트엔드</Text> 개발을 메인으로 하고 있고 프로젝트에 따라서 <Text strong>백엔드</Text> 개발도 하고 있습니다.
        </Title>
        <Title level={4} style={titleStyles}>
          향 후 누구에게나 인정받는 개발자가 되기 위해서 열심히 연구와 업무를 진행 하고 있습니다.
        </Title>
        <Title level={4} style={titleStyles}>
          잘 부탁드립니다.
        </Title>
        <Title>어떨때 보람을 느끼세요?</Title>
        <Title level={4} style={titleStyles}>
          새로운 프로젝트를 진행하여 주도적으로 구조를 구성 할 때
        </Title>
        <Title level={4} style={titleStyles}>
          개발 한 프로젝트가 고객들이 만족 할 때
        </Title>
        <Title level={4} style={titleStyles}>
          프로젝트 기획을 이해하고 그것을 바탕으로 개발을 진행 할 때
        </Title>
        <Title>개발에 있어 가장 중요하게 생각하는 것이 있다면?</Title>
        <Title level={4} style={titleStyles}>
          기획을 이해하고 개발하는 것이 가장 중요하다고 생각합니다.
        </Title>
        <Title level={4} style={titleStyles}>
          기획을 모르는 상태로 개발을 하게 된다면 절대로 퀄리티 있는 프로젝트가 나올 수가 없습니다.
        </Title>
        <Title>무엇보다도 저는 반복적이고 기계적인 일을 굉장히 싫어해요</Title>
        <Title style={{ margin: 0 }}>😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱</Title>
      </Container>
  );
};

export default About;
