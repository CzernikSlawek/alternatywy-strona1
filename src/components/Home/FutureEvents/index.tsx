import { Eventdata } from "@/app/api/data";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { format } from "date-fns";

const FutureEvents = () => {
  return (
    <section className="lg:py-28 py-16 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="text-center">
          <h2 className="text-3xl font-medium mb-3" data-aos="fade-left" > Aktualności</h2>
          <p className="text-base text-muted dark:text-white/60 mx-auto lg:max-w-60%">
          Archiwalne wydarzenia i informacje z życia naszej placówki
          </p>
        </div>
        <div className="mt-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {Eventdata.slice(0, 3).map((item, index) => (
            <Link key={index} href={`/events/${item.slug}`} className="group" data-aos="fade-up" data-aos-delay={`${index * 250}`}>
              <div className="relative overflow-hidden mb-8" >
                <div className="relative overflow-hidden mb-8 h-64">
                 <Image
                  src={item.image}
                  alt="image"
                  fill
                  className="object-cover group-hover:scale-110 scale-[1.01] duration-300"
                  />
                 </div>
              </div>
              <h4 className="text-lg font-medium mb-6  group-hover:text-primary">{item.title}</h4>
              <p className="text-muted dark:text-white/60 text-base mb-6">{item.text}</p>
              <h5 className="text-error hover:text-warning text-base font-medium flex gap-3 items-center w-fit">
                Dowiedź się więcej
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

export default FutureEvents;
