import React, { useEffect, useState } from 'react';
import { Apartment, loadApartments, saveApartments } from '../db/apartmentsDb';

interface FlatsTableProps {
  onAsk: (apartment: Apartment) => void;
}

const FlatsTable: React.FC<FlatsTableProps> = ({ onAsk }) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    const loaded = loadApartments();
    setApartments(loaded);
    saveApartments(loaded);
  }, []);

  const formatPrice = (price: number | null): string => {
    if (price == null) return '—';
    return price.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' });
  };

  return (
    <div className="overflow-x-auto bg-white/90 rounded-2xl shadow-lg">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-slate-100 text-slate-700">
            <th className="px-4 py-3 font-semibold">Nr mieszkania</th>
            <th className="px-4 py-3 font-semibold">Piętro</th>
            <th className="px-4 py-3 font-semibold">Metraż [m²]</th>
            <th className="px-4 py-3 font-semibold">Cena brutto [PLN]</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 font-semibold text-center">Akcja</th>
          </tr>
        </thead>
        <tbody>
          {apartments.map((apt, index) => {
            const isFree = apt.status === 'wolne';

            return (
              <tr
                key={apt.id}
                className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
              >
                <td className="px-4 py-3">{apt.number}</td>
                <td className="px-4 py-3">{apt.floor}</td>
                <td className="px-4 py-3">
                  {apt.area != null ? apt.area.toFixed(1) : '—'}
                </td>
                <td className="px-4 py-3 font-medium">
                  {formatPrice(apt.price)}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      apt.status === 'wolne'
                        ? 'bg-emerald-100 text-emerald-700'
                        : apt.status === 'zarezerwowane'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {apt.status === 'wolne'
                      ? 'Wolne'
                      : apt.status === 'zarezerwowane'
                      ? 'Zarezerwowane'
                      : 'Niedostępne'}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    type="button"
                    disabled={!isFree}
                    onClick={() => isFree && onAsk(apt)}
                    className={`inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full border transition-colors ${
                      isFree
                        ? 'bg-brand-600 text-white border-brand-600 hover:bg-brand-700'
                        : 'bg-slate-200 text-slate-500 border-slate-200 cursor-not-allowed'
                    }`}
                  >
                    Zapytaj o mieszkanie
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FlatsTable;
