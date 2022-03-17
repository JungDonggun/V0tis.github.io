import React from 'react';
import PhaseManager from "../../containers/phase/PhaseManager";
import { Row } from "antd";

const IndexPage: React.FunctionComponent = () => {
  return (
      <Row style={{ height: '100%' }}>
        <PhaseManager phaseNumber={1}/>
      </Row>
  );
};

export default IndexPage;
