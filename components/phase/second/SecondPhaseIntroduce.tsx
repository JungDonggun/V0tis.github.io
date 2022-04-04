import React from 'react';
import { INTRODUCE_PHASE_TEXT } from "../../../common/css";
import introduceText from "../../../common/introduceText";
import { Typography } from "antd";
import IntroduceButtonManager from "../../introduce/IntroduceButtonManager";
import FadeIn from "react-fade-in";
import SecondPhaseIntroduceContent from "./contents/SecondPhaseIntroduceContent";
import { SpotlightTour } from 'react-spotlight-tour';
import Spotlight from 'react-spotlight-tour/spotlight';
import { useRecoilState, useSetRecoilState } from "recoil";
import { callbackManageReducer } from "../../../recoil/callback/callbackManage";
import { introduceListState, } from "../../../recoil/introduce/introduceState";
import UIFlexView from "../../UI/UIFlexView";

const { Title } = Typography;

const SecondPhaseIntroduce: React.FunctionComponent<IntroducePhaseCallback> = ({ onNext }) => {
  const [ introduce, setIntroduce ] = useRecoilState(introduceListState);
  const setCallback = useSetRecoilState(callbackManageReducer);
  const [ spotlight, setSpotlight ] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    // if (introduce.length === 0) {
    //   setTimeout(() => {
    //     setSpotlight(true);
    //   }, 2000);
    // }

    setCallback({ introduce: { onClickButtonHandler } });
  }, [ introduce ]);

  const onClickButtonHandler = React.useCallback((type: IntroduceButtonItem) => {
    const copySelectedIntroduceList = [ ...introduce ];
    const findIntroduceList = copySelectedIntroduceList.findIndex(({ role }) => role === type.role);

    if (findIntroduceList === -1) {
      copySelectedIntroduceList.unshift(type);
    } else {
      copySelectedIntroduceList.splice(findIntroduceList, 1);
    }

    setIntroduce(copySelectedIntroduceList);
    if (spotlight) {
      setSpotlight(false);
    }
  }, [ spotlight, introduce ]);

  return (
      <UIFlexView>
        <div>
          <FadeIn>
            <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.askJoke}</Title>
            <Title style={INTRODUCE_PHASE_TEXT}>{introduceText.ask}</Title>
            <SpotlightTour open={spotlight} onClose={() => setSpotlight(false)} Spotlight={Spotlight}>
              <IntroduceButtonManager/>
            </SpotlightTour>
          </FadeIn>
        </div>
        <div style={{ marginLeft: '5%' }}>
          <SecondPhaseIntroduceContent/>
        </div>
      </UIFlexView>
  );
};

export default SecondPhaseIntroduce;
