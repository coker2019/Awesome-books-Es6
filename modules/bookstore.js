
// Store class to handle local storage
export default class store {
    static getBooks() {
      const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
      return books;
    }
  
    static addBook(book) {
      const books = store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(i) {
      const books = store.getBooks();
      books.splice(i, 1);
      localStorage.setItem('books', JSON.stringify(books));
      document.location.reload();
    }
  }