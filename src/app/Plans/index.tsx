import PlansCard from "./PlansCard";
import Check from "../../lib/assets/icons/check.svg";

export default function Plans() {
  return (
    <section
      id="plans"
      className="py-4 px-6 bg-[#F7567C5E] flex flex-col gap-6 "
    >
      <h2 className="text-xl/6 font-bold text-[#333333] self-center max-w-52">
        Ready to get started? Sign up now!
      </h2>

      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <PlansCard href="https://pay.hotmart.com/G92385796T?off=yp67vln8&bid=1713015869704">
          <span className="p-2 rounded-sm	bg-[#26547c] w-fit self-center text-white font-bold text-xs/3">
            Monthly Plan
          </span>
          <p className="text-base/5 font-medium">
            Boost your English OR Boost your listening and speaking skills
          </p>
          <div className="text-2xl/7 font-bold text-[#f7567c]">
            $49.99/month
          </div>
          <ul className="flex gap-3 flex-col text-[#333333] font-medium">
            <li className="flex gap-3">
              <img src={Check} alt="" />
              <div>Pay monthly</div>
            </li>
            <li className="flex gap-3">
              <img src={Check} alt="" />
              <div>Cancel whenever you want</div>
            </li>
            <li className="flex gap-3">
              <img src={Check} alt="" />
              <div>30 days access</div>
            </li>
          </ul>
        </PlansCard>
        <PlansCard href="https://pay.hotmart.com/G92385796T?off=dtqpcl6p&bid=1713015908240">
          <span className="p-2 rounded-sm bg-[#26547c] w-fit self-center text-white font-bold text-xs/3">
            Annual Plan
          </span>
          <p className="text-base/5 font-medium">
            Boost your English OR Boost your listening and speaking skills
          </p>
          <div className="text-2xl/7 font-bold text-[#f7567c]">
            $499.99/year
          </div>
          <ul className="flex gap-3 flex-col text-[#333333] font-medium">
            <li className="flex gap-3">
              <img src={Check} alt="" />
              <div>2 months free</div>
            </li>
            <li className="flex gap-3">
              <img src={Check} alt="" />
              <div>Extra materials </div>
            </li>
            <li className="flex gap-3">
              <img src={Check} alt="" />
              <div>365 days access</div>
            </li>
          </ul>
        </PlansCard>
      </div>
    </section>
  );
}
