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

        </div>

      </div>
    </section>
  );
}