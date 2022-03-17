import React from 'react';
import { Button } from 'antd';

interface Props {
  text: string;
  isNotGhost?: boolean;
}

const BUTTON_STYLE = {
  height: 50
};

const IntroduceButton: React.FunctionComponent<Props> = ({ text, isNotGhost }) => {
  return (
      <Button type="primary" ghost={!isNotGhost} style={BUTTON_STYLE}>
        {text}
      </Button>
  );
};

export default React.memo(IntroduceButton);
