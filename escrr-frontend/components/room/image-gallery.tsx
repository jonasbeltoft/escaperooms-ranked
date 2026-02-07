"use client";

import React, { useState } from "react";
import Image from "next/image";

type ImageGalleryProps = {
    images?: string[];
};

export default function ImageGallery({ images = [] }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    if (!images.length) {
        return (
            <div className="w-full h-49 bg-gray-100 flex items-center justify-center rounded-base border-2 border-border">
                <span className="text-gray-500">No images available</span>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Thumbnails first so they appear on the left on larger screens */}
            <div className="flex flex-row gap-4 sm:flex-col">
                {images.slice(1).map((src, i) => {
                    const idx = i + 1; // actual index in images
                    const isSelected = selectedIndex === idx;
                    return (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedIndex(isSelected ? 0 : idx)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedIndex(idx);
                                }
                            }}
                            aria-current={isSelected}
                            className={`aspect-4/3 rounded-base overflow-hidden border-2 border-border focus:outline-none cursor-pointer`}
                        >
                            <Image src={isSelected ? images[0] : src} alt={`thumb-${idx}`} width={400} height={300} className="w-full h-full object-cover object-center" />
                        </button>
                    );
                })}
            </div>

            <div className="aspect-3/2 sm:aspect-auto col-span-1 sm:col-span-2 rounded-base overflow-hidden border-2 border-border">
                <Image
                    src={images[selectedIndex]}
                    alt={`room image ${selectedIndex + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover object-center rounded-base"
                    priority
                />
            </div>
        </div>
    );
}
