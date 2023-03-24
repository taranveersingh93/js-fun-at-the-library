
function shelfBook (book, shelf) {
  if(shelf.length<3) {
    shelf.unshift(book);
  }
  return shelf;
}

function unshelfBook(book, shelf) {
  for(var i=0; i<shelf.length; i++) {
    if(shelf[i].title===book) {
      shelf.splice(i,1);
    }
  }
  return shelf;
}

function listTitles (shelf) {
  var titles = [];
  for(var i=0; i<shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.join(", "); 
}

function searchShelf (shelf, bookTitle) {
  var isShelved = false; //initializing this as false unless proven otherwise.
  for(var i=0; i<shelf.length; i++) {
    if(shelf[i].title === bookTitle) {
      isShelved = true;
      break;
    }
  }
  return isShelved;
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};