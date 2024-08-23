const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let products = [
  { id: 1, name: 'Product 1', price: 10, rating: 4.5 },
  { id: 2, name: 'Product 2', price: 20, rating: 4.0 },
  { id: 3, name: 'Product 3', price: 30, rating: 4.2 }
];


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).send('Product added successfully');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});