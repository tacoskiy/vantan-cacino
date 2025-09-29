export type BettingGridColor = "red" | "black";

export type BettingGridType = {
  betNumber: number;
  color: BettingGridColor;
}

export type OutsideBetType =
  | "red"
  | "black"
  | "even"
  | "odd"
  | "low"
  | "high"
  | "dozen1"
  | "dozen2"
  | "dozen3"
  | "column1"
  | "column2"
  | "column3";