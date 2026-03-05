import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer: FC = () => {
  return (
    <footer className="pt-16 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pb-10 ">

          {/* LOGO */}
          <div className="lg:col-span-3 md:col-span-4 col-span-6">

            <div className="flex items-center gap-4 flex-wrap">

              <Link href="/">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="Alternatywy"
                  width={220}
                  height={80}
                  className="h-14 w-auto object-contain"
                />
              </Link>

              <Image
                src="/images/logo/przedsiebiorstwo-spoleczne.jpg"
                alt="Przedsiębiorstwo Społeczne"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />

            </div>

            <div className="mt-6">
              <p className="text-sm font-light text-muted dark:text-white/60 mb-6">
                Nasze domy otwarte są od poniedziałku do piątku w godzinach
                07:00 - 17:00
              </p>

              <p className="text-sm font-light text-muted dark:text-white/60 mb-0">
                W święta przypadające na te dni nasze placówki są zamknięte.
              </p>
            </div>
          </div>

          {/* ADRES */}
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <div className="lg:pl-10">

              <div className="flex items-start mb-8 gap-4">
                <Image
                  src="/images/icons/icon-pin.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />

                <div>
                  <h5 className="text-sm text-midnight_text dark:text-white mb-4">
                    ul. Fabryczna 23B <br />
                    65-463 Zielona Góra
                  </h5>

                  <p className="text-sm text-midnight_text dark:text-white mb-4">
                    ul. Gen.W.Sikorskiego 17/2 <br />
                    65-454 Zielona Góra
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-8 gap-4">
                <Image
                  src="/images/icons/icon-phone.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />

                <a
                  href="tel:+48603254662"
                  className="text-sm text-midnight_text dark:text-white hover:text-primary transition"
                >
                  +48 603 254 662
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/images/icons/icon-mail.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />

                <a
                  href="mailto:alternatywy.dlaseniora@gmail.com"
                  className="text-sm text-midnight_text dark:text-white hover:text-primary transition"
                >
                  alternatywy.dlaseniora@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* KONTAKTY */}
          <div className="lg:col-span-3 md:col-span-4 col-span-6">

            <h4 className="text-base text-midnight_text dark:text-white mb-4">
              Kontakty
            </h4>

            <div className="space-y-4 text-sm text-muted dark:text-white/60">

              <p>
                📞{" "}
                <span className="text-midnight_text dark:text-white font-medium">
                  +48 699 888 216
                </span>
                <br /> ul. Fabryczna
              </p>

              <p>
                📞{" "}
                <span className="text-midnight_text dark:text-white font-medium">
                  +68 4510936
                </span>
                <br /> ul. Sikorskiego
              </p>

            </div>
          </div>

          {/* ADRES REJESTROWY */}
          <div className="lg:col-span-3 md:col-span-4 col-span-6">

            <h4 className="text-base text-midnight_text dark:text-white mb-4">
              Adres rejestrowy
            </h4>

            <div className="text-sm text-muted dark:text-white/60 space-y-3">

              <p>SPÓŁDZIELNIA SOCJALNA „ALTERNATYWY”</p>

              <p>
                ul. Gen.W.Sikorskiego 15/4
                <br />
                65-454 Zielona Góra
              </p>

              <p>
                NIP: 9291928963
                <br />
                REGON: 368553461
                <br />
                KRS: 0000700353
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* DOLNA BELKA */}
      <div className="border-t border-border dark:border-dark_border">

        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex items-center justify-between py-6 flex-col lg:flex-row gap-4">

          <p className="text-sm text-midnight_text dark:text-white">
            Copyright © 2025 SPÓŁDZIELNIA SOCJALNA ALTERNATYWY DOM DZIENNEGO
            POBYTU DLA SENIORA W ZIELONEJ GÓRZE.
          </p>

          <div className="flex items-center gap-4 flex-none">

            <div className="flex items-center gap-6 text-sm text-midnight_text dark:text-white">

              <Link
                href="/polityka-prywatnosci"
                className="hover:text-primary transition"
              >
                Polityka prywatności
              </Link>

              <Link
                href="/oswiadczenie-o-dostepnosci"
                className="hover:text-primary transition"
              >
                Oświadczenie o dostępności
              </Link>

            </div>

            <div className="flex items-center gap-4">

              <a
                href="https://www.facebook.com/alternatywy.dlaseniora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="ri:facebook-fill"
                  className="text-xl text-midnight_text dark:text-white hover:text-primary cursor-pointer transition"
                />
              </a>

              <a
                href="https://www.instagram.com/alternatywy.dla.seniora/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="mdi:instagram"
                  className="text-xl text-midnight_text dark:text-white hover:text-primary cursor-pointer transition"
                />
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;