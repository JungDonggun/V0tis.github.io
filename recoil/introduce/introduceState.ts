import { atom, selector } from "recoil";

export const introduceState = atom<IntroduceRecoil>({
  key: 'introduceState',
  default: {
    selectedIntroduceList: []
  }
});

export const introduceStateReducer = selector<IntroduceRecoil>({
  key: 'introduceStateReducer',
  get: ({ get }) => get(introduceState),
  set: ({ set }, newValue) => set(introduceState, newValue)
});
