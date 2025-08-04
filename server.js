const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let products = [
  { id: 1, name: "Test Shirt", price: 25 }
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Add a new product (used by admin.html)
app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  // Validate input
  if (typeof name !== 'string' || typeof price !== 'number') {
    return res.status(400).json({ error: 'Invalid product data' });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
