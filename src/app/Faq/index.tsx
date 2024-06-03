import { useState } from "react";
import FaqAccordion, { Item } from "./FaqAccordion";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };
  const items: Item[] = [
    {
      id: 1,
      title: "Will the classes be live?",
      content:
        "Yes, the classes will be live on Tuesdays at 2p.m Brasilia Time, but they will be recorded. You can watch them later if you prefer.",
    },
    {
      id: 2,
      title: "Will I be able to watch the classes later?",
      content:
        " Yes!! The classes will be recorded, and you'll be able to watch them later if you can't attend live.",
    },
    {
      id: 3,
      title: "Will I really improve my English speaking skills?",
      content:
        " Yes!! The classes will be recorded, and you'll be able to watch them later if you can't attend live.",
    },
  ];

  return (
    <section id="faq" className="px-4 py-4 lg:py-8 m-auto max-w-4xl  ">
      <h2 className="text-xl/6 mb-2 font-bold text-[#333333]">FAQ</h2>
      <FaqAccordion
        items={items}
        activeIndex={activeIndex}
        onChangeActiveIndex={handleToggle}
      />
    </section>
  );
}
