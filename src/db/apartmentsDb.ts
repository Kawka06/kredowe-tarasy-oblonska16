export type ApartmentStatus = 'wolne' | 'zarezerwowane' | 'niedostępne';

export interface Apartment {
  id: number;
  number: string;
  floor: string;
  area: number | null;
  price: number | null;
  status: ApartmentStatus;
}

const STORAGE_KEY = 'kredowe-tarasy-apartments';

const defaultApartments: Apartment[] = [
  { id: 1, number: 'M1', floor: 'Parter', area: 35.0, price: 310000, status: 'wolne' },
  { id: 2, number: 'M2', floor: 'Parter', area: 42.5, price: 365000, status: 'wolne' },
  { id: 3, number: 'M3', floor: 'Parter', area: 50.0, price: 410000, status: 'zarezerwowane' },
  { id: 4, number: 'M4', floor: 'Parter', area: 48.0, price: 395000, status: 'wolne' },
  { id: 5, number: 'M5', floor: '1', area: 55.0, price: 445000, status: 'wolne' },
  { id: 6, number: 'M6', floor: '1', area: 60.0, price: 480000, status: 'zarezerwowane' },
  { id: 7, number: 'M7', floor: '1', area: 52.0, price: 430000, status: 'wolne' },
  { id: 8, number: 'M8', floor: '1', area: 45.0, price: 380000, status: 'niedostępne' },
  { id: 9, number: 'M9', floor: '2', area: 70.0, price: 560000, status: 'wolne' },
  { id: 10, number: 'M10', floor: '2', area: 63.0, price: 520000, status: 'wolne' },
  { id: 11, number: 'M11', floor: '2', area: 58.0, price: 490000, status: 'zarezerwowane' },
  { id: 12, number: 'M12', floor: '2', area: 40.0, price: 340000, status: 'wolne' },
  { id: 13, number: 'M13', floor: '2', area: 38.0, price: 330000, status: 'wolne' },
];

export function loadApartments(): Apartment[] {
  const stored = typeof window !== 'undefined'
    ? window.localStorage.getItem(STORAGE_KEY)
    : null;

  if (!stored) {
    return defaultApartments;
  }

  try {
    const parsed = JSON.parse(stored) as Apartment[];
    return parsed;
  } catch (error) {
    console.error(
      'Nie udało się odczytać mieszkań z localStorage. Używam domyślnych danych.',
      error
    );
    return defaultApartments;
  }
}

export function saveApartments(apartments: Apartment[]): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(apartments));
}

export function updateApartment(
  id: number,
  updates: Partial<Apartment>
): Apartment[] {
  const apartments = loadApartments();

  const updated = apartments.map((apt) =>
    apt.id === id
      ? {
          ...apt,
          ...updates,
        }
      : apt
  );

  saveApartments(updated);
  return updated;
}
