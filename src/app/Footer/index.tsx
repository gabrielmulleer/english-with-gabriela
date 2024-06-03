import instagramIcon from "../../lib/assets/icons/instagram.svg";
import youtubeIcon from "../../lib/assets/icons/youtube.svg";
import tiktokIcon from "../../lib/assets/icons/tiktok.svg";
export default function Footer() {
  return (
    <section
      id="footer"
      className="bg-[#F7567C5E] py-8 flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:px-48"
    >
      <div className="flex flex-col items-center gap-6 lg:flex-row-reverse">
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/englishwithgabriela/"
            target="_blank"
          >
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
          <a
            href="https://www.youtube.com/@englishwithgabriela"
            target="_blank"
          >
            <img src={youtubeIcon} alt="Youtube Icon" />
          </a>
          <a href="https://tiktok.com/@englishwithgabriela/" target="_blank">
            <img src={tiktokIcon} alt="Tiktok Icon" />
          </a>
        </div>
        <div className="text-sm/4 font-bold text-[#333333]">
          <a href="mailto:contact@englishwithgabriela.com">
            contact@englishwithgabriela.com
          </a>
        </div>
      </div>
      <div className="text-sm/4 font-bold text-[#333333]">
        © All rights reserved{" "}
      </div>
    </section>
  );
}
