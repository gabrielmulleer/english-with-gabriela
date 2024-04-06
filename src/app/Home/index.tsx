export default function Home() {
  return (
    <>
      <div className="relative overflow-x-hidden pb-4">
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

        <div className="flex flex-col pt-4 px-4">
          <h1 className="mb-6 text-[#f8f8f8]">
            Enhance your English speaking skills by exploring fascinating
            subjects!
          </h1>
          <p className="mb-6 text-xl/6 text-[#f8f8f8]">
            Transform your language skills by discussing what you love
          </p>
          <button className="mb-12 text-[#F7567C] bg-[#f8f8f8] font-bold text-xs">
            Enroll now - Start your speaking journey!
          </button>
        </div>
        <div className="px-6">
          <video
            className="mb-6"
            src=""
            width="750"
            height="500"
            controls
          ></video>
          <p className=" text-sm/4 mb-6 text-start text-[#333333]">
            Welcome to [Your Course Name], where mastering English speaking is
            not just learning; it’s about engaging, understanding, and thriving.
            Dive into topics you’re passionate about and debate with peers
            globally.
          </p>
          <button className="text-[#FCFCFC] bg-[#F7567C] text-xs w-full mb-2">
            Enroll now - Start your speaking journey!
          </button>
        </div>
      </div>
    </>
  );
}
