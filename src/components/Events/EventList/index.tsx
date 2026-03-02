import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Eventdata } from "@/app/api/data";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

const EventList = () => {
  return (
    <section className="lg:py-28 py-16 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {Eventdata.map((item, index) => (
            <Link
              key={index}
              href={`/events/${item.slug}`}
              className="group"
              data-aos="fade-up"
              data-aos-delay={`${index * 120}`}
            >
              <div className="relative overflow-hidden mb-8">
                <Image
                  src={item.image}
                  alt="image"
                  width={350}
                  height={200}
                  className="w-full h-auto group-hover:scale-110 duration-300 scale-[1.01]"
                />

                {/* DATA W ROGU */}
                <div className="px-3 py-2 bg-linear-to-r from-primary to-secondary absolute z-10 top-3 right-3 rounded-sm">
                 <p className="text-white text-sm mb-0 text-center leading-tight">
                 <span className="block uppercase text-xs">
                 {format(new Date(item.date), "MMM", { locale: pl })}
                 </span>

                 <span className="block text-2xl font-bold">
                 {format(new Date(item.date), "dd", { locale: pl })}
                 </span>

                 <span className="block text-xs">
                 {format(new Date(item.date), "yyyy")}
                 </span>
                </p>
               </div>
              </div>

              <h4 className="text-lg font-medium mb-6 group-hover:text-primary">
                {item.title}
              </h4>

              <p className="text-muted dark:text-white/60 text-base mb-6">
                {item.text}
              </p>

              <h5 className="text-error hover:text-warning text-base font-medium flex gap-3 items-center w-fit">
                Sprawdź
                <span>
                  <Icon
                    icon="solar:arrow-right-linear"
                    width="20"
                    height="20"
                  />
                </span>
              </h5>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventList;