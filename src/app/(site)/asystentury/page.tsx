import Image from "next/image";

export default function OpiekaKomercyjnaPage() {
  return (
    <section className="pt-40 pb-16">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">

        <h1 className="text-3xl font-semibold text-midnight_text dark:text-white">
          Asystentura osób z niepełnosprawnością
        </h1>

        <p className="mt-2 text-muted dark:text-white/60">
          Spółdzielnia Socjalna ALTERNATYWY na 2026 rok otrzyma 1753390,00 zł dofinansowania na realizację Programu „Asystent osobisty osób z niepełnosprawnościami” dla Organizacji Pozarządowych – edycja 2026, dofinansowanego przez Ministerstwo Rodziny, Pracy i Polityki Społecznej ze środków Funduszu Solidarnościowego. W realizację zadania Spółdzielnia wniesie wkład własny w wysokości 38640,00 zł. Dzięki pozyskanym środkom wsparciem asystenckim zostaną objęte osoby dorosłe z niepełnosprawnościami wymagające pomocy w codziennym funkcjonowaniu i uczestnictwie w życiu społecznym.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/opieka/komercyjna2.jpg"
              alt="Asystentura osób z niepełnosprawnością"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="bg-white/70 dark:bg-dark/70 backdrop-blur-md rounded-xl p-6 border border-white/20">

            <h2 className="text-xl font-semibold text-midnight_text dark:text-white mb-4">
              Zgłoszenia do Programu będziemy przyjmować od 2 do 10 stycznia 2026 r.,
              w godzinach 8:00–16:00 w naszych dwóch domach:
            </h2>

            <ul className="space-y-2 text-midnight_text dark:text-white">
              <li>• ul. Fabryczna 23B, 65-463 Zielona Góra</li>
              <li>• ul. Gen. W. Sikorskiego 17/2, 65-454 Zielona Góra</li>
              <li>• Telefon kontaktowy koordynatora: +48 603 254 662 – Mateusz CZECHOWSKI</li>
            </ul>

            <ul className="mt-6 space-y-2 text-muted dark:text-white/70">
              <li>• Uwaga! O przyjęciu do Programu nie będzie decydowała kolejność zgłoszeń.</li>
              <li>• Do Programu kwalifikują się osoby z niepełnosprawnościami posiadające:</li>
              <li>• orzeczenie o znacznym stopniu z niepełnosprawnością sprzężoną</li>
              <li>• orzeczenie o znacznym stopniu niepełnosprawności</li>
              <li>• Wymagane dokumenty:</li>
              <li>• wypełniona karta zgłoszeniowa</li>
              <li>• kopia orzeczenia o niepełnosprawności</li>
              <li>• zaświadczenie o ubezwłasnowolnieniu (jeśli dotyczy)</li>
              <li>• Zachęcamy do udziału w Programie!</li>
            </ul>

          </div>
        </div>

        {/* ====== DO POBRANIA ====== */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-midnight_text dark:text-white mb-8">
            Dokumenty do pobrania
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <a
              href="/pliki/asystentura/klauzula-rodo.pdf"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight hover:shadow-lg transition no-underline"
            >
              <p className="font-semibold text-midnight_text dark:text-white group-hover:text-primary">
                Klauzula RODO
              </p>
              <p className="text-sm text-muted dark:text-white/60 mt-2">
                Pobierz PDF
              </p>
            </a>

            <a
              href="/pliki/asystentura/karta-zakresu-czynnosci.pdf"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight hover:shadow-lg transition no-underline"
            >
              <p className="font-semibold text-midnight_text dark:text-white group-hover:text-primary">
                Karta zakresu czynności
              </p>
              <p className="text-sm text-muted dark:text-white/60 mt-2">
                Pobierz PDF
              </p>
            </a>

            <a
              href="/pliki/asystentura/karta-zgloszenia.pdf"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight hover:shadow-lg transition no-underline"
            >
              <p className="font-semibold text-midnight_text dark:text-white group-hover:text-primary">
                Karta zgłoszenia
              </p>
              <p className="text-sm text-muted dark:text-white/60 mt-2">
                Pobierz PDF
              </p>
            </a>

            <a
              href="/pliki/asystentura/program.pdf"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight hover:shadow-lg transition no-underline"
            >
              <p className="font-semibold text-midnight_text dark:text-white group-hover:text-primary">
                Program
              </p>
              <p className="text-sm text-muted dark:text-white/60 mt-2">
                Pobierz PDF
              </p>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}