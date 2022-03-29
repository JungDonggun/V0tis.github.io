import React, { CSSProperties } from 'react';
import styled from "@emotion/styled";

interface Props {
  children: React.ReactChild
      | React.ReactChild[];
  styles?: CSSProperties;
}

const Container = styled.div(() => ({
  display: 'flex'
}));

const UIFlexView: React.FunctionComponent<Props> = ({ children, styles }) => {
  return (
      <Container style={styles}>
        {children}
      </Container>
  );
};

export default UIFlexView;
