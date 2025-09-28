import BettingGrid from "@/components/elements/BettingGrid";
import { BettingGridItems } from "@/constants/BettingGridItems";

const BettingContainer = () => {
  return (
    <section className="grid grid-cols-3 gap-1 w-full p-1 bg-text-primary rounded-2xl max-w-100 betting-container">
      {BettingGridItems.map((item) => (
        <BettingGrid key={item.betNumber} betNumber={item.betNumber} color={item.color}/>
      ))}
    </section>
  );
}

export default BettingContainer;