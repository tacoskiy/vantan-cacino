import { ReactNode } from "react";

interface FloatingContainerProps{
  children: ReactNode;
}

const FloatingContainer = ({ children }:FloatingContainerProps) => {
  return (
    <div className="fixed pointer-events-none w-full h-screen z-10">
      <section className="absolute bottom-0 left-0 w-full h-fit p-4 flex flex-col items-center">
        {children}
      </section>
    </div>
  );
}

export default FloatingContainer;