export const getLongestOrShortestString = (
  string,
  numberOfStrings = 1,
  characterCount = false,
  getShortest = false
) => {
  const anArrayWithTheStrings = string
    .split(' ')
    .filter((e) => e.length > 0)
    .sort((a, b) => (getShortest ? a.length - b.length : b.length - a.length))
    .slice(0, numberOfStrings);

  if (characterCount) {
    return anArrayWithTheStrings.map((e) => `${e}(${e.length})`).toString();
  } else {
    return anArrayWithTheStrings.toString();
  }
};

const LOTRQuote =
  'Even the smallest person can change the course of the future';

getLongestOrShortestString(LOTRQuote); //'smallest'
getLongestOrShortestString(LOTRQuote, 3); //'smallest,person,change'
getLongestOrShortestString(LOTRQuote, 6, true); //'smallest(8),person(6),change(6),course(6),future(6),Even(4)'
getLongestOrShortestString(LOTRQuote, 2, true, true); //'of(2),the(3)'
getLongestOrShortestString(LOTRQuote, 2, false, true); //'of,the'

//#2 Pierwszym parametrem funkcji jest string

//#3 Drugim parametrem jest liczba zwróconych stringów. Wartość domyślna to 1

//#4 Trzecim parametrem jest opcja dopisania do zwróconych stringów liczby z ilością ich znaków. Domyślna wartosć to false, nie wyświetli tej liczby

//#5 Czwartym parametrem jest opcja, która daje możliwość zwrócenia najkrótszych stringów, zamiast najdłuższych. Domyślnie ustawiona na false

//#7 Deklaracja zmiennej anArrayWithTheStrings

//#8 Rozdzielenie stringa na poszczególne elementy oddzielone spacją. Elementy zostają zwrócone w tablicy

//#9 Filtrowanie elementów, zwrócone zostają tylko te z ilością znaków większą od 0

//#10 Sortowanie elementów w tablicy; gdy wartość getShortest to false, sortuje od najdłuższych strinów, jeżeli wartość getShortest to true, sortuje od najkrótszych stringów

//#11 Z posortowanej tablicy zostają zwrócone elementy w ilości równej wartości podanej w parametrze drugim funkcji

//#13 Warunek, który sprawdza czy parametr characterCount jest true czy false, czy do zwróconych stringów ma zostać dopisana liczba ich znaków

//#14 Jeżeli tak, to ma zostać zwrócona zomodyfikowana tablica ze stringami, przy użyciu metody map. A następnie tablica zostaje przekonwertowana na string

//#16 Jeżeli nie, to ma zostać zwrócona niezmodyfikowana tablica ze stringami, przekonwertowana na stringa
