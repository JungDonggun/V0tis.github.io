import React from 'react';
import { INTRODUCE_PHASE_TEXT } from "../../../common/css";
import introduceText from "../../../common/introduceText";
import { Row, Typography } from "antd";
import IntroduceButtonManager from "../../introduce/IntroduceButtonManager";
import FadeIn from "react-fade-in";
import SecondPhaseIntroduceContent from "./contents/SecondPhaseIntroduceContent";
import { SpotlightTour } from 'react-spotlight-tour';
import Spotlight from 'react-spotlight-tour/spotlight';

const { Title } = Typography;

const SecondPhaseIntroduce: React.FunctionComponent<IntroducePhaseCallback> = ({ onNext }) => {
  const [ spotlight, setSpotlight ] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setSpotlight(true);
    }, 30000);
  }, []);

  const onClickButtonHandler = React.useCallback((type: string) => {
    console.log('type', type);

    if (spotlight) {
      setSpotlight(true);
    }
  }, [ spotlight ]);

  return (
      <Row>
        <FadeIn>
          <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.askJoke}</Title>
          <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.ask}</Title>
          <SpotlightTour open={spotlight} onClose={() => setSpotlight(false)} Spotlight={Spotlight}>
            <IntroduceButtonManager onClick={onClickButtonHandler}/>
          </SpotlightTour>
        </FadeIn>
        <SecondPhaseIntroduceContent/>
      </Row>
  );
};

export default SecondPhaseIntroduce;
