import React from 'react';
import { Button, Col, Space } from 'antd';
import introduceText from "../../../common/introduceText";
import FadeIn from 'react-fade-in';

const BUTTON_STYLE = {
  height: 50
};

const FirstPhaseIntroduceButton: React.FunctionComponent<IntroducePhaseButtonCallback> = ({ onClose }) => {
  const [ fakeNo, setFakeNo ] = React.useState<boolean>(false);
  const [ hovered, setHovered ] = React.useState<number>(0);

  const noButtonHandler = () => {
    if (fakeNo) {
      onClose();
    }
  };

  const onStylesFromNoButton = React.useMemo(() => {
    if (!fakeNo) {
      return {
        ...BUTTON_STYLE,
        marginTop: hovered === 1 ? 150 : 0,
        marginLeft: hovered === 2 ? 250 : 0
      };
    } else {
      return BUTTON_STYLE;
    }
  }, [ fakeNo, hovered ]);

  const buttonHoverHandler = React.useCallback(() => {
    if (hovered < 2) {
      setHovered(hovered + 1);
    } else {
      setFakeNo(true);
    }
  }, [ hovered ]);

  return (
      <FadeIn delay={150}>
        <Col span={24}>
          <Space style={{ height: 200, }} align={'start'}>
            <Button type="primary" onClick={onClose} style={BUTTON_STYLE}>{introduceText.yes}</Button>
            <Button type="primary" onClick={noButtonHandler}
                    style={onStylesFromNoButton}
                    onMouseEnter={buttonHoverHandler}
            >{fakeNo ? introduceText.fakeNo : introduceText.no}</Button>
          </Space>
        </Col>
      </FadeIn>
  );
};

export default React.memo(FirstPhaseIntroduceButton);
