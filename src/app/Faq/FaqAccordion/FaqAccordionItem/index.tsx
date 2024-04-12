import { Item } from "..";
import Chevron from "../../../../lib/assets/icons/chevron.svg";
import "./FaqAccordionItem.css";

type Props = Item & { isActive: boolean; onClickItem(): void };

export default function FaqAccordionItem({
  title,
  content,
  isActive = false,
  onClickItem,
}: Props) {
  return (
    <>
      <div
        className={`flex justify-between pb-5 cursor-pointer last-of-type:border-b-0 ${
          isActive ? "" : "border-b-2 border-[#CFCED3] "
        } `}
        onClick={onClickItem}
      >
        <h3 className="font-bold pt-4 text-start">{title}</h3>
        <img src={Chevron} alt="" className="w-3 mr-1 svg-filter" />
      </div>
      <p
        className={`text-start last:border-b-0 ${
          isActive ? "pb-8 border-b-2 border-[#CFCED3]" : ""
        }`}
      >
        {isActive && content}
      </p>
    </>
  );
}
