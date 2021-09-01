const bookVisibility = () => {
  document.getElementById("book-count").style.visibility = "visible";
};

const searchClick = () => {
  document.getElementById("book-count").style.display = "block";
  document.getElementById("book-count").style.visibility = "hidden";
  document.getElementById("empty-search").style.display = "none";
  const bookID = document.getElementById("input-field").value;
  if (bookID === "") {
    document.getElementById("empty-search").style.display = "block";
    document.getElementById("book-count").style.display = "none";
  } else {
    getBooks(bookID);
  }
};

const getBooks = (bookID) => {
  document.getElementById("book-count").style.display = "none";
  document.getElementById("searching").style.display = "block";
  fetch(`http://openlibrary.org/search.json?q=${bookID}`)
    .then((res) => res.json())
    .then((data) => books(data));
};

const books = (bookList) => {
  document.getElementById("searching").style.display = "none";
  document.getElementById("book-count").style.display = "block";
  document.getElementById("book-count").style.visibility = "visible";
  const bookCount = document.getElementById("book-count");
  bookCount.innerText = `${bookList.numFound} Books found.`;
};
