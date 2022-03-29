import React from 'react';
import { Button } from 'antd';
import { useRecoilValue } from "recoil";
import { callbackManageState } from "../../recoil/callback/callbackManage";
import { introduceStateReducer } from "../../recoil/introduce/introduceState";

interface Props {
  item: IntroduceButtonItem;
  width?: number;
}

const BUTTON_STYLE = {
  height: 50
};

const IntroduceButton: React.FunctionComponent<Props> = ({ item, width, }) => {
  const introduce = useRecoilValue(introduceStateReducer);
  const callbacks = useRecoilValue<CallbackRecoil>(callbackManageState);

  const onClickHandler = React.useCallback(() => {
    callbacks.introduce?.onClickButtonHandler(item);
  }, [ item, callbacks.introduce ]);


  const isGhost = React.useMemo(() => {
    const find = introduce.selectedIntroduceList.find(({ role }) => role === item.role);

    return !(!!find);
  }, [ introduce ]);

  return (
      <Button type="primary" ghost={isGhost} style={{ ...BUTTON_STYLE, width }} onClick={onClickHandler}>
        {item.name}
      </Button>
  );
};

export default React.memo(IntroduceButton);
