function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var ghoulCharacter = {};
  ghoulCharacter.name = name;
  ghoulCharacter.age = age;
  ghoulCharacter.pronouns = pronouns;
  return ghoulCharacter;
}

function saveReview(input, inputArray) {
  if(inputArray.includes(input)===false) {
    inputArray.push(input);
  }
}

function calculatePageCount(bookTitle) {
  return (20*bookTitle.length); 
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {};
  book.title = bookTitle;
  book.mainCharacter = bookCharacter;
  book.pageCount = calculatePageCount(bookTitle);
  book.genre = genre;
  return book;
}

function editBook(bookObject) {
  bookObject.pageCount = bookObject.pageCount*3/4;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}