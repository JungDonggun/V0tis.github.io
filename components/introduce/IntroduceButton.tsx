import React from 'react';
import { Button } from 'antd';
import { useRecoilValue } from "recoil";
import { callbackManageState } from "../../recoil/callback/callbackManage";
import { introduceListState } from "../../recoil/introduce/introduceState";

// import portfolio from '../../public/pdf/portfolio.pdf'

interface Props {
  item: IntroduceButtonItem;
  width?: number;
}

const BUTTON_STYLE = {
  height: 50
};

const IntroduceButton: React.FunctionComponent<Props> = ({ item, width, }) => {
  const introduce = useRecoilValue(introduceListState);
  const callbacks = useRecoilValue<CallbackRecoil>(callbackManageState);

  const onClickHandler = React.useCallback(() => {
    if (item.role === 'ROLE_002') {
      window.open('/pdf/portfolio.pdf');
      findUnSelectedRole();
    } else if (item.role === "ROLE_004") {
      window.location.href = `mailto:donggun.dev@gmail.com`;
      findUnSelectedRole();
    } else {
      callbacks.introduce?.onClickButtonHandler(item);
    }
  }, [ item, callbacks.introduce ]);

  const findUnSelectedRole = React.useCallback(() => {
    const find = introduce.find(({ role }) => role === item.role);

    !find && callbacks.introduce?.onClickButtonHandler(item);
  }, [ item, callbacks.introduce ]);


  const isGhost = React.useMemo(() => {
    const find = introduce.find(({ role }) => role === item.role);

    return !(!!find);
  }, [ introduce ]);

  return (
      <Button type="primary" ghost={isGhost} style={{ ...BUTTON_STYLE, width }} onClick={onClickHandler}>
        {item.name}
      </Button>
  );
};

export default React.memo(IntroduceButton);
