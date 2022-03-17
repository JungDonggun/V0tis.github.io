import React from 'react';
import { INTRODUCE_PHASE_TEXT } from "../../../common/css";
import introduceText from "../../../common/introduceText";
import { Typography } from "antd";

const { Title } = Typography;

const SecondPhaseIntroduce: React.FunctionComponent<IntroducePhaseCallback> = ({ onNext }) => {
  return (
      <div>
        <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.ask}</Title>
      </div>
  );
};

export default SecondPhaseIntroduce;
