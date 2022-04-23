export const arrayIntoChunks = (array, length) => {
  const chunks = [];
  array.forEach((e) => {
    const lastChunk = chunks[chunks.length - 1];
    const isNewChunk = !chunks.length || lastChunk.length === length;
    if (isNewChunk) {
      chunks.push([e]);
    } else {
      lastChunk.push(e);
    }
  });
  return chunks;
};

arrayIntoChunks([1, 2, 3, 4, 5, 6], 3); //[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
arrayIntoChunks([1, 2, 3, 4, 5, 6], 4); //[ [ 1, 2, 3, 4 ], [ 5, 6 ] ]

//#1 Funkcja przyjmuje dwa argumenty: tablicę która zostanie podzielona, oraz długość podzielonych kawałków

//#2 Deklaracja tablicy do której są wypychane podzielone kawałki. Ponieważ jest to referencja do obiektu możliwe jest użycie const

//#3 Iterowanie po elementach tablicy pochodzącej z pierwszego argumentu

//#4 Deklaracja zmiennej, której wartość to ostatni element z tablicy chunks (docelowo tablica)

//#5 Deklaracja zmiennej, której wartość to true jeżeli tablica chunks jest pusta, lub jeżeli długość ostatniego elementu tablicy chunks (który powinien być tablicą), będzie równa podanej długości w drugim argumencie funkcji

//#7 Instrukcja warunkowa: jeżeli nowy kawałek, to wypchaj nową tablicę zawierającą bieżący element, do tablicy chunks

//#9 Instrukcja warunkowa: w przeciwnym wypadku wypchaj bieżący element do ostatniego elementu (tablicy), który znajduje się w tablicy chunks

//#12 Zwrócenie tablicy chunks

// - - - - - - - - - - WERSJA PROTOTYPE - - - - - - - - - -

Array.prototype.intoChunks = function (length) {
  const chunks = [];
  for (let i = 0; i < this.length; i++) {
    const lastChunk = chunks[chunks.length - 1];
    const isNewChunk = !chunks.length || lastChunk.length === length;
    if (isNewChunk) {
      chunks.push([this[i]]);
    } else {
      lastChunk.push(this[i]);
    }
  }
  return chunks;
};

[1, 2, 3, 4, 5, 6].intoChunks(1); //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ] ]
[1, 2, 3, 4, 5, 6].intoChunks(5); //[ [ 1, 2, 3, 4, 5 ], [ 6 ] ]
