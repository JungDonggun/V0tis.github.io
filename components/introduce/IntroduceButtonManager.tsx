import React from 'react';
import IntroduceButton from "../../components/introduce/IntroduceButton";
import { Space, Typography } from "antd";
import { INTRODUCE_PHASE_TEXT } from "../../common/css";
import FadeIn from "react-fade-in";

const { Title } = Typography;

const IntroduceButtonManager: React.FunctionComponent = () => {
  return (
      <div>
        <div>
          <Space>
            <IntroduceButton text={'당신은 뭐하는 사람인가요?'}/>
            <IntroduceButton text={'포토폴리오를 보고 싶어요'}/>
            <IntroduceButton text={'경력을 보고 싶어요'}/>
          </Space>
        </div>
        <div style={{ marginTop: 24 }}>
          <FadeIn delay={1400}>
            <Title style={INTRODUCE_PHASE_TEXT}>그리고...</Title>
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={1800}>
            <Space>
              <IntroduceButton text={'연락처를 알고 싶어요'}/>
            </Space>
          </FadeIn>
        </div>
        <div style={{ marginTop: 24 }}>
          <FadeIn delay={5000}>
            <Title style={INTRODUCE_PHASE_TEXT}>그리고...</Title>
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={8000}>
            <Title style={INTRODUCE_PHASE_TEXT}>아.. 이건 비밀이니까 다음에 알려줄게요 :p</Title>
          </FadeIn>
        </div>
      </div>
  );
};

export default IntroduceButtonManager;
