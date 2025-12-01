import React, { useState } from 'react';
import { Apartment } from '../db/apartmentsDb';
import FlatsTable from './FlatsTable';
import InquiryModal from './InquiryModal';

const FlatsPage: React.FC = () => {
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAsk = (apartment: Apartment) => {
    setSelectedApartment(apartment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApartment(null);
  };

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url('/assets/mieszkania-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <header className="mb-8 text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-200 mb-2">
              Oferta mieszkań
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              Mieszkania w kamienicy Kredowe Tarasy Obłońska 16
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-2xl">
              Poniżej znajdziesz zestawienie wszystkich 13 mieszkań z informacją
              o piętrze, metrażu, cenie i aktualnym statusie: wolne, zarezerwowane
              lub niedostępne. Dane cenowe są prezentowane w sposób transparentny,
              zgodnie z aktualnymi wytycznymi dla firm deweloperskich.
            </p>
          </header>

          <FlatsTable onAsk={handleAsk} />
        </div>

        {isModalOpen && selectedApartment && (
          <InquiryModal
            apartment={selectedApartment}
            onClose={handleCloseModal}
          />
        )}
      </section>
    </main>
  );
};

export default FlatsPage;
