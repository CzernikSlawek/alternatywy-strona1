import React, { FC } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

interface EventProps {
  title?: string;
  detail?: string;
  eventdate?: string;
  image?: any;
  youtubeId?: string; // ⬅️ DODANE
}

const EventDetails: FC<EventProps> = ({
  title,
  detail,
  eventdate,
  image,
  youtubeId,
}) => {
  const formattedDate = eventdate
    ? format(new Date(eventdate), "d MMMM yyyy", { locale: pl })
    : "Brak daty";

  return (
    <section className="sm:mt-28 pt-28 sm:pb-28 pb-12 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="max-w-4xl mx-auto">

          {/* FILM LUB ZDJĘCIE */}
          <div className="mb-8 rounded-lg overflow-hidden">
            {youtubeId ? (
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                />
              </div>
            ) : (
              <Image
                src={image}
                alt="image"
                width={1170}
                height={766}
                className="w-full h-auto rounded-lg"
                quality={100}
              />
            )}
          </div>

          {/* DATA */}
          <p className="text-base text-primary mb-4">
            {formattedDate}
          </p>

          {/* TYTUŁ */}
          <h2 className="text-4xl font-medium text-darktext mb-6">
            {title}
          </h2>

          {/* TREŚĆ */}
          <p className="text-muted dark:text-white/60 text-base leading-relaxed">
            {detail}
          </p>

        </div>
      </div>
    </section>
  );
};

export default EventDetails;