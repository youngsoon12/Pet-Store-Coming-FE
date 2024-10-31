/**
 * @description 모달 설정 및 활성화 / 비활성화 기능을 제공하는 커스텀 훅(Custom Hook)
 * 모달의 상태를 관리하고, 모달을 열고 닫는 함수를 제공한다.
 * @module hooks/modal/useModal.js
 */

import { useCallback } from 'react';

import { modalState } from '@recoil/atom/modalState';
import { useRecoilState } from 'recoil';

export default function useModal() {
  // 모달(Modal) 설정 state 변수
  const [modalConfig, setModalConfig] = useRecoilState(modalState);

  // 모달(Modal) 활성화 Callback 함수
  const showModal = useCallback(
    (config) => {
      setModalConfig({
        isVisible: true,
        ...config,
      });
    },
    [setModalConfig]
  );

  // 모달(Modal) 비활성화 Callback 함수
  const hideModal = useCallback(() => {
    setModalConfig((prevModal) => ({ ...prevModal, isVisible: false }));
  }, [setModalConfig]);

  return { modalConfig, showModal, hideModal };
}
