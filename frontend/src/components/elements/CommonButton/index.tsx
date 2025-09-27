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
    <button className={clsx("w-full h-auto p-4 rounded-full")} style={{backgroundColor: `var(--color-${color})`}}>
      {children}
    </button>
  );
}

export default CommonButton;