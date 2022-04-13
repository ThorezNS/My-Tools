Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const mapArray = [1, 2, 3, 4, 5];
const myMapArray = mapArray.myMap((e) => e * 2);

const mapConstructorArray = new Array(1, 2, 3, 4, 5);
const myMapConstructorArray = mapConstructorArray.myMap((e, i) => e + i);

//#1 Tworzenie metody, która dziedziczy z konstruktora Array. Jako parametr podany zostaje callback

//#2 To co zwróci funkcja callback jest wypychane do nowej tablicy

//#3 Iterowanie po obiekcie (tablicy) przy wykorzystaniu pętli for, oraz słowa kluczowego this. Konstruktor Array posiada m.in. właściwość length, która jest tutaj odczytywana

//#4 Wywołanie funkcji callback z argumentami, które są: elementem tablicy, indeksem elementu, oraz całą tablicą. Następnie to co zwraca jest wypchane do result

//#6 Zwrócenie nowej tablicy z metody

//#9 Tworzenie nowej instancji konstruktora Array poprzez literał tablicowy

//#10, #13 Wywołanie metody myMap na tablicy, wraz z funkcją jako argument

//#12 Tworzenie nowej instancji konstruktora Array poprzez konstruktor i słowo kluczowe new
