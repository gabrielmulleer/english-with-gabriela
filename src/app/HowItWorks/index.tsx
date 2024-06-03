import HowItWorksList, { Item } from "./HowItWorksList";
import HowItWorksImg from "../../lib/assets/images/HowItWorks.png";

export default function HowItWorks() {
  const items: Item[] = [
    {
      id: 1,
      number: 1,
      title: "Weekly Topics",
      content:
        "Each week, immerse yourself in compelling materials including news articles, films, series, interviews, videos and podcasts. It's super fun!",
    },
    {
      id: 2,
      number: 2,
      title: "Interactive Lecture",
      content:
        "Join our special class, where Gabriela will discuss the weekly topic. During the session, you will have the opportunity to send messages in the chat to interact and engage in real time. Cool, right?",
    },
    {
      id: 3,
      number: 3,
      title: "Practice your Speaking",
      content:
        "Students will submit a video or audio recording sharing their opinion on the topic to practice their English speaking skills. Speak up!",
    },
    {
      id: 4,
      number: 4,
      title: "Individualized Feedback",
      content:
        "Receive personalized feedback to guide your learning journey and fast-track your progress. You're on your way to success!",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="px-6 pt-4 bg-[#F7F7F7] lg:flex lg:justify-center lg:py-20 lg:px-32 lg:gap-6 "
    >
      <img
        src={HowItWorksImg}
        alt=""
        className="hidden lg:block drop-shadow-xl"
      />
      <div className="lg:max-w-80">
        <h1 className="text-xl/6 mb-6">HOW IT WORKS</h1>
        <HowItWorksList items={items} />
        <a
          href="#plans"
          className="button-link block text-[#FCFCFC] bg-[#F7567C] text-xs w-full md:m-auto md:min-w-fit md:w-[40%] md:max-w-[26rem] lg:w-full lg:text-base"
        >
          Sign up now to elevate your English!
        </a>
      </div>
    </section>
  );
}
