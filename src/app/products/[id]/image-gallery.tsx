"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[3/4] relative bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden">
        <Image
          src={images[selectedIndex]}
          alt={`${productName} - ${selectedIndex === 0 ? "Front" : "Back"}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "relative w-20 h-24 rounded-lg overflow-hidden border-2 transition-all",
                selectedIndex === index
                  ? "border-black dark:border-white"
                  : "border-transparent hover:border-gray-300 dark:hover:border-gray-600"
              )}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
              <span className="absolute bottom-1 left-1 text-[10px] font-medium bg-black/70 text-white px-1.5 py-0.5 rounded">
                {index === 0 ? "Front" : "Back"}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
