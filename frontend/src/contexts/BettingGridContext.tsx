"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useBettingGrid } from "@/hooks/useBettingGrid";
import { OutsideBetType } from "@/types/BettingTypes";

type BettingGridContextType = {
  grid: ReturnType<typeof useBettingGrid>["grid"];
  selectOutsideBet: (type: OutsideBetType) => void;
  getRandomOutsideBet: () => OutsideBetType;
};

const BettingGridContext = createContext<BettingGridContextType | null>(null);

export const BettingGridProvider = ({ children }: { children: ReactNode }) => {
  const { grid, selectOutsideBet, getRandomOutsideBet } = useBettingGrid();

  return (
    <BettingGridContext.Provider value={{ grid, selectOutsideBet, getRandomOutsideBet }}>
      {children}
    </BettingGridContext.Provider>
  );
};

export const useBettingGridContext = () => {
  const context = useContext(BettingGridContext);
  if (!context) {
    throw new Error("useBettingGridContext must be used within BettingGridProvider");
  }
  return context;
};