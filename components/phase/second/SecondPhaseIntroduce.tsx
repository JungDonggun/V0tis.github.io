import React from 'react';
import { INTRODUCE_PHASE_TEXT } from "../../../common/css";
import introduceText from "../../../common/introduceText";
import { Typography } from "antd";
import IntroduceButtonManager from "../../introduce/IntroduceButtonManager";
import FadeIn from "react-fade-in";

const { Title } = Typography;

const SecondPhaseIntroduce: React.FunctionComponent<IntroducePhaseCallback> = ({ onNext }) => {
  return (
      <div>
        <FadeIn>
          <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.askJoke}</Title>
          <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.ask}</Title>
          <IntroduceButtonManager/>
        </FadeIn>
      </div>
  );
};

export default SecondPhaseIntroduce;
