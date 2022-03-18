import React from 'react';
import { Button } from 'antd';
import { useRecoilValue } from "recoil";
import { callbackManageState } from "../../recoil/callback/callbackManage";

interface Props {
  item: IntroduceButtonItem;
  width?: number;
  isNotGhost?: boolean;
}

const BUTTON_STYLE = {
  height: 50
};

const IntroduceButton: React.FunctionComponent<Props> = ({ item, width, isNotGhost }) => {
  const callbacks = useRecoilValue<RecoilCallback>(callbackManageState);

  const onClickHandler = React.useCallback(() => {
    callbacks.introduce?.onClickButtonHandler(item);
  }, [ item, callbacks.introduce ]);

  return (
      <Button type="primary" ghost={!isNotGhost} style={{ ...BUTTON_STYLE, width }} onClick={onClickHandler}>
        {item.name}
      </Button>
  );
};

export default React.memo(IntroduceButton);
