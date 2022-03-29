import React from 'react';
import FirstPhaseIntroduce from "../../components/phase/first/FirstPhaseIntroduce";
import { Col, Row } from "antd";
import SecondPhaseIntroduce from "../../components/phase/second/SecondPhaseIntroduce";
import { useRouter } from 'next/router';
import BlueLineBar from "../../components/bar/BlueLineBar";

interface Props {
  phaseNumber: number;
}

const PhaseManager: React.FunctionComponent<Props> = ({ phaseNumber }) => {
  const router = useRouter();

  const onNextPhase = React.useCallback(async (url: string) => {
    await router.push(`introduce/${url}`);
  }, []);

  const phase = React.useMemo(() => {
    if (phaseNumber === 1) {
      return <FirstPhaseIntroduce onNext={onNextPhase}/>;
    } else if (phaseNumber === 2) {
      return <SecondPhaseIntroduce onNext={onNextPhase}/>;
    }
  }, [ phaseNumber ]);

  return (
      <React.Fragment>
        <BlueLineBar/>
        <Col sm={23}>
          <Row justify={'center'} align={'middle'} style={{ height: '100%', }}>
            <Col span={20}>
              {phase}
            </Col>
          </Row>
        </Col>
      </React.Fragment>
  );
};

export default PhaseManager;
