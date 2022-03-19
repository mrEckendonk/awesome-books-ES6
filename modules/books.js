export default class Methods {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBook = (bookTitle, bookAuthor, bookId) => {
    const book = {
      title: bookTitle,
      author: bookAuthor,
      id: bookId,
    };
    this.books.push(book);
  };

  removeBook = (id) => {
    this.books = this.books.filter(book => book.id !== id);
  }

}