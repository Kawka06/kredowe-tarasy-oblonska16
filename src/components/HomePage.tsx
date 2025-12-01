import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface GalleryImage {
  src: string;
  alt: string;
}

const BASE_URL = import.meta.env.BASE_URL;

const galleryImages: GalleryImage[] = [
  {
    src: `${BASE_URL}assets/inwestycja-1.png`,
    alt: 'Widok kamienicy od ulicy Obłońskiej',
  },
  {
    src: `${BASE_URL}assets/inwestycja-2.png`,
    alt: 'Wejście główne do kamienicy Kredowe Tarasy',
  },
  {
    src: `${BASE_URL}assets/inwestycja-3.png`,
    alt: 'Balkony od strony dziedzińca',
  },
];


const HomePage: React.FC = () => {
  return (
    <main className="pt-20">
      <InvestmentHeroSection />
      <InvestmentDescriptionSection />
      <GallerySection />
      <ReservationSection />
      <ContactSection />
    </main>
  );
};

const InvestmentHeroSection: React.FC = () => {
  return (
    <section
      id="inwestycja"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
      backgroundImage: `url('${BASE_URL}assets/hero-inwestycja.png')`,
      }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-100 mb-4">
          Nowa kamienica w sercu Chełma
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Kredowe Tarasy Obłońska 16
        </h1>
        <p className="text-base md:text-lg text-slate-100 max-w-2xl mx-auto">
          Kameralna kamienica przy ul. Obłońskiej 16 w Chełmie – 13 mieszkań
          inspirowanych kredowymi wzgórzami i historią miasta. Nowoczesna forma,
          funkcjonalne układy i spokojna, dobrze skomunikowana lokalizacja.
        </p>
      </div>
    </section>
  );
};

const InvestmentDescriptionSection: React.FC = () => {
  return (
    <section id="opis-inwestycji" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            Kamienica z charakterem – 13 mieszkań przy Obłońskiej 16
          </h2>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-600 mb-2">
            Inwestycja
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Kredowe Tarasy Obłońska 16 to kameralna kamienica z parterem oraz
            dwoma dodatkowymi kondygnacjami. W budynku zaprojektowano łącznie{' '}
            <strong>13 mieszkań</strong> o zróżnicowanych metrażach, dopasowanych
            zarówno do singli i par, jak i rodzin szukających funkcjonalnej
            przestrzeni do życia.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Architektura budynku łączy współczesną prostotę z odniesieniami do
            tradycyjnej zabudowy Chełma. Zastosowane materiały i detale
            elewacyjne sprawiają, że kamienica harmonijnie wpisuje się w
            istniejącą tkankę miejską, zachowując jednocześnie nowoczesny charakter.
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            Atutem lokalizacji jest bliskość centrum, placówek edukacyjnych,
            punktów usługowych oraz komunikacji publicznej. Zaprojektowano
            funkcjonalne układy mieszkań, komórki lokatorskie oraz miejsca
            postojowe, aby zapewnić komfort na co dzień.
          </p>
        </div>

        <div className="space-y-6">
          <a
            href="https://novo30.pl/prospekt_informacyjny_novo30.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold">
                PDF
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Zobacz przykładowy prospekt informacyjny
                </p>
                <p className="text-xs text-slate-600">
                  Kliknięcie otworzy przykładowy prospekt w nowej karcie. Docelowo
                  podmień ten link na aktualny PDF dotyczący inwestycji
                  Kredowe Tarasy Obłońska 16.
                </p>
              </div>
            </div>
          </a>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <p className="text-sm font-semibold text-slate-900 mb-2">
              Lokalizacja inwestycji
            </p>
            <p className="text-xs text-slate-600 mb-3">
              ul. Obłońska 16, 22-100 Chełm
            </p>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-sm">
              <iframe
                title="Mapa lokalizacji inwestycji Kredowe Tarasy Obłońska 16"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.47155539958!2d23.469021113350518!3d51.13665477161348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47239a4f3e283f1f%3A0x5979e70d64eca3e8!2zT2LFgm_FhHNrYSAxNiwgMjItMTAwIENoZcWCbQ!5e0!3m2!1spl!2spl!4v1764525720931!5m2!1spl!2spl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <section id="zdjecia" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2 text-center">
          Zdjęcia i wizualizacje inwestycji
        </h2>
        <p className="text-sm text-slate-600 mb-6 text-center">
          Użyj strzałek po bokach, aby przejrzeć kolejne ujęcia kamienicy Kredowe Tarasy Obłońska 16.
        </p>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center text-slate-800 text-xl"
            aria-label="Poprzednie zdjęcie"
          >
            ‹
          </button>

          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center text-slate-800 text-xl"
            aria-label="Następne zdjęcie"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-brand-600' : 'bg-slate-300'
              }`}
              aria-label={`Pokaż zdjęcie ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReservationSection: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/mieszkania');
  };

  return (
    <section id="rezerwacja" className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
        backgroundImage: `url('${BASE_URL}assets/rezerwacja-bg.png')`,
        }}
      />

      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Sprawdź dostępne mieszkania
        </h2>
        <p className="text-base md:text-lg text-slate-100 mb-8">
          Przejdź do pełnej listy 13 mieszkań w kamienicy Kredowe Tarasy Obłońska 16.
          Sprawdź metraże, kondygnacje, ceny i bieżący status każdego lokalu.
        </p>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-semibold rounded-full bg-brand-600 hover:bg-brand-700 shadow-lg shadow-slate-900/30 transition-colors"
        >
          Sprawdź dostępne mieszkania
        </button>
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="py-16 bg-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Kontakt z deweloperem
          </h2>
          <p className="text-sm text-slate-300 mb-6">
            Masz pytania dotyczące inwestycji{' '}
            <strong>Kredowe Tarasy Obłońska 16</strong>? Skontaktuj się z nami –
            chętnie przedstawimy szczegóły oferty.
          </p>

          <div className="space-y-2 text-sm">
            <p className="font-semibold">Niemiec Development Sp. z o.o.</p>
            <p>ul. Lubelska 73A</p>
            <p>22-100 Chełm</p>
            <p className="mt-2">
              Tel.:{' '}
              <a
                href="tel:+48517383570"
                className="text-brand-300 hover:text-brand-100"
              >
                517 383 570
              </a>
            </p>
            <p>
              E-mail:{' '}
              <a
                href="mailto:kontakt@niemiecdevelopment.pl"
                className="text-brand-300 hover:text-brand-100"
              >
                kontakt@niemiecdevelopment.pl
              </a>
            </p>
          </div>
        </div>

        <div className="bg-slate-800/70 rounded-2xl p-6 md:p-8">
          <p className="text-sm font-semibold mb-4">Szybka wiadomość</p>
          <p className="text-xs text-slate-300 mb-4">
            Ten formularz jest przykładowy. W obecnej wersji pokazuje jedynie
            interfejs – logikę wysyłki możesz podpiąć do API lub mailto.
          </p>

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                'W wersji produkcyjnej ten formularz powinien wysyłać wiadomość do dewelopera (np. przez API).'
              );
            }}
          >
            <div>
              <label className="block text-xs mb-1">Imię i nazwisko</label>
              <input
                type="text"
                className="w-full rounded-md bg-slate-900/40 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                placeholder="np. Jan Kowalski"
              />
            </div>
            <div>
              <label className="block text-xs mb-1">Adres e-mail</label>
              <input
                type="email"
                className="w-full rounded-md bg-slate-900/40 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                placeholder="np. jan.kowalski@example.com"
              />
            </div>
            <div>
              <label className="block text-xs mb-1">Wiadomość</label>
              <textarea
                className="w-full rounded-md bg-slate-900/40 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                rows={3}
                placeholder="Napisz, w czym możemy pomóc..."
              />
            </div>
            <button
              type="submit"
              className="w-full text-sm font-semibold rounded-full bg-brand-600 hover:bg-brand-700 px-4 py-2 mt-2"
            >
              Wyślij zapytanie
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Niemiec Development Sp. z o.o. – Kredowe Tarasy Obłońska 16, Chełm.
      </div>
    </section>
  );
};

export default HomePage;
