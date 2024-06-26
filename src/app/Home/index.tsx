import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <section id="home" className="relative overflow-x-hidden pb-4">
      <svg
        className="absolute z-[-1] -translate-y-1/4"
        width="1920"
        height="609"
        viewBox="0 0 1920 609"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H1931.01L2222 502.986C1776.12 172.178 967.515 835.542 2.24409e-10 522.651L0 0Z"
          fill="url(#gradiente)"
        />
        <defs>
          <linearGradient id="gradiente" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7567C" />
            <stop offset="100%" stopColor="#F7567C" stopOpacity="0.37" />
          </linearGradient>
        </defs>
      </svg>
      <nav className="hidden relative lg:block py-8 px-20">
        <div className="flex absolute flex-row justify-between gap-16">
          <a className="font-ibm text-sm	 text-white" href="#how-it-works">
            HOW IT WORKS
          </a>
          <a className="font-ibm text-sm	 text-white" href="#benefits">
            BENEFITS
          </a>
          <a className="font-ibm text-sm	 text-white" href="#plans">
            PLANS
          </a>
          <a className="font-ibm text-sm	 text-white" href="#about">
            WHO IS YOUR TEACHER
          </a>
        </div>
      </nav>
      <div className="flex flex-col items-center pt-4 px-4 lg:flex-row lg:items-start lg:pt-[2rem] lg:pb-[2rem] lg:justify-between lg:px-16 2xl:px-32">
        <div className=" flex flex-col md:ml-2 items-center lg:items-start lg:text-start">
          <h1 className="mb-6 text-[#f8f8f8] lg:text-3xl lg:max-w-[46rem] 2xl:text-5xl">
            Improve your listening and speaking skills by exploring fascinating
            topics!
          </h1>
          <p className="mb-6 text-xl/6 text-[#f8f8f8]">
            Transform your language skills by discussing what you love
          </p>
          <button className="mb-12 text-[#F7567C] bg-[#f8f8f8] font-bold text-xs w-full md:w-[40%] lg:w-fit">
            Enroll now - Start your speaking journey!
          </button>
        </div>

        <div className=" px-2 mb-6  max-w-[750px] w-full ">
          <div className="relative flex items-center justify-center">
            {isLoading && (
              <div className="absolute bg-black top-0 left-0 w-full h-full flex items-center justify-center">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#F7567C] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                ></div>
              </div>
            )}
            <iframe
              width="100%"
              onLoad={handleLoad}
              className="aspect-video"
              height="100%"
              src="https://www.youtube.com/embed/x-RbFbHD3cs"
              title="Introducing my new course."
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-32">
        <p className=" text-sm/4 mb-6 text-start text-[#333333] lg:text-2xl lg:text-center ">
          Welcome to [Your Course Name], where mastering English speaking is not
          just learning; it’s about engaging, understanding, and thriving. Dive
          into topics you’re passionate about and debate with peers globally.
        </p>
        <button className="text-[#FCFCFC] bg-[#F7567C] text-xs w-full mb-2 md:w-[40%]">
          Enroll now - Start your speaking journey!
        </button>
      </div>
    </section>
  );
}
