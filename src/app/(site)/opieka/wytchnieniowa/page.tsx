import Image from "next/image";

export default function OpiekaWytchnieniowaPage() {
  return (
    <section className="pt-40 pb-16">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">

        {/* NAGŁÓWEK */}
        <h1 className="text-3xl font-semibold text-midnight_text dark:text-white">
          Opieka wytchnieniowa
        </h1>

        <p className="mt-2 text-muted dark:text-white/60">
          REKRUTACJA DO UDZIAŁU w realizacji Programu „Opieka wytchnieniowa”
          dla Organizacji Pozarządowych edycja 2026.
        </p>

        {/* PIERWSZA SEKCJA */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ZDJĘCIE */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center p-4">
            <Image
              src="/images/opieka/wytchnieniowa.jpg"
              alt="Opieka wytchnieniowa"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* TEKST */}
          <div className="bg-white/70 dark:bg-dark/70 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md">
            <h2 className="text-xl font-semibold text-midnight_text dark:text-white">
              Najważniejsze informacje
            </h2>

            <ul className="mt-4 space-y-2 text-muted dark:text-white/70">
              <li>
                Informujemy, że Spółdzielnia Socjalna ALTERNATYWY na 2026 rok otrzyma 1441800,00 zł
                dofinansowania na realizację Programu „Opieka wytchnieniowa” dla Organizacji Pozarządowych –
                edycja 2026, dofinansowanego przez Ministerstwo Rodziny, Pracy i Polityki Społecznej
                ze środków Funduszu Solidarnościowego.
              </li>

              <li>W realizację zadania Spółdzielnia wniesie wkład własny w wysokości 23 500,00 zł.</li>

              <li>
                Dzięki pozyskanym środkom zrealizujemy usługi opieki wytchnieniowej dla członków rodzin lub opiekunów
                sprawujących bezpośrednią opiekę nad osobami z niepełnosprawnościami posiadającymi:
              </li>

              <li>• orzeczenie o znacznym stopniu niepełnosprawności</li>

              <li>
                • orzeczenie traktowane na równi z orzeczeniem o znacznym stopniu niepełnosprawności,
                zgodnie z art. 5 i art. 62 ustawy z dnia 27 sierpnia 1997 r. o rehabilitacji zawodowej i społecznej
                oraz zatrudnianiu osób niepełnosprawnych.
              </li>
            </ul>
          </div>
        </div>

        {/* DRUGA SEKCJA – ODWROTNY UKŁAD */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* TEKST – LEWA STRONA */}
          <div className="order-2 lg:order-1 bg-white/70 dark:bg-dark/70 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md">
            <h2 className="text-xl font-semibold text-midnight_text dark:text-white">
              Dodatkowe wsparcie
            </h2>

            <p className="mt-4 text-muted dark:text-white/70">
              W ramach opieki wytchnieniowej oferujemy również:
            </p>

            <ul className="mt-4 space-y-2 text-muted dark:text-white/70">
              <li>
                Usług opieki wytchnieniowej świadczone będą w ramach pobytu w Domach Pobytu Dziennego "ALTERNATYWY"
                w Zielonej Górze w dni robocze od godz. 7:00 do 17:00
              </li>
              <li>
                Zgłoszenia do Programu będziemy przyjmować od 2 do 10 lutego 2026 r., w godzinach 8:00–16:00
                w naszych placówkach:
              </li>
              <li>ul. Fabryczna 23B, 65-463 Zielona Góra,</li>
              <li>ul. Gen. W. Sikorskiego 17/2, 65-454 Zielona Góra.</li>
              <li>Wymagane dokumenty:</li>
              <li>• wypełniona karta zgłoszeniowa (do pobrania poniżej),</li>
              <li>• kopia orzeczenia o niepełnosprawności (oryginał orzeczenia do wglądu)</li>
              <li>Telefon kontaktowy koordynatora: +48 603 254 662 - Aleksandra Dębek</li>
              <li>Uwaga! O przyjęciu do Programu nie będzie decydowała kolejność zgłoszeń.</li>
              <li>Decyzje o przyjęciu, odmowie lub wpisania na listę rezerwową zgłoszonych osób zostaną rozesłane do 11 lutego 2026r.</li>
            </ul>
          </div>

          {/* ZDJĘCIE – PRAWA STRONA */}
          <div className="order-1 lg:order-2 w-full rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center p-4">
            <Image
              src="/images/opieka/wytchnieniowa-2.jpg"
              alt="Opieka wytchnieniowa"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* PODSUMOWANIE */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-midnight_text dark:text-white">
            Zachęcamy do udziału w Programie!
          </h2>

          <p className="mt-4 text-muted dark:text-white/70">
            Udział w Programie to realna szansa na uzyskanie profesjonalnego i bezpłatnego wsparcia w wymiarze
            240 godzin opieki wytchnieniowej, które może znacząco poprawić jakość życia członków rodzin lub opiekunów
            sprawujących bezpośrednią opiekę nad osobami z niepełnosprawnościami.
          </p>
        </div>

        {/* ====== DOKUMENTY DO POBRANIA ====== */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-midnight_text dark:text-white mb-8">
            Dokumenty do pobrania
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/pliki/opieka-wytchnieniowa/klauzula-rodo.pdf"
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
              href="/pliki/opieka-wytchnieniowa/karta-realizacji.pdf"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight hover:shadow-lg transition no-underline"
            >
              <p className="font-semibold text-midnight_text dark:text-white group-hover:text-primary">
                Karta realizacji
              </p>
              <p className="text-sm text-muted dark:text-white/60 mt-2">
                Pobierz PDF
              </p>
            </a>

            <a
              href="/pliki/opieka-wytchnieniowa/karta-zgloszenia.pdf"
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
              href="/pliki/opieka-wytchnieniowa/program.pdf"
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