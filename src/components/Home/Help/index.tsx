import { helpdata } from "@/app/api/data";
import Image from 'next/image';

const Help = () => {
    return (
        <section className="lg:py-28 py-16 bg-white dark:bg-dark">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <div className="text-center">
                    <h2 className="text-3xl mb-3 font-medium" data-aos-delay={'100'} data-aos="fade-right">
                    Przywróć radość życia i wiarę w siebie 
                    </h2>
                    <p className="text-muted dark:text-white/60 text-base">
                    ALTERNATYWY to Dom Dziennego Pobytu stworzony z myślą o Seniorach oraz ich bliskich. Naszą misją jest wspieranie osób starszych w aktywnym uczestnictwie w życiu społecznym, kulturalnym i towarzyskim. Chcemy przywracać radość życia, budować poczucie wartości oraz wzmacniać wiarę we własne możliwości.

Zapraszamy osoby starsze – zarówno te, które czują się samotne i poszukują relacji oraz przyjaźni, jak i wszystkich Seniorów pragnących spędzać czas w inspirujący, wartościowy sposób. Oferujemy także realne wsparcie rodzinom, które chcą zapewnić swoim bliskim bezpieczeństwo, opiekę oraz dobrą kondycję psychiczną, fizyczną i społeczną, lecz z różnych powodów nie zawsze mogą towarzyszyć im na co dzień.

<br /> Nasze Domy znajdują się w Zielonej Górze – przy ul. Sikorskiego 17/2 oraz ul. Fabrycznej 23b. Dogodna lokalizacja łączy bliskość terenów zielonych z dostępem do centrum miasta, co sprzyja spacerom oraz aktywnemu uczestnictwu w lokalnym życiu kulturalnym.

<br /> Przestrzenie zostały zaprojektowane z myślą o komforcie i potrzebach Seniorów. Sercem każdego domu jest przestronny salon wyposażony w wygodne sofy i fotele, wspólny stół sprzyjający integracji oraz wysokiej klasy sprzęt RTV. Do dyspozycji naszych gości są również przytulne pokoje relaksu z biblioteczką, rozkładanymi fotelami oraz lampami do terapii światłem, wspierającymi dobre samopoczucie.

<br /> W domach znajdują się także kameralne kąciki kawiarniane, gdzie przy filiżance aromatycznej kawy lub herbaty można oddać się rozmowom i chwilom odpoczynku. Przy jednym z obiektów powstał również prywatny ogród ze ścieżkami i ławeczkami — idealne miejsce na relaks wśród zieleni.

<br /> ALTERNATYWY to przestrzeń, w której codzienność nabiera kolorów, a każdy Senior może poczuć się ważny, zaopiekowany i częścią wspólnoty.
                    </p>
                    <div className="mt-20 grid grid-cols-12 gap-8">
                        {helpdata.map((item, index) => (
                            <div key={index} className="md:col-span-4 sm:col-span-6 col-span-12 text-center flex flex-col gap-5 justify-start" data-aos="fade-up" data-aos-delay={`${index * 150}`}>
                                <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-lg group">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h4 className="text-lg font-medium">
                                    {item.title}
                                </h4>
                                <p className="text-muted dark:text-white/60 text-base">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Help;