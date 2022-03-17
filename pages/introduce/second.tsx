import React from 'react';
import { Row } from "antd";
import PhaseManagerContainer from "../../containers/phase/PhaseManagerContainer";

const SecondIntroducePage: React.FunctionComponent = () => {
  return (
      <Row style={{ height: '100%' }}>
        <PhaseManagerContainer phaseNumber={2}/>
      </Row>
  );
};

export default SecondIntroducePage;
