import instagramIcon from "../../lib/assets/icons/instagram.svg";
import youtubeIcon from "../../lib/assets/icons/youtube.svg";
import tiktokIcon from "../../lib/assets/icons/tiktok.svg";
export default function Footer() {
  return (
    <section
      id="footer"
      className="bg-[#F7567C5E] pt-4 pb-8 flex flex-col items-center gap-6"
    >
      <div className="flex items-center gap-4">
        <img src={instagramIcon} alt="" />
        <img src={youtubeIcon} alt="" />
        <img src={tiktokIcon} alt="" />
      </div>
      <div className="text-sm/4 font-bold text-[#333333]">
        support@englishwithgabriela.com
      </div>
      <div className="text-sm/4 font-bold text-[#333333]">
        © All rights reserved{" "}
      </div>
    </section>
  );
}
