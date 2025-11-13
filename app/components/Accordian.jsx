"use client";
import { useState } from "react";

const AccordionItem = ({
  title,
  content,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isOpen = index === activeIndex;

  return (
    <div className="bg-[#F9FAFB] rounded-xl p-4 shadow-sm transition-all duration-300 p-6">
      <button
        onClick={() => setActiveIndex(isOpen ? null : index)}
        className="flex justify-between items-center w-full py-2 text-left cursor-pointer"
      >
        <span className="text-lg font-semibold text-primary leading-[150%]">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className=" pt-4 text-secondary leading-[150%]">{content}</p>
      </div>
    </div>
  );
};

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "What types of construction projects do you handle?",
      content:
        "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
    {
      title: "How long does a typical project take?",
      content:
        "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
    {
      title: "Do you provide free estimates?",
      content:
        "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
    {
      title: "Are you licensed and insured?",
      content:
        "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
    {
      title: "What is your approach to sustainable construction?",
      content:
        "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
    {
      title: "Can you work with my architect or designer?",
      content:
        "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
  ];

  return (
    <div className="w-full max-w-201 mx-auto rounded-2xl p-6 flex flex-col gap-4">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          index={i}
          title={item.title}
          content={item.content}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default Accordian;