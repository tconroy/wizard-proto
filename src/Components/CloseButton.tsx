import { FC } from "react";

interface CloseButtonProps {
  onClick?: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  const confirmClick = () => {
    if (window.confirm("Do you really want to leave?")) {
      window.alert("(now imagine you did!)");
      onClick?.();
    }
  };

  return <button onClick={confirmClick}>X</button>;
};

export default CloseButton;
