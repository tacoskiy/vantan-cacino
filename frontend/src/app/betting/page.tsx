import Image from "next/image";

import CommonButton from "@/components/elements/CommonButton";
import BettingContainer from "@/components/layouts/BettingContainer";
import FloatingContainer from "@/components/layouts/FloatingContainer";
import NoiseLayer from "@/components/layouts/NoiseLayer";

const BettingPage = () => {
  return (
    <>
      <NoiseLayer/>
      <FloatingContainer>
        <CommonButton color="bg-primary shadow-xl floating-glow" onClick={() => {}}><p className="font-bold text-lg">ベットする</p></CommonButton>
      </FloatingContainer>
      <main className="px-4 py-12">
        <div className="w-full flex items-center justify-center p-12">
          <Image src={"/img/logo.svg"} width={110} height={100} alt="cacino"/>
        </div>
        <BettingContainer/>
      </main>
    </>
  );
}

export default BettingPage;