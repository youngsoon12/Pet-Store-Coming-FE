import { useState, useCallback } from 'react';

function useModal() {
  const [modalConfig, setModalConfig] = useState({
    isVisible: false,
    title: '',
    description: '',
    actions: [],
  });

  const showModal = useCallback((config) => {
    setModalConfig({
      isVisible: true,
      ...config,
    });
  }, []);

  const hideModal = useCallback(() => {
    setModalConfig((prevModal) => ({ ...prevModal, isVisible: false }));
  }, []);

  return { modalConfig, showModal, hideModal };
}

export default useModal;
