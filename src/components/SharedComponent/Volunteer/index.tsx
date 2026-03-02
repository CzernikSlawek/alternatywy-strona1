"use client"

import Link from "next/link";

const Volunteer = () => {
  return (
    <section className="lg:py-28 py-16 bg-[url('/images/background/volunteer-bg.jpg')] bg-no-repeat bg-cover overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="text-center">

          <h2 className="text-3xl font-medium text-white mb-6">
            Alternatywy – miejsce, gdzie codzienność nabiera wartości.
          </h2>

          <p className="text-3xl text-white lg:max-w-80% mx-auto mb-6">
            Opieka, aktywność i relacje w duchu Montessori Senior.
          </p>

          <div className="flex justify-center">
            <Link
              href="/partnerzy"
              className="text-white rounded-md bg-linear-to-r text-sm font-semibold from-error to-warning px-7 py-4 hover:from-transparent hover:to-transparent border border-transparent hover:border-error hover:text-error inline-block"
            >
              Nasi Partnerzy
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Volunteer;