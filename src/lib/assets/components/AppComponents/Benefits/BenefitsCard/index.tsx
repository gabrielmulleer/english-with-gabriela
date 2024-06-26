interface BenefitsProps {
  children: React.ReactNode;
}
export default function BenefitsCard(props: BenefitsProps) {
  return (
    <div className="p-4 mb-6 lg:mb-12 flex items-center flex-col gap-2 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] rounded-lg h-[14rem] w-[19rem] md:w-[48%] md:max-w-[19rem] ">
      {props.children}
    </div>
  );
}
