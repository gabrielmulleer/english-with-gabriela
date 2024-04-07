import Profile from "../../lib/assets/images/Profile.png";
export default function About() {
  return (
    <section
      id="about"
      className="px-4 py-4 mb-4 flex flex-col items-center justify-center"
    >
      <h2 className="text-xl/6 mb-6 mt-4 font-bold text-[#333333]">
        WHO IS YOUR TEACHER?
      </h2>
      <p className="self-start mb-6 text-xl/6 font-bold text-[#333333]">Hi!</p>
      <p className="text-start mb-3 text-xl/6 font-bold text-[#333333]">
        I'm <span className="text-[#F7567C]">Gabriela</span>, and I'm here to
        help you communicate better in English.
      </p>
      <p className="text-start mb-6 text-sm text-[#333333]">
        With 8 years of experience, I have helped hundreds of people from
        different parts of the world. Now, I want to reach even more people
        through my courses. Join me and expand your English communication
        skills!
      </p>
      <img src={Profile} alt="" />
    </section>
  );
}
