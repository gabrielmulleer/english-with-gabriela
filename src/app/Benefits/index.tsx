import BenefitsCard from "../../lib/assets/components/AppComponents/Benefits/BenefitsCard";
import TargetIcon from "../../lib/assets/icons/target.svg";
import GlobeIcon from "../../lib/assets/icons/globe.svg";
import RocketIcon from "../../lib/assets/icons/rocket.svg";
import HeartIcon from "../../lib/assets/icons/heart.svg";
export default function Benefits() {
  type Item = {
    id: number;
    icon: string;
    title: string;
    content: React.ReactNode;
  };

  const items: Item[] = [
    {
      id: 1,
      icon: TargetIcon,
      title: "Cultural Insights",
      content:
        "Delve into the diversity of English-speaking cultures to broaden your perspective.",
    },
    {
      id: 2,
      icon: GlobeIcon,
      title: " Global Community",
      content:
        "Connect with students from around the world and expand your cultural horizons.",
    },
    {
      id: 3,
      icon: RocketIcon,
      title: "Real Results",
      content:
        "Boost your speaking skills, grow your confidence, and achieve smoother fluency in English.",
    },
    {
      id: 4,
      icon: HeartIcon,
      title: "Comprehensive Support",
      content:
        "Benefit from ongoing support and guidance from Gabriela, who is dedicated to your success.",
    },
  ];
  return (
    <section id="benefits" className="px-6 py-4 mb-4 lg:py-8">
      <h2 className="text-xl/6 mb-6 font-bold text-[#333333] lg:mb-12">
        BENEFITS
      </h2>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:gap-x-10 md:justify-center md:mb-4 lg:flex-wrap">
        {items.map((item) => (
          <BenefitsCard>
            <img src={item.icon} alt="" />
            <h3 className="text-lg/6 text-[#F7567C] font-bold">{item.title}</h3>
            <p className="text-start text-[#333333]">{item.content}</p>
          </BenefitsCard>
        ))}
      </div>
      <a
        href="#plans"
        className="button-link block text-[#FCFCFC] bg-[#F7567C] text-xs w-full md:m-auto md:min-w-fit md:w-[40%] md:max-w-[26rem] lg:text-base "
      >
        Sign up now to elevate your English!
      </a>
    </section>
  );
}
