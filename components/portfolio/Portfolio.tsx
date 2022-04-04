import React from 'react';
import styled from "@emotion/styled";


const Container = styled.div(() => ({
  width: 900,
}));

const Portfolio: React.FunctionComponent = () => {
  return (
      <Container>
        i am Portfolio
      </Container>
  );
};

export default Portfolio;
