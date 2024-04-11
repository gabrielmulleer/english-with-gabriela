interface PlansProps {
  children: React.ReactNode;
}
export default function PlansCard(props: PlansProps) {
  return (
    <div className="px-4 py-3 border-[1px] border-black/25 rounded bg-white flex flex-col gap-4 md:max-w-[20.5rem]">
      {props.children}
      <button className="text-[#FCFCFC] bg-[#F7567C] text-xs w-full">
        SIGN UP NOW
      </button>
    </div>
  );
}
