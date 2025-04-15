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
    <div className="bg-white rounded-xl shadow p-4 w-60 h-80 flex flex-col">
      <span className={`text-sm px-3 py-1 rounded-lg w-fit  font-medium ${labelColors[label]}`}>
        {label}
      </span>
      <h3 className="mt-3 font-semibold text-2xl">{title}</h3>
      <p className="mt-2 text-[16px] text-gray-600">{description}</p>

      {/* Spacer agar button selalu di bawah */}
      <div className="flex-grow" />

      <button className="align-bottom font-bold text-blue-600 border text-lg border-2 border-blue-600 rounded-xl px-5 py-1 hover:bg-blue-50 transition">
        Selengkapnya
      </button>
    </div>
  );
};

export default Card;
