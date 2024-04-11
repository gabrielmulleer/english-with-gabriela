import { Item } from "..";
type Props = Item;
export default function HowItWorksItem({ number, title, content }: Props) {
  return (
    <li className="flex justify-start gap-[0.625rem]">
      <span className="h-7 aspect-square rounded-full bg-[#F7567C] font-bold text-white font-ibm flex items-center justify-center">
        {number}
      </span>
      <div>
        <h3 className="text-base text-[#F7567C] font-bold ">{title}</h3>
        <p className=" text-sm/4 text-[#333333]">{content}</p>
      </div>
    </li>
  );
}
