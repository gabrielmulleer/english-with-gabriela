import Profile from "../../lib/assets/images/Profile.png";
export default function About() {
  return (
    <section id="about" className="flex items-center md:flex-col md:pb-12">
      <div className="px-4 py-4 mb-2 flex flex-col items-center justify-center md:flex-row md:p-12 lg:pt-28 lg:px-28 xl:gap-20">
        <div className="md:pr-28 lg:max-w-[458px] xl:max-w-[600px]">
          <h2 className="text-xl/6 mb-6 mt-4 font-bold text-[#333333] md:text-start md:mb-14 xl:text-[30px]/10">
            WHO IS YOUR TEACHER?
          </h2>
          <p className="text-start mb-6 text-xl/6 font-bold text-[#333333] xl:text-2xl/8">
            Hi!
          </p>
          <p className="text-start mb-3 text-xl/6 font-bold text-[#333333] xl:text-2xl/8">
            I'm <span className="text-[#F7567C]">Gabriela</span>, and I'm here
            to help you communicate better in English.
          </p>
          <p className="text-start mb-6 text-sm text-[#333333] md:text-base xl:text-xl/7">
            With 8 years of experience, I have helped hundreds of people from
            different parts of the world. Now, I want to reach even more people
            through my courses. Join me and expand your English communication
            skills!
          </p>
        </div>
        <img src={Profile} alt="" />
      </div>
      <a
        href="#plans"
        className="button-link hidden text-[#FCFCFC] bg-[#F7567C] text-xs w-full mb-4 md:block md:min-w-fit md:w-[40%] md:max-w-[26rem] lg:w-[50%] lg:text-base "
      >
        Sign up now to elevate your English!
      </a>
    </section>
  );
}
