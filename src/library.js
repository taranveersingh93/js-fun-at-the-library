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
  library["shelves"][bookGenre].push(book); //add book to book's genre shelf
  return library;
}

function checkoutBook(library, bookTitle, bookGenre) {
  var bookExists = false;
  for(var i=0; i<library["shelves"][bookGenre].length; i++) { //check if book exists
    if(library["shelves"][bookGenre][i].title===bookTitle) 
    library["shelves"][bookGenre].splice(i,1); //alter the shelf data 
    bookExists = true; // with this established, proceed to the two possible returns.
  } 
 if(bookExists === true) {
  return `You have now checked out ${bookTitle} from the ${library.name}.`; 
 } else {
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
 }

}

function takeStock(library, bookGenre) {
var specificShelf = library["shelves"][bookGenre]; //this is an array
var listAllShelves = Object.keys(library.shelves); 

  if(arguments.length===2) {
    return `There are a total of ${specificShelf.length} ${bookGenre} books at the ${library.name}.`;
  } else {
    var libraryCount = 0;
    for(var i=0; i<listAllShelves.length; i++) {
      libraryCount = libraryCount + Object.values(library.shelves)[i].length;
    }
    return `There are a total of ${libraryCount} books at the ${library.name}.`
  }
  
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};