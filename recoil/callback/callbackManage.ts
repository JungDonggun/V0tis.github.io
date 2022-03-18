import { atom, selector } from 'recoil';

export const callbackManageState = atom({
  key: 'callbackManage',
  default: {
    introduce: {}
  }
});

export const callbackManageReducer = selector({
  key: 'callbackManageReducer',
  get: ({ get }) => get(callbackManageState),
  set: ({ set }, newValue) => set(callbackManageState, newValue)
});
