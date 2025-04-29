import React from "react";
import Image from "next/image";

export type GalleryItem = {
  src: string;
  alt?: string;
  className?: string;
};

interface GalleryGridProps {
  images: GalleryItem[];
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  return (
    <article className="grid grid-cols-4 grid-rows-6 gap-4 max-w-6xl mx-auto relative w-1/2 h-full">
      {images.map((img, i) => (
        <section
          key={i}
          className={`relative w-full overflow-hidden rounded-xl ${
            img.className || "col-span-1 row-span-2"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt || "Gallery Image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </section>
      ))}
    </article>
  );
};
export default GalleryGrid;
