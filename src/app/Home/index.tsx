export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-x-hidden pb-6 flex flex-col"
    >
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
      <nav className="hidden relative lg:block py-8 lg:px-16 2xl:px-32">
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
        <div className="lg:shrink-[3] flex flex-col items-center lg:items-start lg:text-start">
          <h1 className="mb-6 text-[#f8f8f8] lg:text-3xl lg:max-w-[46rem] 2xl:text-5xl">
            Improve your listening and speaking skills by exploring fascinating
            topics!
          </h1>
          <p className="mb-6 text-xl/6 text-[#f8f8f8]">
            Transform your language skills by discussing what you love
          </p>
          <a
            href="#plans"
            className="button-link block mb-12 text-[#F7567C] bg-[#f8f8f8] font-bold text-xs w-full md:w-[40%] lg:w-fit lg:text-base"
          >
            Enroll now - Start your speaking journey!
          </a>
        </div>
        <video
          className="mb-6 px-2 lg:shrink-[2]"
          src=""
          width="750"
          height="500"
          controls
        ></video>
      </div>
      <div className="px-6 lg:px-32 lg:py-8 lg:mt-8 lg:max-w-7xl lg:self-center ">
        <p className=" text-sm/4 mb-6 text-start md:text-center text-[#333333] lg:text-2xl lg:text-center md:text-lg ">
          Welcome to Afternoon Tea, where you learn the English people speak in
          real life.
        </p>
        <a
          href="#plans"
          className="button-link block text-[#FCFCFC] bg-[#F7567C] text-xs w-full md:m-auto md:min-w-fit md:w-[40%]  md:max-w-[26rem] lg:w-[50%] lg:text-base "
        >
          Enroll now - Start your speaking journey!
        </a>
      </div>
    </section>
  );
}
