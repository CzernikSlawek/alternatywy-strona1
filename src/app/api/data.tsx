export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "/#blog" },
];

export const helpdata: { icon: string; title: string; text: string }[] = [
  {
    icon: "/images/help/opieka.jpg",
    title: "Profesjonalna opieka",
    text: "Pozwól nam zająć się najbliższym Tobie Seniorem podczas Twojej nieobecności. Otoczymy ciepłem i stałą opieką Twoich najbliższych.",
  },
  {
    icon: "/images/help/atmosfera.jpg",
    title: "Miła, rodzinna atmosfera",
    text: "Domowy klimat zapewnia miła rodzinna, atmosfera jak i przytulne i komfortowe wyposażenie lokalu. Nasi podopieczni, poza opieką, znajdą tu towarzystwo i kontakt z rówieśnikami.",
  },
  {
    icon: "/images/help/zajecia.jpg",
    title: "Szeroki wachlarz zajęć",
    text: "W ramach kilkugodzinnych pobytów dziennych w naszym domu, zadbamy o bezpieczeństwo najbliższej Ci osoby, zapewnimy profesjonalną opiekę oraz szeroki wachlarz zajęć i atrakcji.",
  },
];

export const CauseData: {
  image: string;
  title: string;
  slug: string;
  text: string;
  godzina: string;
  czas: string;
}[] = [
  {
    image: "/images/causes/cause-1.jpg",
    title: "Powitanie dnia i czas wspólnego bycia.",
    slug: "cause-1",
    text: "Przybycie uczestników do ośrodka, Swobodne rozmowy przy herbacie lub kawie. Czynności pielęgnacyjne i higieniczne.",
    godzina: "7:00 – 8:30",
    czas: "90min",
  },
  {
    image: "/images/causes/cause-2.jpg",
    title: "Ciekawostki z miasta – „Żyjemy razem z Zieloną Górą”.",
    slug: "cause-2",
    text: "Codzienne aktualności i wydarzenia lokalne. Rozmowy o tym, co dzieje się w regionie. Czytanie fragmentów gazet, wspólne komentarze, pytania i refleksje.",
    godzina: "8:30 – 9:30",
    czas: "60min",
  },
  {
    image: "/images/causes/cause-3.jpg",
    title: "Śniadanie - wspólne przygotowanie stołów.",
    slug: "cause-3",
    text: "Zachęta do prostych czynności: nakrycie, rozłożenie serwetek, nalanie wody. Spożywanie posiłku w spokojnej atmosferze, przy rozmowie i muzyce.",
    godzina: "9:30 – 10:00",
    czas: "30min",
  },
  {
    image: "/images/causes/cause-4.jpg",
    title: "Gimnastyka poranna - dostosowana do uczestników",
    slug: "cause-4",
    text: "Elementy gimnastyki ogólnousprawniającej i koordynacyjnej. Ćwiczenia z wykorzystaniem piłek, taśm, chust i przyrządów.",
    godzina: "10:00-10:30",
    czas: "30min",
  },
  {
    image: "/images/causes/cause-5.jpg",
    title: "Przerwa na kawę i coś słodkiego - drobne przekąski.",
    slug: "cause-5",
    text: "Kawa, herbata, owoce. Czas na swobodne rozmowy i odpoczynek po porannej gimnastyce. Budowanie atmosfery wspólnoty.",
    godzina: "10:30-11:00",
    czas: "30min",
  },
  {
    image: "/images/causes/cause-6.jpg",
    title: "Zajęcia terapeutyczne – bloki tematyczne.",
    slug: "cause-6",
    text: "Odbywają się zgodnie z tygodniowym planem pracy terapeutycznej. W tym czasie uczestnicy korzystają z różnych form terapii.",
    godzina: "11:00-13:00",
    czas: "120min",
  },
  {
    image: "/images/causes/cause-7.jpg",
    title: "Obiad - wspólny posiłek w atmosferze spokoju.",
    slug: "cause-7",
    text: "Zachęta do udziału w prostych czynnościach przed i po posiłku. Nalewanie zupy, podawanie chleba, składanie serwetek.",
    godzina: "13:30-14:00",
    czas: "30min",
  },
  {
    image: "/images/causes/cause-8.jpg",
    title: "Biblioterapia interaktywna - czytanie fragmentów literatury.",
    slug: "cause-8",
    text: "Rozmowy inspirowane tekstem: emocje, wspomnienia, wartości.Często połączona z muzykoterapią i elementami reminiscencji.",
    godzina: "14:00-14:45",
    czas: "45min",
  },
  {
    image: "/images/causes/cause-9.jpg",
    title: "Podwieczorek - czas na herbatę, owoce, dobre ciasto.",
    slug: "cause-9",
    text: "Wspólne rozmowy, uśmiech i wdzięczność za dzień. Podtrzymanie rytmu dnia, relaks, odpoczynek emocjonalny.",
    godzina: "14:45-15:15",
    czas: "30min",
  },
  {
    image: "/images/causes/cause-10.jpg",
    title: "Terapie indywidualne i ludoterapia.",
    slug: "cause-10",
    text: "Indywidualne spotkania z terapeutą lub psychologiem. Trening funkcji poznawczych, ćwiczenia manualne, relaksacja.",
    godzina: "15:15-16:00",
    czas: "45min",
  },
  {
    image: "/images/causes/cause-11.jpg",
    title: "Czas rozchodzenia się uczestników.",
    slug: "cause-11",
    text: "Swobodne gry i zabawy, rozmowy, muzyka. Przygotowanie do wyjścia, pożegnanie z terapeutami. Krótka refleksja nad dniem.",
    godzina: "16:00-17:00",
    czas: "60min",
  },
];

export const Eventdata: {
  image: string;
  title: string;
  text: string;
  date: string;
  detail: string;
  slug: string;
  youtubeId?: string;
}[] = [
  {
    image: "/images/event/event-1.jpg",
    title: "ASYSTENTURA OSÓB Z NIEPEŁNOSPRAWNOŚCIĄ ",
    slug: "event-1",
    text: "Spółdzielnia Socjalna Alternatywy będzie realizatorem Programu Ministra Rodziny.",
    date: "2025-12-18",
    detail:
      "Informujemy, że Spółdzielnia Socjalna Alternatywy będzie realizatorem resortowego Programu Ministra Rodziny, Pracy i Polityki Społecznej „Asystent osobisty osoby z niepełnosprawnością” dla Organizacji Pozarządowych – edycja 2026. Osoby z orzeczeniem o znacznym stopniu niepełnosprawności, zainteresowane udziałem w Programie zapraszamy do kontaktu od dnia 2 do 10.01.2026 tel. +48 603 254 662, adres email alternatywy.dlaseniora@gmail.com",
  },
  {
  image: "/images/event/event-2.jpg",
  title: "RELACJA TV",
  slug: "event-2",
  text: "W lubuskim centrum informacyjnym",
  date: "2025-11-26",
  youtubeId: "Ng5-Y0NOalQ",   // ⬅️ DODANE
  detail:
    "ALEKSANDRA DĘBEK, MATEUSZ CZECHOWSKI - ROZMOWA DNIA",
  },
  {
    image: "/images/event/event-3.jpg",
    title: "Razem w codzienności",
    slug: "event-3",
    text: "Grupa Wsparcia dla opiekunów i członków rodzin.",
    date: "2025-11-03",
    detail:
      "W ramach II otwartego konkursu ofert na wsparcie realizacji zadań publicznych w 2025 roku na terenie województwa lubuskiego w zakresie rehabilitacji zawodowej i społecznej osób niepełnosprawnych otrzymaliśmy środki na realizację projektu: Razem w codzienności - Grupa Wsparcia dla opiekunów i członków rodzin osób starszych dotkniętych chorobami neurodegeneracyjnymi. Osoby zainteresowane udziałem w spotkaniach zapraszamy do kontaktu. tel. 603254662 / alternatywy.dlaseniora@gmail.com",
  },
  {
    image: "/images/event/event-4.jpg",
    title: "POBYT W PLACÓWCE Z ALPAKAMI I KOZAMI",
    slug: "event-4",
    text: "OPIEKA WYTCHNIENIOWA NIE OZNACZA TYLKO POBYTU W PLACÓWCE",
    date: "2025-09-02",
    detail:
      "DLA NAS OPIEKA WYTCHNIENIOWA NIE OZNACZA TYLKO POBYTU W PLACÓWCE - ALPAKI I KOZY",
  },
  {
    image: "/images/event/event-5.jpg",
    title: "POBYTU W PLACÓWCE - OGRÓD JAPOŃSKI",
    slug: "event-5",
    text: "OPIEKA WYTCHNIENIOWA NIE OZNACZA TYLKO POBYTU W PLACÓWCE",
    date: "2025-05-15",
    detail:
      "DLA NAS OPIEKA WYTCHNIENIOWA NIE OZNACZA TYLKO POBYTU W PLACÓWCE - OGRÓD JAPOŃSKI",
  },
  {
    image: "/images/event/event-6.jpg",
    title: "„Opieka wytchnieniowa” dla Organizacji Pozarządowych – Edycja 2025",
    slug: "event-6",
    text: "Spółdzielnia Socjalna Alternatywy jest realizatorem Programu Ministra Rodziny.",
    date: "2025-03-27",
    detail:
      "Informujemy, że Spółdzielnia Socjalna Alternatywy jest realizatorem resortowego Programu Ministra Rodziny, Pracy i Polityki Społecznej „Opieka wytchnieniowa” dla Organizacji Pozarządowych – Edycja 2025. Opieka realizowana będzie w formie pobytu dziennego w naszych placówkach przy ul. gen. Sikorskiego 17/2 w Zielonej Górze oraz przy ul. Fabrycznej 23B w Zielonej Górze. Osoby z Zielonej Góry i okolic, zainteresowane Programem zapraszamy do kontaktu.",
  },
  {
    image: "/images/event/event-7.jpg",
    title: "„Asystent osobisty osoby z niepełnosprawnością” edycja 2025",
    slug: "event-7",
    text: "Spółdzielnia Socjalna Alternatywy jest realizatorem Programu Ministra Rodziny",
    date: "2025-02-28",
    detail:
      "Informujemy, że Spółdzielnia Socjalna Alternatywy jest realizatorem resortowego Programu Ministra Rodziny, Pracy i Polityki Społecznej „Asystent osobisty osoby z niepełnosprawnością” dla Organizacji Pozarządowych – edycja 2025. Osoby z orzeczeniem o znacznym stopniu niepełnosprawności, zainteresowane udziałem w Programie zapraszamy do kontaktu tel. +48 603 254 662, adres email alternatywy.dlaseniora@gmail.com ",
  },
  {
    image: "/images/event/event-8.jpg",
    title: " ZNAK JAKOŚCI",
    slug: "event-8",
    text: "Największą nagrodą jest dla nas uśmiech drugiego człowieka.",
    date: "2024-11-14",
    detail:
      "Największą nagrodą jest dla nas uśmiech drugiego człowieka. Wczoraj uśmiechnięto się do naszego zespołu z Ministerstwo Rodziny, Pracy i Polityki Społecznej, wręczając nam ZNAK JAKOŚCI w kategorii usługi społeczne szyte na miarę!! Dziękujemy! Zielona Góra górą!!!",
  },
  {
    image: "/images/event/event-9.jpg",
    title: "NOWE ALTERNATYWY",
    slug: "event-9",
    text: "„Odporność oraz rozwój ekonomii społecznej i przedsiębiorczości społecznej” na lata 2022-2025.",
    date: "2024-6-28",
    detail:
      "Nasza Spółdzielnia Socjalna Alternatywy miała okazję zrealizować przedsięwzięcie finansowe w ramach Programu „Odporność oraz rozwój ekonomii społecznej i przedsiębiorczości społecznej” na lata 2022-2025. Dzięki temu możemy się pochwalić kolejną placówką wsparcia dziennego dla osób starszych. Kładąc nacisk na zdeinstytucjonalizowanie usług społecznych (mówiąc prostszym językiem – udomowienie) będzie to nasz drugi kameralny dom dziennej opieki w Zielonej Górze przy ul. Fabrycznej 23B. Dzięki dofinansowaniu udało nam się wyremontować toaletę i dostosować jej do potrzeb osób ze specjalnymi potrzebami, wyposażyć nasz nowy lokal w niezbędne meble, sprzęt RTV i AGD, klimatyzatory. Poza możliwością podwojenia ilości podopiecznych naszej spółdzielni, nasze opiekunki będą w stanie sprawniej przemieszczać się między miejscami zamieszkania naszych podopiecznych za pomocą hulajnóg elektrycznych oraz nowego samochodu przystosowanego do transportu osób na wózku inwalidzkim. Koszt realizacji przedsięwzięcia wyniósł 190000 zł.",
  },
  {
    image: "/images/event/event-10.jpg",
    title: "ASYSTENTURA OSÓB Z NIEPEŁNOSPRAWNOŚCIĄ",
    slug: "event-10",
    text: "Program „Asystent osobisty osoby z niepełnosprawnością”",
    date: "2024-7-3",
    detail:
      "W 2024 realizujemy również po raz kolejny Program „Asystent osobisty osoby z niepełnosprawnością” dla Organizacji Pozarządowych − edycja 2024, którego zleceniodawcą jest bezpośrednio Minister Rodziny, Pracy i Polityki Społecznej. Osoby z orzeczeniem o znacznym stopniu niepełnosprawności, zainteresowane udziałem w Programie zapraszamy do kontaktu.",
  },
  {
    image: "/images/event/event-11.jpg",
    title: "OPIEKA WYTCHNIENIOWA",
    slug: "event-11",
    text: "Program „Opieka wytchnieniowa” dla Organizacji Pozarządowych Edycja 2024.",
    date: "2024-7-3",
    detail:
      "Pragniemy poinformować, że w 2024 roku po raz kolejny będziemy mogli wesprzeć opiekunów i członków rodzin osób z niepełnosprawnościami. Ministerstwo Rodziny, Pracy i Polityki Społecznej zleciło naszej organizacji realizację Programu „Opieka wytchnieniowa” dla Organizacji Pozarządowych Edycja 2024. Opieka realizowana będzie w formie pobytu dziennego w naszej placówce przy ul. gen. Sikorskiego 17/2 w Zielonej Górze, a od kwietnia tego roku, dodatkowo w naszym kolejnym ośrodku przy ul. Fabrycznej 23B w Zielonej Górze. Osoby z Zielonej Góry i okolic, zainteresowane Programem zapraszamy do kontaktu.",
  },
  {
    image: "/images/event/event-12.jpg",
    title: "ASYSTENTURA OSÓB Z NIEPEŁNOSPRAWNOŚCIĄ",
    slug: "event-12",
    text: "Program „Asystent osobisty osoby z niepełnosprawnościami” – edycja 2023.",
    date: "2023-7-3",
    detail:
      "W 2023 roku, na zlecenie Program Ministerstwa Rodziny i Polityki Społecznej, realizowaliśmy w naszej placówce wsparcia dziennego Program „Asystent osobisty osoby z niepełnosprawnościami” – edycja 2023.",
  },
  {
    image: "/images/event/event-13.jpg",
    title: "OPIEKA WYTCHNIENIOWA ",
    slug: "event-13",
    text: "„Opieka wytchnieniowa dla członków rodzin lub opiekunów osób z niepełnosprawnościami”",
    date: "2023-7-3",
    detail:
      "W 2023 roku, na zlecenie Program Ministerstwa Rodziny i Polityki Społecznej, realizowaliśmy w naszej placówce wsparcia dziennego Program „Opieka wytchnieniowa dla członków rodzin lub opiekunów osób z niepełnosprawnościami” – edycja 2023.",
  },
  {
    image: "/images/event/event-14.jpg",
    title: "TARCZA FINANSOWA 2.0 PFR",
    slug: "event-14",
    text: "„Tarcza Finansowa 2.0 Polskiego Funduszu Rozwoju dla Mikro, Małych i Średnich Firm”",
    date: "2021-11-10",
    detail:
      "Zgodnie z wymogiem Regulaminu informujemy, iż otrzymaliśmy subwencję finansową w ramach programu rządowego „Tarcza Finansowa 2.0 Polskiego Funduszu Rozwoju dla Mikro, Małych i Średnich Firm” udzieloną przez PFR S.A.",
  },
  {
  image: "/images/event/event-15.jpg",
  title: "KRÓTKI FILM REKLAMOWY",
  slug: "event-15",
  text: "Zapraszamy do obejrzenia krótkiego filmu, pokazującego w pigułce naszą działalność",
  date: "2018-09-21", // poprawiony format
  youtubeId: "ASUifWVvfNo",  // ⬅️ DODANE
  detail: ".",
  },
  {
    image: "/images/event/event-16.jpg",
    title: "UROCZYSTE OTWARCIE",
    slug: "event-16",
    text: "Krótka relacja z uroczystego otwarcia naszego Domu",
    date: "2018-1-26",
    detail:
      ".",
  },
  {
    image: "/images/event/event-17.jpg",
    title: "PISZĄ O NAS - ARTYKUŁ W GAZECIE LUBUSKIEJ",
    slug: "event-17",
    text: "19 stycznia 2018r.  w Gazecie Lubuskiej ukazał się artykuł o naszej działalności.",
    date: "2018-1-19",
    detail:
      "Uśmiechem i olbrzymim sercem walczą w Zielonej Górze z samotnością seniorów „W mieście, w ramach spółdzielni socjalnej, rusza dom dziennego pobytu dla osób starszych Alternatywy. By seniorzy mieli swój własny kąt. Nowa placówka dla seniorów ma oryginalną nazwę. Dlaczego „Alternatywy”?... link do artykułu",
  },
  {
    image: "/images/event/event-18.jpg",
    title: "SYSTEM KONTROLI JAKOŚCI",
    slug: "event-18",
    text: "System Kontroli Jakości – Quality Control System (QCS)",
    date: "2017-11-21",
    detail:
      "System Kontroli Jakości – Quality Control System (QCS) to kompleksowy system oceny jakości. W celu uzyskania jak najwyższego poziomu opieki nad naszymi Pensjonariuszami metoda QCS będzie wykorzystana w domu dziennego pobytu „Alternatywy”. Ciągłe monitorowanie pracy personelu, jakości wyposażenia, posiłków oraz usług oferowanych w prywatnych domu dziennego pobytu „Alternatywy” umożliwi osiągnięcie najwyższego poziomu opieki i zadowolenie naszych gości.",
  },
  {
    image: "/images/event/event-19.jpg",
    title: "URZĄDZAMY SIĘ",
    slug: "event-19",
    text: "Trwa remont naszego lokalu przy ul. Gen. Sikorskiego 17/2.",
    date: "2017-1-26",
    detail:
      "Od połowy listopada trwa remont naszego lokalu przy ul. Gen. Sikorskiego 17/2. To tutaj już niebawem mamy zamiar gościć seniorów chcących korzystać z naszych usług. Wyposażamy pomieszczenia w wygodne i stylowe fotele i sofy, komody, regały, stoły, krzesła itd. Drzwi do naszego lokalu, od paru dni, praktycznie się nie zamykają. Poza meblami, przychodzą paczki ze sprzętem mającym posłużyć naszym gościom: 55 calowy telewizor, sprzęt grający, komputery, masażery, lampy antydepresyjne i wiele, wiele innych. Wszystko trzeba jeszcze zmontować, podłączyć, ale już widać, że będzie to piękne, przyjazne miejsce łączące tradycję z nowoczesnością.",
  },
];

export const footerLinks: { link: string }[] = [
  {
    link: "Medical crowdfunding",
  },
  {
    link: "Cancer Crowdfunding",
  },
  {
    link: "Transplant Crowdfunding",
  },
  {
    link: "Education Crowdfunding",
  },
  {
    link: "Child Welfare",
  },
  {
    link: "Medical Finance",
  },
  {
    link: "FAQs & Help Center",
  },
  {
    link: "Fundraiser Video",
  },
  {
    link: "Trust & Safety",
  },
  {
    link: "Plans & Pricing*",
  },
];

export const Reviews: {
  clientImg: string;
  clientName: string;
  review: string;
  post: string;
}[] = [
  {
    clientImg: "/images/testimonial/client-1.jpg",
    clientName: "Michelle Anderson",
    review:
      "You can relay on our amazing features list and also our customer services will be great experience. You can relay on our amazing features.",
    post: "CEO, Theme Designer",
  },
  {
    clientImg: "/images/testimonial/client-2.jpg",
    clientName: "Michelle Anderson",
    review:
      "You can relay on our amazing features list and also our customer services will be great experience. You can relay on our amazing features.",
    post: "Managing Director, Theme Designer",
  },
];
