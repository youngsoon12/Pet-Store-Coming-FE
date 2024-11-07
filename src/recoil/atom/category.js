import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isMainCategoryInfoState = atom({
  key: 'isMainCategoryInfoState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const isSubCategoryInfoState = atom({
  key: 'isSubCategoryInfoState',
  default: null,
  effects_UNSTABLE: [persistAtom],

});

