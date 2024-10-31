import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isActhenticatedState = atom({
  key: 'isActhenticatedState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
