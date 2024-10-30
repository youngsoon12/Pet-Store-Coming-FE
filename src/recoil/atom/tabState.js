import { atom } from 'recoil';

export const activeTabState = atom({
  key: 'activeTabState',
  default: 'home', // 기본 탭을 'home'으로 설정
});
