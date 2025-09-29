import clsx from "clsx";
import { ReactNode } from "react";

interface CommonButtonProps{
  children: ReactNode;
  color: string;
  invert?: boolean;
  onClick: () => void;
}

const CommonButton = ({ children, color, invert = false, onClick }:CommonButtonProps) => {
  return (
    <button onClick={onClick} className={clsx("w-full h-auto p-4 rounded-2xl active:brightness-90 transition-all duration-300 pointer-events-auto", color)}>
      {children}
    </button>
  );
}

export default CommonButton;