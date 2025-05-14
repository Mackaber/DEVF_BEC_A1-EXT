const dbPromise = (async () => {
  const { Low } = await import('lowdb');
  const { Memory } = await import('lowdb');
  const adapter = new Memory();
  const db = new Low(adapter);

  await db.read();
  if (!db.data) {
    db.data = {
      comics: [
        { id: 1, title: 'The Avengers', author: 'Stan Lee', price: 10.99, image: 'avengers.jpg' },
        { id: 2, title: 'The Dark Knight', author: 'Frank Miller', price: 12.99, image: 'darkknight.jpg' },
        { id: 3, title: 'Spider-Man', author: 'Stan Lee', price: 9.99, image: 'spiderman.jpg' }
      ],
      books: [
        { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 15.99, image: 'mockingbird.jpg' },
        { id: 2, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 19.99, image: 'lordoftherings.jpg' },
        { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', price: 12.99, image: 'prideandprejudice.jpg' }
      ]
    };
    await db.write();
  }
  return db;
})();

module.exports = dbPromise;