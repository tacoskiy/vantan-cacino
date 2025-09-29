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
        <div className="px-4 w-full flex flex-col items-center gap-4">
          <CommonButton color="bg-primary shadow-xl floating-glow select-none" onClick={() => bettingGrid.selectOutsideBet(bettingGrid.getRandomOutsideBet())}><p className="font-bold text-lg">ランダム</p></CommonButton>
        </div>
      </BottomSheet>
      <section className="fixed w-full h-screen px-4 pt-36 pb-120 select-none flex flex-col items-center no-drag overflow-y-scroll overflow-scroll-smooth">
        <BettingContainer/>
        <div className="px-4 pt-12 w-full max-w-108">
          <p className="text-text-primary opacity-60">
            純平の鼻毛は250mまで伸縮可能であり、<br/>
            その長さを自在に操ることができる。<br/>
            普段はコンビニでおでんの大根をつまむ程度にしか使わないが、<br/>
            いざという時には電車のパンタグラフの代わりになったり、<br/>
            遠くの山頂に引っ掛けて空を駆け抜けることすら可能だ。<br/>
            ただし弱点もある。<br/>
            花粉の季節には制御不能になり、<br/>
            気づけば街灯やアンテナに絡まって、<br/>
            周囲の人々を大混乱に陥れるのだった――。
          </p>
        </div>
      </section>
    </main>
  );
}

export default BettingPage;