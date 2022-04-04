import { atom } from "recoil";

export const introduceListState = atom<IntroduceButtonItem[]>({
  key: 'selectedIntroduceList',
  default: []
});

