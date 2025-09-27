import CommonButton from "@/components/elements/CommonButton";
import BettingContainer from "@/components/layouts/BettingContainer";
import FloatingContainer from "@/components/layouts/FloatingContainer";
import NoiseLayer from "@/components/layouts/NoiseLayer";

const BettingPage = () => {
  return (
    <>
      <NoiseLayer/>
      <FloatingContainer>
        <CommonButton color="primary" onClick={() => {}}>ボタン</CommonButton>
      </FloatingContainer>
      <main className="px-4 py-12">
        <BettingContainer/>
      </main>
    </>
  );
}

export default BettingPage;