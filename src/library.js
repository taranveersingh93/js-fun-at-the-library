function createLibrary(inputName) {
  var library = {};
  library.name = inputName;
  library.shelves = {};
  library.shelves.fantasy = [];
  library.shelves.fiction = [];
  library.shelves.nonFiction = [];
  return library;
}

function addBook(library, book) {
  var bookGenre = book.genre;
  library.shelves[bookGenre].push(book);
  return library;
}

function checkoutBook(library, bookTitle, bookGenre) {
  var bookExists = false;
  for(var i=0; i<library.shelves[bookGenre].length; i++) {
    if(library.shelves[bookGenre][i].title===bookTitle) 
    library.shelves[bookGenre].splice(i,1);
    bookExists = true;
  } 
 if(bookExists === true) {
  return `You have now checked out ${bookTitle} from the ${library.name}.`; 
 } else {
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
 }

}

function takeStock(library, bookGenre) {
  function shelfCount (bookGenre) {
    return library.shelves[bookGenre].length
  }
  if(arguments.length===2) {
    return `There are a total of ${shelfCount(bookGenre)} ${bookGenre} books at the ${library.name}.`;
  } else if (arguments.length===1) {
    var libraryCount = 0;
    //console.log(Object.keys(library.shelves))
    //console.log(library.shelves);
    //console.log(Object.values(library.shelves))
    for(var i=0; i<Object.keys(library.shelves).length; i++) {
      //console.log(`i is ${i}`);
      libraryCount = libraryCount + Object.values(library.shelves)[i].length;
    }
    return `There are a total of ${libraryCount} books at the ${library.name}.`
  }
  
}

var dracula = {
  title: "Dracula",
  mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
  pageCount: 418,
  genre: "fantasy"
};

var bornACrime = {
  title: "Born a Crime",
  mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
  pageCount: 304,
  genre: "nonFiction"
};

var prideAndPrejudice = {
  title: "Pride and Prejudice",
  mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
  pageCount: 432,
  genre: "fiction"
};

var denverLibrary = createLibrary("Denver Public Library");

addBook(denverLibrary, dracula);
addBook(denverLibrary, bornACrime);
addBook(denverLibrary, prideAndPrejudice);
takeStock(denverLibrary);



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};