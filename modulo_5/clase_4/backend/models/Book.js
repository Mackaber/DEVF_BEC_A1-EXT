// Book model for lowdb (no mongoose required)

class Book {
  constructor({ id, title, author, price, image }) {
    this.id = id
    this.title = title
    this.author = author
    this.price = price
    this.image = image
  }
}

module.exports = Book