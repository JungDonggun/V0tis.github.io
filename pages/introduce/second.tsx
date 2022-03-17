import React from 'react';
import { Row } from "antd";
import PhaseManager from "../../containers/phase/PhaseManager";

const SecondIntroducePage: React.FunctionComponent = () => {
  return (
      <Row style={{ height: '100%' }}>
        <PhaseManager phaseNumber={2}/>
      </Row>
  );
};

export default SecondIntroducePage;
