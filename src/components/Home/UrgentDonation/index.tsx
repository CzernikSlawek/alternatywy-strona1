"use client"

const UrgentDonation = () => {
  return (
    <section className="bg-[url('/images/background/donate-banner.jpg')] bg-cover bg-center sm:py-52 lg:py-28 py-16 bg-no-repeat">

      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        
        {/* FILM NA TLE ZDJĘCIA */}
        <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ASUifWVvfNo?controls=1"
            title="Alternatywy film"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
};

export default UrgentDonation;