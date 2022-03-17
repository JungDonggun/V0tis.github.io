import React from 'react';
import PhaseManagerContainer from "../../containers/phase/PhaseManagerContainer";
import { Row } from "antd";

const IndexPage: React.FunctionComponent = () => {
  return (
      <Row style={{ height: '100%' }}>
        <PhaseManagerContainer phaseNumber={1}/>
      </Row>
  );
};

export default IndexPage;
