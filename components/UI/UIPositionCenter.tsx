import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactElement;
}

const Container = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const UIPositionCenter: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default React.memo(UIPositionCenter);
