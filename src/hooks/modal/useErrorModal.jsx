import useModal from './useModal';

export default function useErrorModal() {
  const { showModal, hideModal } = useModal();

  const showErrorModal = (message) => {
    showModal({
      title: '오류 발생',
      description: <p>{message}</p>,
      actions: [{ title: '확인', onClick: hideModal }],
    });
  };

  return { showErrorModal };
}
