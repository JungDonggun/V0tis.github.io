import React from 'react';
import { INTRODUCE_PHASE_TEXT } from "../../../common/css";
import introduceText from "../../../common/introduceText";
import { Row, Typography } from "antd";
import IntroduceButtonManager from "../../introduce/IntroduceButtonManager";
import FadeIn from "react-fade-in";
import SecondPhaseIntroduceContent from "./contents/SecondPhaseIntroduceContent";
import { SpotlightTour } from 'react-spotlight-tour';
import Spotlight from 'react-spotlight-tour/spotlight';
import { useSetRecoilState } from "recoil";
import { callbackManageReducer } from "../../../recoil/callback/callbackManage";

const { Title } = Typography;

const SecondPhaseIntroduce: React.FunctionComponent<IntroducePhaseCallback> = ({ onNext }) => {
  const setCallback = useSetRecoilState(callbackManageReducer);
  const [ spotlight, setSpotlight ] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setSpotlight(true);
    }, 30000);

    setCallback({ introduce: { onClickButtonHandler } });
  }, []);

  const onClickButtonHandler = React.useCallback((type: IntroduceButtonItem) => {
    console.log('type', type);

    if (spotlight) {
      setSpotlight(false);
    }
  }, [ spotlight ]);

  return (
      <Row>
        <FadeIn>
          <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.askJoke}</Title>
          <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.ask}</Title>
          <SpotlightTour open={spotlight} onClose={() => setSpotlight(false)} Spotlight={Spotlight}>
            <IntroduceButtonManager/>
          </SpotlightTour>
        </FadeIn>
        <SecondPhaseIntroduceContent/>
      </Row>
  );
};

export default SecondPhaseIntroduce;
