import FaqAccordionItem from "./FaqAccordionItem";

export type Item = {
  id: number;
  title: string;
  content: React.ReactNode;
};
type Props = {
  items: Item[];

  activeIndex?: number | null;
  onChangeActiveIndex(index: number): void;
};

export default function FaqAccordion({
  items = [],
  onChangeActiveIndex,
  activeIndex,
}: Props) {
  return (
    <div>
      {items.map((item, index) => (
        <FaqAccordionItem
          isActive={index === activeIndex}
          onClickItem={() => onChangeActiveIndex(index)}
          {...item}
        />
      ))}
    </div>
  );
}
