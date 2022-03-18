import React from 'react';
import { Button } from 'antd';

interface Props {
  text: string;
  width?: number;
  isNotGhost?: boolean;
}

const BUTTON_STYLE = {
  height: 50
};

const IntroduceButton: React.FunctionComponent<Props> = ({ text, width, isNotGhost }) => {
  return (
      <Button type="primary" ghost={!isNotGhost} style={{ ...BUTTON_STYLE, width }}>
        {text}
      </Button>
  );
};

export default React.memo(IntroduceButton);
