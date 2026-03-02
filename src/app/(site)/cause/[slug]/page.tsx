"use client";

import React from "react";
import { CauseData } from "@/app/api/data";
import { useParams } from "next/navigation";
import Volunteer from "@/components/SharedComponent/Volunteer";
import Image from "next/image";

const PLAN_DESCRIPTION = `Plan dnia w Domu Dziennego Pobytu „Alternatywy” został opracowany w duchu Montessori Senior.
Każdy element ma na celu wspieranie samodzielności, relacji społecznych oraz dobrego samopoczucia uczestników.
Harmonogram zapewnia równowagę między aktywnością, relaksem i integracją.`;

const Cause = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = CauseData.find((x) => x.slug === slug);

  if (!item) {
    return (
      <section className="dark:bg-dark pt-44 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold">
            Nie znaleziono pozycji planu dnia
          </h2>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="dark:bg-dark pt-44 py-24">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
          <div className="max-w-4xl mx-auto">

            <div className="rounded-lg overflow-hidden mb-8">
              <Image
                src={item.image}
                alt={item.title}
                width={1170}
                height={766}
                className="w-full h-auto object-cover"
              />
            </div>

            <h1 className="text-[40px] leading-tight font-semibold mb-6">
              {item.title}
            </h1>

            <p className="text-muted dark:text-white/60 text-base leading-relaxed mb-8">
              {item.text}
            </p>

            <div className="mb-10 grid sm:grid-cols-2 grid-cols-1 gap-6">
              <div className="p-6 rounded-lg border border-border dark:border-dark_border">
                <p className="text-sm text-muted dark:text-white/60 mb-2">
                  Godzina
                </p>
                <p className="text-lg font-semibold">
                  {item.godzina}
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border dark:border-dark_border">
                <p className="text-sm text-muted dark:text-white/60 mb-2">
                  Czas trwania
                </p>
                <p className="text-lg font-semibold">
                  {item.czas}
                </p>
              </div>
            </div>

            <div className="p-8 bg-light_grey dark:bg-midnight_text rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                <p>Przywróć radość życia i wiarę w siebie</p>
<p>ALTERNATYWY to Dom Dziennego Pobytu, który powstał z myślą o Seniorach i ich bliskich. Naszym celem jest zapewnienie osobom starszym uczestnictwa w życiu społecznym, kulturalnym i towarzyskim. Pragniemy przywrócić Seniorom radość życia i wiarę w siebie.</p>
<p>Zapraszamy do nas osoby starsze, samotne, szukające kontaktu i przyjaźni z rówieśnikami oraz wszystkich Seniorów, którym zależy na interesującym spędzaniu wolnego czasu, i nie tylko. Zapewniamy wsparcie rodzinom, którym zależy na zapewnieniu bezpieczeństwa, towarzystwa i utrzymania dobrej kondycji psychicznej, fizycznej i społecznej swoim bliskim Seniorom, jednakże z różnych powodów nie mogą się nimi zaopiekować.</p>
<p>Nasze Domy mieszczą się w Zielonej Górze, na parterze odnowionej kamienicy przy ul. Sikorskiego 17/2 i przy ul. Fabrycznej 23b. Lokalizacja Domów jest bardzo atrakcyjna ze względu na bliskość terenu zielonego (Park Sowińskiego) oraz ścisłego centrum miasta (deptak, kościoły, filharmonia, teatr, muzeum).</p>
<p>Nasze lokale składają się z kilku pomieszczeń, dostosowanych do potrzeb Seniorów. Sercem każdego z domów jest przestronny salon wyposażony w stylowe, komfortowe sofy i fotele, wspólny stół oraz wysokiej klasy sprzęt RTV. Niewątpliwą przyjemność sprawią naszym seniorom przytulne pokoje relaksu, w których mają do dyspozycji biblioteczkę, wygodne, rozkładane fotele oraz lampy antydepresyjne do terapii światłem. Dalsze części naszych Domów to zaciszne kąciki kawiarniane z fotelami i stolikami kawowymi, w których nasi Seniorzy delektować się mogą ulubionymi smakami kawy i herbaty. Przy jednym z Domów powstał prywatny ogródek ze ścieżkami i ławeczkami wśród cieni drzew.</p>
<p>🕰️ Plan dnia</p>
<p>Dom Dziennego Pobytu „Alternatywy” w Zielonej Górze</p>
<p>(opracowano w duchu Montessori Senior)</p>
<p>7:00 – 8:30</p>
<p>Powitanie dnia i czas wspólnego bycia</p>
<p>Przybycie uczestników do ośrodka</p>
<p>Swobodne rozmowy przy herbacie lub kawie</p>
<p>Czynności pielęgnacyjne i higieniczne (pomoc w toalecie, zmiana odzieży, pielęgnacja dłoni, włosów)</p>
<p>Indywidualne rozmowy z terapeutami i opiekunami</p>
<p>Czas na spokojne wejście w rytm dnia</p>
<p>💬 Cel terapeutyczny: wzmocnienie poczucia bezpieczeństwa, orientacji w czasie i miejscu, budowanie relacji i wspólnoty.</p>
<p>🌿 Zasada Montessori: „Dzień zaczynamy od człowieka, nie od zadania.”</p>
<p>8:30 – 9:30</p>
<p>Ciekawostki z miasta – „Żyjemy razem z Zieloną Górą”</p>
<p>Codzienne aktualności i wydarzenia lokalne</p>
<p>Rozmowy o tym, co dzieje się w regionie</p>
<p>Czytanie fragmentów gazet, wspólne komentarze, pytania i refleksje</p>
<p>Przypominanie wydarzeń historycznych i rocznic</p>
<p>🧠 Cel terapeutyczny: orientacja w rzeczywistości, aktywizacja poznawcza, podtrzymywanie pamięci semantycznej i społecznej.</p>
<p>🎓 Inspiracja Montessori Senior: „Uczestnik jest częścią społeczności – chcemy, by czuł, że wciąż w niej uczestniczy.”</p>
<p>9:30 – 10:00</p>
<p>Śniadanie</p>
<p>Wspólne przygotowanie stołów (zachęta do prostych czynności: nakrycie, rozłożenie serwetek, nalanie wody)</p>
<p>Spożywanie posiłku w spokojnej atmosferze, przy rozmowie i muzyce w tle</p>
<p>🥣 Cel terapeutyczny: trening samodzielności, podtrzymywanie nawyków dnia codziennego, aktywizacja sensoryczna i społeczna.</p>
<p>10:00 – 10:30</p>
<p>Gimnastyka poranna</p>
<p>Zajęcia ruchowe dostosowane do możliwości uczestników</p>
<p>Elementy gimnastyki ogólnousprawniającej i koordynacyjnej</p>
<p>Ćwiczenia z wykorzystaniem piłek, taśm, chust, przyrządów Montessori</p>
<p>Wplecione elementy rytmiki i muzyki</p>
<p>🤸‍♀️ Cel terapeutyczny: poprawa krążenia, mobilizacji stawów, pobudzenie mózgu do aktywności, integracja grupy.</p>
<p>🪶 Zasada Montessori: ruch jest wyrazem życia – każda aktywność fizyczna jest formą terapii poznawczej.</p>
<p>10:30 – 11:00</p>
<p>Przerwa na kawę i coś słodkiego</p>
<p>Kawa, herbata, owoce, drobne przekąski</p>
<p>Czas na swobodne rozmowy i odpoczynek po gimnastyce</p>
<p>☕ Cel terapeutyczny: regeneracja, relaks, budowanie atmosfery wspólnoty i przyjemności dnia.</p>
<p>11:00 – 13:00</p>
<p>Zajęcia terapeutyczne – bloki tematyczne</p>
<p>Zajęcia odbywają się w rotacji, zgodnie z tygodniowym planem pracy terapeutycznej.</p>
<p>W tym czasie uczestnicy korzystają z różnych form terapii:</p>
<p>🔹 Ergoterapia</p>
<p>Prace manualne, czynności praktyczne, aktywność przy „stołach aktywnych dłoni”</p>
<p>Układanie, sortowanie, tworzenie prostych kompozycji, czynności życia codziennego</p>
<p>🎯 Cel: utrzymanie motoryki małej, koncentracji i koordynacji wzrokowo-ruchowej.</p>
<p>🔹 Socjoterapia</p>
<p>Rozmowy tematyczne, trening emocji, gry integracyjne</p>
<p>Praca nad relacjami, komunikacją i rozumieniem emocji</p>
<p>🎯 Cel: budowanie poczucia przynależności i bezpieczeństwa emocjonalnego.</p>
<p>🔹 Arteterapia i muzykoterapia</p>
<p>Malowanie, rysowanie, praca z materiałami naturalnymi</p>
<p>Śpiew, rytm, taniec siedzący, słuchanie muzyki z młodości</p>
<p>Profesjonalne sesje muzykoterapeutyczne z terapeutą</p>
<p>🎵 Cel: wyrażanie emocji, stymulacja pamięci i wyobraźni, redukcja napięcia.</p>
<p>🔹 Terapie poznawcze</p>
<p>Ćwiczenia pamięci, uwagi i koncentracji</p>
<p>Praca z kartami Montessori Senior, grami edukacyjnymi i treningami umysłowymi</p>
<p>Orientacja w czasie, przestrzeni i osobie</p>
<p>🧩 Cel: podtrzymanie funkcji poznawczych i trening pamięci operacyjnej.</p>
<p>13:30 – 14:00</p>
<p>Obiad</p>
<p>Wspólny posiłek w atmosferze spokoju i wdzięczności</p>
<p>Zachęta do udziału w prostych czynnościach przed i po posiłku (nalewanie zupy, podawanie chleba, składanie serwetek)</p>
<p>🍲 Cel terapeutyczny: wspieranie samodzielności, rytmu dnia, utrzymywanie kompetencji społecznych.</p>
<p>14:00 – 14:45</p>
<p>Biblioterapia interaktywna</p>
<p>Czytanie fragmentów literatury, wierszy, wspomnień</p>
<p>Rozmowy inspirowane tekstem: emocje, wspomnienia, wartości</p>
<p>Często połączona z muzykoterapią i elementami reminiscencji</p>
<p>📖 Cel terapeutyczny: rozwój języka, pobudzanie pamięci autobiograficznej, budowanie mostów między teraźniejszością a przeszłością.</p>
<p>🌼 Zasada Montessori: słowo ma moc – pozwólmy, by było mostem, nie granicą.</p>
<p>14:45 – 15:15</p>
<p>Podwieczorek</p>
<p>Czas na herbatę, owoce, drobne ciasto lub przekąskę</p>
<p>Wspólne rozmowy, uśmiech i wdzięczność za dzień</p>
<p>🍎 Cel terapeutyczny: podtrzymanie rytmu dnia, relaks, odpoczynek emocjonalny.</p>
<p>15:15 – 16:00</p>
<p>Terapie indywidualne i ludoterapia</p>
<p>Indywidualne spotkania z terapeutą lub psychologiem</p>
<p>Trening funkcji poznawczych, ćwiczenia manualne, relaksacja</p>
<p>HORTIKULOTERAPIA: kontakt z naturą, roślinami, zwierzętami, praca przy roślinach, podlewanie, pielęgnacja ziół</p>
<p>Ludoterapia: gry planszowe , edukacyjne, manipulacyjne, konstrukcyjne,karciane,tematyczne.</p>
<p>🌿 Cel terapeutyczny: rozwój więzi emocjonalnej ze światem, redukcja lęku, poczucie sensu i odpowiedzialności, rozwój poznawczy ,budowanie więzi społecznych.</p>
<p>16:00 – 17:00</p>
<p>Czas rozchodzenia się uczestników</p>
<p>Swobodne gry i zabawy, rozmowy, muzyka</p>
<p>Przygotowanie do wyjścia, pożegnanie z terapeutami</p>
<p>Krótka refleksja nad dniem („co dziś sprawiło Ci przyjemność?”)</p>
<p>🚪 Cel terapeutyczny: spokojne zakończenie dnia, wzmocnienie pozytywnego nastroju, podtrzymanie poczucia wspólnoty.</p>
<p>🕊 Zasada przewodnia dnia</p>
<p>„Dzień w Domu Dziennego Pobytu ‘Alternatywy’ jest jak rytm serca – przewidywalny, spokojny, dający poczucie bezpieczeństwa.</p>
<p>W tym rytmie jest miejsce na ruch, słowo, muzykę, wspomnienie i ciszę – czyli na życie.”</p>
              </h3>
              <p className="text-muted dark:text-white/60 leading-relaxed whitespace-pre-line">
                {PLAN_DESCRIPTION}
              </p>
            </div>

          </div>
        </div>
      </section>

      <Volunteer />
    </>
  );
};

export default Cause;