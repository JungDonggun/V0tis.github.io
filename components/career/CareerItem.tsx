import React, { CSSProperties } from 'react';
import { Typography } from "antd";
import styled from "@emotion/styled";

interface Props {
  data: Career;
}

const Container = styled.div<CSSProperties>(({ background }) => ({
  background,
  transform: 'rotate(-11deg)',
  height: 300,
  alignItems: 'center',
}));

const { Title, Text } = Typography;

const marginZero = {
  margin: 0
};

const CareerItem: React.FunctionComponent<Props> = ({ data }) => {

  console.log('data', data);

  return (
      <Container background={data.colors.background}>
        {/*<Title level={3} style={marginZero}>{data.hierarchy}</Title>*/}
        <Title style={{ ...marginZero, color: data.colors.fontColor }}>{data.company}</Title>
        {/*<Title level={4} style={marginZero}>{data.tenure}</Title>*/}
        {/*<Title level={4} style={marginZero}>{data.introduce}</Title>*/}
      </Container>
  );
};

export default CareerItem;
