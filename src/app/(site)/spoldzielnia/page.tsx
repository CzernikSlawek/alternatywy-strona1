import Image from "next/image";

export default function SpoldzielniaPage() {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-6xl px-4">

        {/* GÓRNA SEKCJA */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <Image
            src="/images/spoldzielnia/spoldzielnia.jpg"
            alt="Spółdzielnia socjalna"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto object-contain"
          />

          <div className="text-lg">
            <p>
              Od 2024 roku Spn.s. ALTERNATYWY otrzymuje prestiżowe wyróżnienie 
              Ministerstwa Rodziny, Pracy i Polityki Społecznej 
              <strong> „Znak Jakości Ekonomii Społecznej” </strong> 
              w kategorii <strong>„Usługi społeczne szyte na miarę”.</strong>
            </p>
          </div>

        </div>

        {/* DOLNA SEKCJA */}
        <div className="mt-16 space-y-6 text-lg">

          <p className="font-semibold text-xl">
            Współpraca ESG – zapraszamy firmy do partnerstwa społecznego
          </p>

          <p>
            Spółdzielnia Socjalna ALTERNATYWY prowadzi dom dziennego pobytu dla osób
            starszych zależnych, zapewniając profesjonalną opiekę, wsparcie
            terapeutyczne oraz aktywizację społeczną seniorów.
          </p>

          <p>
            Każdego dnia realnie wpływamy na poprawę jakości życia osób
            wymagających wsparcia oraz ich rodzin.
          </p>

          <p>
            Zapraszamy firmy realizujące strategie ESG (Environmental, Social,
            Governance) do współpracy w obszarze <strong>„S” – Społecznym.</strong>
          </p>

          <p className="font-semibold">
            Dlaczego warto z nami współpracować?
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Realny wpływ społeczny</strong> – wspieracie Państwo osoby
              starsze, zagrożone wykluczeniem i niesamodzielnością
            </li>

            <li>
              <strong>Mierzalne efekty</strong> – zapewniamy konkretne wskaźniki
              (liczba beneficjentów, godziny wsparcia, programy terapeutyczne)
              do wykorzystania w raportach ESG
            </li>

            <li>
              <strong>Współpraca lokalna</strong> – wzmacnianie społeczności i
              odpowiedzialnego biznesu w regionie
            </li>

            <li>
              <strong>Wiarygodny partner</strong> – działamy jako podmiot
              ekonomii społecznej, łącząc profesjonalizm z misją społeczną
            </li>
          </ul>

          <p className="font-semibold">
            Proponowane formy współpracy:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Partnerstwo projektowe (finansowanie programów dla seniorów)</li>
            <li>Wolontariat pracowniczy</li>
            <li>Wsparcie rzeczowe lub usługowe</li>
            <li>Długofalowe partnerstwo strategiczne</li>
          </ul>

          <p>
            Wspólnie możemy tworzyć rozwiązania, które nie tylko wspierają osoby
            starsze, ale także budują wartość społeczną i wzmacniają raportowanie ESG.
          </p>

          <p>
            Zapraszamy do kontaktu – przygotujemy ofertę dopasowaną do strategii
            i celów Państwa firmy.
          </p>

          {/* O NAS */}
<div className="mt-16 space-y-6 text-lg">

  <h2 className="text-2xl font-semibold">O nas</h2>

  <p>
    Jesteśmy spółdzielnią socjalną, która łączy profesjonalną działalność
    gospodarczą z misją społeczną. Naszym celem jest nie tylko świadczenie
    wysokiej jakości usług, ale przede wszystkim tworzenie miejsc pracy dla osób
    zagrożonych wykluczeniem społecznym i zawodowym.
  </p>

  <p>
    Działamy na podstawie Ustawy z dnia 27 kwietnia 2006 r. o spółdzielniach
    socjalnych, która określa zasady funkcjonowania tego typu podmiotów oraz ich
    społeczną rolę w procesie reintegracji zawodowej i społecznej. Oznacza to, że
    nasza działalność łączy przedsiębiorczość z odpowiedzialnością społeczną.
  </p>

  <h3 className="text-xl font-semibold">Nasza misja</h3>

  <ul className="list-disc pl-6 space-y-2">
    <li>wspieranie osób powracających na rynek pracy,</li>
    <li>budowanie stabilnych miejsc zatrudnienia,</li>
    <li>wzmacnianie samodzielności i kompetencji zawodowych członków spółdzielni,</li>
    <li>rozwój lokalnej społeczności.</li>
  </ul>

  <h3 className="text-xl font-semibold">Jak działamy?</h3>

  <p>
    Prowadzimy działalność gospodarczą na zasadach rynkowych, dbając o jakość,
    terminowość i profesjonalizm. Wypracowany dochód przeznaczamy przede
    wszystkim na:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>rozwój spółdzielni,</li>
    <li>tworzenie nowych miejsc pracy,</li>
    <li>działania społeczne i integracyjne.</li>
  </ul>

  <p>
    Funkcjonujemy w oparciu o zasady demokratycznego zarządzania – każdy członek
    ma realny wpływ na kierunek rozwoju naszej organizacji.
  </p>

  <h3 className="text-xl font-semibold">Dlaczego warto z nami współpracować?</h3>

  <ul className="list-disc pl-6 space-y-2">
    <li>otrzymujesz rzetelne i profesjonalne wykonanie zlecenia,</li>
    <li>wspierasz lokalną ekonomię społeczną,</li>
    <li>przyczyniasz się do tworzenia realnych zmian społecznych.</li>
  </ul>

  <p className="font-semibold">
    Łączymy biznes z misją. Działamy odpowiedzialnie. Pracujemy z zaangażowaniem.
  </p>

</div>

        </div>

      </div>
    </section>
  );
}