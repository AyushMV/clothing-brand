// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));

// // Initial product with all required fields and images as array
// let products = [
//   {
//     id: 1,
//     name: "Test Shirt",
//     price: 25,
//     images: ["testshirt.webp"],
//     sizes: ["S", "M", "L"],
//     gender: "Men" // or "Women", "Unisex", "Kids"
//   }
// ];


// // Get all products (only valid ones with images and sizes arrays)
// app.get('/api/products', (req, res) => {
//   const validProducts = products.filter(product =>
//     Array.isArray(product.images) &&
//     product.images.length > 0 &&
//     Array.isArray(product.sizes) &&
//     product.sizes.length > 0
//   );
//   res.json(validProducts);
// });

// // Add a new product (used by admin.html)
// app.post('/api/products', (req, res) => {
//   const { name, price, images, sizes, gender } = req.body;

// if (
//   typeof name !== 'string' ||
//   typeof price !== 'number' ||
//   !Array.isArray(images) || images.length === 0 ||
//   !Array.isArray(sizes) || sizes.length === 0 ||
//   typeof gender !== 'string' || !gender
// ) {
//   return res.status(400).json({ error: 'Invalid product data' });
// }
// // (Rest stays the same, just add gender)


//   const newProduct = {
//     id: products.length + 1,
//     name,
//     price,
//     images,
//     sizes,
//     gender
//   };

//   products.push(newProduct);
//   res.status(201).json(newProduct);
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const mongoose = require('./db'); // This imports your mongoose connection

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Initial product with all required fields and images as array
let products = [
  {
    id: 1,
    name: "Test Shirt",
    price: 25,
    images: ["testshirt.webp"],
    sizes: ["S", "M", "L"],
    gender: "Men" // or "Women", "Unisex", "Kids"
  }
];

// Get all products (only valid ones with images and sizes arrays)
app.get('/api/products', (req, res) => {
  const validProducts = products.filter(product =>
    Array.isArray(product.images) &&
    product.images.length > 0 &&
    Array.isArray(product.sizes) &&
    product.sizes.length > 0
  );
  res.json(validProducts);
});

// Add a new product (used by admin.html)
app.post('/api/products', (req, res) => {
  const { name, price, images, sizes, gender } = req.body;

  if (
    typeof name !== 'string' ||
    typeof price !== 'number' ||
    !Array.isArray(images) || images.length === 0 ||
    !Array.isArray(sizes) || sizes.length === 0 ||
    typeof gender !== 'string' || !gender
  ) {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    images,
    sizes,
    gender
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Edit a product
app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, images, sizes, gender } = req.body;
  const idx = products.findIndex(p => p.id === parseInt(id));
  if (idx === -1) return res.status(404).json({ error: 'Product not found' });

  if (
    typeof name !== 'string' ||
    typeof price !== 'number' ||
    !Array.isArray(images) || images.length === 0 ||
    !Array.isArray(sizes) || sizes.length === 0 ||
    typeof gender !== 'string' || !gender
  ) {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  products[idx] = { id: products[idx].id, name, price, images, sizes, gender };
  res.json(products[idx]);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const idx = products.findIndex(p => p.id === parseInt(id));
  if (idx === -1) return res.status(404).json({ error: 'Product not found' });
  const removed = products.splice(idx, 1);
  res.json(removed[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
