"use client";

import { useState } from "react"

const useBottomSheet = () => {
  const [state, setState] = useState<{isOpen: boolean}>({isOpen: false});

  const open = () => {
    setState({isOpen: true});
    console.log("bottomSheet: open");
  }

  const close = () => {
    setState({isOpen: false});
    console.log("bottomSheet: close");
  }

  return {open, close, state}
}

export default useBottomSheet;