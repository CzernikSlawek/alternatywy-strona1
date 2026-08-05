import Image from "next/image";

const partners = [
  { name: "Partner 1", src: "/images/partners/partners-1.jpg" },
  { name: "Partner 2", src: "/images/partners/partners-2.jpg" },
  { name: "Partner 3", src: "/images/partners/partners-3.jpg" },
  { name: "Partner 4", src: "/images/partners/partners-4.jpg" },
  { name: "Partner 5", src: "/images/partners/partners-5.jpg" },
  { name: "Partner 6", src: "/images/partners/partners-6.jpg" },
  { name: "Partner 7", src: "/images/partners/partners-7.jpg" },
  { name: "Partner 8", src: "/images/partners/partners-8.jpg" },
  { name: "Partner 9", src: "/images/partners/partners-9.jpg" },
  { name: "Partner 10", src: "/images/partners/partners-10.jpg" },
  { name: "Partner 11", src: "/images/partners/partners-11.jpg" },
  { name: "Partner 12", src: "/images/partners/partners-12.jpg" },
  { name: "Partner 13", src: "/images/partners/partners-13.jpg" },
  { name: "Partner 14", src: "/images/partners/partners-14.jpg" },
  { name: "Partner 15", src: "/images/partners/partners-15.jpg" },
  { name: "Partner 16", src: "/images/partners/partners-16.jpg" },
  { name: "Partner 17", src: "/images/partners/partners-17.jpg" },
  { name: "Partner 18", src: "/images/partners/partners-18.jpg" },
  { name: "Partner 19", src: "/images/partners/partners-19.jpg" },
  { name: "Partner 20", src: "/images/partners/partners-20.jpg" },
];

export default function PartnerzyPage() {
  return (
    <main className="pt-40 pb-20 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <h1 className="text-3xl font-bold text-center text-midnight_text dark:text-white mb-4">
          Nasi Partnerzy
        </h1>

        <p className="text-center text-muted dark:text-white/60 max-w-3xl mx-auto mb-12">
          Dziękujemy naszym Partnerom za wsparcie i współpracę. Razem tworzymy miejsce, w którym Seniorzy mogą
          aktywnie i bezpiecznie spędzać czas.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white dark:bg-dark rounded-xl border border-border dark:border-dark_border p-6 shadow-sm hover:shadow-md transition flex items-center justify-center"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={500}
                height={300}
                className="object-contain max-h-[200px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}