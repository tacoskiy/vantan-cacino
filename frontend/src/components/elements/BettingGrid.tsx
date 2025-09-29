import clsx from "clsx";

import { BettingGridColor } from "@/types/BettingTypes";

interface BettingGridProps{
  betNumber: number;
  color: BettingGridColor;
  seleted: boolean;
  dim: boolean;
}

const BettingGrid = ({ betNumber, color, seleted, dim }:BettingGridProps) => {
  return (
    <button className={clsx(
      "betting-grid transition-all duration-300",
      color === "red"
        ? "grid-red"
        : "grid-black",
      seleted && "grid-selected",
      dim && "!brightness-75"
    )}>
      <p className="text-2xl font-bold">{betNumber}</p>
    </button>
  );
}

export default BettingGrid;