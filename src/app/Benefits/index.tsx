import BenefitsCard from "../../lib/assets/components/AppComponents/Benefits/BenefitsCard";
import TargetIcon from "../../lib/assets/icons/target.svg";
import GlobeIcon from "../../lib/assets/icons/globe.svg";
import RocketIcon from "../../lib/assets/icons/rocket.svg";
import HeartIcon from "../../lib/assets/icons/heart.svg";
export default function Benefits() {
  return (
    <section id="benefits" className="px-6 py-4">
      <h2 className="text-xl/6 mb-6 mt-4 font-bold text-[#333333]">BENEFITS</h2>
      <BenefitsCard>
        <img src={TargetIcon} alt="" />
        <h3 className="text-lg/6 text-[#F7567C] font-bold">
          Cultural Insights
        </h3>
        <p className="text-start text-[#333333]">
          Delve into the diversity of English-speaking cultures to broaden your
          perspective.
        </p>
      </BenefitsCard>
      <BenefitsCard>
        <img src={GlobeIcon} alt="" />
        <h3 className="text-lg/6 text-[#F7567C] font-bold">Global Community</h3>
        <p className="text-start text-[#333333]">
          Connect with students from around the world and expand your cultural
          horizons.
        </p>
      </BenefitsCard>
      <BenefitsCard>
        <img src={RocketIcon} alt="" />
        <h3 className="text-lg/6 text-[#F7567C] font-bold">Real Results</h3>
        <p className="text-start text-[#333333]">
          Boost your speaking skills, grow your confidence, and achieve smoother
          fluency in English.
        </p>
      </BenefitsCard>
      <BenefitsCard>
        <img src={HeartIcon} alt="" />
        <h3 className="text-lg/6 text-[#F7567C] font-bold">
          Comprehensive Support
        </h3>
        <p className="text-start text-[#333333]">
          Benefit from ongoing support and guidance from experienced instructor
          dedicated to your success.
        </p>
      </BenefitsCard>

      <button className="text-[#FCFCFC] bg-[#F7567C] text-xs w-full mb-4">
        Sign up today to elevate your English!
      </button>
    </section>
  );
}
