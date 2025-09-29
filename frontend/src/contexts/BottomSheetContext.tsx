"use client";

import { createContext, useContext, ReactNode } from "react";
import useBottomSheet from "@/hooks/useBottomSheet";

interface BottomSheetContextType {
  open: () => void;
  close: () => void;
  state: { isOpen: boolean };
}

const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

export const BottomSheetProvider = ({ children }: { children: ReactNode }) => {
  const { open, close, state } = useBottomSheet();

  return (
    <BottomSheetContext.Provider value={{ open, close, state }}>
      {children}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("useBottomSheetContext must be used within BottomSheetProvider");
  }
  return context;
};