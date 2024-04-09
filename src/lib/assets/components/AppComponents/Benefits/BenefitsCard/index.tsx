interface BenefitsProps {
  children: React.ReactNode;
}
export default function BenefitsCard(props: BenefitsProps) {
  return (
    <div className="p-4 mb-6 flex items-center flex-col gap-2 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] rounded-lg md:w-[48%]">
      {props.children}
    </div>
  );
}
