"use client"
import React, { useState } from "react";
import Image from "next/image";

const PosterCard = ({ poster }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setIsOpen(true)}
        className="
          group relative flex h-full flex-col
          rounded-xl border border-slate-200 shadow-sm
          aspect-[210/297] overflow-hidden
          bg-contain bg-center bg-no-repeat
          cursor-pointer
        "
        style={{ backgroundImage: `url(${poster.imageUrl})` }}
      >
        {/* Overlay */}
        <div
          className="
            absolute inset-x-0 bottom-0
            bg-black opacity-0 group-hover:opacity-90
            transition-opacity duration-300
            p-6
          "
        >
          <h3 className="text-xl font-semibold text-white">
            {poster.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/90">
            {poster.description}
          </p>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/80 backdrop-blur-sm
            p-4
          "
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="
              relative
              w-full max-w-5xl
              max-h-[90vh]
              flex items-center justify-center
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="
                absolute -top-10 right-0
                text-white text-3xl font-bold
              "
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative w-full h-[90vh]">
              <Image
                src={poster.imageUrl}
                alt={poster.title}
                fill
                className="object-contain rounded-xl"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PosterCard;
