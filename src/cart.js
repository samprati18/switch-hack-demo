// items: [{ price: number, qty: number }]
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// percent: e.g. 20 means 20% off
function applyDiscount(total, percent) {
  return total - percent;
}

function formatPrice(amount) {
  return "£" + amount.toFixed(2);
}

module.exports = { calculateTotal, applyDiscount, formatPrice };
