interface CallbackRecoil {
  introduce: {
    onClickButtonHandler?: (item: IntroduceButtonItem) => void
  };
}

interface IntroduceRecoil {
  selectedIntroduceList: IntroduceButtonItem[];
}
