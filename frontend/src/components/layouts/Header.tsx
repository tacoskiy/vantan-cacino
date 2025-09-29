"use client";

import clsx from "clsx";
import Image from "next/image";

import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center h-36 bg-gradient-to-b from-bg-base via-bg-base/60 to-transparent fixed top-0 z-90">
      <div className={clsx(
        "transition-all duration-300",
        scrolled
          ? "opacity-100 brightness-100"
          : "opacity-50 brightness-0"
      )}>
        <Image src={"/img/logo.svg"} width={110} height={100} alt="cacino"/>
      </div>
    </div>
  );
}

export default Header;