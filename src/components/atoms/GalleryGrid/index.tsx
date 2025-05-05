import React from "react";
import Image from "next/image";

const GalleryGrid = () => {
  const images = [
    // Kolom 1
    [
      { src: "/kemendikbud.png", w: "w-32", h: "h-48" },
      { src: "/kemendikbud.png", w: "w-32", h: "h-64" },
    ],
    // Kolom 2
    [
      { src: "/kemendikbud.png", w: "w-32", h: "h-52" },
      { src: "/kemendikbud.png", w: "w-32", h: "h-52" },
      { src: "/kemendikbud.png", w: "w-32", h: "h-40" },
    ],
    // Kolom 3
    [
      { src: "/kemendikbud.png", w: "w-32", h: "h-44" },
      { src: "/kemendikbud.png", w: "w-32", h: "h-44" },
      { src: "/kemendikbud.png", w: "w-32", h: "h-48" },
    ],
    // Kolom 4
    [
      { src: "/kemendikbud.png", w: "w-32", h: "h-64" },
      { src: "/kemendikbud.png", w: "w-32", h: "h-40" },
    ],
  ];

  return (
    <div className="flex justify-center items-start gap-4 flex-wrap md:flex-nowrap px-4 w-1/2">
      {images.map((col, colIndex) => (
        <div
          key={colIndex}
          className={`inline-flex flex-col items-center gap-4 ${
            colIndex === 0
              ? "pt-20"
              : colIndex === 1
              ? "pt-4"
              : colIndex === 2
              ? "pt-4"
              : colIndex === 3
              ? "pt-16"
              : ""
          }`}
        >
          {col.map((img, i) => (
            <div
              key={i}
              className={`${img.w} ${img.h} rounded-xl overflow-hidden shadow-md outline-1`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={`Gallery ${colIndex}-${i}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default GalleryGrid;
