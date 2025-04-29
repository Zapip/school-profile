import React from "react";

type CardProps = {
  label: "Featured" | "Popular" | "New";
  title: string;
  description: string;
};

const labelColors: Record<CardProps["label"], string> = {
  Featured: "bg-purple-100 text-purple-700",
  Popular: "bg-blue-100 text-blue-700",
  New: "bg-green-100 text-green-700",
};

const Card: React.FC<CardProps> = ({ label, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full md:w-56 h-fit flex flex-col">
      <span
        className={`text-sm px-3 py-1 rounded-lg w-fit ${labelColors[label]}`}
      >
        {label}
      </span>
      <h3 className="mt-3 font-semibold text-2xl">{title}</h3>
      <p className="mt-2 text-l text-gray-600">{description}</p>

      <button className="align-bottom font-bold mt-4 text-blue-600 text-lg border-2 border-blue-600 rounded-xl px-5 py-1 hover:bg-blue-50 transition">
        Selengkapnya
      </button>
    </div>
  );
};

export default Card;
