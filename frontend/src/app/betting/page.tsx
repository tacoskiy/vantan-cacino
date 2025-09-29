"use client";

import CommonButton from "@/components/elements/CommonButton";
import BettingContainer from "@/components/layouts/BettingContainer";
import FloatingContainer from "@/components/layouts/FloatingContainer";
import NoiseLayer from "@/components/layouts/NoiseLayer";
import BottomSheet from "@/components/layouts/BottomSheet";

import { useBottomSheetContext } from "@/contexts/BottomSheetContext";
import { useBettingGridContext } from "@/contexts/BettingGridContext";

const BettingPage = () => {
  const bottomSheet = useBottomSheetContext();
  const bettingGrid = useBettingGridContext();

  return (
    <main>
      <NoiseLayer/>
      <FloatingContainer>
        <CommonButton color="bg-primary shadow-xl floating-glow select-none max-w-120" onClick={bottomSheet.open}><p className="font-bold text-lg">ベットする</p></CommonButton>
      </FloatingContainer>
      <BottomSheet>
        <div className="px-4">
          <CommonButton color="bg-primary shadow-xl floating-glow select-none max-w-120" onClick={() => bettingGrid.selectOutsideBet(bettingGrid.getRandomOutsideBet())}><p className="font-bold text-lg">ランダム</p></CommonButton>
        </div>
      </BottomSheet>
      <section className="fixed w-full h-screen px-4 pt-36 pb-120 select-none flex flex-col items-center no-drag overflow-y-scroll overflow-scroll-smooth">
        <BettingContainer/>
      </section>
    </main>
  );
}

export default BettingPage;