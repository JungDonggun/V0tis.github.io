import { atom, selector } from 'recoil';

export const callbackManageState = atom<CallbackRecoil>({
  key: 'callbackManage',
  default: {
    introduce: {}
  }
});

export const callbackManageReducer = selector<CallbackRecoil>({
  key: 'callbackManageReducer',
  get: ({ get }) => get(callbackManageState),
  set: ({ set }, newValue) => set(callbackManageState, newValue)
});
