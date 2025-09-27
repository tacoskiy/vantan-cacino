import clsx from "clsx";

import { BettingGridColor } from "@/types/BettingTypes";

interface BettingGridProps{
  betNumber: number;
  color: BettingGridColor;
}

const BettingGrid = ({ betNumber, color }:BettingGridProps) => {
  return (
    <button className={clsx(
      "betting-grid",
      color === "red"
        ? "grid-red"
        : "grid-black"
    )}>
      <p className="text-2xl font-bold">{betNumber}</p>
    </button>
  );
}

export default BettingGrid;