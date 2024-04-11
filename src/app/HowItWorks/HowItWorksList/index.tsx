import HowItWorksItem from "./HowItWorksItem";

export type Item = {
  id: number;
  number: number;
  title: string;
  content: React.ReactNode;
};
type Props = {
  items: Item[];
};

export default function HowItWorksList({ items = [] }: Props) {
  return (
    <ol className="text-start flex flex-col	gap-6 mb-6">
      {items.map((item) => (
        <HowItWorksItem {...item} />
      ))}
    </ol>
  );
}
