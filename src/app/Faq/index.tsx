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
        "Yes, the classes will be live on Tuesdays at 5p.m Brasilia Time, but they will be recorded. You can watch them later if you prefer.",
    },
    {
      id: 2,
      title: "Will I be able to watch the classes later?",
      content:
        "Yes! The classes will be recorded so you can watch them anytime you want. ",
    },
    {
      id: 3,
      title: "Will I really improve my English?",
      content:
        "Yes. The best way to improve your listening and speaking skills is to be exposed to authentic content in English and Gabriela will help you through the process. ",
    },
    {
      id: 4,
      title: "Is this course for me?",
      content:
        "If you can understand the video above and you need to improve your listening and speaking skills, this course is for you.",
    },
  ];

  return (
    <section id="faq" className="px-4 py-4 m-auto max-w-4xl  ">
      <h2 className="text-xl/6 mb-2 font-bold text-[#333333]">FAQ</h2>
      <FaqAccordion
        items={items}
        activeIndex={activeIndex}
        onChangeActiveIndex={handleToggle}
      />
    </section>
  );
}
