"use client"

import { getPathFunc } from "@/utils/testing";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Test } from "./Test";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Donation } from "./Donation";
import DonationFormContext from "@/app/context/donationContext";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/images/hero/banner-bg.jpg",
    "/images/hero/banner-bg2.jpg",
    "/images/hero/banner-bg3.jpg",
    "/images/hero/banner-bg4.jpg",
    "/images/hero/banner-bg5.jpg",
    "/images/hero/banner-bg6.jpg",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // co 4 sekundy
  
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <section className="relative bg-cover text-white md:pt-40 md:pb-58 py-20 bg-no-repeat lg:mt-40 sm:mt-44 mt-20 overflow-hidden" >
    <div className="absolute inset-0 -z-10">
  <Image
    src={images[currentIndex]}
    alt="Hero background"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/30" />
</div>
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4 grid grid-cols-12">
        <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-md p-10 lg:col-span-5 lg:col-start-8 md:col-span-7 sm:col-span-10 col-span-12" data-aos="fade-right">
          <div className="flex justify-between mb-6">
            <div className="px-8 py-2 bg-midnight_text rounded-sm">
              <p className=" text-white text-sm font-semibold">
                Alternatywy - Alternatywna Przestrzeń Seniora
              </p>
            </div>
            <p className="text-muted dark:text-white/60 text-xs font-medium">.</p>
          </div>
          <h3 className="text-midnight_text dark:text-white text-lg font-bold mb-6">
            Alternatywy to kameralny dom dziennego pobytu dla osób starszych w Zielonej Górze
          </h3>
          <p className="text-midnight_text dark:text-white text-lg font-bold mb-4">
           Pracujemy wg metody Marii Montessori Senior
          </p>
          <div className="grid grid-cols-2 border-t border-border dark:border-dark_border mb-5">
            <div className="col-span-1 border-r border-border dark:border-dark_border px-5 py-4">
              <p className="text-xl text-midnight_text dark:text-white mb-1">Liczba domów</p>
              <h4 className="text-6xl text-midnight_text dark:text-white">2</h4>
            </div>
            <div className="col-span-1 px-5 py-4">
              <p className="ext-xl text-midnight_text dark:text-white mb-1">Liczba pacjentów</p>
              <h4 className="text-6xl text-midnight_text dark:text-white">56</h4>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
             href="/partnerzy"
             className="text-white bg-linear-to-r text-sm from-error to-warning px-7 py-4 hover:from-white hover:to-white dark:hover:from-dark dark:hover:to-dark border font-semibold border-transparent hover:border-error hover:text-error rounded-md inline-block"
            >
             Nasi Partnerzy
            </Link>
            <Test/>
          </div>
        </div>
      </div>
    </section>

    </>
    
  );
};

export default Hero;
