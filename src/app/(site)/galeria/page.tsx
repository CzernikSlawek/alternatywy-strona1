"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { src: "/images/gallery/1.jpg", alt: "Alternatywy - zdjęcie 1" },
  { src: "/images/gallery/2.jpg", alt: "Alternatywy - zdjęcie 2" },
  { src: "/images/gallery/3.jpg", alt: "Alternatywy - zdjęcie 3" },
  { src: "/images/gallery/4.jpg", alt: "Alternatywy - zdjęcie 4" },
  { src: "/images/gallery/5.jpg", alt: "Alternatywy - zdjęcie 5" },
  { src: "/images/gallery/6.jpg", alt: "Alternatywy - zdjęcie 6" },
];

export default function GaleriaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const next = () =>
    setOpenIndex((i) => (i === null ? 0 : (i + 1) % images.length));
  const prev = () =>
    setOpenIndex((i) =>
      i === null ? 0 : (i - 1 + images.length) % images.length
    );

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden"; // blokada scrolla pod spodem

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section className="pt-40 pb-16">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <h1 className="text-3xl font-semibold text-midnight_text dark:text-white">
          Galeria
        </h1>
        <p className="mt-2 text-muted dark:text-white/60">
          Zobacz, jak wygląda codzienność w Alternatywach.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative w-full h-64 rounded-xl overflow-hidden shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Otwórz zdjęcie: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={(e) => {
            // klik w tło zamyka
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
        >
          <div className="relative w-full max-w-5xl">
            {/* Zamknij */}
            <button
              type="button"
              onClick={close}
              className="absolute -top-12 right-0 text-white/90 hover:text-white text-sm"
            >
              Zamknij (ESC)
            </button>

            {/* Obraz */}
            <div className="relative w-full h-[70vh] rounded-xl overflow-hidden bg-black">
              <Image
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Nawigacja */}
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={prev}
                className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
              >
                ← Poprzednie
              </button>

              <p className="text-white/80 text-sm">
                {openIndex + 1} / {images.length}
              </p>

              <button
                type="button"
                onClick={next}
                className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
              >
                Następne →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}