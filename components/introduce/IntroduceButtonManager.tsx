import React from 'react';
import IntroduceButton from "../../components/introduce/IntroduceButton";
import { Space, Typography } from "antd";
import { INTRODUCE_PHASE_TEXT } from "../../common/css";
import FadeIn from "react-fade-in";
import introduceList from "../../common/introduceList";
import { useSpotlight } from 'react-spotlight-tour';

const { Title } = Typography;

interface Props {
  onClick: (type: string) => void;
}

const LIST = introduceList;


const IntroduceButtonManager: React.FunctionComponent<Props> = ({ onClick }) => {
  const spotlightRef = useSpotlight('제가 궁금하신 거 아니었어요?!\n궁금한 것을 선택해 주세요!');

  return (
      <div>
        <div>
          <div ref={spotlightRef}>
            <Space>
              <IntroduceButton text={LIST[0].name}/>
              <IntroduceButton text={LIST[1].name}/>
              <IntroduceButton text={LIST[2].name}/>
            </Space>
          </div>
        </div>
        <div style={{ marginTop: 24 }}>
          <FadeIn delay={1400}>
            <Title style={INTRODUCE_PHASE_TEXT}>그리고...</Title>
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={1800}>
            <Space>
              <IntroduceButton width={503} text={LIST[3].name}/>
            </Space>
          </FadeIn>
        </div>
        <div style={{ marginTop: 24 }}>
          <FadeIn delay={7000}>
            <Title style={INTRODUCE_PHASE_TEXT}>그리고...</Title>
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={13000}>
            <Title style={INTRODUCE_PHASE_TEXT}>아.. 이건 비밀이니까 다음에 알려줄게요 :p</Title>
          </FadeIn>
        </div>
      </div>
  );
};

export default IntroduceButtonManager;
