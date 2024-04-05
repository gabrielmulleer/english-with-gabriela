interface BenefitsProps {
  children: React.ReactNode;
}
export default function BenefitsCard(props: BenefitsProps) {
  return (
    <div className="p-4 mb-6 flex items-center flex-col gap-2 shadow-lg rounded-lg">
      {props.children}
    </div>
  );
}
