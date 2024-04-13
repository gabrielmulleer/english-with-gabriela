import HowItWorksList, { Item } from "./HowItWorksList";
import HowItWorksImg from "../../lib/assets/images/HowItWorks.png";

export default function HowItWorks() {
  const items: Item[] = [
    {
      id: 1,
      number: 1,
      title: "Weekly Topics",
      content:
        "Each week, immerse yourself in compelling materials including news, articles, films, series, interviews, videos and podcasts.",
    },
    {
      id: 2,
      number: 2,
      title: "Interactive Lecture",
      content:
        "Join our special class where you can watch the teacher discuss the topic. During this session, you'll have the opportunity to send messages in the chat to interact and engage in real-time.",
    },
    {
      id: 3,
      number: 3,
      title: "Practice your Speaking",
      content:
        "Students will submit a video or audio recording sharing their opinion on the topic to practice their English speaking skills.",
    },
    {
      id: 4,
      number: 4,
      title: "Individualized Feedback",
      content:
        "Receive personalized feedback to guide your learning journey and  fast-track your progress.",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="px-6 pt-4 bg-[#F7F7F7] lg:flex lg:justify-evenly lg:py-20 lg:px-8 xl:px-24"
    >
      <img
        src={HowItWorksImg}
        alt=""
        className="hidden lg:block drop-shadow-xl"
      />
      <div className="lg:max-w-[26rem]">
        <h1 className="text-xl/6 mb-6">HOW IT WORKS</h1>
        <HowItWorksList items={items} />
        <button className="text-[#FCFCFC] bg-[#F7567C] text-xs w-full mb-4 md:min-w-fit md:w-[40%] md:max-w-[26rem] lg:w-full lg:text-base">
          Sign up today to elevate your English!
        </button>
      </div>
    </section>
  );
}
