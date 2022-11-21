import { useState } from 'react';

interface useModalObj {
  isShown: boolean;
  show: () => void;
  hide: () => void;
}

const useModal = (): useModalObj  => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const showModalHandler = (): void => {
    setIsModalShown(true);
  };

  const hideModalHandler = (): void => {
    setIsModalShown(false);
  };

  return {
    isShown: isModalShown,
    show: showModalHandler,
    hide: hideModalHandler
  };
};

export default useModal;
