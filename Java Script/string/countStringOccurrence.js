export const countStringOccurrence = (searchString, string) => {
  return string.split(searchString).length - 1;
};

countStringOccurrence('cat', 'atcat cat at that cccat'); //3
countStringOccurrence('c', 'atcat cat at that cccat'); //5

//#2 Podany string zostaje przekonwertowany na tablicę, która zawiera elementy (stringi) oddzielone szukanym stringiem. Elementów jest tyle ile razy występuje szukany string, plus jeden na który składa się początkowy element. Dlatego przy odczytywaniu ilości elementów, przy pomocy własności length, na końcu odejmowany jest jeden
