import BettingGrid from "@/components/elements/BettingGrid";
import { BettingGridItems } from "@/constants/BettingGridItems";

const BettingContainer = () => {
  return (
    <section className="grid grid-cols-3 gap-1.5 w-full p-2 bg-text-primary rounded-3xl">
      {BettingGridItems.map((item) => (
        <BettingGrid key={item.betNumber} betNumber={item.betNumber} color={item.color}/>
      ))}
    </section>
  );
}

export default BettingContainer;