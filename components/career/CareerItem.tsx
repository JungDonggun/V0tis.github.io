import React from 'react';
import { Typography } from "antd";
import styled from "@emotion/styled";

interface Props {
  data: CareerItem;
}

const Container = styled.div(() => ({
  marginBottom: 48
}));

const { Title, Text } = Typography;

const marginZero = {
  margin: 0
};

const CareerItem: React.FunctionComponent<Props> = ({ data }) => {

  console.log('data', data);

  return (
      <Container>
        <Title level={3} style={marginZero}>{data.hierarchy}</Title>
        <Title level={4} style={marginZero}>{data.company}</Title>
        <Title level={4} style={marginZero}>{data.tenure}</Title>
        <Title level={4} style={marginZero}>{data.introduce}</Title>
      </Container>
  );
};

export default CareerItem;
