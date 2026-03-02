"use client";

import React, { useMemo, useState } from "react";

const ContactInfo = () => {
  // 1) Wklej tutaj DWIE lokalizacje (teksty + link do mapy)
  const locations = useMemo(
    () => [
      {
        id: "fabryczna",
        title: "ul. Fabryczna 23B",
        subtitle: "65-463 Zielona Góra",
        // Wklej tutaj embed dla Fabrycznej (instrukcja niżej jak wziąć)
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.1761882146047!2d15.502700076909415!3d51.93073977968874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47061161777d3bfd%3A0xf1645b18932cb2de!2sFabryczna%2023B%2C%2065-463%20Zielona%20G%C3%B3ra!5e0!3m2!1spl!2spl!4v1771449702809!5m2!1spl!2spl",
      },
      {
        id: "sikorskiego",
        title: "ul. Gen. W. Sikorskiego 17/2",
        subtitle: "65-454 Zielona Góra",
        // Wklej tutaj embed dla Sikorskiego
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.9469834037855!2d15.503431276909707!3d51.93492057938169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470613df12e75fbd%3A0x2dfb7902fcbc3456!2sGenera%C5%82a%20W%C5%82adys%C5%82awa%20Sikorskiego%2017%2F2%2C%2065-454%20Zielona%20G%C3%B3ra!5e0!3m2!1spl!2spl!4v1771450278943!5m2!1spl!2spl",
      },
    ],
    []
  );

  // 2) Domyślnie pokazujemy pierwszą lokalizację
  const [activeId, setActiveId] = useState(locations[0].id);

  const activeLocation = locations.find((l) => l.id === activeId) ?? locations[0];

  return (
    <section className="dark:bg-dark pt-8 lg:pb-24 pb-16">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="flex md:flex-row flex-col lg:items-center items-start justify-center md:gap-28 gap-8">
          {/* KAFEL 1 */}
          <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
            <div className="bg-grey dark:bg-midnight_text w-3.75 h-3.75 flex items-center justify-center rounded-full p-[15px]">
              <i className="bg-[url('/images/contact-page/career.svg')] bg-no-repeat bg-contain w-9 h-9 inline-block"></i>
            </div>

            <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
              <div>
                <span className="text-midnight_text dark:text-white text-xl font-bold">
                  {locations[0].title}
                </span>
                <p className="text-DeepOcean font-normal max-w-80 pt-3 pb-7 dark:text-white/50 text-base">
                  {locations[0].subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveId(locations[0].id)}
                className="text-primary text-base font-medium flex items-center gap-3 group hover:text-midnight_text dark:hover:text-white"
              >
                Znajdź
                <svg
                  width="23"
                  height="17"
                  viewBox="0 0 23 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary group-hover:fill-midnight_text dark:group-hover:fill-white"
                >
                  <path d="M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644C22.8482 9.0411 22.958 8.77619 22.958 8.49998C22.958 8.22377 22.8482 7.95886 22.653 7.76352Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* KAFEL 2 */}
          <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
            <div className="bg-grey dark:bg-midnight_text w-3.75 h-3.75 flex items-center justify-center rounded-full">
              <i className="bg-[url('/images/contact-page/career.svg')] bg-no-repeat bg-contain w-9 h-9 inline-block"></i>
            </div>

            <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
              <div>
                <span className="text-midnight_text dark:text-white text-xl font-bold">
                  {locations[1].title}
                </span>
                <p className="text-DeepOcean font-normal max-w-80 pt-3 pb-7 dark:text-white/50 text-base">
                  {locations[1].subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveId(locations[1].id)}
                className="text-primary text-base font-medium flex items-center gap-3 group hover:text-midnight_text dark:hover:text-white"
              >
                Znajdź
                <svg
                  width="23"
                  height="17"
                  viewBox="0 0 23 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary group-hover:fill-midnight_text dark:group-hover:fill-white"
                >
                  <path d="M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644C22.8482 9.0411 22.958 8.77619 22.958 8.49998C22.958 8.22377 22.8482 7.95886 22.653 7.76352Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* MAPA */}
        <div className="md:pt-32 pt-11 md:pb-28 pb-8">
          <iframe
            key={activeLocation.id} // wymusza odświeżenie iframe po zmianie
            src={activeLocation.mapSrc}
            width="1114"
            height="477"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg w-full"
          />
        </div>
      </div>

      <div className="border-b border-solid border-border dark:border-dark_border"></div>
    </section>
  );
};

export default ContactInfo;