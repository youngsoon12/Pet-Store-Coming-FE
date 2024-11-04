import useModal from './useModal';
import useAuth from '@hooks/auth/useAuth';

export default function useLogoutModal() {
  const { showModal, hideModal } = useModal();
  const { handleLogout } = useAuth();

  const openLogoutModal = () => {
    showModal({
      title: '로그아웃 안내',
      description: (
        <p>
          정말 로그아웃 하시겠습니까?
          <br /> 로그아웃 후에는 다시 로그인하셔야 합니다.
        </p>
      ),
      actions: [
        { title: '취소', onClick: hideModal },
        { title: '로그아웃', onClick: handleLogout },
      ],
    });
  };

  return { openLogoutModal };
}
