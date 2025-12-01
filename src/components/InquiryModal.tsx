import React, { useState } from 'react';
import { Apartment } from '../db/apartmentsDb';

interface InquiryModalProps {
  apartment: Apartment;
  onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ apartment, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setError(
        'Proszę uzupełnić imię i nazwisko, numer telefonu oraz adres e-mail.'
      );
      return;
    }

    const subject = encodeURIComponent(
      `Zapytanie o mieszkanie ${apartment.number} – Kredowe Tarasy Obłońska 16`
    );

    const bodyLines = [
      `Imię i nazwisko: ${fullName}`,
      `Telefon: ${phone}`,
      `E-mail: ${email}`,
      '',
      `Mieszkanie: ${apartment.number}`,
      `Piętro: ${apartment.floor}`,
      `Metraż: ${
        apartment.area != null ? apartment.area.toFixed(1) + ' m²' : 'brak danych'
      }`,
      `Cena: ${
        apartment.price != null ? apartment.price.toLocaleString('pl-PL') + ' PLN' : 'brak danych'
      }`,
      '',
      'Wiadomość od klienta:',
      message || '(brak dodatkowej wiadomości)',
      '',
      `ID mieszkania w systemie: ${apartment.id}`,
    ];

    const body = encodeURIComponent(bodyLines.join('\n'));

    const developerEmail = 'kontakt@niemiecdevelopment.pl';

    window.location.href = `mailto:${developerEmail}?subject=${subject}&body=${body}`;

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Zapytaj o mieszkanie {apartment.number}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Wypełnij formularz. Po kliknięciu &quot;Wyślij zapytanie&quot;
              otworzy się Twój program pocztowy z gotową wiadomością do dewelopera.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 text-xl leading-none"
            aria-label="Zamknij"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Imię i nazwisko *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="np. Jan Kowalski"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Numer telefonu *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="np. 600 000 000"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Adres e-mail *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="np. jan.kowalski@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Wiadomość (opcjonalnie)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              rows={4}
              placeholder="Możesz doprecyzować swoje pytania, preferencje, termin kontaktu..."
            />
          </div>

          {error && <p className="text-xs text-red-600">{error}</p>}

          <div className="flex flex-col md:flex-row md:justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100"
            >
              Anuluj
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-xs font-semibold rounded-full bg-brand-600 text-white hover:bg-brand-700"
            >
              Wyślij zapytanie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;
