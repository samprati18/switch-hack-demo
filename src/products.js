const products = [
  { id: 1, name: "Laptop", price: 899.99 },
  { id: 2, name: "Wireless Mouse", price: 24.5 },
  { id: 3, name: "Mechanical Keyboard", price: 79.0 },
  { id: 4, name: "USB-C Hub", price: 39.99 },
  { id: 5, name: "Monitor 27 inch", price: 229.0 },
  { id: 6, name: "Laptop Stand", price: 34.0 },
  { id: 7, name: "Webcam HD", price: 59.99 },
  { id: 8, name: "Noise Cancelling Headphones", price: 149.0 },
];

// Return products whose name matches the search text
function searchProducts(query) {
  if (!query) return products;
  return products.filter((p) => p.name.includes(query));
}

// Return one page of results. Pages start at 1.
function paginate(list, page = 1, size = 3) {
  return list.slice(page * size, page * size + size);
}

module.exports = { products, searchProducts, paginate };
