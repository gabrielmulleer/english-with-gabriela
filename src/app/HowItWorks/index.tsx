export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 pt-4 bg-[#F7F7F7]">
      <h1 className="text-xl/6 mb-6">HOW IT WORKS</h1>
      <ol className="text-start flex flex-col	gap-6 mb-6">
        <li className="flex justify-start gap-[0.625rem]">
          <span className="h-7 aspect-square rounded-full bg-[#F7567C] font-bold text-white font-ibm flex items-center justify-center">
            1
          </span>
          <div>
            <h3 className="text-base text-[#F7567C] font-bold ">
              Weekly Topics
            </h3>
            <p className=" text-sm/4 text-[#333333]">
              Each week, immerse yourself in compelling materials including
              articles, podcasts, and ebooks.
            </p>
          </div>
        </li>
        <li className="flex justify-start gap-[0.625rem]">
          <span className="h-7 aspect-square rounded-full bg-[#F7567C] font-bold text-white font-ibm flex items-center justify-center">
            2
          </span>
          <div>
            <h3 className="text-base text-[#F7567C] font-bold ">
              Interactive Lecture
            </h3>
            <p className=" text-sm/4 text-start text-[#333333]">
              Join our special class where you can watch the teacher discuss the
              topic. During this session, you'll have the opportunity to send
              messages in the chat to interact and engage in real-time.
            </p>
          </div>
        </li>
        <li className="flex justify-start gap-[0.625rem]">
          <span className="h-7 aspect-square rounded-full bg-[#F7567C] font-bold text-white font-ibm flex items-center justify-center">
            3
          </span>
          <div>
            <h3 className="text-base text-[#F7567C] font-bold ">
              Practice your Speaking
            </h3>
            <p className=" text-sm/4 text-start text-[#333333]">
              Students will submit a video or audio recording sharing their
              opinion on the topic to practice their English speaking skills.
            </p>
          </div>
        </li>
        <li className="flex justify-start gap-[0.625rem]">
          <span className="h-7 aspect-square rounded-full bg-[#F7567C] font-bold text-white font-ibm flex items-center justify-center">
            4
          </span>
          <div>
            <h3 className="text-base text-[#F7567C] font-bold ">
              Individualized Feedback
            </h3>
            <p className=" text-sm/4 text-start text-[#333333]">
              Receive personalized feedback to guide your learning journey and
              fast-track your progress.{" "}
            </p>
          </div>
        </li>
      </ol>
      <button className="text-[#FCFCFC] bg-[#F7567C] text-xs w-full mb-4">
        Sign up today to elevate your English!
      </button>
    </section>
  );
}
