let book1 = {
  name: "the big city",
  author: "Benaya Trabelsi",
  year: 2021,
};
let book2 = {
  name: "gone with the wind",
  author: "Margaret mitchel",
  year: 1949,
};

let bookUtils = {
  getFirstPublished: function (bookA, bookB) {
    return bookA.year < bookB.year ? bookA : bookB;
  },
  setNewEdition: function (bookA, editionYear) {
    bookA.latestEdition = editionYear;
  },
  setLanguage: function (bookA, languageToSet) {
    bookA.language = languageToSet;
  },
  setTranslation: function (bookA, languageToSet, translatorToSet) {
    bookA: translation = {
      language: languageToSet,
      translator: translatorToSet,
    };
  },
  setPublisher: function (bookA, publisherName, publisherLocation) {
    bookA.publisher = {
      name: publisherName,
      location: publisherLocation,
    };
  },
  isSamePublisher: function (bookA, bookB) {
    if (
      bookA.publisher.name == bookB.publisher.name &&
      bookA.publisher.location == bookB.publisher.location
    ) {
      return true;
    } else {
      return false;
    }
  },
};
