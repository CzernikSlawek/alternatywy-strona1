import Image from "next/image";

export default function OpiekaKomercyjnaPage() {
  return (
    <section className="pt-40 pb-16">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <h1 className="text-3xl font-semibold text-midnight_text dark:text-white">
          Opieka komercyjna
        </h1>
        <p className="mt-2 text-muted dark:text-white/60">
        Osoby starsze, samotne, szukające kontaktu i przyjaźni z rówieśnikami oraz wszystkich Seniorów, którym zależy na interesującym spędzaniu wolnego czasu, i nie tylko, i które z jakichś przyczyn nie mogą zostać objęte nieodpłatnym pobytem w naszych domach zapraszamy do pobytu odpłatnego, którego koszt wynosi 150 zł za dzień. Opłatę pobieramy na koniec miesiąca (na podstawie faktury sumującej dni pobytu).
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/opieka/komercyjna.jpg"
              alt="Opieka komercyjna"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="bg-white/70 dark:bg-dark/70 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-midnight_text dark:text-white">
            Naszym Seniorom zapewniamy:
            </h2>
            <ul className="mt-4 space-y-2 text-muted dark:text-white/70">
              <li>• Możliwość pobytu od poniedziałku do piątku w godzinach 7:00-17:00</li>
              <li>• Wyżywienie (ciepłe/zimne napoje, przekąski, dwudaniowy obiad)</li>
              <li>• Profesjonalną opiekę wykwalifikowanej kadry opiekunek i opiekunów, i terapeutek</li>
              <li>• Poczucie bezpieczeństwa i miłą, rodzinną atmosferę</li>
              <li>• Towarzystwo i kontakt z rówieśnikami</li>
              <li>• Wsparcie w pokonywaniu życiowych trudności i ograniczeń</li>
              <li>• Komfortowe wnętrze i wyposażenie</li>
              <li>• Uroczyste obchodzenie świąt i jubileuszy</li>
              <li>• Integracyjne "wieczorki taneczne</li>
              <li>• Porady higieniczne i kosmetyczne</li>
              <li>• Szeroki wachlarz zajęć (muzyczne, ruchowe, treningi pamięci, taneczne, plastyczne, teatralne, kulinarne, relaksacyjne, światłoterapia, czytanie, gry i zabawy towarzyskie, spacery, seanse filmowe, wyjścia do teatru, muzeum i na inne wydarzenia kulturalne)</li>
              <li>• Wsparcie dla rodzin opiekujących się seniorami</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}