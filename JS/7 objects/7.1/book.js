let book1 = {
  title: "Gone with the wind",
  author: "Ben-Dov, Hana",
  year: "1949",
  language: "hebrew",
  ISBN: "990017313260205171",
};
function aboutBook(book) {
  let author = book.author;
  console.log(book.author);
  return `The book ${book.title} was written by ${book.author} in
  the year ${book.year}`;
}

console.log(aboutBook(book1));
