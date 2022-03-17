import React from 'react';
import Typing from 'react-typing-animation';
import introduceText from "../../../common/introduceText";
import FirstPhaseIntroduceButton from "./FirstPhaseIntroduceButton";
import { Typography } from 'antd';
import { INTRODUCE_PHASE_TEXT } from "../../../common/css";

const { Title } = Typography;


const FirstPhaseIntroduce: React.FunctionComponent<IntroducePhaseCallback> = ({ onNext }) => {
  const [ isFinish, setIsFinish ] = React.useState(false);

  const onCloseButton = React.useCallback(() => {
    onNext('second');
  }, [ onNext ]);

  return (
      <div style={{ height: '100%' }}>
        <Typing onFinishedTyping={() => setIsFinish(true)}>
          <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.hello}</Title>
          <Typing.Delay ms={400}/>
          <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.niceToMeetYou}</Title>
          <Typing.Backspace count={introduceText.hello.length + introduceText.niceToMeetYou.length} delay={1000}/>
          <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.myName}</Title>
          <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.wdyw}</Title>
        </Typing>
        {
          isFinish && <FirstPhaseIntroduceButton onClose={onCloseButton}/>
        }
      </div>
  );
};

export default FirstPhaseIntroduce;
