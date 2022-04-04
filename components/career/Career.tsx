import React from 'react';
import styled from "@emotion/styled";
import { Typography } from "antd";
import CareerItem from "./CareerItem";

const { Title } = Typography;

const ITEMS: Career[] = [
  {
    company: 'SIZL',
    hierarchy: 'Software Engineer',
    tenure: '2020년 2월 - 현재',
    introduce: '사내에서 필요한 프로젝트(Front-end, Back-end)와 모듈, 커넥터 등 다양한 개발을 진행하고 있습니다.',
    logo: '',
    colors: {
      background: 'rgb(151, 27, 253)',
      fontColor: 'white'
    }
  },
  {
    company: '마에스트로네트웍스',
    hierarchy: 'Software Engineer',
    tenure: '2018년 9월 - 2020년 2월',
    introduce: '인텔리전스 기반 악성코드 탐지 솔루션 기획 및 개발, 다수 대기업, 공공기관, 국가사업의 서비스를 개발 하였습니다.',
    logo: '',
    colors: {
      background: '#1F2122',
      fontColor: 'white'
    }
  },
];

const Container = styled.div(() => ({
  width: 900,
}));

const Career: React.FunctionComponent = () => {
  return (
      <Container>
        <Title>경력</Title>
        {
          ITEMS.map((item) => <CareerItem data={item} key={item.company}/>)
        }
      </Container>
  );
};

export default Career;
