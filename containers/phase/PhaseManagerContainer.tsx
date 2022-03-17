import React from 'react';
import FirstPhaseIntroduce from "../../components/phase/First/FirstPhaseIntroduce";
import { Col, Row } from "antd";

const PhaseManagerContainer: React.FunctionComponent = () => {
  const [ phaseNumber, setPhaseNumber ] = React.useState<number>(1);

  const onNextPhase = React.useCallback((phase: number) => {
    // setPhaseNumber(phaseNumber + 1);
  }, [ phaseNumber ]);

  return (
      <Row justify={'center'} align={'middle'} style={{ height: '100%', }}>
        <Col span={20}>
          <FirstPhaseIntroduce onNext={onNextPhase}/>
        </Col>
      </Row>
  );
};

export default PhaseManagerContainer;
