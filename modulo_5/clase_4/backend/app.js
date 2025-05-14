const express = require('express');
const app = express();

app.use(express.json());

const comicRoutes = require('./routes/comics');
const bookRoutes = require('./routes/books');

app.use('/comics', comicRoutes);
app.use('/books', bookRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});