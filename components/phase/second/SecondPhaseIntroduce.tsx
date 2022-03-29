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
import { introduceStateReducer } from "../../../recoil/introduce/introduceState";
import UIFlexView from "../../UI/UIFlexView";

const { Title } = Typography;

const SecondPhaseIntroduce: React.FunctionComponent<IntroducePhaseCallback> = ({ onNext }) => {
  const [ introduce, setIntroduce ] = useRecoilState(introduceStateReducer);
  const setCallback = useSetRecoilState(callbackManageReducer);
  const [ spotlight, setSpotlight ] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    // setTimeout(() => {
    //   setSpotlight(true);
    // }, 30000);

    setCallback({ introduce: { onClickButtonHandler } });
  }, []);

  const onClickButtonHandler = React.useCallback((type: IntroduceButtonItem) => {
    const copySelectedIntroduceList = [ ...introduce.selectedIntroduceList ];
    const findIntroduceList = copySelectedIntroduceList.find(({ role }) => role === type.role);

    console.log({
      copySelectedIntroduceList,
      findIntroduceList
    });

    if (!findIntroduceList) {
      copySelectedIntroduceList.push(type);

      console.log('copySelectedIntroduceList', copySelectedIntroduceList);

      setIntroduce({ selectedIntroduceList: copySelectedIntroduceList });
    }

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
        <SecondPhaseIntroduceContent/>
      </UIFlexView>
  );
};

export default SecondPhaseIntroduce;
